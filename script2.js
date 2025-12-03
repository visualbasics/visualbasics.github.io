document.addEventListener('DOMContentLoaded', () => {
    const tabTitleInput = document.getElementById('tabTitle');
    const faviconUrlInput = document.getElementById('faviconUrl');
    const applyChangesButton = document.getElementById('applyChanges');
    const faviconLink = document.getElementById('favicon');

    // Load saved settings on page load
    const savedTitle = localStorage.getItem('customTabTitle');
    const savedFavicon = localStorage.getItem('customFaviconUrl');

    if (savedTitle) {
        document.title = savedTitle;
        tabTitleInput.value = savedTitle;
    }
    if (savedFavicon) {
        faviconLink.href = savedFavicon;
        faviconUrlInput.value = savedFavicon;
    }

    applyChangesButton.addEventListener('click', () => {
        const newTitle = tabTitleInput.value;
        const newFaviconUrl = faviconUrlInput.value;

        // Update tab title
        document.title = newTitle;
        localStorage.setItem('customTabTitle', newTitle);

        // Update favicon
        if (newFaviconUrl) {
            faviconLink.href = newFaviconUrl;
            localStorage.setItem('customFaviconUrl', newFaviconUrl);
        } else {
            // Revert to default or remove if empty
            faviconLink.href = 'default_favicon.ico'; // Or set to an empty string to remove
            localStorage.removeItem('customFaviconUrl');
        }
    });
});
