let menu_expand_icon = document.querySelector('#menu-expand-icon')
let menu_expand = document.getElementById('hidden-menu-expand')
let header_mb = document.getElementById('nav-mb')
let header_pc = document.getElementById('nav-pc')

menu_expand_icon.addEventListener('click', () => {
    if (menu_expand.style.display !== 'none') {
        menu_expand.style.display = 'none'
    } else {
        menu_expand.style.display = 'flex'
    }
})

window.onscroll = function(e) {
    if (this.oldScroll < this.scrollY) {
        header_mb.style.display = 'none'
        header_pc.style.display = 'none'
        header_pc.classList.remove ('scrolled')
        if (menu_expand.style.display !== 'none') {
            menu_expand.style.display = 'none'
        }
    } else {
        console.log('Lmao')
        header_mb.style.display = 'flex'
        header_pc.style.display = 'flex'
        header_pc.classList.add ('scrolled')
    }
    this.oldScroll = this.scrollY
  }
