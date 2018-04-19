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
                    source={require('../../../styles/images/logo.png')}
                    style={styles.logoMain}
                />
            </View>
            <View style={[styles.container, styles.white]}>
                <View style={styles.fl1}></View>
                <View style={styles.fl3}>
                {
                    (props.submitted) &&
                    <View style={styles.imageHolder}>
                        <Image 
                            source={require('../../../styles/images/ok.png')}
                            style={styles.imageCentered}
                        />
                        <Text style={[styles.subtitle, styles.textCenter]}>Guardado exitoso!</Text>
                    </View>
                }

                    <View style={styles.marginFormRow}>
                        <ButtonDP 
                            onPress={props.redirectToBranches}
                            title='SELECCIONAR PUNTO DE VENTA'
                        />
                    </View>

                    <View style={styles.marginFormRow}>
                        <ButtonDP 
                            onPress={props.redirectToQuestions}
                            title='NUEVO CUESTIONARIO'
                            buttonColor='green'
                        />
                    </View>

                    {
                        isConnected &&
                        <View style={styles.marginFormRow}>
                            <ButtonDP 
                                onPress={props.redirectToReport}
                                title='REPORTE VENDEDORES'
                                buttonColor='blue'
                            />
                        </View>
                    }
                </View>
                <View style={styles.fl1}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(appStyles)

export default ConfirmationScreen
