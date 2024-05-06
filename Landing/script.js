function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const isOpen = navMenu.classList.contains('open');
    const body = document.querySelector('body');

    if (isOpen) {
        navMenu.style.top = '-100%';
        navMenu.classList.remove('open');
        bodyScrollLockUpgrade.enableBodyScroll(body);
    } else {
        navMenu.style.top = '0%';
        navMenu.classList.add('open');
        bodyScrollLockUpgrade.disableBodyScroll(body);
    }
}