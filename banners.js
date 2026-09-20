const bannerSets = {
    left: [
        { label: 'Dołącz do naszej społeczności', title: 'Facebook', logo: 'IMG/LG/LG_fb.png', qr: 'IMG/QRFB.png', href: 'https://www.facebook.com/profile.php?id=61572712465973', bg: '#91b7d8', accent: '#edf5fb', external: true },
        { label: 'Obejrzyj nasze historie', title: 'Instagram', logo: 'IMG/LG/LG_ig.png', qr: 'IMG/QRIG.png', href: 'https://www.instagram.com/idziemyrazem2026/', bg: '#dfa5c0', accent: '#fff4d6', external: true }
    ],
    right: [
        { label: 'Zostań naszym Patronem', title: 'Patronite', logo: 'IMG/LG/LG_patronite.png', qr: 'IMG/QRPatronite.png', href: 'https://patronite.pl/', bg: '#d99595', accent: '#fff0f0', external: true },
        { label: 'Podziel się dobrem', title: 'Pomagam.pl', logo: 'IMG/LG/LG_pomagam.png', qr: 'IMG/QRPomagam.png', href: 'https://pomagam.pl/', bg: '#9fbea6', accent: '#f0faf2', external: true }
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
        ${banner.logo ? `<img class="banner-logo" src="${banner.logo}" alt="Logo ${banner.title}">` : ''}
        <span class="banner-kicker">${banner.label}</span>
        <span class="banner-title">${banner.title}</span>
        ${banner.qr ? `<img class="banner-qr" src="${banner.qr}" alt="Kod QR: ${banner.title}">` : ''}
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
