import React from 'react'
import appStyles from '../../../styles/styles'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

function ConfirmationScreen(props) {
    return (
        <View style={styles.fl1}>
            <View style={[styles.fl1, styles.middleCentered, styles.red]}>
                <Image 
                    source={require('../../../styles/images/logo.png')}
                    style={styles.logoConfirmation}
                />
            </View>
            <View style={[styles.containerConfirmation, styles.white]}>
                <View style={styles.fl1}></View>
                <View style={styles.fl4}>
                {
                    (props.submitted) &&
                    <View style={styles.imageHolder}>
                        <Image 
                            source={require('../../../styles/images/ok.png')}
                            style={styles.imageCentered}
                        />
                        <Text style={[styles.subtitle, styles.textCenter]}>Guardado exitoso!</Text>
                    </View>
                }

                    <View style={styles.buttonHolder}>
                        <View style={styles.fl1}>
                            <TouchableOpacity onPress={props.redirectToBranches}
                            style={{alignItems: 'center'}}
                            >
                                <Image
                                source={require('../../../styles/images/btn-branch.png')}
                                style={{width: 151, height: 181}}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.fl1}>
                            <TouchableOpacity onPress={() => {props.redirectToQuestions(false)}}
                            style={{alignItems: 'center'}}
                            >
                                <Image
                                source={require('../../../styles/images/btn-adults.png')}
                                style={{width: 151, height: 181}}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.fl1}>
                            <TouchableOpacity onPress={() => {props.redirectToQuestions(true)}}
                            style={{alignItems: 'center'}}
                            >
                                <Image
                                source={require('../../../styles/images/btn-cf.png')}
                                style={{width: 151, height: 181}}
                                />
                            </TouchableOpacity>
                        </View>

                        {
                            props.isConnected &&
                            <View style={styles.fl1}>
                                <TouchableOpacity onPress={props.redirectToReport}
                                style={{alignItems: 'center'}}
                                >
                                    <Image
                                    source={require('../../../styles/images/btn-report.png')}
                                    style={{width: 151, height: 181}}
                                    />
                                </TouchableOpacity>
                            </View>
                        }
                    </View>
                </View>
                <View style={styles.fl1}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(appStyles)

export default ConfirmationScreen
