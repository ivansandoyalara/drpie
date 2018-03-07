import React, { Component } from 'react'
import { apiDirectory } from '../config'

import {
    StyleSheet,
    View,
    Text,
    Picker,
    CheckBox,
    TextInput,
    Button
} from 'react-native'

class Questions extends Component {
    state = {
        branchId: this.props.navigation.state.params.branchId,
        chk: true,
        name: '',
        surname: '',
        legalId: '',
        email: '',
    }

    componentDidMount() {
        console.log(`Branch received is: ${this.state.branchId}`)
    }

    checkboxChange = (value) => {
        this.setState({
            chk: value
        })
    }

    render() {
        return (
            <View>
                <Text>Preguntas: </Text>
                <CheckBox 
                    value={this.state.chk}
                    onValueChange={this.checkboxChange}
                />

                <Text>Nombre:</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(name) => {this.setState({name})}}
                    value={this.state.name}
                />
                <Text>Apellido:</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(surname) => {this.setState({surname})}}
                    value={this.state.surname}
                />
                <Text>ID:</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(legalId) => {this.setState({legalId})}}
                    value={this.state.legalId}
                />
                <Text>Email:</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(email) => {this.setState({email})}}
                    value={this.state.email}
                />

                <Button
                    onPress={() => { console.log(this.state.surname) }}
                    title="ENVIAR"
                    color="#841584"
                />
            </View>
        )
    }
}

export default Questions
