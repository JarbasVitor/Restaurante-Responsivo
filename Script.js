const alternarBotao = document.getElementsByClassName('BotaoAlternar')[0]
const navBarLinks = document.getElementsByClassName('NavBar-Links')[0]

alternarBotao.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})