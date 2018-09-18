import React from 'react'

class LightingCounter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            strikes: 0
        };
        this.timerTick = this.timerTick.bind(this);
    }

    timerTick() {
        this.setState((prevState) => {
            return {strikes: prevState.strikes + 1};
        })
    }

    componentDidMount() {
        setInterval(this.timerTick, 1000);
    }

    render() {
        return (
            <h1>{ this.state.strikes}</h1>
        );
    }
}

export default LightingCounter;