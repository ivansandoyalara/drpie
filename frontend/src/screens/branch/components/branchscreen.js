import React from 'react'
import appStyles from '../../../styles/styles'
import {
    View,
    Text,
    Picker,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'

function BranchScreenLayout(props) {
    return (
        <View style={styles.container}>
            <View style={[styles.half, styles.middleCentered, styles.red]}>
                <Image 
                    source={require('../../../styles/images/logo.png')}
                    style={styles.logoMain}
                />
            </View>
            <View style={[styles.container, styles.white, styles.branchWrapper]}>
                <View style={styles.fl1}></View>
                <View style={styles.fl3}>
                    <Text style={styles.subtitle}>SELECCIONAR PUNTO DE VENTA: </Text>
                    <Picker
                        onValueChange={props.onChangePicker}
                        selectedValue={props.selectedBranch}
                        style={styles.picker}
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

                    <TouchableOpacity onPress={props.pressNextButton}
                    style={{alignItems: 'center'}}
                    >
                        <Image
                        source={require('../../../styles/images/btn-continue.png')}
                        style={{width: 220, height: 60}}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.fl1}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(appStyles)

export default BranchScreenLayout
