// 헤더 선택자
const headerEl =document.getElementById("header")
// 로고 이미지 선택자
const logoEl =document.getElementById("logo")

const dynamic = () => {
    if (window.scrollY >= 300) {
        headerEl.style.height = '300px'
        logoEl.style.height = '120px'
        logoEl.style.width = '120px'
    } else {
        headerEl.style.height = '400px'
        logoEl.style.height = '300px'
        logoEl.style.width = '300px'

    }

    
}

window.addEventListener("scroll", dynamic)
    // if (window.scrollY >= 300) {
    //     headerEl.style.height = '300px'
    //     logoEl.style.height = '120px'
    //     logoEl.style.width = '120px'
    // } else {
    //     headerEl.style.height = '400px'
    //     logoEl.style.height = '300px'
    //     logoEl.style.width = '300px'

    // }
    