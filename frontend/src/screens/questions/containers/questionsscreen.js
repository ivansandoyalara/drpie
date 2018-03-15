import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions } from '../../../actions/questions'
import VisitForm from '../components/visitform'
import { Text } from 'react-native'

class QuestionsScreen extends Component {
    componentDidMount() {
        this.props.dispatch(fetchQuestions())
    }

    render() {
        if(this.props.loading)
            return <Text>Cargando ...</Text>
        return (
            <VisitForm 
                questions={this.props.questions}
            />
        )
    }
}

function mapStateToProps(state, props) {
    console.log(`El state (questions) es: ${JSON.stringify(state)}`)
    return {
        questions: state.questions.items,
        loading: state.questions.loading,
    }
}

export default connect(mapStateToProps)(QuestionsScreen)
