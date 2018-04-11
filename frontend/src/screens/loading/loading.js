import React from 'react'
import appStyles from '../../styles/styles'
import { 
    ActivityIndicator,
    View,
    Text,
    StyleSheet
} from 'react-native'

function LoadingScreen(props) {
    return (
        <View style={[styles.half, styles.middleCentered, styles.white]}>
            <ActivityIndicator size={50} color="#fa0f0c" />
            <Text style={styles.loadingText}>Procesando...</Text>
        </View>
    )
}

const styles = StyleSheet.create(appStyles)

export default LoadingScreen
