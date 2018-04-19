import React from 'react'
import { Button } from 'react-native'

function ButtonDP(props) {
    const buttonColor = props.buttonColor
    let color = '#fa0f0c'
    if(buttonColor === 'blue')
        color = '#3057b7'
    if(buttonColor === 'green')
        color = '#27ae60'
    if(buttonColor === 'black')
        color = '#000000'

    return (
        <Button 
            onPress={props.onPress}
            title={props.title}
            color={color}
        />
    )
}

export default ButtonDP
