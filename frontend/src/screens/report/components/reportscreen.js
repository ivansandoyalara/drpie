import React from 'react'
import ButtonDP from '../../../ui/buttondp'
import appStyles from '../../../styles/styles'
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
} from 'react-native'

function ReportLayout(props) {
    return (
        <View style={styles.container}>
            <View style={[styles.half, styles.middleCentered, styles.red]}>
                <Image 
                    source={require('../../../styles/images/logo.png')}
                    style={styles.logoMain}
                />
            </View>
            <View style={[styles.container, styles.white]}>
                <View style={styles.fl1}></View>
                <View style={styles.fl3}>
                    <Text style={styles.subtitle}>INGRESAR CÓDIGO DE VENDEDOR</Text>
                    <View style={styles.marginFormRow}>
                        <TextInput 
                            value={props.employeeCode}
                            onChangeText={(code) => props.changeEmployeeCode(code)}
                        />
                    </View>
                    <View style={styles.marginFormRow}>
                        <ButtonDP 
                            onPress={props.handleViewReport}
                            title='VER REPORTE'
                            buttonColor='green'
                        />
                    </View>
                    <View style={styles.marginFormRow}>
                        <ButtonDP 
                            onPress={props.redirectToConfirmation}
                            title='MENU'
                            buttonColor='blue'
                        />
                    </View>
                    {
                        (props.employeeReport) &&
                            <View>
                                <Text style={[styles.subtitle, styles.textCenter]}>{ props.employeeReport.employee.name }</Text>
                                <Text style={[styles.reportCount, styles.textCenter]}>{ props.employeeReport.count }</Text>
                                <Text style={[styles.textBlack, styles.textCenter]}>Evaluacion(es)</Text>
                                <Text style={[styles.textBlack, styles.textCenter]}>Período: { props.employeeReport.month }, {props.employeeReport.year}</Text>
                            </View>
                    }
                </View>
                <View style={styles.fl1}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(appStyles)

export default ReportLayout
