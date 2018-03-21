import React from 'react'
import ButtonDP from '../../../ui/buttondp'
import {
    View,
    Text,
} from 'react-native'

function ConfirmationScreen(props) {
    return (
        <View>
            <Text>Guardado exitoso!</Text>

            <ButtonDP 
                onPress={props.redirectToBranches}
                title='SELECCIONAR PUNTO DE VENTA'
            />

            <ButtonDP 
                onPress={props.redirectToQuestions}
                title='NUEVO CUESTIONARIO'
            />

            <ButtonDP 
                onPress={()=>{}}
                title='REPORTE VENDEDORES'
            />
        </View>
    )
}

export default ConfirmationScreen
