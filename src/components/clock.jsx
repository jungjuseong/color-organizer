import React from 'react';

const oneSecond = () => 1000
const getCurrentTime = () => new Date()

const abstractClockTime = date =>
    ({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    })

const civilianHours = clockTime =>
    ({
        ...clockTime,
        hours: (clockTime.hours > 12) ?
        clockTime.hours - 12 :
            clockTime.hours
    })

const appendAMPM = clockTime =>
    ({
        ...clockTime,
        ampm: (clockTime.hours >= 12) ? "pm" : "am"
    })

const prependZero = key => clockTime =>
    ({
        ...clockTime,
        [key]: (clockTime[key] < 10) ?
        "0" + clockTime[key] :
            clockTime[key]
    })

const compose = (...fns) =>
    (arg) =>
        fns.reduce(
            (composed, f) => f(composed),
            arg
        )

const convertToCivilianTime = clockTime =>
    compose(
        appendAMPM,
        civilianHours
    )(clockTime)

const doubleDigits = civilianTime =>
    compose(
        prependZero("hours"),
        prependZero("minutes"),
        prependZero("seconds")
    )(civilianTime)

const getClockTime = compose(
    getCurrentTime,
    abstractClockTime,
    convertToCivilianTime,
    appendAMPM,
    doubleDigits
)

export default class Clock extends React.Component {

    constructor() {
        super()
        this.state = getClockTime()
    }

    componentDidMount() {
        console.log("Starting Clock")
        this.ticking = setInterval(() =>
                this.setState(getClockTime())
            , 1000)
    }

    componentWillUnmount() {
        clearInterval(this.ticking)
        console.log("Stopping Clock")
    }

    render() {
        const { hours, minutes, seconds, ampm } = this.state
        return (
            <div className="clock">
                <span>{hours}</span>
                <span>:</span>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
                <span>{ampm}</span>
                <button onClick={this.props.onClose}>x</button>
            </div>
        )
    }

}