const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const cube = document.querySelector('.cube')
const slidesCount = mainSlide.querySelectorAll('div').length
const height = container.clientHeight

let activeSlideIndex = slidesCount

window.addEventListener('load', () => {
	speed(1)
	setTimeout(changeSlide, 100, 'down')
	setTimeout(changeSlide, 1800, 'up')
	setTimeout(() => {
		mainSlide.style.opacity = '1'
		sidebar.style.opacity = '1'
		upBtn.style.opacity = '1'
		downBtn.style.opacity = '1'
		cube.style.margin = '44.5vh 25% 75% 66%'
	}, 3000)
	mainSlide.style.transform = `translateY(-${(slidesCount-1) * height}px)`
});

upBtn.addEventListener('click', () => {
	speed(0.5)
	changeSlide('up')
})

downBtn.addEventListener('click', () => {
	speed(0.5)
	changeSlide('down')
})

document.addEventListener('keydown', event => {
		if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
			changeSlide("up")
		}
		if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
			changeSlide("down")
		}
})

function speed(number) {
	mainSlide.style.transition = `transform ${number}s ease-in-out`
	sidebar.style.transition = `transform ${number}s ease-in-out`
}

function changeSlide(direction) {
	if (direction === 'up') {
		activeSlideIndex--
		if (activeSlideIndex == 0) {
			activeSlideIndex = slidesCount
		}
	} else if (direction === 'down') {
		activeSlideIndex++
		if (activeSlideIndex >= slidesCount+1) {
			activeSlideIndex = 1
		}
	}
	console.log(activeSlideIndex)
	const height = container.clientHeight
	mainSlide.style.transform = `translateY(-${(activeSlideIndex-1) * height}px)`
	sidebar.style.transform = `translateY(-${(((slidesCount-1) - (activeSlideIndex-1))) * height}px)`
}
