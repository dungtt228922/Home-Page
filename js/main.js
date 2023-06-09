let menu_expand_icon = document.querySelector('#menu-expand-icon')
let menu_expand = document.getElementById('hidden-menu-expand')
let header_mb = document.getElementById('nav-mb')
let header_pc = document.getElementById('nav-pc')

window.onscroll = function(e) {
    if (this.scrollY === 0) {
        header_pc.classList.remove('scrolled');
        header_mb.classList.remove('scrolled');
        console.log('At the top of the site');
    } else {
        if (this.oldScroll < this.scrollY) {
            console.log('Scrolled down');
            header_pc.classList.add('scrolled');
            header_mb.classList.add('scrolled');
        } else {
            header_pc.classList.remove('scrolled');
            header_mb.classList.remove('scrolled');
            console.log(this.scrollY);
        }
    }

    this.oldScroll = this.scrollY;
}

  menu_expand_icon.addEventListener('click', function () {
    if (menu_expand.classList.contains('scrolled')) {
        menu_expand.classList.remove('scrolled')
    } else {
        menu_expand.classList.add('scrolled')
    }
})

