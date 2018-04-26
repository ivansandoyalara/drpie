import React from 'react'
import appStyles from '../../../styles/styles'
import ButtonDP from '../../../ui/buttondp'
import {
    StyleSheet,
    View,
    Modal,
    Text,
    Image,
    TouchableOpacity,
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
                                <TouchableOpacity onPress={props.closeExitModal}
                                style={{alignItems: 'center'}}
                                >
                                    <Image
                                    source={require('../../../styles/images/btn-no.png')}
                                    style={{width: 220, height: 60}}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.fl1}></View>
                            <View style={styles.fl3}>
                                <TouchableOpacity onPress={props.redirectToConfirmation}
                                style={{alignItems: 'center'}}
                                >
                                    <Image
                                    source={require('../../../styles/images/btn-yes.png')}
                                    style={{width: 220, height: 60}}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.fl1}></View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create(appStyles)

export default ExitConfirmation
