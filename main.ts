function pickShape () {
    MyHand = randint(1, 3)
    if (MyHand == RockIndex) {
        Rockimage.showImage(0)
    }
    if (MyHand == paperindex) {
        PaperImage.showImage(0)
    }
    if (MyHand == ScissorsIndex) {
        ScissorsImage.showImage(0)
    }
}
input.onGesture(Gesture.Shake, function () {
    pickShape()
})
let MyHand = 0
let ScissorsImage: Image = null
let PaperImage: Image = null
let Rockimage: Image = null
let ScissorsIndex = 0
let paperindex = 0
let RockIndex = 0
RockIndex = 1
paperindex = 2
ScissorsIndex = 3
Rockimage = images.createImage(`
    . . . . .
    . # # # .
    # # # # #
    # # # # #
    . . . . .
    `)
PaperImage = images.createImage(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
ScissorsImage = images.createImage(`
    # # . . #
    # # . # .
    # . # . .
    # # . # .
    # # . . #
    `)
