import React from 'react'
import appStyles from '../styles/styles'
import { 
    StyleSheet, 
    Text 
} from 'react-native'

function LabelDP(props) {
    return (
        <Text
            style={styles.label}
        >{props.label}</Text>
    )
}

const styles = StyleSheet.create(appStyles)

export default LabelDP
