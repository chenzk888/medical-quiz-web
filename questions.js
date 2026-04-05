/**
 * 题库入口：合并 questions/ 下各考试类型的分文件。
 *
 * 维护方式：
 * - 在对应目录编辑：questions/临床执业医师/questions.js、questions/临床医学考研/questions.js、questions/护师资格考试/questions.js；
 * - 若需从单一大文件重新拆分，可使用 scripts/split-questions.ps1（需先将完整数组放回临时单文件）。
 *
 * index.html 中须先加载上述分文件，再加载本文件。
 *
 * 字段说明：
 * - id: 题目唯一编号
 * - examType: 考试类型
 * - subject: 科目
 * - chapter: 章节（可选，无则省略或写 ""）
 * - question: 题干
 * - options: 四个选项文案，顺序对应 A/B/C/D
 * - answer: 正确答案索引，0=A, 1=B, 2=C, 3=D
 * - difficulty: 难度 1-5
 * - year: 真题年份（可选）
 * - keyPoint: 核心考点提示（展示与 AI 解析参考）
 * - comments: 学霸口诀评论（可选）
 *   - author: 评论作者
 *   - content: 口诀内容
 *   - likes: 点赞数
 */
window._questionParts = window._questionParts || {};
window.questions = [].concat(
  window._questionParts["临床执业医师"] || [],
  window._questionParts["临床医学考研"] || [],
  window._questionParts["护师资格考试"] || []
);
