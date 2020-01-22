import React, { Component } from 'react'

export default class Display extends Component {
    render() {
        console.log(this.props.data)
        return (
            <div>
                Display
            </div>
        )
    }
}
