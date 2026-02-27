// 燕雲十六聲 每周商店購買清單資料
// tier: 'must' = 必買 (金色外框), 'optional' = 有餘額再買 (紫色外框)

const shopsData = [
  {
    id: 'bukan',
    name: '不肝商店',
    path: '福利 → 兌換商店 → 不肝商店',
    icon: '🏪',
    subShops: [
      {
        id: 'combat',
        name: '戰鬥養成',
        icon: '⚔️',
        items: [
          { name: '嘯玉', tier: 'must', desc: '戰鬥養成核心材料', img: '' },
          { name: '心法心得 散本', tier: 'must', desc: '心法升級必需', img: '' },
          { name: '短陌錢', tier: 'must', desc: '通用貨幣', img: '' },
          { name: '振玉', tier: 'optional', desc: '戰鬥養成核心材料', img: '' },
          { name: '奇術突破箱', tier: 'optional', desc: '有餘額再買', img: '' },
          { name: '生活物資箱', tier: 'optional', desc: '有餘額再買', img: '' },
        ]
      },
      {
        id: 'equip',
        name: '裝備寶匣',
        icon: '📦',
        items: [
          { name: '100階裝備匣', tier: 'optional', desc: '有餘額再買', img: '' },
        ]
      },
      {
        id: 'gold',
        name: '金裝兌換',
        icon: '✨',
        items: [
          { name: '金妙音石', tier: 'must', desc: '金裝強化必買', img: '' },
          { name: '定音石', tier: 'must', desc: '音色定型必買', img: '' },
        ]
      },
      {
        id: 'life',
        name: '營生養成',
        icon: '🌿',
        items: [
          { name: '營生手記', tier: 'must', desc: '營生技能升級', img: '' },
        ]
      },
      {
        id: 'season',
        name: '賽季追趕',
        icon: '🏃',
        items: [
          { name: '振玉溯', tier: 'optional', desc: '有餘額再買', img: '' },
          { name: '烏金鐵', tier: 'optional', desc: '有餘額再買', img: '' },
          { name: '裝備追趕箱', tier: 'optional', desc: '有餘額再買', img: '' },
          { name: '妙音石追趕箱', tier: 'optional', desc: '有餘額再買', img: '' },
          { name: '定音石追趕箱', tier: 'optional', desc: '有餘額再買', img: '' },
        ]
      },
      {
        id: 'skin',
        name: '外觀兌換',
        icon: '👘',
        items: [
          { name: '裊裊之音', tier: 'must', desc: '外觀資源必買', img: '' },
          { name: '俠音券', tier: 'must', desc: '外觀兌換券必買', img: '' },
        ]
      },
    ]
  },
  {
    id: 'redgold',
    name: '赤金小舖',
    path: '福利 → 兌換商店 → 赤金小舖',
    icon: '🪙',
    subShops: [
      {
        id: 'main',
        name: '赤金小舖',
        icon: '🪙',
        items: [
          { name: '百業驚喜禮盒', tier: 'must', desc: '必買禮盒', img: '' },
          { name: '籌碼袋', tier: 'must', desc: '必買貨幣包', img: '' },
        ]
      }
    ]
  },
  {
    id: 'heritage',
    name: '傳承商店',
    path: '福利 → 兌換商店 → 傳承商店',
    icon: '📜',
    subShops: [
      {
        id: 'main',
        name: '傳承商店',
        icon: '📜',
        items: [
          { name: '心法心得 散本', tier: 'must', desc: '心法升級必需', img: '' },
          { name: '變音石', tier: 'must', desc: '音色變換必買', img: '' },
          { name: '奇術突破箱', tier: 'optional', desc: '有餘額再買', img: '' },
        ]
      }
    ]
  },
  {
    id: 'bazhen',
    name: '江湖百珍',
    path: '道具 → 江湖百珍',
    icon: '💎',
    subShops: [
      {
        id: 'main',
        name: '江湖百珍',
        icon: '💎',
        items: [
          { name: '裊裊之音', tier: 'must', desc: '外觀資源必買', img: '' },
        ]
      }
    ]
  },
  {
    id: 'battlepass',
    name: '戰令商店',
    path: '戰令商店',
    icon: '🎖️',
    subShops: [
      {
        id: 'main',
        name: '戰令商店',
        icon: '🎖️',
        items: [
          { name: '轉律石', tier: 'must', desc: '必買強化材料', img: '' },
          { name: '變音石', tier: 'must', desc: '音色變換必買', img: '' },
          { name: '宋元通寶', tier: 'must', desc: '通用貨幣必買', img: '' },
        ]
      }
    ]
  },
];
