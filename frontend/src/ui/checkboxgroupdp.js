import React from 'react'
import { Field } from 'redux-form'
import { 
    View, 
    CheckBox, 
    Text 
} from 'react-native'

function CheckBoxDP(props) {
    const { input, ...inputProps } = props

    return (
        <View>
            <CheckBox
                {...inputProps}
                onValueChange={input.onChange}
                value={input.value ? true : false}
            />
            <Text>{props.text}</Text>
        </View>
    )
}

function CheckBoxGroupDP(props) {
    return (
        <View>
            {
                props.options.map((item) => {
                    return (
                        <Field 
                            key={item.id}
                            name={`${props.groupName}_${item.id}`}
                            component={CheckBoxDP}
                            text={item.value}
                        />
                    )
                })
            }
        </View>
    )
}

export default CheckBoxGroupDP
