(() => {
  const mobileBtn = document.querySelector('.mobile-btn-menu');
  const navigation = document.querySelector('.navigation');
  const mobileNavContainer = document.querySelector('.mobile-nav-container');
  const mobileMenuItems = document.querySelector('.mobile-menu-hidden');

  mobileBtn.addEventListener('click', () => {
    navigation.classList.toggle('mobile-menu-open');

    if (mobileNavContainer.style.display === 'flex') {
      mobileNavContainer.style.display = 'none';
      mobileMenuItems.style.display = 'none'
      document.body.style.overflow = 'auto';
    } else {
      mobileNavContainer.style.display = 'flex';
      mobileMenuItems.style.display = 'block'
      document.body.style.overflow = 'hidden';
    }
  });
})();
