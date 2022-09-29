export default class MenuBurger {


    start() {
        this.closeMenu();
        $('#close-nav').click(this.closeMenu);
        $('#menu-burger-icon').click(this.openMenu);
    }

    closeMenu() {
        $('#navbar-responsive').hide();
        $('#overlay-menu').hide();
    }

    openMenu() {
        $('#navbar-responsive').show();
        $('#overlay-menu').show();
    }

}
