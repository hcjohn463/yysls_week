// 風沙酒肆 任務資料

// 清單一：看背包物品判斷是否開門
const jianmenBagData = [
    {
        visitor: '店小二',
        icon: '&#x1F9D1;&#x200D;&#x1F373;',
        items: ['錢', '草藥', '三蔬雜菇'],
    },
    {
        visitor: '侍女',
        icon: '&#x1F467;',
        items: ['花枝', '書畫', '錢'],
    },
    {
        visitor: '貴家小姐',
        icon: '&#x1F478;',
        items: ['首飾', '花枝', '錢'],
    },
    {
        visitor: '鏢師',
        icon: '&#x2694;&#xFE0F;',
        items: ['錢', '刀', '芙蓉蛤蜊'],
    },
    {
        visitor: '行商',
        icon: '&#x1F6D2;',
        items: ['錢', '貨物'],
    },
    {
        visitor: '工匠',
        icon: '&#x1F528;',
        items: ['繩子', '錘子'],
    },
    {
        visitor: '僧人',
        icon: '&#x1F9D8;',
        items: ['草藥', '三蔬雜菇', '化緣碗'],
    },
];

// 清單二：問話判斷是否開門
const jianmenQAData = [
    {
        visitor: '帳房先生',
        icon: '&#x1F4D2;',
        question: '身上帶了什麼？',
        open: { answer: '鐵筆是胡蓉送我的禮物', note: '✅ 說是禮物 → 開門' },
        closed: { answer: '鐵筆是搶鐵用的', note: '❌ 說用途可疑 → 不開門' },
    },
    {
        visitor: '鑑寶商人',
        icon: '&#x1F48E;',
        question: '你都有些什麼貨？',
        open: { answer: '未炫耀茶壺', note: '✅ 沒提茶壺 → 開門' },
        closed: { answer: '炫耀茶壺', note: '❌ 炫耀茶壺 → 不開門' },
    },
    {
        visitor: '梨園',
        icon: '&#x1F3AD;',
        question: '你是誰？',
        open: { answer: '沒有說「姑奶奶」', note: '✅ 未自稱姑奶奶 → 開門' },
        closed: { answer: '有說「姑奶奶」', note: '❌ 自稱姑奶奶 → 不開門' },
    },
    {
        visitor: '青溪',
        icon: '&#x1F33F;',
        question: '藥箱裡有什麼？',
        open: { answer: '有師姐的帕子（害羞）', note: '✅ 害羞提到帕子 → 開門' },
        closed: { answer: '有蟲子（如蛇、蜈蚣）', note: '❌ 說有蟲 → 不開門' },
    },
    {
        visitor: '孤雲',
        icon: '&#x26C5;',
        question: '你為什麼沒帶著你的貨物？',
        open: { answer: '先收訂單，再送貨', note: '✅ 合理說法 → 開門' },
        closed: { answer: '貨物在隔壁房間 / 路上丟了', note: '❌ 說法可疑 → 不開門' },
    },
    {
        visitor: '九流門',
        icon: '&#x1F94B;',
        question: '武學是什麼？',
        open: { answer: '栗（lì）子遊塵', note: '✅ 唸 lì → 開門' },
        closed: { answer: '粟（sù）子遊塵', note: '❌ 唸 sù → 不開門' },
    },
    {
        visitor: '三更天',
        icon: '&#x1F303;',
        question: '武學是什麼？',
        open: { answer: '泥梨三垢', note: '✅ 「垢」→ 開門' },
        closed: { answer: '泥梨三購', note: '❌ 「購」→ 不開門' },
    },
    {
        visitor: '天泉',
        icon: '&#x1F4A6;',
        question: '武學是什麼？',
        open: { answer: '嗟夫刀法', note: '✅ 嗟夫 → 開門' },
        closed: { answer: '姐夫刀法', note: '❌ 姐夫 → 不開門' },
    },
    {
        visitor: '狂瀾',
        icon: '&#x1F300;',
        question: '武學是什麼？',
        open: { answer: '八方風雷槍', note: '✅ 風雷 → 開門' },
        closed: { answer: '八方雷風槍', note: '❌ 雷風（順序錯）→ 不開門' },
    },
];
