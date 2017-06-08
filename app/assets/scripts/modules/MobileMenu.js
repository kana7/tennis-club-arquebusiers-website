class MobileMenu {
  constructor() {
    this.siteHeader = $('.content-wrapper');
    this.menuIcon = $('.site-header__menu-icon');
    this.mobileSideBar = $('.mobile-nav');
    this.mobileMenu = this.mobileSideBar.find('ul.mobile-nav__list');
    this.menuItems = this.mobileMenu.find('li.mobile-nav__list__item');
    this.menuLinks = this.mobileSideBar.find('ul.menu-links');
    this.backButtons = this.menuLinks.find('.back');
    this.currentSubMenu = null;
    this.events();
  }
  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
    this.menuItems.on('click', this.showSubMenu.bind(this));
    this.backButtons.on('click', this.hideSubMenu.bind(this));
  }
  toggleTheMenu() {
    this.siteHeader.toggleClass("content-wrapper--open-mobile-menu");
    this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    this.hideSubMenu.call(this);
  }
  showSubMenu(event) {
    var element = $(event.target);
    if (element.attr('data-id')) {
      this.currentSubMenu = this.getSubMenu(element.attr('data-id'));
      this.currentSubMenu.closest('.menu-links-wrapper').addClass('is-open');
    }
  }
  hideSubMenu() {
    if (this.currentSubMenu) {
      this.currentSubMenu.closest('.menu-links-wrapper').removeClass('is-open');
      this.currentSubMenu = null;
    }
  }
  getSubMenu(id) {
    var temp;
    this.menuLinks.each(function() {
      if ($(this).attr('id') === id) {
        temp = $(this);
        return false;
      }
    });
    return temp;
  };
}

export default MobileMenu;
