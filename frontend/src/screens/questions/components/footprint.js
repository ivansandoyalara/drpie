import React from 'react'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import { Field } from 'redux-form'
import appStyles from '../../../styles/styles'
import {
    StyleSheet,
    Image,
    Text,
} from 'react-native'

function FootPrint(props) {
    const { input, ...inputProps } = props


    return (
        <RadioGroup
            {...inputProps}
            onSelect={input.onChange}
            onBlur={input.onBlur}
            onFocus={input.onFocus}
            style={styles.row}
        >
            <RadioButton value={0} style={styles.fl1}>
                <Image
                    style={{width:150, height: 150}}
                    source={require('../../../styles/images/cavo.png')}
                />
                <Text>PIE CAVO</Text>
            </RadioButton>

            <RadioButton value={1} style={styles.fl1}>
                <Image
                    style={{width:150, height: 150}}
                    source={require('../../../styles/images/medio.png')}
                />
                <Text>PIE MEDIO</Text>
            </RadioButton>

            <RadioButton value={2} style={styles.fl1}>
                <Image
                    style={{width:150, height: 150}}
                    source={require('../../../styles/images/plano.png')}
                />
                <Text>PIE PLANO</Text>
            </RadioButton>
        </RadioGroup>
    )
}

const styles = StyleSheet.create(appStyles)

export default FootPrint
