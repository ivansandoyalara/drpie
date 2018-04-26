import React from 'react'
import appStyles from '../../../styles/styles'
import ButtonDP from '../../../ui/buttondp'
import {
    StyleSheet,
    View,
    Modal,
    Text,
    TouchableHighlight,
} from 'react-native'

function ExitConfirmation (props) {
    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={props.exitmodal}
            >
            <View style={styles.modal}>
                <View style={styles.fl1}></View>
                <View style={styles.modalWrapper}>
                    <View style={styles.modalBody}>
                        <View style={styles.fl1}>
                            <Text style={styles.modalQuestion}>No ha guardado los datos del formulario, ¿desea continuar?</Text>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.fl3}>
                                <ButtonDP 
                                    onPress={props.closeExitModal}
                                    title='NO'
                                    buttonColor={'black'}
                                />
                            </View>
                            <View style={styles.fl1}></View>
                            <View style={styles.fl3}>
                                <ButtonDP 
                                    onPress={props.redirectToConfirmation}
                                    title='SI'
                                    buttonColor={'green'}
                                />
                            </View>
                        </View>

                        <TouchableHighlight
                            onPress={() => {}}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.fl1}></View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create(appStyles)

export default ExitConfirmation
