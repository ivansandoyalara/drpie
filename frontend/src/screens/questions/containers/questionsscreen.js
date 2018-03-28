import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions } from '../../../actions/questions'
import { changeConnectionStatus } from '../../../actions/connectionstatus'
import { reset } from 'redux-form'
import { fetchVisitor, resetVisitorStatus } from '../../../actions/visitor'
import { queueVisitor, resetQueueSyncStatus } from '../../../actions/queuedvisitors'
import VisitForm from '../components/visitform'
import { 
    NetInfo,
    Text,
    BackHandler,
} from 'react-native'

class QuestionsScreen extends Component {
    static navigationOptions = {
        title: 'Evaluación de pisada',
        headerLeft: null,
    }

    handleConnectionChange = isConnected => {
        this.props.dispatch(changeConnectionStatus(isConnected))
        // if connected, try to fetch branches
        if(this.props.isConnected)
            this.props.dispatch(fetchQuestions())
    }

    onBackPress = () => (true)

    componentDidMount() {
        // verify internet connection status
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange)
        // prevent hardware back default function
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    }

    componentDidUpdate() {
        //if visitor data was stored successfully then redirect to confirmation
        if(this.props.status === 'STORE_VISITOR_OK' || this.props.queueStatus) {
            this.props.dispatch(resetVisitorStatus()) // reseting visitor status
            this.props.dispatch(resetQueueSyncStatus()) // reseting visitors queue and sync status
            this.props.dispatch(reset('visitForm')) // reseting form
            // remove event listener
            NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange)
            // navigate to confirmation screen
            this.props.navigation.navigate('Confirmation')
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

    render() {
        if(this.props.loading)
            return <Text>Cargando ...</Text>
        return (
            <VisitForm 
                questions={this.props.questions}
                onSubmit={this.submitForm}
            />
        )
    }
}

function mapStateToProps(state, props) {
    //console.log(`[State from Questions]: ${JSON.stringify(state)}`)
    return {
        questions: state.questions.items,
        loading: state.questions.loading,
        status: state.visitor.status,
        queueStatus: state.queuedvisitors.queueStatus,
        isConnected: state.connectionstatus.isConnected,
    }
}

export default connect(mapStateToProps)(QuestionsScreen)
