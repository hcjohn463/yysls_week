// 風沙酒肆 - 頁面邏輯

(function () {
    'use strict';

    // ── Quick-nav grouping ──
    const quickNavGroups = [
        {
            group: '門派',
            members: [
                { name: '梨園', list: 'qa' },
                { name: '青溪', list: 'qa' },
                { name: '孤雲', list: 'qa' },
                { name: '九流門', list: 'qa' },
                { name: '三更天', list: 'qa' },
                { name: '天泉', list: 'qa' },
                { name: '狂瀾', list: 'qa' },
            ]
        },
        {
            group: '其他',
            members: [
                { name: '店小二', list: 'bag' },
                { name: '侍女', list: 'bag' },
                { name: '貴家小姐', list: 'bag' },
                { name: '行商', list: 'bag' },
                { name: '工匠', list: 'bag' },
                { name: '僧人', list: 'bag' },
                { name: '帳房先生', list: 'qa' },
                { name: '鑑寶商人', list: 'qa' },
            ]
        },
    ];

    let activeList = 'bag';

    // ── ID helper ──
    function visitorId(name) {
        return 'visitor-' + name;
    }

    // ── Main render ──
    function renderJianmen() {
        const root = document.getElementById('jianmen-content');
        if (!root) return;
        root.innerHTML = '';

        // 1. Quick nav
        root.appendChild(renderQuickNav());

        // 2. Sub-tabs
        const subBar = document.createElement('div');
        subBar.className = 'jm-subtabs';
        ['bag', 'qa'].forEach(id => {
            const btn = document.createElement('button');
            btn.className = 'jm-subtab' + (id === activeList ? ' active' : '');
            btn.dataset.list = id;
            btn.textContent = id === 'bag' ? '📦 背包物品判斷' : '💬 問話判斷';
            btn.addEventListener('click', () => { activeList = id; renderJianmen(); });
            subBar.appendChild(btn);
        });
        root.appendChild(subBar);

        // 3. Content
        if (activeList === 'bag') renderBagList(root);
        else renderQAList(root);
    }

    // ── Quick-nav render ──
    function renderQuickNav() {
        const nav = document.createElement('div');
        nav.className = 'jm-quicknav';

        quickNavGroups.forEach(group => {
            const row = document.createElement('div');
            row.className = 'jm-qn-row';

            const label = document.createElement('span');
            label.className = 'jm-qn-label';
            label.textContent = group.group;
            row.appendChild(label);

            const chips = document.createElement('div');
            chips.className = 'jm-qn-chips';

            group.members.forEach(m => {
                const chip = document.createElement('button');
                chip.className = 'jm-qn-chip';
                chip.textContent = m.name;
                chip.addEventListener('click', () => scrollToVisitor(m.name, m.list));
                chips.appendChild(chip);
            });

            row.appendChild(chips);
            nav.appendChild(row);
        });

        return nav;
    }

    // ── Scroll to a visitor card ──
    function scrollToVisitor(name, list) {
        // Remove any existing highlight first
        document.querySelectorAll('.card-highlight').forEach(el => el.classList.remove('card-highlight'));

        // Switch sub-tab if needed
        if (activeList !== list) {
            activeList = list;
            renderJianmen();
        }
        // Scroll + highlight after render
        requestAnimationFrame(() => {
            const el = document.getElementById(visitorId(name));
            if (el) {
                el.scrollIntoView({ behavior: 'auto', block: 'center' });
                el.classList.add('card-highlight');
            }
        });
    }

    // ── 清單一：背包物品 ──
    function renderBagList(root) {
        const hint = document.createElement('p');
        hint.className = 'jm-hint';
        hint.textContent = '來訪者背包「有且僅有」以下物品時開門';
        root.appendChild(hint);

        const grid = document.createElement('div');
        grid.className = 'jm-bag-grid';

        jianmenBagData.forEach(v => {
            const card = document.createElement('div');
            card.className = 'jm-bag-card';
            card.id = visitorId(v.visitor);

            card.innerHTML = `
        <div class="jm-open-banner">✅ 開門</div>
        <div class="jm-visitor-head">
          <span class="jm-visitor-icon">${v.icon}</span>
          <span class="jm-visitor-name">${v.visitor}</span>
        </div>
        <div class="jm-items-wrap">
          ${v.items.map(item => `<span class="jm-item-tag">${item}</span>`).join('')}
        </div>
      `;
            grid.appendChild(card);
        });
        root.appendChild(grid);
    }

    // ── 清單二：問話判斷 ──
    function renderQAList(root) {
        const hint = document.createElement('p');
        hint.className = 'jm-hint';
        hint.textContent = '根據來訪者的回答內容判斷是否開門';
        root.appendChild(hint);

        const list = document.createElement('div');
        list.className = 'jm-qa-list';

        jianmenQAData.forEach(v => {
            const card = document.createElement('div');
            card.className = 'jm-qa-card';
            card.id = visitorId(v.visitor);

            card.innerHTML = `
        <div class="jm-qa-header">
          <span class="jm-visitor-icon">${v.icon}</span>
          <span class="jm-visitor-name">${v.visitor}</span>
          <span class="jm-question">「${v.question}」</span>
        </div>
        <div class="jm-qa-answers">
          <div class="jm-ans open">
            <span class="jm-ans-label">✅ 開門</span>
            <span class="jm-ans-text">${v.open.answer}</span>
          </div>
          <div class="jm-ans closed">
            <span class="jm-ans-label">❌ 不開門</span>
            <span class="jm-ans-text">${v.closed.answer}</span>
          </div>
        </div>
      `;
            list.appendChild(card);
        });
        root.appendChild(list);
    }

    document.addEventListener('DOMContentLoaded', renderJianmen);
})();
