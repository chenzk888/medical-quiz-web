/**
 * 题库：扁平数组，每条一题。编辑本文件增删题目即可。
 * 声明须为：window.questions = [ ... ];（与 index.html 中读取方式一致）
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
 * - comments: 学霸口诀评论（新增字段）
 *   - author: 评论作者
 *   - content: 口诀内容
 *   - likes: 点赞数
 */
window.questions = [
  {
    id: 1,
    examType: "临床执业医师",
    subject: "诊断学",
    chapter: "心电图",
    question: "患者胸痛3小时，心电图示II、III、aVF导联ST段抬高，最可能诊断是？",
    options: ["稳定型心绞痛", "急性下壁心肌梗死", "急性心包炎", "主动脉夹层"],
    answer: 1,
    difficulty: 2,
    year: 2023,
    keyPoint: "下壁心梗对应II、III、aVF导联ST段抬高，与心绞痛一过性缺血鉴别。",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 下壁心梗看三导，II三aVF别忘掉；ST抬高是梗死，鉴别心绞痛一条。",
        likes: 269
      }
    ]
  },
  {
    id: 2,
    examType: "临床执业医师",
    subject: "诊断学",
    chapter: "呼吸系统查体",
    question: "叩诊呈浊音、语颤增强、支气管呼吸音增强，最可能是？",
    options: ["肺气肿", "胸腔积液", "大叶性肺炎实变期", "气胸"],
    answer: 2,
    difficulty: 2,
    year: 2022,
    keyPoint: "实变区叩浊、语颤增强、可闻及支气管呼吸音（肺实变三联）。",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 肺实变有三联，浊音语颤呼吸现；叩诊浊语颤强，支气管呼吸音最响。",
        likes: 349
      }
    ]
  },
  {
    id: 3,
    examType: "临床执业医师",
    subject: "内科",
    chapter: "冠心病",
    question: "急性冠脉综合征患者入院后首选抗血小板方案通常是？",
    options: ["单用阿司匹林", "阿司匹林+P2Y12受体抑制剂", "单用华法林", "不需抗栓治疗"],
    answer: 1,
    difficulty: 3,
    year: 2021,
    keyPoint: "ACS双联抗血小板：阿司匹林联合P2Y12抑制剂为常规起始方案。",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: ACS抗血小板，阿司匹林是标配；P2Y12来联合，双抗治疗是常规。",
        likes: 422
      }
    ]
  },
  {
    id: 4,
    examType: "临床执业医师",
    subject: "内科",
    chapter: "糖尿病",
    question: "2型糖尿病患者饮食运动3个月后血糖仍不达标，首选口服降糖药常为？",
    options: ["二甲双胍", "胰岛素", "阿卡波糖", "格列本脲"],
    answer: 0,
    difficulty: 2,
    year: 2023,
    keyPoint: "无禁忌时2型糖尿病一线口服首选二甲双胍。",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 二型糖尿首选用，二甲双胍一线药；饮食运动三月后，血糖不降它出手。",
        likes: 174
      }
    ]
  },
  {
    id: 5,
    examType: "临床医学考研",
    subject: "生理学",
    chapter: "神经生理",
    question: "动作电位去极化上升支的主要离子基础是？",
    options: ["K+内流", "Na+内流", "Cl-外流", "Ca2+外流"],
    answer: 1,
    difficulty: 3,
    year: 2020,
    keyPoint: "去极化上升支由电压门控Na+通道开放、Na+快速内流形成。",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 动作电位上升支，钠离子内流是主；去极化来快又急，钠通道开是正理。",
        likes: 283
      }
    ]
  },
  {
    id: 6,
    examType: "临床医学考研",
    subject: "生理学",
    chapter: "循环生理",
    question: "影响组织液生成最重要的有效滤过压因素是？",
    options: ["毛细血管血压", "组织液胶体渗透压", "血浆胶体渗透压", "淋巴回流压"],
    answer: 0,
    difficulty: 4,
    year: 2021,
    keyPoint: "有效滤过压=(毛细血管血压+组织液胶渗)-(血浆胶渗+组织静水压)；毛细血管血压常为主要变量。",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 有效滤过压计算，毛细血压加组胶；减去血浆胶渗压，再减组织静水压。",
        likes: 207
      }
    ]
  },
  {
    id: 7,
    examType: "临床医学考研",
    subject: "外科",
    chapter: "外科感染",
    question: "气性坏疽最关键的治疗措施是？",
    options: ["大剂量青霉素+彻底清创", "单用头孢抗感染", "激素冲击治疗", "仅高压氧治疗"],
    answer: 0,
    difficulty: 3,
    year: 2019,
    keyPoint: "气性坏疽：手术彻底清创引流+大剂量青霉素，高压氧为辅助。",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 气性坏疽要清创，青霉素大剂量用；高压氧是辅助法，彻底引流最重要。",
        likes: 226
      }
    ]
  },
  {
    id: 8,
    examType: "临床医学考研",
    subject: "外科",
    chapter: "休克",
    question: "失血性休克早期微循环变化最典型的是？",
    options: ["毛细血管广泛扩张淤血", "小动脉收缩，少灌少流", "静脉容量显著下降", "组织耗氧量明显增加"],
    answer: 1,
    difficulty: 4,
    year: 2022,
    keyPoint: "休克早期交感兴奋，微血管收缩，微循环少灌少流、灌少于流。",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 休克早期交感兴，血管收缩少灌流；少灌少流灌少于，微循环内缺血愁。",
        likes: 185
      }
    ]
  },
  {
    id: 9,
    examType: "护师资格考试",
    subject: "基础护理",
    chapter: "无菌技术",
    question: "进行无菌操作时，已开启的无菌包一般有效期为？",
    options: ["4小时", "24小时", "48小时", "72小时"],
    answer: 1,
    difficulty: 2,
    year: 2023,
    keyPoint: "已开无菌包未污染，记录开包时间，24小时内有效。",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 无菌包开二十四，超过期限不再使；记录时间要牢记，污染可疑必须弃。",
        likes: 195
      }
    ]
  },
  {
    id: 10,
    examType: "护师资格考试",
    subject: "基础护理",
    chapter: "生命体征",
    question: "成人腋温正常范围通常是？",
    options: ["35.0-36.0℃", "36.0-37.0℃", "37.5-38.5℃", "38.5-39.5℃"],
    answer: 1,
    difficulty: 1,
    year: 2022,
    keyPoint: "成人腋温正常约36.0-37.0℃；口温、肛温略高。",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 腋温正常三十六，零到三七是范围；口温肛温稍高点，测量部位要记全。",
        likes: 405
      }
    ]
  },
  {
    id: 11,
    examType: "护师资格考试",
    subject: "内科护理",
    chapter: "心衰护理",
    question: "左心衰患者最典型的夜间症状是？",
    options: ["阵发性夜间呼吸困难", "腹痛腹泻", "黄疸加重", "肢端发绀消失"],
    answer: 0,
    difficulty: 3,
    year: 2021,
    keyPoint: "左心衰肺淤血：夜间平卧回心血量增加，阵发性夜间呼吸困难典型。",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 左心衰夜间发作，呼吸困难阵发性；回心血量增加致，端坐呼吸可减轻。",
        likes: 167
      }
    ]
  },
  {
    id: 12,
    examType: "护师资格考试",
    subject: "内科护理",
    chapter: "糖尿病护理",
    question: "胰岛素皮下注射时，为避免脂肪营养不良应重点注意？",
    options: ["固定同一部位注射", "注射部位轮换", "每次增加剂量", "注射后热敷"],
    answer: 1,
    difficulty: 2,
    year: 2020,
    keyPoint: "胰岛素注射应部位轮换，避免脂肪增生或萎缩。",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 胰岛素打皮下，部位轮换很重要；固定一处脂肪硬，轮换避免并发症。",
        likes: 272
      }
    ]
  },
  {
    id: 13,
    examType: "临床执业医师",
    subject: "内科学",
    chapter: "心衰",
    question: "慢性心力衰竭患者服用利尿剂最常见的电解质紊乱是？",
    options: ["低钠血症", "低钾血症", "高钾血症", "低钙血症"],
    answer: 1,
    difficulty: 2,
    year: 2023,
    keyPoint: "利尿剂→排钾→低钾血症",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 利尿剂用后排钾，低钾血症最常见；监测电解质重要，及时补钾莫迟缓。",
        likes: 421
      }
    ]
  },
  {
    id: 14,
    examType: "临床医学考研",
    subject: "生理学",
    chapter: "细胞电生理",
    question: "静息电位接近于？",
    options: ["钠平衡电位", "钾平衡电位", "钙平衡电位", "氯平衡电位"],
    answer: 1,
    difficulty: 3,
    year: 2024,
    keyPoint: "静息电位主要由K+外流形成",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 静息电位钾主导，钾离子外流来形成；接近钾的平衡位，负值七十左右定。",
        likes: 265
      }
    ]
  },
  {
    id: 15,
    examType: "护师资格考试",
    subject: "内科护理",
    chapter: "糖尿病",
    question: "糖尿病患者低血糖是指血糖低于？",
    options: ["2.8 mmol/L", "3.9 mmol/L", "4.4 mmol/L", "5.6 mmol/L"],
    answer: 1,
    difficulty: 2,
    year: 2023,
    keyPoint: "糖尿病低血糖诊断标准<3.9",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 糖尿患者低血糖，三点九是警戒线；普通人二点八，标准不同要分辨。",
        likes: 183
      }
    ]
  },
  {
    id: 16,
    examType: "临床执业医师",
    subject: "诊断学",
    chapter: "实验室检查",
    question: "血清钾的正常值范围是？",
    options: ["2.5-3.5 mmol/L", "3.5-5.5 mmol/L", "5.5-7.5 mmol/L", "4.0-6.0 mmol/L"],
    answer: 1,
    difficulty: 1,
    year: 2023,
    keyPoint: "血钾正常值3.5-5.5，低于3.5低钾，高于5.5高钾",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 血钾三点五到五，低于三点五低钾补；高于五点五高钾急，心电图改变要关注。",
        likes: 130
      }
    ]
  },
  {
    id: 17,
    examType: "临床执业医师",
    subject: "内科学",
    chapter: "呼吸系统",
    question: "慢性阻塞性肺疾病（COPD）的标志性症状是？",
    options: ["慢性咳嗽", "咳痰", "气短或呼吸困难", "喘息和胸闷"],
    answer: 2,
    difficulty: 2,
    year: 2024,
    keyPoint: "COPD标志性症状是进行性加重的呼吸困难",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: COPD标志性症，呼吸困难进行性；咳嗽咳痰也常见，气短最是要记清。",
        likes: 424
      }
    ]
  },
  {
    id: 18,
    examType: "临床执业医师",
    subject: "内科学",
    chapter: "循环系统",
    question: "高血压合并糖尿病患者的降压目标应控制在？",
    options: ["<140/90 mmHg", "<130/80 mmHg", "<150/90 mmHg", "<120/80 mmHg"],
    answer: 1,
    difficulty: 3,
    year: 2023,
    keyPoint: "高血压+糖尿病目标<130/80，保护靶器官",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 高压合并糖尿病，目标一三零八零；严格控压保靶器，心脑肾并发症防。",
        likes: 433
      }
    ]
  },
  {
    id: 19,
    examType: "临床执业医师",
    subject: "内科学",
    chapter: "消化系统",
    question: "肝硬化门脉高压最具诊断价值的表现是？",
    options: ["腹水", "脾肿大", "食管胃底静脉曲张", "肝掌蜘蛛痣"],
    answer: 2,
    difficulty: 3,
    year: 2024,
    keyPoint: "食管胃底静脉曲张是门脉高压的特征性表现",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 门脉高压诊价值，食管胃底曲张看；腹水脾大也常见，静脉曲张特征现。",
        likes: 202
      }
    ]
  },
  {
    id: 20,
    examType: "临床执业医师",
    subject: "诊断学",
    chapter: "体格检查",
    question: "正常成人肺下界在锁骨中线位于第几肋间？",
    options: ["第5肋间", "第6肋间", "第7肋间", "第8肋间"],
    answer: 1,
    difficulty: 2,
    year: 2023,
    keyPoint: "肺下界：锁骨中线第6肋间，腋中线第8肋间，肩胛线第10肋间",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 肺下界锁六腋八，肩胛线上十肋下；正常叩诊要记牢，浊音改变提示病。",
        likes: 137
      }
    ]
  },
  {
    id: 21,
    examType: "临床医学考研",
    subject: "生理学",
    chapter: "血液循环",
    question: "心动周期中，左心室容积最大的时期是？",
    options: ["等容收缩期末", "快速射血期末", "心房收缩期末", "减慢充盈期末"],
    answer: 2,
    difficulty: 4,
    year: 2024,
    keyPoint: "心房收缩期末，左心室充盈量最大，容积最大",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 左室容积最大时，心房收缩期末至；此时充盈量最多，等容收缩即将始。",
        likes: 445
      }
    ]
  },
  {
    id: 22,
    examType: "临床医学考研",
    subject: "生物化学",
    chapter: "核苷酸代谢",
    question: "嘌呤核苷酸分解代谢的终产物是？",
    options: ["尿素", "尿酸", "肌酐", "β-丙氨酸"],
    answer: 1,
    difficulty: 3,
    year: 2023,
    keyPoint: "嘌呤终产物是尿酸，嘧啶终产物是β-丙氨酸和NH3",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 嘌呤分解终产物，尿酸形成要记牢；痛风因此来发作，嘧啶产物不同道。",
        likes: 382
      }
    ]
  },
  {
    id: 23,
    examType: "临床医学考研",
    subject: "病理学",
    chapter: "肿瘤",
    question: "判断肿瘤良恶性的主要依据是？",
    options: ["肿瘤大小", "肿瘤生长速度", "肿瘤的异型性", "肿瘤的生长方式"],
    answer: 2,
    difficulty: 3,
    year: 2024,
    keyPoint: "异型性是判断良恶性的主要组织学依据",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 判断肿瘤良恶性，异型性是主依据；大小形状核浆比，恶性异型更显著。",
        likes: 123
      }
    ]
  },
  {
    id: 24,
    examType: "临床医学考研",
    subject: "生理学",
    chapter: "神经调节",
    question: "交感神经兴奋时，下列哪项表现不会出现？",
    options: ["心率加快", "支气管扩张", "胃肠蠕动增强", "瞳孔扩大"],
    answer: 2,
    difficulty: 3,
    year: 2023,
    keyPoint: "交感神经兴奋抑制胃肠蠕动，副交感神经兴奋增强胃肠蠕动",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 交感神经兴奋时，胃肠蠕动受抑制；战斗逃跑反应使，消化吸收暂放置。",
        likes: 136
      }
    ]
  },
  {
    id: 25,
    examType: "临床医学考研",
    subject: "生物化学",
    chapter: "蛋白质代谢",
    question: "体内氨的主要去路是？",
    options: ["合成尿素", "合成谷氨酰胺", "合成嘌呤", "合成嘧啶"],
    answer: 0,
    difficulty: 2,
    year: 2024,
    keyPoint: "氨的主要去路是在肝脏合成尿素，经肾脏排出",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 体内氨的去路，肝脏合成尿素；肾脏排出体外，肝功不全氨中毒。",
        likes: 159
      }
    ]
  },
  {
    id: 26,
    examType: "护师资格考试",
    subject: "基础护理学",
    chapter: "静脉输液",
    question: "静脉输液时，成人一般的滴速为每分钟？",
    options: ["20-40滴", "40-60滴", "60-80滴", "80-100滴"],
    answer: 1,
    difficulty: 1,
    year: 2023,
    keyPoint: "成人输液滴速40-60滴/分，儿童20-40滴/分",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 成人输液四十到六十，每分钟滴要适宜；儿童老年二十到四十，根据病情调整速。",
        likes: 208
      }
    ]
  },
  {
    id: 27,
    examType: "护师资格考试",
    subject: "内科护理学",
    chapter: "循环系统",
    question: "心力衰竭患者限制钠盐摄入，每日应少于？",
    options: ["2g", "3g", "5g", "6g"],
    answer: 0,
    difficulty: 2,
    year: 2024,
    keyPoint: "心衰患者限钠<2g/d，减轻水钠潴留",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 心力衰竭限钠盐，每天少于两克限；水钠潴留会加重，饮食控制很要紧。",
        likes: 372
      }
    ]
  },
  {
    id: 28,
    examType: "护师资格考试",
    subject: "基础护理学",
    chapter: "给药方法",
    question: "口服给药时，需嚼碎服用的药物是？",
    options: ["肠溶片", "缓释片", "咀嚼片", "胶囊"],
    answer: 2,
    difficulty: 1,
    year: 2023,
    keyPoint: "咀嚼片需嚼碎后服用，利于吸收",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 咀嚼片要嚼碎吃，吞咽不利吸收差；肠溶缓释莫嚼碎，否则药效会打折。",
        likes: 435
      }
    ]
  },
  {
    id: 29,
    examType: "护师资格考试",
    subject: "内科护理学",
    chapter: "呼吸系统",
    question: "慢性阻塞性肺疾病患者进行缩唇呼吸训练的目的是？",
    options: ["减少胸痛", "减轻呼吸困难", "增加肺泡通气量", "防止小气道塌陷"],
    answer: 3,
    difficulty: 2,
    year: 2024,
    keyPoint: "缩唇呼吸增加气道内压，防止呼气时小气道过早塌陷",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: COPD缩唇呼吸，防止小气道塌陷；增加气道内压力，呼气更畅不费力。",
        likes: 434
      }
    ]
  },
  {
    id: 30,
    examType: "护师资格考试",
    subject: "基础护理学",
    chapter: "无菌技术",
    question: "戴无菌手套时，未戴手套的手只能接触手套的？",
    options: ["外面", "掌面", "指尖", "翻折内面"],
    answer: 3,
    difficulty: 2,
    year: 2023,
    keyPoint: "未戴手套的手只能接触手套翻折内面（外面为无菌区）",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 戴无菌手套注意，未戴之手触内面；外面是无菌区域，触碰即污染无疑。",
        likes: 239
      }
    ]
  },
  {
    id: 31,
    examType: "护师资格考试",
    subject: "基础护理学",
    chapter: "无菌技术",
    question: "无菌持物钳的正确使用方法是？",
    options: ["可夹取任何无菌物品", "取放无菌持物钳时，钳端应闭合", "门诊换药室的无菌钳，每周消毒一次", "到远处取物时应速去速回"],
    answer: 1,
    difficulty: 2,
    year: 2023,
    keyPoint: "取放无菌持物钳时钳端必须闭合，防止污染",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 无菌持物钳使用，取放钳端要闭合；防止空气污染它，浸泡干放要合规。",
        likes: 426
      }
    ]
  },
  {
    id: 32,
    examType: "护师资格考试",
    subject: "基础护理学",
    chapter: "压疮预防",
    question: "预防压疮时，为缓解对局部的压迫不宜使用？",
    options: ["海绵垫", "气垫褥", "橡皮气圈", "水褥"],
    answer: 2,
    difficulty: 2,
    year: 2023,
    keyPoint: "橡皮气圈易引起局部血液循环障碍，不宜使用",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 预防压疮要注意，橡皮气圈不宜用；影响局部血循环，反而加重压疮生。",
        likes: 125
      }
    ]
  },
  {
    id: 33,
    examType: "护师资格考试",
    subject: "基础护理学",
    chapter: "口腔护理",
    question: "为昏迷患者做口腔护理时，特别要注意？",
    options: ["不可用暴力助其张口", "从外向里擦净口腔及牙齿的各面", "观察口腔黏膜", "血管钳夹紧棉球，每次一个，蘸水不可过多"],
    answer: 3,
    difficulty: 2,
    year: 2023,
    keyPoint: "昏迷患者防窒息，棉球不可过湿，每次一个",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 昏迷患者口腔护，棉球不可过湿透；一次一个夹紧用，防止窒息入气道。",
        likes: 341
      }
    ]
  },
  {
    id: 34,
    examType: "护师资格考试",
    subject: "基础护理学",
    chapter: "生命体征",
    question: "测量血压时，若袖带过宽可使测量值？",
    options: ["偏高", "偏低", "脉压增大", "脉压减小"],
    answer: 1,
    difficulty: 2,
    year: 2023,
    keyPoint: "袖带过宽→血压偏低；袖带过窄→血压偏高",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 袖带宽窄影响压，过宽偏低窄偏高；合适的袖臂围半，测量准确误差消。",
        likes: 233
      }
    ]
  },
  {
    id: 35,
    examType: "护师资格考试",
    subject: "基础护理学",
    chapter: "生命体征",
    question: "测量脉搏的首选部位是？",
    options: ["颞动脉", "桡动脉", "肱动脉", "足背动脉"],
    answer: 1,
    difficulty: 1,
    year: 2023,
    keyPoint: "桡动脉表浅易触及，是测量脉搏的首选部位",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 测量脉搏选桡动，表浅易触最常用；颞动肱动足背动，特殊情况才选用。",
        likes: 449
      }
    ]
  },
  {
    id: 36,
    examType: "护师资格考试",
    subject: "内科护理学",
    chapter: "呼吸系统",
    question: "呼气性呼吸困难主要见于？",
    options: ["喉头水肿", "胸腔积液", "支气管肺癌", "支气管哮喘"],
    answer: 3,
    difficulty: 2,
    year: 2023,
    keyPoint: "呼气性呼吸困难：小气道痉挛，见于支气管哮喘",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 呼气性呼吸困难，小气道痉挛所致；支气管哮喘常见，吸气正常呼气难。",
        likes: 357
      }
    ]
  },
  {
    id: 37,
    examType: "护师资格考试",
    subject: "内科护理学",
    chapter: "呼吸系统",
    question: "吸气性呼吸困难严重者可出现三凹征，三凹征是指？",
    options: ["胸骨上窝、锁骨上窝和肋间隙在吸气时明显下陷", "胸骨上窝、锁骨上窝和肋间隙在呼气时明显下陷", "胸骨上窝、锁骨下窝和肋间隙在吸气时明显下陷", "胸骨下窝、锁骨上窝和肋间隙在吸气时明显下陷"],
    answer: 0,
    difficulty: 2,
    year: 2023,
    keyPoint: "三凹征：胸骨上窝、锁骨上窝、肋间隙吸气时凹陷",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 三凹征吸气凹陷，胸骨上窝锁上肋间；上气道梗阻表现，呼吸困难明显现。",
        likes: 286
      }
    ]
  },
  {
    id: 38,
    examType: "护师资格考试",
    subject: "内科护理学",
    chapter: "呼吸系统",
    question: "大咯血是指1次咯血量大于？",
    options: ["50ml", "100ml", "200ml", "300ml"],
    answer: 3,
    difficulty: 2,
    year: 2023,
    keyPoint: "大咯血：一次咯血>300ml，或24小时>500ml",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 大咯血一次三百，或二十四时五百；窒息风险很高危，抢救要及时迅速。",
        likes: 212
      }
    ]
  },
  {
    id: 39,
    examType: "护师资格考试",
    subject: "内科护理学",
    chapter: "血液系统",
    question: "可反映骨髓造血功能的指标为？",
    options: ["红细胞", "血红蛋白", "红细胞沉降率", "网织红细胞计数"],
    answer: 3,
    difficulty: 3,
    year: 2023,
    keyPoint: "网织红细胞反映骨髓造血功能，增高表示造血旺盛",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 网织红细胞计数，反映骨髓造血功；增高造血旺盛期，降低造血功能穷。",
        likes: 214
      }
    ]
  },
  {
    id: 40,
    examType: "护师资格考试",
    subject: "内科护理学",
    chapter: "泌尿系统",
    question: "判断肾小球滤过功能最敏感的检查是？",
    options: ["内生肌酐清除率", "血肌酐测定", "血尿素氮测定", "昼夜尿比重测定"],
    answer: 0,
    difficulty: 3,
    year: 2023,
    keyPoint: "内生肌酐清除率是最早反映GFR下降的敏感指标",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 肾小球滤过功能，内生肌酐清除敏；早期下降最先现，血肌酐尿素后来升。",
        likes: 372
      }
    ]
  },
  {
    id: 41,
    examType: "临床执业医师",
    subject: "内科学",
    chapter: "消化系统",
    question: "消化性溃疡最常见的并发症是？",
    options: ["穿孔", "出血", "幽门梗阻", "癌变"],
    answer: 1,
    difficulty: 2,
    year: 2023,
    keyPoint: "出血是消化性溃疡最常见并发症，约占15%-25%",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 消化溃疡并发症，出血最常见要记；穿孔梗阻癌变少，黑便呕血是表现。",
        likes: 209
      }
    ]
  },
  {
    id: 42,
    examType: "临床执业医师",
    subject: "诊断学",
    chapter: "实验室检查",
    question: "血清总胆红素的正常值范围是？",
    options: ["<10.1 μmol/L", "<17.1 μmol/L", "<22.2 μmol/L", "<34.2 μmol/L"],
    answer: 1,
    difficulty: 2,
    year: 2023,
    keyPoint: "血清总胆红素正常值<17.1μmol/L，17.1-34.2为隐性黄疸",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 总胆红素十七点一，超过此值黄疸疑；十七到三四隐性，大于三四显性期。",
        likes: 434
      }
    ]
  },
  {
    id: 43,
    examType: "临床医学考研",
    subject: "生理学",
    chapter: "神经调节",
    question: "兴奋性突触后电位（EPSP）的产生是由于突触后膜对哪种离子的通透性增加？",
    options: ["Na+和K+，尤其是Na+", "K+和Cl-", "Ca2+和Mg2+", "Cl-和K+"],
    answer: 0,
    difficulty: 4,
    year: 2024,
    keyPoint: "EPSP：Na+内流为主，K+外流为辅，去极化",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 兴奋突触后电位，钠钾通透钠为主；去极化后易兴奋，总和达到阈值发。",
        likes: 184
      }
    ]
  },
  {
    id: 44,
    examType: "临床医学考研",
    subject: "病理学",
    chapter: "炎症",
    question: "炎症反应最重要的特征是？",
    options: ["血管扩张", "血浆渗出", "白细胞渗出", "纤维素渗出"],
    answer: 2,
    difficulty: 3,
    year: 2023,
    keyPoint: "白细胞渗出是炎症反应最重要的特征，是防御反应的中心环节",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 炎症反应最重要，白细胞渗出是标；血管扩张血浆渗，白胞游出防御高。",
        likes: 275
      }
    ]
  },
  {
    id: 45,
    examType: "护师资格考试",
    subject: "内科护理学",
    chapter: "循环系统",
    question: "左心衰竭最典型的临床表现是？",
    options: ["腹胀", "乏力", "呼吸困难", "下肢水肿"],
    answer: 2,
    difficulty: 2,
    year: 2023,
    keyPoint: "左心衰以肺循环淤血为主，典型表现为呼吸困难",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 左心衰竭典型表，呼吸困难是首要；肺循环淤血致，端坐呼吸夜间扰。",
        likes: 209
      }
    ]
  },
  {
    id: 46,
    examType: "临床执业医师",
    subject: "外科学",
    chapter: "普外科",
    question: "急性阑尾炎最常见的早期症状是？",
    options: ["右下腹痛", "转移性右下腹痛", "全腹痛", "脐周痛"],
    answer: 1,
    difficulty: 2,
    year: 2023,
    keyPoint: "急性阑尾炎典型表现：转移性右下腹痛（先中上腹痛，后右下腹）",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 阑尾炎早期症，转移性右下腹痛；先中上后脐周痛，最后固定右下腹。",
        likes: 267
      }
    ]
  },
  {
    id: 47,
    examType: "临床执业医师",
    subject: "外科学",
    chapter: "骨科",
    question: "Colles骨折的典型畸形是？",
    options: ["银叉样畸形", "枪刺样畸形", "银叉样+枪刺样畸形", "爪形手"],
    answer: 2,
    difficulty: 3,
    year: 2024,
    keyPoint: "Colles骨折：桡骨远端骨折，典型畸形银叉样+枪刺样",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: Colles骨折桡骨端，银叉枪刺畸形现；远端向背侧移位，复位固定要及早。",
        likes: 160
      }
    ]
  },
  {
    id: 48,
    examType: "临床执业医师",
    subject: "妇产科学",
    chapter: "产科",
    question: "正常妊娠时，hCG水平达高峰的时间是？",
    options: ["妊娠6-8周", "妊娠8-10周", "妊娠10-12周", "妊娠12-14周"],
    answer: 1,
    difficulty: 2,
    year: 2023,
    keyPoint: "hCG妊娠8-10周达峰，随后下降，中晚期维持低水平",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: hCG水平高峰期，妊娠八到十周至；此后下降维持低，早孕诊断有价值。",
        likes: 354
      }
    ]
  },
  {
    id: 49,
    examType: "临床执业医师",
    subject: "妇产科学",
    chapter: "妇科",
    question: "宫颈癌最常见的病理类型是？",
    options: ["腺癌", "鳞状细胞癌", "腺鳞癌", "小细胞癌"],
    answer: 1,
    difficulty: 2,
    year: 2024,
    keyPoint: "宫颈癌85%为鳞癌，与HPV感染密切相关",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 宫颈癌病理型，鳞状细胞最常见；HPV感染相关大，腺癌腺鳞少见些。",
        likes: 412
      }
    ]
  },
  {
    id: 50,
    examType: "临床执业医师",
    subject: "儿科学",
    chapter: "新生儿",
    question: "新生儿生理性黄疸出现的时间是？",
    options: ["出生后24小时内", "出生后2-3天", "出生后4-5天", "出生后1周"],
    answer: 1,
    difficulty: 1,
    year: 2023,
    keyPoint: "生理性黄疸：生后2-3天出现，4-5天达峰；病理性：24小时内出现",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 生理性黄疸现，生后两到三天；四到五天最高峰，两周消退自然完。",
        likes: 336
      }
    ]
  },
  {
    id: 51,
    examType: "临床执业医师",
    subject: "外科学",
    chapter: "普外科",
    question: "腹股沟斜疝与直疝最有意义的鉴别点是？",
    options: ["疝块形状", "发病年龄", "还纳后压住内环，疝块是否突出", "嵌顿机会"],
    answer: 2,
    difficulty: 3,
    year: 2023,
    keyPoint: "压住内环：斜疝不再突出，直疝仍可突出（核心鉴别点）",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 斜疝直疝鉴别点，压住内环看突出；斜疝不再直还出，手术路径也不同。",
        likes: 409
      }
    ]
  },
  {
    id: 52,
    examType: "临床执业医师",
    subject: "内科学",
    chapter: "内分泌",
    question: "糖尿病患者低血糖的诊断标准是血糖低于？",
    options: ["2.8 mmol/L", "3.9 mmol/L", "4.4 mmol/L", "5.6 mmol/L"],
    answer: 1,
    difficulty: 2,
    year: 2024,
    keyPoint: "糖尿病患者低血糖标准<3.9；普通人<2.8",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 糖尿病人低血糖，三点九是警戒线；心慌出汗手发抖，及时补糖防危险。",
        likes: 282
      }
    ]
  },
  {
    id: 53,
    examType: "临床执业医师",
    subject: "内科学",
    chapter: "风湿免疫",
    question: "类风湿关节炎最早出现的关节症状是？",
    options: ["关节畸形", "关节肿胀", "关节疼痛", "关节功能障碍"],
    answer: 2,
    difficulty: 2,
    year: 2023,
    keyPoint: "RA最早症状：关节疼痛、压痛（对称性小关节）",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 类风湿关节炎，最早关节痛压出现；对称性小关节起，晨僵明显要记牢。",
        likes: 396
      }
    ]
  },
  {
    id: 54,
    examType: "临床执业医师",
    subject: "神经病学",
    chapter: "脑血管病",
    question: "脑梗死溶栓治疗的时间窗是发病后？",
    options: ["3小时内", "4.5小时内", "6小时内", "8小时内"],
    answer: 1,
    difficulty: 3,
    year: 2024,
    keyPoint: "脑梗死rt-PA溶栓：发病4.5小时内（黄金时间窗）",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 脑梗死溶栓窗，四点五小时内是黄金；rtPA静脉给，时间越短效果越好。",
        likes: 148
      }
    ]
  },
  {
    id: 55,
    examType: "临床执业医师",
    subject: "传染病学",
    chapter: "病毒性肝炎",
    question: "乙型肝炎病毒复制和传染性的直接标志是？",
    options: ["HBsAg", "HBeAg", "HBV DNA", "抗-HBc"],
    answer: 2,
    difficulty: 3,
    year: 2023,
    keyPoint: "HBV DNA是病毒复制和传染性最直接、最特异指标",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 乙肝复制传染标，HBV DNA最特异；定量检测看复制，抗病毒治疗监测要。",
        likes: 284
      }
    ]
  },
  {
    id: 56,
    examType: "临床医学考研",
    subject: "内科学",
    chapter: "循环系统",
    question: "急性心肌梗死患者早期（24小时内）死亡的主要原因是？",
    options: ["心源性休克", "心力衰竭", "心律失常", "心脏破裂"],
    answer: 2,
    difficulty: 3,
    year: 2024,
    keyPoint: "AMI早期死亡主因：室颤等心律失常（24小时内）",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 心梗早期死亡因，室颤心律失常主因；二十四小时内险，心电监测除颤备。",
        likes: 447
      }
    ]
  },
  {
    id: 57,
    examType: "临床医学考研",
    subject: "外科学",
    chapter: "普外科",
    question: "乳腺癌最常发生的部位是？",
    options: ["内上象限", "外上象限", "内下象限", "外下象限"],
    answer: 1,
    difficulty: 2,
    year: 2023,
    keyPoint: "乳腺癌50%以上发生在外上象限（尾叶部位）",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 乳腺癌好发位，外上象限最常见；尾部组织较丰富，发现肿块要活检。",
        likes: 426
      }
    ]
  },
  {
    id: 58,
    examType: "临床医学考研",
    subject: "病理学",
    chapter: "肿瘤",
    question: "原位癌是指？",
    options: ["早期癌", "原发癌", "未突破基底膜的癌", "未发生转移的癌"],
    answer: 2,
    difficulty: 2,
    year: 2024,
    keyPoint: "原位癌：癌细胞局限在黏膜上皮层内，未突破基底膜",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 原位癌未突破，基底膜内局限；早期癌未转移，手术切除可治愈。",
        likes: 152
      }
    ]
  },
  {
    id: 59,
    examType: "临床医学考研",
    subject: "生理学",
    chapter: "消化生理",
    question: "促进胰液分泌量最多的激素是？",
    options: ["胃泌素", "促胰液素", "缩胆囊素", "胰岛素"],
    answer: 1,
    difficulty: 3,
    year: 2023,
    keyPoint: "促胰液素：促进胰液分泌量多、HCO3-高、酶少；CCK：促进酶分泌",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 促胰液素作用，胰液量多酶少；碳酸氢盐高，中和胃酸保护肠。",
        likes: 321
      }
    ]
  },
  {
    id: 60,
    examType: "临床医学考研",
    subject: "生物化学",
    chapter: "物质代谢",
    question: "胆固醇合成的限速酶是？",
    options: ["HMG-CoA合酶", "HMG-CoA还原酶", "HMG-CoA裂解酶", "鲨烯合酶"],
    answer: 1,
    difficulty: 3,
    year: 2024,
    keyPoint: "HMG-CoA还原酶是胆固醇合成限速酶（他汀类药物作用靶点）",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 胆固醇合成限，HMG还原酶是关；他汀药物作用点，抑制合成降胆固醇。",
        likes: 249
      }
    ]
  },
  {
    id: 61,
    examType: "临床医学考研",
    subject: "内科学",
    chapter: "呼吸系统",
    question: "慢性肺源性心脏病形成肺动脉高压的主要机制是？",
    options: ["缺氧致肺血管收缩", "肺血管重构", "血液黏稠度增加", "血容量增加"],
    answer: 0,
    difficulty: 4,
    year: 2023,
    keyPoint: "肺动脉高压形成：缺氧性肺血管收缩（最主要）、肺血管重构等",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 肺动脉高压成，缺氧收缩是主因；血管重构也参与，右心负荷因此增。",
        likes: 163
      }
    ]
  },
  {
    id: 62,
    examType: "临床医学考研",
    subject: "病理学",
    chapter: "心血管系统疾病",
    question: "动脉粥样硬化病变最早期的病理改变是？",
    options: ["纤维斑块", "粥样斑块", "脂纹", "斑块内出血"],
    answer: 2,
    difficulty: 2,
    year: 2024,
    keyPoint: "动脉粥样硬化分期：脂纹（最早）→纤维斑块→粥样斑块",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 动脉粥样硬化，脂纹最早纤维继；粥样斑块后期形，血栓形成可闭塞。",
        likes: 229
      }
    ]
  },
  {
    id: 63,
    examType: "临床医学考研",
    subject: "诊断学",
    chapter: "实验室检查",
    question: "血清淀粉酶升高最明显的疾病是？",
    options: ["急性胰腺炎", "急性胆囊炎", "急性阑尾炎", "消化性溃疡穿孔"],
    answer: 0,
    difficulty: 2,
    year: 2023,
    keyPoint: "急性胰腺炎：血清淀粉酶6-12小时开始升高，24小时达峰",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 急性胰腺炎诊，淀粉酶升六到十二；二十四小时高峰，持续三到五天值。",
        likes: 353
      }
    ]
  },
  {
    id: 64,
    examType: "临床医学考研",
    subject: "内科学",
    chapter: "消化系统",
    question: "肝硬化门脉高压患者全血细胞减少的主要原因是？",
    options: ["营养不良", "脾功能亢进", "消化道出血", "病毒感染"],
    answer: 1,
    difficulty: 3,
    year: 2024,
    keyPoint: "门脉高压→脾大→脾功能亢进→全血细胞减少（脾亢破坏血细胞）",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 肝硬化血细胞，减少脾亢是主因；门脉高压脾肿大，破坏血细胞功能强。",
        likes: 401
      }
    ]
  },
  {
    id: 65,
    examType: "临床医学考研",
    subject: "外科学",
    chapter: "骨科",
    question: "股骨颈骨折最常见的并发症是？",
    options: ["感染", "创伤性关节炎", "股骨头坏死", "畸形愈合"],
    answer: 2,
    difficulty: 3,
    year: 2023,
    keyPoint: "股骨颈骨折：旋股内、外侧动脉损伤→股骨头缺血坏死（最常见并发症）",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 股骨颈骨折后，坏死最常见并发；血供损伤难修复，置换手术要考虑。",
        likes: 379
      }
    ]
  },
  {
    id: 66,
    examType: "护师资格考试",
    subject: "基础护理学",
    chapter: "冷热疗法",
    question: "软组织损伤早期（48小时内）应采用？",
    options: ["热湿敷", "冷湿敷", "局部按摩", "红外线照射"],
    answer: 1,
    difficulty: 2,
    year: 2024,
    keyPoint: "软组织损伤早期：冷敷（止血、减轻肿胀）；48小时后热敷（促进吸收）",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 软组织损伤初，四十八时内冷敷；止血消肿止痛好，过后热敷促进复。",
        likes: 194
      }
    ]
  },
  {
    id: 67,
    examType: "护师资格考试",
    subject: "内科护理学",
    chapter: "消化系统",
    question: "肝硬化腹水患者每日进水量应限制在？",
    options: ["500ml以内", "1000ml以内", "1500ml以内", "2000ml以内"],
    answer: 1,
    difficulty: 2,
    year: 2023,
    keyPoint: "肝硬化腹水：限水<1000ml/d（低钠血症者<500ml），限钠<2g/d",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 肝硬化腹水期，限水一千毫升日；低钠血症五百限，限钠也是必须施。",
        likes: 257
      }
    ]
  },
  {
    id: 68,
    examType: "护师资格考试",
    subject: "外科护理学",
    chapter: "麻醉护理",
    question: "硬膜外麻醉后应采取什么体位？",
    options: ["去枕平卧6-8小时", "平卧4-6小时", "半卧位", "侧卧位"],
    answer: 0,
    difficulty: 2,
    year: 2024,
    keyPoint: "硬膜外/腰麻后：去枕平卧6-8小时，防脑脊液外漏致头痛",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 硬膜外腰麻后，去枕平卧六到八；脑脊液外漏防，头痛发生要避免。",
        likes: 279
      }
    ]
  },
  {
    id: 69,
    examType: "护师资格考试",
    subject: "内科护理学",
    chapter: "呼吸系统",
    question: "慢性阻塞性肺疾病患者长期家庭氧疗的氧流量是？",
    options: ["1-2L/min", "2-3L/min", "3-4L/min", "4-5L/min"],
    answer: 0,
    difficulty: 2,
    year: 2023,
    keyPoint: "COPD长期氧疗：低流量1-2L/min，>15h/d，防CO2潴留",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: COPD氧疗低流量，一到二升每分钟；高流量氧抑制呼吸，二氧化碳潴留更凶。",
        likes: 322
      }
    ]
  },
  {
    id: 70,
    examType: "护师资格考试",
    subject: "基础护理学",
    chapter: "排泄护理",
    question: "大量不保留灌肠时，成人每次用量为？",
    options: ["200-300ml", "300-500ml", "500-1000ml", "1000-1500ml"],
    answer: 2,
    difficulty: 1,
    year: 2024,
    keyPoint: "大量不保留灌肠：成人500-1000ml，小儿200-500ml，温度39-41℃",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 大量灌肠成人量，五百到一千毫升；温度三九到四一，过快过猛要避免。",
        likes: 258
      }
    ]
  },
  {
    id: 71,
    examType: "护师资格考试",
    subject: "外科护理学",
    chapter: "损伤护理",
    question: "烧伤休克期补液，第一个8小时应输入总量的？",
    options: ["1/4", "1/3", "1/2", "2/3"],
    answer: 2,
    difficulty: 3,
    year: 2023,
    keyPoint: "烧伤补液：第一个24小时总量一半在前8小时输入（快后慢）",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 烧伤补液计算，第一个八时一半；后十六时另一半，先快后慢原则在。",
        likes: 257
      }
    ]
  },
  {
    id: 72,
    examType: "护师资格考试",
    subject: "妇产科护理学",
    chapter: "分娩期护理",
    question: "正常分娩时，胎膜破裂多发生在？",
    options: ["第一产程潜伏期", "第一产程活跃期", "第二产程", "第三产程"],
    answer: 1,
    difficulty: 2,
    year: 2024,
    keyPoint: "正常破膜：第一产程活跃期（宫口近开全时）；提前破膜为胎膜早破",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 正常破膜时间，第一产程活跃期；宫口近开全破，提前破膜是早破。",
        likes: 198
      }
    ]
  },
  {
    id: 73,
    examType: "护师资格考试",
    subject: "儿科护理学",
    chapter: "新生儿护理",
    question: "新生儿Apgar评分的内容不包括？",
    options: ["心率", "呼吸", "体温", "肌张力"],
    answer: 2,
    difficulty: 1,
    year: 2023,
    keyPoint: "Apgar五项：心率、呼吸、肌张力、喉反射、皮肤颜色（无体温）",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: Apgar评五项，心率呼吸肌张；喉反射皮肤色，体温不包括在内。",
        likes: 442
      }
    ]
  },
  {
    id: 74,
    examType: "护师资格考试",
    subject: "内科护理学",
    chapter: "循环系统",
    question: "心绞痛发作时，硝酸甘油的正确服用方法是？",
    options: ["口服", "嚼碎吞服", "舌下含化", "温开水送服"],
    answer: 2,
    difficulty: 1,
    year: 2024,
    keyPoint: "硝酸甘油：舌下含服（避免首过效应），5分钟未缓解可再服",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 心绞痛硝酸甘，舌下含服效果快；首过效应要避免，五分钟效不缓解再。",
        likes: 308
      }
    ]
  },
  {
    id: 75,
    examType: "护师资格考试",
    subject: "基础护理学",
    chapter: "给药方法",
    question: "服用洋地黄类药物前，护士应测量？",
    options: ["体温", "脉搏", "血压", "呼吸"],
    answer: 1,
    difficulty: 2,
    year: 2023,
    keyPoint: "洋地黄类：服药前测脉搏，<60次/分或节律不齐应停药并报告医生",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 洋地黄类药前，脉搏测量要先行；六十次分以下停，节律不齐也报告。",
        likes: 387
      }
    ]
  },
  {
    id: 76,
    examType: "临床执业医师",
    subject: "内科学",
    chapter: "呼吸系统",
    question: "慢性阻塞性肺疾病急性加重期最重要的治疗措施是？",
    options: ["祛痰止咳", "解痉平喘", "控制感染", "吸氧补液"],
    answer: 2,
    difficulty: 3,
    year: 2023,
    keyPoint: "COPD急性加重主因是感染，控制感染是最重要的治疗措施",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: COPD急性加，感染是主因；控制感染最重要，抗生素选择要准。",
        likes: 373
      }
    ]
  },
  {
    id: 77,
    examType: "临床执业医师",
    subject: "内科学",
    chapter: "循环系统",
    question: "急性左心衰竭伴快速心房颤动的首选药物是？",
    options: ["维拉帕米", "西地兰", "普罗帕酮", "胺碘酮"],
    answer: 1,
    difficulty: 3,
    year: 2022,
    keyPoint: "急性左心衰+快房颤：首选洋地黄类（西地兰），既强心又减慢心率",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 急性左心衰并房颤，西地兰是首选；强心利尿又减慢，控制心率效果显。",
        likes: 323
      }
    ]
  },
  {
    id: 78,
    examType: "临床执业医师",
    subject: "外科学",
    chapter: "普外科",
    question: "甲状腺手术后最危急的并发症是？",
    options: ["呼吸困难和窒息", "喉返神经损伤", "喉上神经损伤", "手足抽搐"],
    answer: 0,
    difficulty: 3,
    year: 2023,
    keyPoint: "术后48小时内最危急：切口内出血→气管受压→呼吸困难、窒息",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 甲状腺术后危，呼吸困难窒息最；四十八时内出血，气管受压要及时切。",
        likes: 131
      }
    ]
  },
  {
    id: 79,
    examType: "临床执业医师",
    subject: "外科学",
    chapter: "普外科",
    question: "胃溃疡外科手术治疗的适应证不包括？",
    options: ["严格内科治疗8-12周溃疡不愈合", "溃疡穿孔", "溃疡癌变", "溃疡直径<1cm"],
    answer: 3,
    difficulty: 3,
    year: 2024,
    keyPoint: "胃溃疡手术指征：难治性、穿孔、出血、梗阻、癌变；小溃疡药物可治",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 胃溃疡手术征，内科治疗不愈行；穿孔出血癌变并，梗阻也是适应证。",
        likes: 205
      }
    ]
  },
  {
    id: 80,
    examType: "临床执业医师",
    subject: "妇产科学",
    chapter: "产科",
    question: "前置胎盘最安全可靠的诊断方法是？",
    options: ["阴道检查", "腹部触诊", "B超检查", "X线检查"],
    answer: 2,
    difficulty: 2,
    year: 2023,
    keyPoint: "前置胎盘：B超确诊（准确率高、安全），禁做阴道检查（防大出血）",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 前置胎盘诊断，B超检查最安全；明确位置类型，阴道检查要避免。",
        likes: 162
      }
    ]
  },
  {
    id: 81,
    examType: "临床执业医师",
    subject: "儿科学",
    chapter: "营养障碍",
    question: "维生素D缺乏性佝偻病激期的主要临床表现是？",
    options: ["神经精神症状", "骨骼改变", "肌肉松弛", "生长发育迟缓"],
    answer: 1,
    difficulty: 2,
    year: 2022,
    keyPoint: "佝偻病激期：典型骨骼改变（方颅、鸡胸、O型腿等）",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 佝偻病激期表，骨骼改变是主要；方颅鸡胸O型腿，骨软体征都出现。",
        likes: 130
      }
    ]
  },
  {
    id: 82,
    examType: "临床执业医师",
    subject: "神经病学",
    chapter: "脑血管病",
    question: "脑出血最常见的部位是？",
    options: ["脑干", "小脑", "基底节区", "脑叶"],
    answer: 2,
    difficulty: 2,
    year: 2023,
    keyPoint: "脑出血70%发生在基底节区（壳核），因豆纹动脉破裂所致",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 脑出血最常见，基底节区七成占；豆纹动脉破裂致，三偏症状明显现。",
        likes: 310
      }
    ]
  },
  {
    id: 83,
    examType: "临床执业医师",
    subject: "传染病学",
    chapter: "细菌感染",
    question: "伤寒最严重的并发症是？",
    options: ["肠出血", "肠穿孔", "中毒性心肌炎", "支气管肺炎"],
    answer: 1,
    difficulty: 3,
    year: 2024,
    keyPoint: "伤寒并发症：肠出血（最常见）、肠穿孔（最严重，好发于病程2-3周）",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 伤寒并发症多，肠出血最常见说；肠穿孔最严重，二三周时要警惕。",
        likes: 365
      }
    ]
  },
  {
    id: 84,
    examType: "临床执业医师",
    subject: "精神病学",
    chapter: "精神障碍",
    question: "精神分裂症最常见的幻觉是？",
    options: ["幻视", "幻嗅", "幻听", "幻触"],
    answer: 2,
    difficulty: 2,
    year: 2023,
    keyPoint: "精神分裂症：幻听最常见（尤其是言语性幻听），评论性、命令性幻听有诊断意义",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 精神分裂症幻，听觉最常见幻听；评论命令有诊断，妄想也常见要记。",
        likes: 343
      }
    ]
  },
  {
    id: 85,
    examType: "临床医学考研",
    subject: "内科学",
    chapter: "消化系统",
    question: "上消化道出血最常见的病因是？",
    options: ["食管胃底静脉曲张破裂", "消化性溃疡", "急性糜烂出血性胃炎", "胃癌"],
    answer: 1,
    difficulty: 2,
    year: 2024,
    keyPoint: "上消化道出血最常见病因：消化性溃疡（50%左右），其次为食管胃底静脉曲张",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 上消化道出血，消化溃疡最常见；食管胃底静脉破，急性胃炎胃癌少。",
        likes: 449
      }
    ]
  },
  {
    id: 86,
    examType: "临床医学考研",
    subject: "外科学",
    chapter: "泌尿外科",
    question: "肾绞痛伴血尿，首先考虑的疾病是？",
    options: ["肾肿瘤", "肾结石", "肾结核", "肾积水"],
    answer: 1,
    difficulty: 2,
    year: 2023,
    keyPoint: "肾绞痛+血尿：典型肾结石/输尿管结石表现",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 肾绞痛加血尿，结石首先考虑；超声CT可确诊，止痛解痉排石治。",
        likes: 398
      }
    ]
  },
  {
    id: 87,
    examType: "临床医学考研",
    subject: "病理学",
    chapter: "消化系统疾病",
    question: "肝硬化特征性病理改变是？",
    options: ["肝细胞变性坏死", "假小叶形成", "炎细胞浸润", "纤维组织增生"],
    answer: 1,
    difficulty: 2,
    year: 2024,
    keyPoint: "肝硬化病理特征：假小叶形成（正常肝小叶结构被破坏，形成假小叶）",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 肝硬化病理征，假小叶形成特征；正常结构破坏尽，纤维间隔包绕成。",
        likes: 412
      }
    ]
  },
  {
    id: 88,
    examType: "临床医学考研",
    subject: "生理学",
    chapter: "内分泌",
    question: "胰岛素分泌的主要刺激因素是？",
    options: ["血糖升高", "血糖降低", "血钙升高", "血钾升高"],
    answer: 0,
    difficulty: 2,
    year: 2023,
    keyPoint: "血糖升高是胰岛素分泌最主要刺激因素（负反馈调节）",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 胰岛素分泌调，血糖升高主刺激；负反馈调节机制，降糖作用因此起。",
        likes: 145
      }
    ]
  },
  {
    id: 89,
    examType: "临床医学考研",
    subject: "生物化学",
    chapter: "酶学",
    question: "酶促反应中决定酶特异性的是？",
    options: ["辅酶", "辅基", "酶蛋白", "金属离子"],
    answer: 2,
    difficulty: 3,
    year: 2024,
    keyPoint: "酶蛋白决定酶的特异性（结合底物），辅酶/辅基决定反应类型",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 酶特异性决定，酶蛋白是主因；结合底物特异性，辅酶辅基定反应型。",
        likes: 162
      }
    ]
  },
  {
    id: 90,
    examType: "临床医学考研",
    subject: "诊断学",
    chapter: "心电图",
    question: "心房颤动的典型心电图表现不包括？",
    options: ["P波消失", "f波出现", "RR间期绝对不规则", "QRS波宽大畸形"],
    answer: 3,
    difficulty: 3,
    year: 2023,
    keyPoint: "房颤：P波消失代之以f波，RR绝对不齐；QRS宽大畸形是室性心律失常特点",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 房颤心电图特，P波消失f波出；RR间期不规则，QRS不宽大畸形。",
        likes: 216
      }
    ]
  },
  {
    id: 91,
    examType: "护师资格考试",
    subject: "内科护理学",
    chapter: "消化系统",
    question: "肝性脑病患者禁用的灌肠液是？",
    options: ["生理盐水", "弱酸性溶液", "肥皂水", "乳果糖溶液"],
    answer: 2,
    difficulty: 3,
    year: 2024,
    keyPoint: "肝性脑病禁用肥皂水（碱性）灌肠，会加重氨吸收；宜用弱酸性溶液",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 肝性脑病灌肠，肥皂水要禁用；碱性环境氨吸收，弱酸灌肠才适宜。",
        likes: 284
      }
    ]
  },
  {
    id: 92,
    examType: "护师资格考试",
    subject: "外科护理学",
    chapter: "胆道疾病",
    question: "T管引流患者，胆汁引流量突然减少，应首先考虑？",
    options: ["肝功能衰竭", "胆道下端梗阻", "引流管受压或扭曲", "胆汁分泌减少"],
    answer: 2,
    difficulty: 3,
    year: 2023,
    keyPoint: "T管引流量突然减少：首先检查引流管是否受压、扭曲、堵塞",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: T管引流减少，首先检查受压否；扭曲堵塞要排除，再考虑功能问题。",
        likes: 283
      }
    ]
  },
  {
    id: 93,
    examType: "护师资格考试",
    subject: "妇产科护理学",
    chapter: "妊娠期",
    question: "妊娠期高血压疾病患者，硫酸镁中毒最早出现的症状是？",
    options: ["膝反射减弱或消失", "呼吸减慢", "尿量减少", "血压下降"],
    answer: 0,
    difficulty: 3,
    year: 2024,
    keyPoint: "硫酸镁中毒顺序：膝反射消失→呼吸抑制→心跳骤停；监测膝反射最重要",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 硫酸镁中毒先，膝反射消失最先；继而呼吸受抑制，心跳骤停要防范。",
        likes: 134
      }
    ]
  },
  {
    id: 94,
    examType: "护师资格考试",
    subject: "儿科护理学",
    chapter: "营养性疾病",
    question: "营养不良患儿皮下脂肪最先减少的部位是？",
    options: ["面部", "躯干", "臀部", "腹部"],
    answer: 3,
    difficulty: 2,
    year: 2023,
    keyPoint: "营养不良皮下脂肪减少顺序：腹部→躯干→臀部→四肢→面部",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 营养不良脂肪减，腹部最先开始减；然后躯干臀四肢，面部最后才出现。",
        likes: 247
      }
    ]
  },
  {
    id: 95,
    examType: "护师资格考试",
    subject: "基础护理学",
    chapter: "静脉输液",
    question: "输液过程中出现空气栓塞，应立即协助患者采取？",
    options: ["左侧卧位并头低足高", "右侧卧位并头低足高", "左侧卧位并头高足低", "右侧卧位并头高足低"],
    answer: 0,
    difficulty: 3,
    year: 2024,
    keyPoint: "空气栓塞：左侧卧位+头低足高，使气泡浮向右心室尖部，避开肺动脉入口",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 空气栓塞危急，左侧头低足高卧；气泡浮右心室尖，肺动脉入口避过。",
        likes: 395
      }
    ]
  },
  {
    id: 96,
    examType: "护师资格考试",
    subject: "内科护理学",
    chapter: "内分泌系统",
    question: "甲状腺功能亢进症患者饮食应给予？",
    options: ["高热量、高蛋白、高维生素", "低热量、低蛋白、高维生素", "高热量、低蛋白、高维生素", "低热量、高蛋白、低维生素"],
    answer: 0,
    difficulty: 2,
    year: 2023,
    keyPoint: "甲亢代谢亢进：需高热量、高蛋白、高维生素饮食，补充消耗",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 甲亢代谢亢进，高热量高蛋白维；补充消耗需要，饮食护理很重要。",
        likes: 297
      }
    ]
  },
  {
    id: 97,
    examType: "护师资格考试",
    subject: "外科护理学",
    chapter: "骨折",
    question: "骨折早期功能锻炼的重点是？",
    options: ["以患肢肌肉等长收缩为主", "以骨折处远、近侧关节活动为主", "以重点关节为主的全身功能锻炼", "以骨折处上下关节活动为主"],
    answer: 0,
    difficulty: 3,
    year: 2024,
    keyPoint: "骨折早期（1-2周）：肌肉等长收缩（静力收缩），防肌肉萎缩；中期开始关节活动",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 骨折早期锻炼，肌肉等长收缩练；关节不动肌肉动，防萎缩血栓很重要。",
        likes: 230
      }
    ]
  },
  {
    id: 98,
    examType: "护师资格考试",
    subject: "妇产科护理学",
    chapter: "产褥期",
    question: "产后恶露持续的时间约？",
    options: ["1-2周", "2-3周", "4-6周", "6-8周"],
    answer: 2,
    difficulty: 2,
    year: 2023,
    keyPoint: "正常恶露持续4-6周，总量250-500ml；血性恶露3-4天，浆液性10天，白色3周",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 产后恶露持续，四到六周正常；血性浆液白色，总量五百毫升上。",
        likes: 293
      }
    ]
  },
  {
    id: 99,
    examType: "护师资格考试",
    subject: "急救护理",
    chapter: "心肺复苏",
    question: "成人心肺复苏时，胸外按压与人工呼吸的比例是？",
    options: ["15:2", "30:2", "15:1", "30:1"],
    answer: 1,
    difficulty: 2,
    year: 2024,
    keyPoint: "成人CPR：按压通气比30:2（单人/双人相同）；儿童双人施救15:2",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 心肺复苏比例，三十比二按压气；成人单双人均同，儿童双人十五比。",
        likes: 350
      }
    ]
  },
  {
    id: 100,
    examType: "护师资格考试",
    subject: "基础护理学",
    chapter: "隔离技术",
    question: "严密隔离的患者，其分泌物、排泄物消毒后排放，采用？",
    options: ["含氯消毒剂", "75%乙醇", "碘伏", "过氧化氢"],
    answer: 0,
    difficulty: 2,
    year: 2023,
    keyPoint: "严密隔离（鼠疫、霍乱等）：排泄物用含氯消毒剂消毒后排放",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 严密隔离消毒，含氯消毒剂使用；排泄物处理后排，霍乱鼠疫此标准。",
        likes: 252
      }
    ]
  },
  {
    id: 101,
    examType: "临床执业医师",
    subject: "内科学",
    chapter: "消化系统",
    question: "慢性胃炎最主要的病因是？",
    options: ["药物损伤", "胆汁反流", "幽门螺杆菌感染", "自身免疫"],
    answer: 2,
    difficulty: 2,
    year: 2024,
    keyPoint: "慢性胃炎90%以上由幽门螺杆菌感染引起",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 慢性胃炎病因，幽门螺杆菌主因；九成人因此病，根除治疗可根治。",
        likes: 276
      }
    ]
  },
  {
    id: 102,
    examType: "临床执业医师",
    subject: "外科学",
    chapter: "骨科",
    question: "股骨颈骨折按骨折线部位分类，预后最差的是？",
    options: ["头下型", "经颈型", "基底型", "转子间型"],
    answer: 0,
    difficulty: 3,
    year: 2023,
    keyPoint: "头下型骨折：旋股内、外侧动脉分支损伤最重，股骨头缺血坏死率最高",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 股骨颈骨折型，头下型预后最差；血供破坏最重，坏死发生率最高。",
        likes: 374
      }
    ]
  },
  {
    id: 103,
    examType: "临床执业医师",
    subject: "妇产科学",
    chapter: "妇科",
    question: "子宫内膜异位症最常见的部位是？",
    options: ["卵巢", "宫骶韧带", "直肠子宫陷凹", "输卵管"],
    answer: 0,
    difficulty: 2,
    year: 2024,
    keyPoint: "内异症80%累及卵巢，形成卵巢巧克力囊肿",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 子宫内膜异位，卵巢最常累及；巧克力囊肿形，痛经不孕症状齐。",
        likes: 351
      }
    ]
  },
  {
    id: 104,
    examType: "临床执业医师",
    subject: "儿科学",
    chapter: "呼吸系统",
    question: "小儿肺炎引起全身各系统病理生理变化的关键是？",
    options: ["病原体侵入", "毒素作用", "缺氧和二氧化碳潴留", "酸中毒"],
    answer: 2,
    difficulty: 3,
    year: 2023,
    keyPoint: "肺炎：通气/换气障碍→缺氧+CO2潴留→各系统功能障碍",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 小儿肺炎病理，缺氧CO2潴留；通气换气障碍，各系统功能受影响。",
        likes: 410
      }
    ]
  },
  {
    id: 105,
    examType: "临床执业医师",
    subject: "神经病学",
    chapter: "周围神经病",
    question: "吉兰-巴雷综合征（GBS）最主要的病理改变是？",
    options: ["轴索变性", "节段性脱髓鞘", "神经元坏死", "胶质增生"],
    answer: 1,
    difficulty: 3,
    year: 2024,
    keyPoint: "GBS：自身免疫介导的周围神经节段性脱髓鞘",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 吉兰巴雷综合，节段脱髓鞘病理；自身免疫攻击，周围神经损害起。",
        likes: 427
      }
    ]
  },
  {
    id: 106,
    examType: "临床执业医师",
    subject: "传染病学",
    chapter: "病毒感染",
    question: "流行性乙型脑炎最主要的死亡原因是？",
    options: ["高热", "抽搐", "呼吸衰竭", "循环衰竭"],
    answer: 2,
    difficulty: 3,
    year: 2023,
    keyPoint: "乙脑：脑实质炎症→中枢性呼吸衰竭（最主要死因）",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 乙型脑炎死因，呼吸衰竭最主要；脑实质炎症致，中枢呼吸衰竭来。",
        likes: 157
      }
    ]
  },
  {
    id: 107,
    examType: "临床执业医师",
    subject: "精神病学",
    chapter: "心境障碍",
    question: "抑郁症最核心的症状是？",
    options: ["睡眠障碍", "食欲减退", "情绪低落", "自杀观念"],
    answer: 2,
    difficulty: 2,
    year: 2024,
    keyPoint: "抑郁症核心症状：情绪低落、兴趣减退、快感缺失",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 抑郁症核心症，情绪低落兴趣失；快感缺失伴随，三无三自要警惕。",
        likes: 148
      }
    ]
  },
  {
    id: 108,
    examType: "临床医学考研",
    subject: "内科学",
    chapter: "血液系统",
    question: "缺铁性贫血患者补铁治疗有效的最早指标是？",
    options: ["血红蛋白升高", "网织红细胞增多", "血清铁蛋白升高", "红细胞平均体积增大"],
    answer: 1,
    difficulty: 3,
    year: 2023,
    keyPoint: "补铁有效最早表现：网织红细胞5-10天开始升高，2周后血红蛋白上升",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 补铁治疗有效，网织红最先反应；五到十天开始升，血红蛋白二周后。",
        likes: 137
      }
    ]
  },
  {
    id: 109,
    examType: "临床医学考研",
    subject: "外科学",
    chapter: "神经外科",
    question: "颅内压增高的「三主征」是？",
    options: ["头痛、呕吐、视乳头水肿", "头痛、呕吐、偏瘫", "头痛、抽搐、偏瘫", "呕吐、抽搐、视乳头水肿"],
    answer: 0,
    difficulty: 2,
    year: 2024,
    keyPoint: "颅内压增高三主征：头痛、呕吐、视乳头水肿",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 颅内压增高征，三主征要记清；头痛呕吐视乳头，水肿眼底镜检查。",
        likes: 318
      }
    ]
  },
  {
    id: 110,
    examType: "临床医学考研",
    subject: "病理学",
    chapter: "心血管系统疾病",
    question: "风湿性心内膜炎最常累及的心瓣膜是？",
    options: ["二尖瓣", "三尖瓣", "主动脉瓣", "肺动脉瓣"],
    answer: 0,
    difficulty: 2,
    year: 2023,
    keyPoint: "风湿性心脏病：二尖瓣最常受累（70%），其次为主动脉瓣",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 风湿性心脏病，二尖瓣最常累及；主动脉瓣次之，狭窄关闭不全齐。",
        likes: 229
      }
    ]
  },
  {
    id: 111,
    examType: "临床医学考研",
    subject: "生理学",
    chapter: "呼吸生理",
    question: "肺通气的直接动力是？",
    options: ["肺内压与大气压之差", "肺内压与胸内压之差", "胸内压与大气压之差", "呼吸运动"],
    answer: 0,
    difficulty: 2,
    year: 2024,
    keyPoint: "肺通气直接动力：肺内压与大气压之差；原动力：呼吸肌收缩",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 肺通气动力有，直接压力差来；肺内大气压差，原动力呼吸肌。",
        likes: 210
      }
    ]
  },
  {
    id: 112,
    examType: "临床医学考研",
    subject: "生物化学",
    chapter: "脂类代谢",
    question: "酮体生成的部位是？",
    options: ["肝细胞线粒体", "肝细胞胞液", "心肌细胞", "肾细胞"],
    answer: 0,
    difficulty: 3,
    year: 2023,
    keyPoint: "酮体在肝细胞线粒体生成，肝外组织（心、肾、脑、肌）利用",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 酮体生成部位，肝细胞线粒体；肝内生成肝外用，心肾脑肌可利用。",
        likes: 252
      }
    ]
  },
  {
    id: 113,
    examType: "临床医学考研",
    subject: "诊断学",
    chapter: "实验室检查",
    question: "血清心肌坏死标志物中，特异性最高的是？",
    options: ["肌红蛋白", "肌钙蛋白", "CK-MB", "LDH"],
    answer: 1,
    difficulty: 2,
    year: 2024,
    keyPoint: "肌钙蛋白（cTnI/cTnT）：心肌损伤特异性最高，AMI首选标志物",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 心肌坏死标志，肌钙蛋白特异高；AMI首选指标，早期升高持续久。",
        likes: 240
      }
    ]
  },
  {
    id: 114,
    examType: "护师资格考试",
    subject: "内科护理学",
    chapter: "呼吸系统",
    question: "支气管哮喘患者急性发作时，血气分析常表现为？",
    options: ["呼吸性酸中毒", "呼吸性碱中毒", "代谢性酸中毒", "代谢性碱中毒"],
    answer: 1,
    difficulty: 3,
    year: 2023,
    keyPoint: "哮喘急性发作：过度通气→PaCO2降低→呼吸性碱中毒；严重时CO2潴留→呼酸",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 哮喘急性发作，过度通气呼碱；CO2排出过多，PaCO2降低是。",
        likes: 312
      }
    ]
  },
  {
    id: 115,
    examType: "护师资格考试",
    subject: "外科护理学",
    chapter: "颅脑损伤",
    question: "硬脑膜外血肿最典型的意识障碍表现是？",
    options: ["持续昏迷", "昏迷-清醒-再昏迷", "清醒-昏迷", "短暂昏迷后清醒"],
    answer: 1,
    difficulty: 3,
    year: 2024,
    keyPoint: "硬膜外血肿典型表现：中间清醒期（昏迷→清醒→再昏迷）",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 硬膜外血肿典，中间清醒期特征；昏迷清醒再昏迷，颅内压增高进展。",
        likes: 439
      }
    ]
  },
  {
    id: 116,
    examType: "护师资格考试",
    subject: "妇产科护理学",
    chapter: "分娩期",
    question: "临产开始的标志是？",
    options: ["见红", "胎膜破裂", "规律且逐渐增强的宫缩", "宫口开大"],
    answer: 2,
    difficulty: 2,
    year: 2023,
    keyPoint: "临产标志：规律宫缩（持续30s以上，间歇5-6min）+进行性宫颈管消失+宫口扩张",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 临产标志有，规律宫缩是主；间隔五六分钟，持续三十秒以上。",
        likes: 206
      }
    ]
  },
  {
    id: 117,
    examType: "护师资格考试",
    subject: "儿科护理学",
    chapter: "新生儿疾病",
    question: "新生儿黄疸出现下列哪种情况应警惕核黄疸？",
    options: ["血清胆红素>205μmol/L", "血清胆红素>342μmol/L", "血清胆红素>170μmol/L", "血清胆红素>256μmol/L"],
    answer: 1,
    difficulty: 3,
    year: 2024,
    keyPoint: "足月儿>342μmol/L（20mg/dl）易致胆红素脑病（核黄疸）",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 核黄疸危险值，胆红素三四二；足月儿此水平，血脑屏障易穿透。",
        likes: 375
      }
    ]
  },
  {
    id: 118,
    examType: "护师资格考试",
    subject: "基础护理学",
    chapter: "饮食护理",
    question: "鼻饲法插入胃管的长度为？",
    options: ["从鼻尖到剑突", "从眉心到剑突", "从发际到剑突", "从耳垂到剑突"],
    answer: 2,
    difficulty: 2,
    year: 2023,
    keyPoint: "成人鼻饲插管长度：前额发际至胸骨剑突处，或鼻尖经耳垂至剑突，约45-55cm",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 鼻饲插管长度，发际到胸骨剑突；大约四十五到五十五，确认胃内再灌注。",
        likes: 411
      }
    ]
  },
  {
    id: 119,
    examType: "护师资格考试",
    subject: "内科护理学",
    chapter: "循环系统",
    question: "心脏骤停最主要的诊断依据是？",
    options: ["意识丧失", "大动脉搏动消失", "呼吸停止", "心音消失"],
    answer: 1,
    difficulty: 2,
    year: 2024,
    keyPoint: "心脏骤停诊断：意识丧失+大动脉搏动消失（颈动脉、股动脉）",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 心脏骤停诊断，大动脉搏动消失；颈动股动触不到，意识丧失呼吸停。",
        likes: 199
      }
    ]
  },
  {
    id: 120,
    examType: "护师资格考试",
    subject: "外科护理学",
    chapter: "腹部损伤",
    question: "腹部损伤患者观察期间，下列哪项处理是错误的？",
    options: ["禁食", "胃肠减压", "使用吗啡止痛", "静脉补液"],
    answer: 2,
    difficulty: 3,
    year: 2023,
    keyPoint: "腹部损伤观察期禁用吗啡止痛，以免掩盖病情",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 腹部损伤观察，吗啡止痛要禁；掩盖病情变化，延误诊断危险。",
        likes: 154
      }
    ]
  },
  {
    id: 121,
    examType: "护师资格考试",
    subject: "妇产科护理学",
    chapter: "产褥期",
    question: "产后子宫降至骨盆腔内，在腹部摸不到宫底的时间是？",
    options: ["产后1周", "产后2周", "产后3周", "产后10天"],
    answer: 3,
    difficulty: 2,
    year: 2024,
    keyPoint: "产后10天子宫降至盆腔，腹部触不到宫底；产后6周恢复至非孕大小",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 产后子宫复旧，十天降至盆腔；腹部触不到底，六周恢复正常。",
        likes: 325
      }
    ]
  },
  {
    id: 122,
    examType: "护师资格考试",
    subject: "儿科护理学",
    chapter: "营养与喂养",
    question: "婴儿添加辅食的适宜时间是？",
    options: ["2-3个月", "4-6个月", "7-9个月", "10-12个月"],
    answer: 1,
    difficulty: 2,
    year: 2023,
    keyPoint: "婴儿4-6个月开始添加辅食（体重达6.5-7kg，能扶坐）",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 婴儿辅食添加，四到六月适宜；体重达标能扶坐，消化能力已具备。",
        likes: 334
      }
    ]
  },
  {
    id: 123,
    examType: "护师资格考试",
    subject: "急救护理",
    chapter: "中毒",
    question: "急性有机磷农药中毒患者，出现烟碱样症状的表现是？",
    options: ["瞳孔缩小", "流涎多汗", "肌束颤动", "肺水肿"],
    answer: 2,
    difficulty: 3,
    year: 2024,
    keyPoint: "有机磷中毒烟碱样症状：肌束颤动、肌无力；毒蕈碱样：瞳孔缩小、流涎、肺水肿",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 有机磷中毒征，烟碱样肌束颤；肌肉收缩颤动，肌无力麻痹现。",
        likes: 289
      }
    ]
  },
  {
    id: 124,
    examType: "护师资格考试",
    subject: "基础护理学",
    chapter: "标本采集",
    question: "采集血培养标本，采血量一般为？",
    options: ["2ml", "5ml", "10ml", "15ml"],
    answer: 1,
    difficulty: 2,
    year: 2023,
    keyPoint: "血培养：一般血培养采血5ml；亚急性细菌性心内膜炎采血10-15ml",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 血培养采血量，一般五毫升即可；亚急性心内膜炎，十到十五毫升采。",
        likes: 124
      }
    ]
  },
  {
    id: 125,
    examType: "护师资格考试",
    subject: "内科护理学",
    chapter: "泌尿系统",
    question: "慢性肾小球肾炎患者，血压控制的目标值是？",
    options: ["<140/90mmHg", "<130/80mmHg", "<120/80mmHg", "<150/90mmHg"],
    answer: 1,
    difficulty: 2,
    year: 2024,
    keyPoint: "慢性肾炎血压控制目标<130/80mmHg，以减少尿蛋白、保护肾功能",
    comments: [
      {
        author: "@协和学习",
        content: "口诀: 慢性肾炎血压，控制目标一三零；比八零要降低，保护肾功能重要。",
        likes: 410
      }
    ]
  }
];