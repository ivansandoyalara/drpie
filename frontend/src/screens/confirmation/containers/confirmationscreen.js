import React, { Component } from 'react'
import { connect } from 'react-redux'
import ConfirmationScreenLayout from '../components/confirmationscreen'
import { changeConnectionStatus } from '../../../actions/connectionstatus'
import { syncVisitors } from '../../../actions/queuedvisitors'
import { 
    NetInfo,
} from 'react-native'

class ConfirmationScreen extends Component {
    static navigationOptions = {
        title: 'Menú',
    }

    redirectToBranches = () => (
        this.props.navigation.navigate('Branch')
    )

    redirectToQuestions = () => (
        this.props.navigation.navigate('Questions')
    )

    redirectToReport = () => {
        console.log('redirecting to report ...')
        this.props.navigation.navigate('Report')
    }

    handleConnectionChange = isConnected => {
        this.props.dispatch(changeConnectionStatus(isConnected))
        // if connected, try to fetch branches
        if(this.props.isConnected) {
            // try to sync queued visitors
            this.props.dispatch(syncVisitors(this.props.queuedVisitors))
        }
    }

    componentDidMount() {
        // get initial internet connection info
        NetInfo.isConnected.fetch().then(isConnected => {
            this.props.dispatch(changeConnectionStatus(isConnected))
            if(isConnected) {
                // try to sync queued visitors
                this.props.dispatch(syncVisitors(this.props.queuedVisitors))
            }
        });
        // verify internet connection status (event listener)
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange)
    }

    render() {
        const { params } = this.props.navigation.state
        const submitted = params ? true : false

        return (
            <ConfirmationScreenLayout 
                redirectToBranches={this.redirectToBranches}
                redirectToQuestions={this.redirectToQuestions}
                redirectToReport={this.redirectToReport}
                submitted={submitted}
            />
        )
    }
}

function mapStateToProps(state, props) {
    //console.log(`[State from Confirmation]: ${JSON.stringify(state)}`)
    return {
        isConnected: state.connectionstatus.isConnected,
        queuedVisitors: state.queuedvisitors.visitors,
    }
}

export default connect(mapStateToProps)(ConfirmationScreen)
