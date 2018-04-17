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
                    //source={require('../../../styles/images/logo.png')}
                    style={styles.logoMain}
                />
            </View>
            <View style={[styles.container, styles.white]}>
                <View style={styles.fl1}></View>
                <View style={styles.fl3}>
                    <Text>CÓDIGO DE VENDEDOR</Text>
                    <TextInput 
                        value={props.employeeCode}
                        onChangeText={(code) => props.changeEmployeeCode(code)}
                    />
                    <ButtonDP 
                        onPress={props.handleViewReport}
                        title='VER REPORTE'
                    />
                    <ButtonDP 
                        onPress={props.handleViewReport}
                        title='VER REPORTE'
                    />
                    {
                        (props.employeeReport) &&
                            <View>
                            <Text>{ props.employeeReport.employee.name }</Text>
                            <Text>{ props.employeeReport.count }</Text>
                            <Text>Evaluaciones</Text>
                            <Text>Desde - Hasta</Text>
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
