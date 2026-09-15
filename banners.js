const bannerSets = {
    left: [
        { label: 'Bądź na bieżąco', title: 'Facebook', href: 'https://www.facebook.com/', bg: '#91b7d8', accent: '#edf5fb', external: true },
        { label: 'Bądź na bieżąco', title: 'Instagram', href: 'https://www.instagram.com/', bg: '#dfa5c0', accent: '#fff4d6', external: true },
        { label: 'Dołącz do nas', title: 'Współpraca', href: 'Kontakt.html', bg: '#82aebf', accent: '#eaf6fa', external: false }
    ],
    right: [
        { label: 'Pomóż razem z nami', title: 'Patronite', href: 'https://patreon.com/', bg: '#d99595', accent: '#fff0f0', external: true },
        { label: 'Pomagam.pl', title: 'Wesprzyj', href: 'https://pomagam.pl/', bg: '#9fbea6', accent: '#f0faf2', external: true },
        { label: '4fund', title: 'Wpłać', href: 'https://4fund.com/', bg: '#e4b28c', accent: '#fff6eb', external: true }
    ]
};

const sideBannerColumns = {
    left: document.querySelector('.side-banner-column-left'),
    right: document.querySelector('.side-banner-column-right')
};

function createBannerItem(banner) {
    const link = document.createElement('a');
    link.href = banner.href;
    link.className = 'side-banner';
    link.style.setProperty('--banner-bg', banner.bg);
    link.style.setProperty('--banner-accent', banner.accent);
    link.target = banner.external ? '_blank' : '_self';
    link.rel = banner.external ? 'noopener noreferrer' : '';
    link.innerHTML = `
        <span class="banner-kicker">${banner.label}</span>
        <span class="banner-title">${banner.title}</span>
    `;
    return link;
}

function rotateBanner(side) {
    const column = sideBannerColumns[side];
    const items = bannerSets[side];

    if (!column || !items.length) return;

    const currentIndex = Number(column.dataset.index || 0);
    column.innerHTML = '';
    column.appendChild(createBannerItem(items[currentIndex % items.length]));
    column.dataset.index = String((currentIndex + 1) % items.length);
}

rotateBanner('left');
rotateBanner('right');
setInterval(() => rotateBanner('left'), 5000);
setInterval(() => rotateBanner('right'), 5000);
