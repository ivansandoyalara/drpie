import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions } from '../../../actions/questions'
import { reset } from 'redux-form'
import { fetchVisitor, resetVisitorStatus } from '../../../actions/visitor'
import VisitForm from '../components/visitform'
import { Text } from 'react-native'

class QuestionsScreen extends Component {
    componentDidMount() {
        this.props.dispatch(fetchQuestions())
    }

    componentDidUpdate() {
        //if visitor data was stored successfully then redirect to confirmation
        if(this.props.status === 'STORE_VISITOR_OK') {
            this.props.dispatch(resetVisitorStatus())
            this.props.dispatch(reset('visitForm')) // reseting form
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
    }
}

export default connect(mapStateToProps)(QuestionsScreen)
