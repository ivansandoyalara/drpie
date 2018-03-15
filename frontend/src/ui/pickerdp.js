import React from 'react'
import {
    Picker,
} from 'react-native'

function PickerDP(props) {
    return (
        <Picker
            selectedValue={props.selectedPickerValue}
            onValueChange={props.onChangePicker}
        >
            {
                props.options.map((item) => {
                    let label = ''
                    if(item.name)
                        label = item.name
                    if(item.value)
                        label = item.value
                    return (
                        <Picker.Item 
                            key={item.id}
                            value={item.id}
                            label={label}
                        />
                    )
                })
            }
        </Picker>
    )
}

export default PickerDP
