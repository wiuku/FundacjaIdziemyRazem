const navigationLinks = Array.from(document.querySelectorAll('.topnav a'));
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const contactSections = Array.from(document.querySelectorAll('.contact-section[id]'));

function getPageName(link) {
    return new URL(link.href, window.location.href).pathname.split('/').pop() || 'index.html';
}

function setActiveLink(link) {
    navigationLinks.forEach((navigationLink) => navigationLink.classList.remove('active'));
    if (link) link.classList.add('active');
}

function updatePageActiveLink() {
    const matchingLink = navigationLinks.find((link) => {
        const href = link.getAttribute('href') || '';
        return !href.includes('#') && getPageName(link) === currentPage;
    });

    setActiveLink(matchingLink || navigationLinks.find((link) => getPageName(link) === 'index.html'));
}

function updateContactActiveLink() {
    if (currentPage !== 'Kontakt.html' || !contactSections.length) return;

    let currentSection = contactSections[0];
    const sectionOffset = 180;

    contactSections.forEach((section) => {
        if (section.getBoundingClientRect().top <= sectionOffset) {
            currentSection = section;
        }
    });

    const activeLink = navigationLinks.find((link) => link.hash === `#${currentSection.id}`);
    setActiveLink(activeLink);
}

navigationLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (currentPage === 'Kontakt.html' && link.hash) {
            setActiveLink(link);
        } else {
            setActiveLink(link);
        }
    });
});

if (currentPage === 'Kontakt.html') {
    updateContactActiveLink();
    window.addEventListener('scroll', updateContactActiveLink, { passive: true });
} else {
    updatePageActiveLink();
}
