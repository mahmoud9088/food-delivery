console.log('done')
var theme = document.getElementById('theme-toggle')
var hamburgerMenu = document.getElementById('hamburger-menu')
var header = document.getElementById('header')
var headerItems = document.querySelectorAll('.header-item')

theme.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme')
  theme.innerText === '🌞' ? (theme.innerText = '🌚') : (theme.innerText = '🌞')
})

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('opened')
  hamburgerMenu.setAttribute(
    'aria-expanded',
    hamburgerMenu.classList.contains('opened')
  )
  document.getElementById('header-list').style.display === 'block'
    ? (document.getElementById('header-list').style.display = 'none')
    : (document.getElementById('header-list').style.display = 'block')
})

const removeActiveSection = () => {
  headerItems[0].classList.remove('active-section')
  headerItems[1].classList.remove('active-section')
  headerItems[2].classList.remove('active-section')
  headerItems[3].classList.remove('active-section')
}
const activeSection = (active) => {
  removeActiveSection()
  headerItems[active].classList.add('active-section')
}

document.addEventListener('scroll', () => {
  let scroll = window.scrollY
  if (scroll > 80) {
    header.style.boxShadow = 'rgba(0, 0, 0, 0.1) 0px 1px 4px 0px'
  } else {
    header.style.boxShadow = 'none'
  }

  if ((scroll > 0) & (scroll < 473)) {
    activeSection(0)
  } else if ((scroll >= 473) & (scroll < 1270)) {
    activeSection(1)
  } else if ((scroll >= 1270) & (scroll < 2302)) {
    activeSection(2)
  } else if ((scroll >= 2303) & (scroll < 2640)) {
    activeSection(3)
  }

  console.log(scroll)
})

console.log()
