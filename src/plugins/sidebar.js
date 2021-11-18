const sidebar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('#btn')
const searchBtn = document.querySelector('.bx-search')

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open')
    menuBtnChange()
  })
}

console.log(closeBtn)

if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open')
    menuBtnChange()
  })
}

function menuBtnChange() {
  if (sidebar.classList.contains('open')) {
    closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right')
  } else {
    closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu')
  }
}
