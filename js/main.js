let menu_expand_icon = document.querySelector('#menu_expand_icon')
let menu_expand = document.getElementById('hidden_menu_expand')
let header_mb = document.getElementById('nav_mb')

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
        if (menu_expand.style.display !== 'none') {
            menu_expand.style.display = 'none'
        }
    } else {
        header_mb.style.display = 'flex'
    }
    this.oldScroll = this.scrollY
  }
