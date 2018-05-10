import React from 'react'
//import appStyles from '../../../styles/styles'
import appStyles from '../styles/styles'
import { 
    StyleSheet,
    TextInput,
    View,
    Text,
} from 'react-native'

function InputDP(props) {
    const { input, meta, ...inputProps } = props

    return (
        <View>
            <TextInput
                {...inputProps}
                onChangeText={input.onChange}
                onBlur={input.onBlur}
                onFocus={input.onFocus}
                value={input.value}
                placeholder={props.placeholder}
                returnKeyType='next'
                keyboardType={props.keyboardType}
                autoCapitalize={props.autoCapitalize}
            />
            {
                meta.touched && meta.error &&
                <Text style={styles.errorText}>{meta.error}</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create(appStyles)

export default InputDP
