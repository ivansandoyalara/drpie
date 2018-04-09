import React from 'react'
import { Button } from 'react-native'

function ButtonDP(props) {
    return (
        <Button 
            onPress={props.onPress}
            title={props.title}
            color='#fa0f0c'
        />
    )
}

export default ButtonDP
