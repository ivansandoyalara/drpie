import React from 'react'
import ButtonDP from '../../../ui/buttondp'
import {
    View,
    Text,
    Picker,
} from 'react-native'

function BranchScreenLayout(props) {
    return (
        <View>
            <Text>Seleccionar punto de venta: </Text>

            <Picker
                onValueChange={props.onChangePicker}
                selectedValue={props.selectedBranch}
            >
            {
                props.branches.map((item) => {
                    return (
                        <Picker.Item
                            key={item.id}
                            value={item.id}
                            label={item.name}
                        />
                    )
                })
            }
            </Picker>

            <ButtonDP 
                onPress={props.pressNextButton}
                title='SIGUIENTE'
            />
        </View>
    )
}

export default BranchScreenLayout
