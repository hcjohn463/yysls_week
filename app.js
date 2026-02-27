// 燕雲十六聲 Every Week Shop Guide - App Logic

(function () {
    'use strict';

    // ── Icon map for items without images ──
    const iconMap = {
        '嘯玉': '💠', '振玉': '🔷', '心法心得': '📖', '短陌錢': '🪙',
        '奇術突破箱': '📦', '生活物資箱': '🎁', '100階裝備匣': '🗃️',
        '金妙音石': '🌟', '定音石': '⚙️', '營生手記': '📝',
        '振玉溯': '🔹', '烏金鐵': '⚫', '裝備追趕箱': '📬',
        '妙音石追趕箱': '🎵', '定音石追趕箱': '🎶',
        '裊裊之音': '🎐', '俠音券': '🎟️',
        '百業驚喜禮盒': '🎁', '籌碼袋': '💰',
        '變音石': '🎴', '轉律石': '🔮', '宋元通寶': '🪙',
        '營生手記': '📝',
    };

    const DEFAULT_ICON = '🔸';

    // ── State ──
    let activeShopId = shopsData[0].id;
    let activeSubIds = {}; // shopId -> subShopId

    // Initialize default sub-tab per shop
    shopsData.forEach(s => {
        activeSubIds[s.id] = s.subShops[0].id;
    });

    // ── Render main shop tabs ──
    function renderShopTabs() {
        const container = document.getElementById('shop-tabs');
        container.innerHTML = '';
        shopsData.forEach(shop => {
            const btn = document.createElement('button');
            btn.className = 'shop-tab' + (shop.id === activeShopId ? ' active' : '');
            btn.dataset.id = shop.id;
            btn.innerHTML = `<span class="shop-tab-icon">${shop.icon}</span>${shop.name}`;
            btn.addEventListener('click', () => selectShop(shop.id));
            container.appendChild(btn);
        });
    }

    // ── Render main shop panels ──
    function renderShopPanels() {
        const container = document.getElementById('shop-panels');
        container.innerHTML = '';
        shopsData.forEach(shop => {
            const panel = document.createElement('div');
            panel.className = 'shop-panel' + (shop.id === activeShopId ? ' active' : '');
            panel.id = 'panel-' + shop.id;

            // Path breadcrumb
            const path = document.createElement('p');
            path.className = 'shop-path';
            path.innerHTML = `<span>📍</span> ${shop.path}`;
            panel.appendChild(path);

            // Sub-shop tabs (only if >1)
            if (shop.subShops.length > 1) {
                const subTabs = document.createElement('div');
                subTabs.className = 'sub-shop-tabs';
                shop.subShops.forEach(sub => {
                    const btn = document.createElement('button');
                    btn.className = 'sub-tab' + (sub.id === activeSubIds[shop.id] ? ' active' : '');
                    btn.dataset.subId = sub.id;
                    btn.dataset.shopId = shop.id;
                    btn.innerHTML = `${sub.icon} ${sub.name}`;
                    btn.addEventListener('click', () => selectSubShop(shop.id, sub.id));
                    subTabs.appendChild(btn);
                });
                panel.appendChild(subTabs);
            }

            // Sub-panels
            shop.subShops.forEach(sub => {
                const subPanel = document.createElement('div');
                subPanel.id = `subpanel-${shop.id}-${sub.id}`;
                subPanel.style.display = (sub.id === activeSubIds[shop.id]) ? 'block' : 'none';
                subPanel.appendChild(renderItemsGrid(sub.items));
                panel.appendChild(subPanel);
            });

            container.appendChild(panel);
        });
    }

    // ── Render items grid ──
    function renderItemsGrid(items) {
        const grid = document.createElement('div');
        grid.className = 'items-grid';

        if (!items || items.length === 0) {
            const note = document.createElement('p');
            note.className = 'empty-note';
            note.textContent = '此商店暫無資料';
            grid.appendChild(note);
            return grid;
        }

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'item-card ' + (item.tier === 'must' ? 'must' : 'optional');

            const badge = item.tier === 'must' ? '必買' : '有餘額再買';

            // Image or placeholder
            const imgWrap = document.createElement('div');
            imgWrap.className = 'item-img-wrap';

            if (item.img) {
                const img = document.createElement('img');
                img.src = item.img;
                img.alt = item.name;
                imgWrap.appendChild(img);
            } else {
                const icon = document.createElement('span');
                icon.className = 'item-img-placeholder-icon';
                icon.textContent = iconMap[item.name] || DEFAULT_ICON;
                imgWrap.appendChild(icon);
            }

            const badgeEl = document.createElement('span');
            badgeEl.className = 'item-badge';
            badgeEl.textContent = badge;
            imgWrap.appendChild(badgeEl);

            card.appendChild(imgWrap);

            // Body
            const body = document.createElement('div');
            body.className = 'item-body';
            body.innerHTML = `
        <div class="item-name">${item.name}</div>
        <div class="item-desc">${item.desc}</div>
      `;
            card.appendChild(body);

            grid.appendChild(card);
        });

        return grid;
    }

    // ── Select main shop ──
    function selectShop(shopId) {
        activeShopId = shopId;
        document.querySelectorAll('.shop-tab').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.id === shopId);
        });
        document.querySelectorAll('.shop-panel').forEach(panel => {
            panel.classList.toggle('active', panel.id === 'panel-' + shopId);
        });
    }

    // ── Select sub-shop ──
    function selectSubShop(shopId, subId) {
        activeSubIds[shopId] = subId;
        // Update sub-tabs
        document.querySelectorAll(`.sub-tab[data-shop-id="${shopId}"]`).forEach(btn => {
            btn.classList.toggle('active', btn.dataset.subId === subId);
        });
        // Show/hide sub-panels
        const shop = shopsData.find(s => s.id === shopId);
        shop.subShops.forEach(sub => {
            const el = document.getElementById(`subpanel-${shopId}-${sub.id}`);
            if (el) el.style.display = sub.id === subId ? 'block' : 'none';
        });
    }

    // ── Init ──
    function init() {
        renderShopTabs();
        renderShopPanels();
    }

    document.addEventListener('DOMContentLoaded', init);
})();
