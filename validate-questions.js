#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const questionsPath = path.join(__dirname, "questions.js");

function loadQuestions(filePath) {
  const source = fs.readFileSync(filePath, "utf8");
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename: "questions.js" });
  return sandbox.window.questions;
}

function addIssue(issues, type, index, id, message) {
  issues.push({
    type,
    index,
    id,
    message
  });
}

function normalizeText(text) {
  return String(text || "").trim().replace(/\s+/g, " ");
}

function main() {
  let questions;
  try {
    questions = loadQuestions(questionsPath);
  } catch (error) {
    console.error(`读取题库失败: ${error.message}`);
    process.exit(1);
  }

  if (!Array.isArray(questions)) {
    console.error("题库格式错误：window.questions 不是数组。");
    process.exit(1);
  }

  const issues = [];
  const idMap = new Map();
  const stemMap = new Map();
  const requiredFields = [
    "id",
    "examType",
    "subject",
    "question",
    "options",
    "answer",
    "difficulty"
  ];

  questions.forEach((q, i) => {
    const idx = i + 1;
    const id = q && q.id;

    if (!q || typeof q !== "object") {
      addIssue(issues, "invalid_item", idx, id, "题目项不是对象。");
      return;
    }

    requiredFields.forEach((field) => {
      if (!(field in q)) {
        addIssue(issues, "missing_field", idx, id, `缺少字段: ${field}`);
      }
    });

    if (!Number.isInteger(q.id) || q.id <= 0) {
      addIssue(issues, "invalid_id", idx, id, "id 必须是正整数。");
    } else if (idMap.has(q.id)) {
      const first = idMap.get(q.id);
      addIssue(issues, "duplicate_id", idx, id, `与第 ${first} 题重复 id=${q.id}`);
    } else {
      idMap.set(q.id, idx);
    }

    if (!Array.isArray(q.options) || q.options.length !== 4) {
      addIssue(issues, "invalid_options", idx, id, "options 必须是长度为 4 的数组。");
    }

    if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) {
      addIssue(issues, "invalid_answer", idx, id, "answer 必须是 0-3 之间的整数。");
    }

    if (!Number.isInteger(q.difficulty) || q.difficulty < 1 || q.difficulty > 5) {
      addIssue(issues, "invalid_difficulty", idx, id, "difficulty 必须是 1-5 的整数。");
    }

    const stemKey = normalizeText(q.question);
    if (!stemKey) {
      addIssue(issues, "empty_question", idx, id, "question 不能为空。");
    } else if (stemMap.has(stemKey)) {
      const first = stemMap.get(stemKey);
      addIssue(issues, "duplicate_question", idx, id, `与第 ${first} 题题干重复。`);
    } else {
      stemMap.set(stemKey, idx);
    }
  });

  if (issues.length === 0) {
    console.log(`检查通过: 共 ${questions.length} 题，未发现问题。`);
    process.exit(0);
  }

  console.error(`检查完成: 共 ${questions.length} 题，发现 ${issues.length} 个问题:`);
  issues.forEach((it) => {
    console.error(`- [${it.type}] 第${it.index}题(id=${it.id ?? "?"}): ${it.message}`);
  });
  process.exit(2);
}

main();
