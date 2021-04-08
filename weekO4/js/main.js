// 햄버거 바 아이콘 선택자
const openMenuEl = document.getElementById("btn--open")
// 닫는 아이콘 선택자
const closeMenuEl = document.getElementById("btn--close")

// 사이드 메뉴 선택자
const navMenuEl = document.getElementById("nav_menu")


openMenuEl.addEventListener("click", function(){
    openMenuEl.style.display = 'none'
    closeMenuEl.style.display = 'block'
    navMenuEl.style.transform = 'translate(0)'
})

closeMenuEl.addEventListener("click", function(){
    closeMenuEl.style.display = 'none'
    openMenuEl.style.display = 'block'
    navMenuEl.style.transform = 'translate(-100%)'
})