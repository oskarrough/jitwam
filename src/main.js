const {easing, tween, styler} = window.popmotion
const {spring, listen, pointer, value} = window.popmotion

const el = document.querySelector('.Spinner')
const divStyler = styler(el)
const ballXY = value({x: 0, y: 0}, divStyler.set)

// Rotate it 10 times
// const t = tween({
//   from: 0,
//   to: {rotate: 180},
//   duration: 80000,
//   ease: easing.backOut,
//   flip: Infinity,
//   // elapsed: 500,
//   loop: 10
//   // yoyo: 5
// })
// t.start(divStyler.set)

// Drag and drop effect.
listen(el, 'mousedown touchstart').start(e => {
  e.preventDefault()
  pointer(ballXY.get()).start(ballXY)
})
listen(document, 'mouseup touchend').start(() => {
  spring({
    from: ballXY.get(),
    velocity: ballXY.getVelocity(),
    to: {x: 0, y: 0},
    stiffness: 200
    // mass: 1,
    // damping: 10
  }).start(ballXY)
})

// Create a flickity gallery from each .Gallery element.
var galleries = document.querySelectorAll('.Gallery')
galleries.forEach(
  el =>
    new Flickity(el, {
      imagesLoaded: true,
      lazyLoad: 2 // loads next and previous X slides
    })
)

;(function(doc, win) {
  var screenWidth = win.screen.width / 2
  var screenHeight = win.screen.height / 2
  var el = doc.querySelector('.TitleImage')

  doc.addEventListener('mousemove', function(e) {
    var centroX = e.clientX - screenWidth
    var centroY = screenHeight - e.clientY
    var degX = centroX * 0.01
    var degY = centroY * 0.02
    // Set rotation
    el.style['transform'] =
      'scale(1.2) perspective(2000px)' + 'rotateY(' + degX + 'deg)  rotateX(' + degY + 'deg)'
  })
})(document, window)

function ImageFlip(el) {
	function handleClick() {
		el.classList.toggle('is-flipped')
	}
	el.addEventListener('click', handleClick)
}

const flip = new ImageFlip(document.querySelector('.ImageFlip'))
