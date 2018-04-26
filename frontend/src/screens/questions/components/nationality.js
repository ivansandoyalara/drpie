import React from 'react'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import { Field } from 'redux-form'
import appStyles from '../../../styles/styles'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

function Nationality (props) {
    const { input, meta, ...inputProps } = props

    return (
        <View>
            <RadioGroup
                {...inputProps}
                onSelect={input.onChange}
                onBlur={input.onBlur}
                onFocus={input.onFocus}
                style={styles.row}
            >
                <RadioButton value={1} style={styles.fl1}>
                    <Text style={styles.radioText}>Ecuatoriano(a)</Text>
                </RadioButton>

                <RadioButton value={2} style={styles.fl1}>
                    <Text style={styles.radioText}>Extranjero(a)</Text>
                </RadioButton>
            </RadioGroup>
            {
                meta.touched && meta.error &&
                <Text style={styles.errorText}>{meta.error}</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create(appStyles)

export default Nationality
