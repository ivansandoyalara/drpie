import React from 'react'
import ButtonDP from '../../../ui/buttondp'
import appStyles from '../../../styles/styles'
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native'

function ConfirmationScreen(props) {
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
                {
                    (props.submitted) &&
                    <Text>Guardado exitoso!</Text>
                }

                    <ButtonDP 
                        onPress={props.redirectToBranches}
                        title='SELECCIONAR PUNTO DE VENTA'
                    />

                    <ButtonDP 
                        onPress={props.redirectToQuestions}
                        title='NUEVO CUESTIONARIO'
                    />

                    <ButtonDP 
                        onPress={props.redirectToReport}
                        title='REPORTE VENDEDORES'
                    />
                </View>
                <View style={styles.fl1}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(appStyles)

export default ConfirmationScreen
