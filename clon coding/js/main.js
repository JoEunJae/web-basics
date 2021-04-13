// 슬라이드 이미지 선택자
const sliderImages = document.querySelectorAll('.slide')
// 왼쪽 화살표 선택자
const arrowLeft = document.querySelector('.arrow--left')
// 오른쪽 화살표 선택자
const arrowRight = document.querySelector('.arrow--right')
// 현재 보여지는 슬라이드 번호
let current = 0;

// 슬라이드 이미지 리셋
const reset = () => {
    sliderImages.forEach((el)) => el.style.display ='none'
    // bar
}

// 자동 슬라이드 기능을 위한 함수
const autoSlide = () => {
    reset()
    // 마지막 슬라이드 이미지일 때,
    if (current === sliderImages.length - 1) {
        current = -1
    }
    
    // 마지막 슬라이드 이미지가 아닐 때,
    // current 값에 1을 더함
    current++
    // 슬라이드 이미지 배열에서 index값이 current인 이미지를 보이는 상태로 설정
    sliderImages[current].style.display = 'block'
    // bar
}