import React from 'react'
import { reduxForm, Field } from 'redux-form'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

function VisitForm(props) {
    return (
        <View>
            <Text>VisitForm!</Text>
        </View>
    )
}

export default reduxForm({ form: 'visitForm' })(VisitForm);
