import React from 'react'
import { Field } from 'redux-form'
import appStyles from '../styles/styles'
import { 
    View, 
    CheckBox, 
    Text,
    StyleSheet,
} from 'react-native'

function CheckBoxDP(props) {
    const { input, ...inputProps } = props

    return (
        <View style={styles.row}>
            <CheckBox
                {...inputProps}
                onValueChange={input.onChange}
                value={input.value ? true : false}
                style={[styles.fl1, styles.checkbox]}
            />
            <Text style={[styles.fl4, styles.checkboxText]}>{props.text}</Text>
        </View>
    )
}

function CheckBoxGroupDP(props) {
    return (
        <View style={styles.row}>
            {
                props.options.map((item) => {
                    return (
                        <View style={styles.fl1} key={item.id}>
                            <Field 
                                name={`${props.groupName}_${item.id}`}
                                component={CheckBoxDP}
                                text={item.value}
                            />
                        </View>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create(appStyles)

export default CheckBoxGroupDP
