import React from 'react'
import ButtonDP from '../../../ui/buttondp'
import PickerDP from '../../../ui/pickerdp'
import {
    View,
    Text,
} from 'react-native'

function BranchScreenLayout(props) {
    return (
        <View>
            <Text>Seleccionar punto de venta: </Text>
            <PickerDP 
                selectedPickerValue={props.selectedBranch}
                onChangePicker={props.onChangePicker}
                options={props.branches}
            />

            <ButtonDP 
                onPress={props.pressNextButton}
                title='SIGUIENTE'
            />
        </View>
    )
}

export default BranchScreenLayout
