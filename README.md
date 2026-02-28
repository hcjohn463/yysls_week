# 燕雲十六聲 · 每周任務攻略

> 🌐 **線上版本**：[https://hcjohn463.github.io/yysls_week/](https://hcjohn463.github.io/yysls_week/)

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-部署中-brightgreen?logo=github)
![License](https://img.shields.io/badge/License-MIT-blue)

整理每周必買商品與風沙酒肆來訪者鑑別資訊的速查網站，不用每次都重翻攻略。

---

## ✨ 功能介紹

### 🏪 每周必買商店

- 切換多個商店頁籤：**不肝商店、赤金小舖、傳承商店、江湖百珍、戰令商店**
- 不肝商店內可切換子分類（戰鬥養成、裝備寶匣、金裝兌換⋯⋯）
- 支援 **大圖 / 清單** 兩種瀏覽模式
- 🟡 **金色外框** = 必買商品
- 🟣 **紫色外框** = 有餘額再買

### 🍶 風沙酒肆・來訪者鑑別

- **背包物品判斷**：根據來訪者身上「有且僅有」哪些物品決定是否開門
- **問話判斷**：根據來訪者如何回答問題決定是否開門（含門派 NPC 武學問答）
- 快速導航索引，點擊 NPC 名稱直接跳轉並高亮該卡片

---

## 📁 檔案結構

```
yysls_week/
├── index.html        # 主頁面（HTML 骨架 + 導覽列）
├── styles.css        # 深色主題樣式（含響應式）
├── app.js            # 每周商店頁面邏輯
├── data.js           # 商店與商品資料 ← 新增/修改商品在這裡
├── jianmen.js        # 風沙酒肆頁面邏輯
└── data_jianmen.js   # 風沙酒肆來訪者資料 ← 新增/修改 NPC 在這裡
```

---

## ✏️ 如何新增或修改商品

編輯 `data.js`，找到對應的商店與子分類，修改 `items` 陣列：

```js
{ name: '商品名稱', tier: 'must', desc: '說明文字', img: '' }
// tier: 'must'     = 必買（金色外框）
// tier: 'optional' = 有餘額再買（紫色外框）
```

若有商品截圖，將圖片放入專案根目錄後填入檔名：

```js
{ name: '嘯玉', tier: 'must', desc: '戰鬥養成核心材料', img: 'xiaoyu.png' }
```

---

## ✏️ 如何修改風沙酒肆資料

### 背包物品（`data_jianmen.js`）

```js
// jianmenBagData 陣列
{
    visitor: '店小二',
    icon: '&#x1F9D1;&#x200D;&#x1F373;',
    items: ['錢', '草藥', '三蔬雜菇'],
}
```

### 問話判斷（`data_jianmen.js`）

```js
// jianmenQAData 陣列
{
    visitor: '帳房先生',
    icon: '&#x1F4D2;',
    question: '身上帶了什麼？',
    open:   { answer: '鐵筆是胡蓉送我的禮物', note: '✅ 說是禮物 → 開門' },
    closed: { answer: '鐵筆是搶鐵用的',       note: '❌ 說用途可疑 → 不開門' },
}
```

---

## 🚀 部署

本專案使用 **GitHub Pages（Static HTML）** 部署，推上 `main` 分支後自動更新，無需任何建置步驟。

---

## 📄 授權

以 [MIT License](https://opensource.org/licenses/MIT) 開放，歡迎自由取用與分享。
