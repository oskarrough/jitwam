console.log("Here");

const {easing, tween, styler} = window.popmotion
const {spring, listen, pointer, value} = window.popmotion
const el = document.querySelector('.Spinner')
const divStyler = styler(el)
const ballXY = value({x: 0, y: 0}, divStyler.set)
const t = tween({
  from: 0,
  to: {rotate: 180},
  duration: 80000,
  ease: easing.backOut,
  flip: Infinity,
  // elapsed: 500,
  loop: 5,
  // yoyo: 5
})
t.start(divStyler.set)
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