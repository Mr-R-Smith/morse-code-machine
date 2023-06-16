input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    list.push(1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
    for (let index = 0; index < 2; index++) {
        if (list.length == 1) {
        	
        } else if (list.length == 3) {
            if (list[0] == 1 && (list[1] == 1 && list[2] == 0)) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
                music.playTone(262, music.beat(BeatFraction.Half))
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
                music.playTone(262, music.beat(BeatFraction.Half))
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
                music.playTone(262, music.beat(BeatFraction.Eighth))
                basic.showString("g")
            } else if (list[0] == 1 && (list[1] == 0 && list[2] == 1)) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
                music.playTone(262, music.beat(BeatFraction.Half))
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
                music.playTone(262, music.beat(BeatFraction.Eighth))
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
                music.playTone(262, music.beat(BeatFraction.Half))
                basic.showString("h")
            } else {
            	
            }
        } else {
        	
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    list = []
    basic.showIcon(IconNames.Ghost)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playTone(262, music.beat(BeatFraction.Eighth))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    list.push(0)
})
let list: number[] = []
list = []
