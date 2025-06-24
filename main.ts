let sona = 0
basic.forever(function () {
    sona = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Inches
    )
    basic.showNumber(sona)
})
