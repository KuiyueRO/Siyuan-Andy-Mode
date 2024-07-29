document.querySelectorAll('li[data-type="tab-header"]').forEach(tab => {
    if (tab && tab.getAttribute('data-type') === 'tab-header') {
        console.log('Clicking tab with data-id:', tab.getAttribute('data-id'));
        tab.click();
    }
});

document.querySelectorAll('li[data-type="tab-header"]').forEach(tab => {
    // 用户点击标签页时平滑滚动到对应的内容区域，不支持右边的标签页菜单
    tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-id');
        const content = document.querySelector(`.layout__center .fn__flex-1.protyle[data-id="${tabId}"], .layout__center .fn__flex-1.protyle.fn__none[data-id="${tabId}"]`);
        if (content) {
            content.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        }
    });
});
