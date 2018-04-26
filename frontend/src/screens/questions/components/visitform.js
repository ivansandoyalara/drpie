import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import LabelDP from '../../../ui/labeldp'
import InputDP from '../../../ui/inputdp'
import PickerDP from '../../../ui/pickerdp'
import CheckBoxGroupDP from '../../../ui/checkboxgroupdp'
import ButtonDP from '../../../ui/buttondp'
import appStyles from '../../../styles/styles'
import FootPrint from './footprint'
import Gender from './gender'
import Nationality from './nationality'
import ecLegalId from '../../../eclegalid'
import ExitConfirmation from './exitconfirmation'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
} from 'react-native'

function VisitForm(props) {
    return (
        <ScrollView style={styles.white}>
            <ExitConfirmation
                openExitModal={props.openExitModal}
                redirectToConfirmation={props.redirectToConfirmation}
                closeExitModal={props.closeExitModal}
                exitmodal={props.exitmodal}
            />

            <View style={[styles.container, styles.paddingForm]}>
                <View style={styles.fl1}>
                    <Image 
                        source={require('../../../styles/images/logo.png')}
                        style={styles.logoQuestions}
                    />
                </View>
                <View style={styles.fl10}>
                    <View style={[styles.row, styles.marginFormRow]}>
                        {
                            props.cf === false &&
                            <View style={[styles.fl2, styles.formElem]}>
                                <LabelDP label='Cédula'/>
                            </View>
                        }
                        {
                            props.cf === false &&
                            <View style={[styles.fl3, styles.formElem]}>
                                <Field 
                                    name={'legal_id'}
                                    component={InputDP}
                                    placeholder='Ej: 0934857394'
                                    keyboardType='default'
                                />
                            </View>
                        }

                        {
                            props.cf === true &&
                            <View style={[styles.fl2, styles.formElem]}>
                                <LabelDP label='Nacionalidad'/>
                            </View>
                        }
                        {
                            props.cf === true &&
                            <View style={[styles.fl3, styles.formElem]}>
                                <Field 
                                    name={'nationality'}
                                    component={Nationality}
                                />
                            </View>
                        }

                        <View style={[styles.fl2, styles.formElem]}>
                            <LabelDP label='Email'/>
                        </View>
                        <View style={[styles.fl3, styles.formElem]}>
                            <Field 
                                name={'email'}
                                component={InputDP}
                                placeholder='Ej: nombre@email.com'
                                keyboardType='email-address'
                            />
                        </View>
                    </View>
                    <View style={[styles.row, styles.marginFormRow]}>
                        <View style={[styles.fl2, styles.formElem]}>
                            <LabelDP label='Nombre'/>
                        </View>
                        <View style={[styles.fl3, styles.formElem]}>
                            <Field 
                                name={'name'}
                                component={InputDP}
                                placeholder='Ej: Juan'
                                keyboardType='default'
                            />
                        </View>
                        <View style={[styles.fl2, styles.formElem]}>
                            <LabelDP label='Apellido'/>
                        </View>
                        <View style={[styles.fl3, styles.formElem]}>
                            <Field 
                                name={'surname'}
                                component={InputDP}
                                placeholder='Ej: Perez'
                                keyboardType='default'
                            />
                        </View>
                    </View>
                    <View style={[styles.row, styles.marginFormRow]}>
                        <View style={[styles.fl2, styles.formElem]}>
                            <LabelDP label='Género'/>
                        </View>
                        <View style={[styles.fl3, styles.formElem]}>
                            <Field 
                                name={'gender'}
                                component={Gender}
                            />
                        </View>
                        <View style={[styles.fl2, styles.formElem]}>
                            <LabelDP label='Celular'/>
                        </View>
                        <View style={[styles.fl3, styles.formElem]}>
                            <Field 
                                name={'phone'}
                                component={InputDP}
                                placeholder='Ej: 0983452714'
                                keyboardType='phone-pad'
                            />
                        </View>
                    </View>
                    <View style={[styles.row, styles.marginFormRow]}>
                        <View style={[styles.fl2, styles.formElem]}>
                            <LabelDP label='Tipo de pisada'/>
                        </View>
                        <View style={[styles.fl8, styles.formElem]}>
                            <Field
                                name={'footprint'}
                                component={FootPrint}
                            />
                        </View>
                    </View>
                    <View style={[styles.row, styles.marginFormRow]}>
                        <View style={[styles.fl2, styles.formElem]}>
                            <LabelDP label='Código vendedor'/>
                        </View>
                        <View style={[styles.fl8, styles.formElem]}>
                            <Field 
                                name={'employee_code'}
                                component={InputDP}
                                placeholder='Ej: G001'
                                keyboardType='numeric'
                            />
                        </View>
                    </View>
                    {
                        props.questions.map((item) => {
                            return (
                                <View key={item.id} style={[styles.row, styles.marginFormRow]}>
                                    <View style={[styles.fl2, styles.formElem]}>
                                        <LabelDP label={item.question}/>
                                    </View>
                                    {
                                        item.type == 1 &&
                                        <View style={[styles.fl8, styles.formElem]}>
                                            <Field 
                                                name={`q_${item.id}`}
                                                component={PickerDP}
                                                options={item.options}
                                            />
                                        </View>
                                    }
                                    {
                                        item.type == 2 &&
                                        <View style={[styles.fl8, styles.formElem]}>
                                            <CheckBoxGroupDP 
                                                groupName={`q_${item.id}`}
                                                options={item.options}
                                            />
                                        </View>
                                    }
                                    {
                                        item.type == 3 &&
                                        <View style={[styles.fl8, styles.formElem]}>
                                            <Field 
                                                name={`q_${item.id}`}
                                                component={InputDP}
                                                placeholder=''
                                                keyboardType='default'
                                            />
                                        </View>
                                    }
                                </View>
                            )
                        })
                    }
                    <View style={[styles.row, styles.marginFormRow, styles.buttonContainer]}>
                        <View style={[styles.row, styles.formElem]}>
                            <View style={[styles.fl1, styles.marginButtonRight]}>
                                <ButtonDP 
                                    onPress={props.openExitModal}
                                    title='MENU'
                                    buttonColor='blue'
                                />
                            </View>
                            <View style={[styles.fl1, styles.marginButtonLeft]}>
                                <ButtonDP 
                                    onPress={props.handleSubmit}
                                    title='ENVIAR'
                                    buttonColor='green'
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

//form validation
const validate = values => {
    const errors = {}

    if(!values.employee_code) {
        errors.employee_code = 'Requerido'
    } else if (values.employee_code.length < 3) {
        errors.employee_code = 'Como mínimo 3 caracteres'
    }

    if(!values.name) {
        errors.name = 'Requerido'
    } else if (values.name.length < 3) {
        errors.name = 'Como mínimo 3 caracteres'
    }

    if(!values.surname) {
        errors.surname = 'Requerido'
    } else if (values.surname.length < 3) {
        errors.surname = 'Como mínimo 3 caracteres'
    }

    if(!values.phone) {
        errors.phone = 'Requerido'
    } else if (values.phone.length < 3) {
        errors.phone = 'Como mínimo 3 caracteres'
    }

    if(values.cf === false) {
        if(!values.legal_id) {
            errors.legal_id = 'Requerido'
        } else if (values.legal_id.length < 10) {
            errors.legal_id = 'Como mínimo 10 caracteres'
        } else if (true) {
            const ec_legal_id_validation = ecLegalId(values.legal_id)
            if(ec_legal_id_validation.error)
            errors.legal_id = 'Cédula inválida'
        }
    } else {
        if(!values.nationality) {
            errors.nationality = 'Requerido'
        } else if (values.nationality != 1 && values.nationality != 2) {
            errors.nationality = 'Requerido'
        }
    }

    if(!values.email) {
        errors.email = 'Requerido'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Dirección email inválida'
    }

    if(!values.gender) {
        errors.gender = 'Requerido'
    } else if (values.gender != 1 && values.gender != 2) {
        errors.gender = 'Requerido'
    }

    if(!values.footprint) {
        errors.footprint = 'Requerido'
    } else if (values.footprint != 0 && values.footprint != 1 && values.footprint != 2) {
        errors.footprint = 'Requerido'
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
            'cf': state.questions.cf,
        }
    })
)(VisitForm)

const styles = StyleSheet.create(appStyles)

export default VisitForm
