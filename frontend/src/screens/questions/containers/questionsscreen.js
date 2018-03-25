import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions } from '../../../actions/questions'
import { changeConnectionStatus } from '../../../actions/connectionstatus'
import { reset } from 'redux-form'
import { fetchVisitor, resetVisitorStatus } from '../../../actions/visitor'
import VisitForm from '../components/visitform'
import { 
    NetInfo,
    Text,
} from 'react-native'

class QuestionsScreen extends Component {
    handleConnectionChange = isConnected => {
        console.log(`INGRESA AL CALLBACK QUESTIONS ------------------`)
        this.props.dispatch(changeConnectionStatus(isConnected))
        // if connected, try to fetch branches
        if(this.props.isConnected)
            this.props.dispatch(fetchQuestions())
    }

    componentDidMount() {
        // verify internet connection status
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange)
    }

    componentDidUpdate() {
        //if visitor data was stored successfully then redirect to confirmation
        if(this.props.status === 'STORE_VISITOR_OK') {
            this.props.dispatch(resetVisitorStatus())
            this.props.dispatch(reset('visitForm')) // reseting form
            // remove event listener
            NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange)
            // navigate to confirmation screen
            this.props.navigation.navigate('Confirmation')
        }
    }

    submitForm = values => {
        this.props.dispatch(fetchVisitor(values))
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
        isConnected: state.connectionstatus.isConnected,
    }
}

export default connect(mapStateToProps)(QuestionsScreen)
