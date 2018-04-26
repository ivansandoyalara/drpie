import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions } from '../../../actions/questions'
import { changeConnectionStatus } from '../../../actions/connectionstatus'
import { toggleExitModal } from '../../../actions/questions'
import { reset } from 'redux-form'
import { fetchVisitor, resetVisitorStatus } from '../../../actions/visitor'
import { queueVisitor, resetQueueSyncStatus, syncVisitors } from '../../../actions/queuedvisitors'
import VisitForm from '../components/visitform'
import LoadingScreen from '../../loading/loading'
import { 
    NetInfo,
    BackHandler,
} from 'react-native'

class QuestionsScreen extends Component {
    static navigationOptions = {
        title: 'Evaluación de pisada',
        headerLeft: null,
        headerStyle: {
            backgroundColor: '#fa0f0c',
        },
        headerTintColor: '#fff',
    }

    handleConnectionChange = isConnected => {
        this.props.dispatch(changeConnectionStatus(isConnected))
        // if connected, try to fetch branches
        if(this.props.isConnected) {
            this.props.dispatch(fetchQuestions())
            // additionally here try to sync queued visitors
            this.props.dispatch(syncVisitors(this.props.queuedVisitors))
        }
    }

    onBackPress = () => (true)

    componentDidMount() {
        // get initial internet connection info
        NetInfo.isConnected.fetch().then(isConnected => {
            this.props.dispatch(changeConnectionStatus(isConnected))
            if(isConnected) {
                this.props.dispatch(fetchQuestions())
                // additionally here try to sync queued visitors
                this.props.dispatch(syncVisitors(this.props.queuedVisitors))
            }
        });
        // verify internet connection status
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange)
        // prevent hardware back default function
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    }

    componentDidUpdate() {
        //if visitor data was stored or queued successfully then redirect to confirmation
        if(this.props.status === 'STORE_VISITOR_OK' || this.props.queueStatus) {
            this.props.dispatch(resetVisitorStatus()) // reseting visitor status
            this.props.dispatch(resetQueueSyncStatus()) // reseting visitors queue and sync status
            this.props.dispatch(reset('visitForm')) // reseting form
            // remove event listener
            NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange)
            // navigate to confirmation screen
            this.props.navigation.navigate('Confirmation', {
                submitted: true
            })
        }
    }

    submitForm = values => {
        if(this.props.isConnected)
            // store visitor only if there's an active connection 
            this.props.dispatch(fetchVisitor(values))
        else
            // if there's no active connection then store to local persisted state
            this.props.dispatch(queueVisitor(values))
    }

    openExitModal = () => (
        this.props.dispatch(toggleExitModal(true))
    )

    redirectToConfirmation = () => {
        this.closeExitModal()
        this.props.navigation.navigate('Confirmation')
    }

    closeExitModal = () => (
        this.props.dispatch(toggleExitModal(false))
    )

    render() {
        if(this.props.loading || this.props.loadingVisitor)
            return <LoadingScreen />
        return (
            <VisitForm 
                questions={this.props.questions}
                onSubmit={this.submitForm}
                openExitModal={this.openExitModal}
                redirectToConfirmation={this.redirectToConfirmation}
                exitmodal={this.props.exitmodal}
                closeExitModal={this.closeExitModal}
                cf={this.props.cf}
            />
        )
    }
}

function mapStateToProps(state, props) {
    //console.log(`[State from Questions]: ${JSON.stringify(state)}`)
    return {
        questions: state.questions.items,
        loading: state.questions.loading,
        exitmodal: state.questions.exitmodal,
        cf: state.questions.cf,
        loadingVisitor: state.visitor.loading,
        status: state.visitor.status,
        queueStatus: state.queuedvisitors.queueStatus,
        isConnected: state.connectionstatus.isConnected,
        queuedVisitors: state.queuedvisitors.visitors,
    }
}

export default connect(mapStateToProps)(QuestionsScreen)
