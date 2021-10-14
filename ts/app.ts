// export {}

'use strict'

const videos   = document.querySelectorAll<HTMLVideoElement>('.slider__video2')
const products = document.querySelectorAll<HTMLElement>('.slider__product')

const slider__video = (document.querySelector('.slider__video') as HTMLVideoElement)
const slider__left  = (document.querySelector('.slider__left')  as HTMLDivElement)

products.forEach( ( e , i ) : void => {
    products[i].addEventListener('mouseenter',() : void =>{
        videos[i].play()
        videos[i].currentTime = 1
        console.log( videos[i].duration )
    })
    products[i].addEventListener('mouseleave',() : void =>{
        videos[i].pause()
        videos[i].currentTime = 1
        
    })
})


slider__left.addEventListener('mouseenter',()=>{
    slider__video.play()
})
slider__left.addEventListener('mouseleave',()=>{
    slider__video.pause()
})