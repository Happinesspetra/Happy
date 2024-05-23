const hamburgerButton = document.getElementById('hamburger')
const navList = documnet.getElementById('nav-List')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton) 