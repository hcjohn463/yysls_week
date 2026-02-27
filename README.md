# 燕雲十六聲 · 每周任務攻略

> 🌐 **網站連結**：[https://hcjohn463.github.io/yysls_week/](https://hcjohn463.github.io/yysls_week/)

每周商店必買清單查詢網站，避免每次都要重查攻略。

---

## 功能

- 切換不同商店頁籤（不肝商店、赤金小舖、傳承商店、江湖百珍、戰令商店）
- 不肝商店內可切換子分類（戰鬥養成、裝備寶匣、金裝兌換⋯⋯）
- 🟡 **金色外框** = 必買商品
- 🟣 **紫色外框** = 有餘額再買的商品

---

## 檔案結構

```
yysls_week/
├── index.html   # 主頁面
├── styles.css   # 深色主題樣式
├── data.js      # 商店與商品資料（在這裡新增/修改商品）
└── app.js       # 頁面邏輯
```

---

## 如何新增或修改商品

編輯 `data.js`，找到對應的商店與子分類，修改 `items` 陣列：

```js
{ name: '商品名稱', tier: 'must', desc: '說明文字', img: '' }
// tier: 'must' = 必買（金色）, 'optional' = 有餘額再買（紫色）
```

如果有商品圖片，把截圖放到專案資料夾，然後填入檔名：

```js
{ name: '嘯玉', tier: 'must', desc: '戰鬥養成核心材料', img: 'xiaoyu.png' }
```

修改完後推上 GitHub，網站會自動更新。

---

## 部署

本專案使用 **GitHub Pages（Static HTML）** 部署，詳見 `openflow.txt`。
