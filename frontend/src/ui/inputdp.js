import React from 'react'
import { 
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
            />
            {
                meta.touched && meta.error &&
                <Text>{meta.error}</Text>
            }
        </View>
    )
}

export default InputDP
