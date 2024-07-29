document.querySelectorAll('li[data-type="tab-header"]').forEach(tab => {
    if (tab && tab.getAttribute('data-type') === 'tab-header') {
        console.log('Clicking tab with data-id:', tab.getAttribute('data-id'));
        tab.click();
    }
});
