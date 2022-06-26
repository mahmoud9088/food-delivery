console.log('done')
var theme = document.getElementById('theme-toggle')

theme.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme')
  theme.innerText === '🌞' ? (theme.innerText = '🌚') : (theme.innerText = '🌞')
})
