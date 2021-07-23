import React from 'react'

const Button = (props) => {
    const divStyle = {
        backgroundColor: props.bgColor,
        color: props.color,
        borderRadius: props.radius,
        padding: '0.5rem',
        cursor: props.cursor,
    }
    return (
        <button style={divStyle} onClick={props.onClickFunction} disabled={props.disabled}>{props.text}</button>
    )
}

export default Button
