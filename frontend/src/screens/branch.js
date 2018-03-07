import React, { Component } from 'react'
import { apiDirectory } from '../config'

import {
    StyleSheet,
    View,
    Text,
    Picker,
    Button
} from 'react-native'

class Branch extends Component {
    state = {
        branches: [],
        selectedPickerValue: 0
    }

    onChangePicker = (itemValue, itemPosition) => {
        console.log(`Branch id selected: ${itemValue}`)
        this.setState({
            selectedPickerValue: itemValue
        })
    }

    pressNextButton = () => {
        console.log(`Redirecting to Questions view...`)
        if(this.state.selectedPickerValue != 0) {
            this.props.navigation.navigate('Questions', {
                branchId: this.state.selectedPickerValue
            })
        }
    }

    componentDidMount() {
        const url = `${apiDirectory.branches}`
        return fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(`Retrieving json data...`)
            if(json.length > 0) {
                const firstBranch = json[Object.keys(json)[0]]
                this.setState({
                    branches: json,
                    selectedPickerValue: firstBranch.id
                })
            }
        })
        .catch(error => {
            console.log(`RN Error: ${error}`)
        })
    }
    
    render() {
        if(!this.state.branches) return <Text>Loading...</Text>
        return (
            <View>
                <Text>Seleccionar punto de venta: </Text>
                <Picker
                    selectedValue={this.state.selectedPickerValue}
                    onValueChange={this.onChangePicker}
                >
                    {
                        this.state.branches.map((item) => {
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

                <Button
                    onPress={this.pressNextButton}
                    title="SIGUIENTE"
                    color="#841584"
                />
            </View>
        )
    }
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})*/

export default Branch
