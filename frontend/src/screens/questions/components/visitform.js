import React from 'react'
import { reduxForm, Field } from 'redux-form'
import LabelDP from '../../../ui/labeldp'
import InputDP from '../../../ui/inputdp'
import PickerDP from '../../../ui/pickerdp'
import CheckBoxGroupDP from '../../../ui/checkboxgroupdp'
import ButtonDP from '../../../ui/buttondp'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

function VisitForm(props) {
    return (
        <View>
            <LabelDP label='Nombre'/>
            <Field 
                name={'name'}
                component={InputDP}
            />
            <LabelDP label='Apellido'/>
            <Field 
                name={'surname'}
                component={InputDP}
            />
            <LabelDP label='Cédula'/>
            <Field 
                name={'legal_id'}
                component={InputDP}
            />
            <LabelDP label='Email'/>
            <Field 
                name={'email'}
                component={InputDP}
            />
            {
                props.questions.map((item) => {
                    return (
                        <View key={item.id}>
                            <LabelDP label={item.question}/>
                            {
                                item.type == 1 &&
                                <Field 
                                    name={`q${item.id}`}
                                    component={PickerDP}
                                    options={item.options}
                                />
                            }
                            {
                                item.type == 2 &&
                                <CheckBoxGroupDP 
                                    groupName={`q_${item.id}`}
                                    options={item.options}
                                />
                            }
                        </View>
                    )
                })
            }
            <ButtonDP 
                onPress={props.handleSubmit}
                title='ENVIAR'
            />
        </View>
    )
}

export default reduxForm({ form: 'visitForm' })(VisitForm);
