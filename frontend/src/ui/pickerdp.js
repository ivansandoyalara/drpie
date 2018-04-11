import React from 'react'
import { Picker } from 'react-native'

function PickerDP(props) {
    const { input, ...inputProps } = props

    return (
        <Picker
            {...inputProps}
            onValueChange={input.onChange}
            onBlur={input.onBlur}
            onFocus={input.onFocus}
            selectedValue={input.value}
        >
        <Picker.Item key={0} value={''} label={'- Seleccione uno(a) -'}/>
            {
                props.options.map((item) => {
                    return (
                        <Picker.Item 
                            key={item.id}
                            value={item.id}
                            label={item.value}
                        />
                    )
                })
            }
        </Picker>
    )
}

export default PickerDP
