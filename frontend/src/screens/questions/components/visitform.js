import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
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
            <LabelDP label='Código vendedor'/>
            <Field 
                name={'employee_code'}
                component={InputDP}
            />
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
                                    name={`q_${item.id}`}
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
                            {
                                item.type == 3 &&
                                <Field 
                                    name={`q_${item.id}`}
                                    component={InputDP}
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

//form validation
const validate = values => {
    const errors = {}

    if(!values.employee_code) {
        errors.employee_code = 'Required'
    }

    if(!values.name) {
        errors.name = 'Required'
    }

    if(!values.surname) {
        errors.surname = 'Required'
    }

    if(!values.legal_id) {
        errors.legal_id = 'Required'
    } else if (values.legal_id.length < 10) {
        errors.legal_id = 'Must be 10 characters or more'
    }

    if(!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    return errors
}

VisitForm = reduxForm({
    form: 'visitForm',
    validate,
})(VisitForm)

VisitForm = connect(
    state => ({
        initialValues: {
            'branch_id': state.branches.selectedItem,
        }
    })
)(VisitForm)

export default VisitForm
