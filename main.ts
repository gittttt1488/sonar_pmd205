let sona = 0
basic.forever(function () {
    sona = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.Centimeters
    )
    basic.showNumber(sona)
    basic.pause(500)
    basic.showIcon(IconNames.Yes)
})
