let sona = 0
basic.forever(function () {
    sona = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.MicroSeconds
    )
    basic.showNumber(sona)
})
