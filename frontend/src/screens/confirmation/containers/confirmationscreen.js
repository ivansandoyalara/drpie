import React, { Component } from 'react'
import { connect } from 'react-redux'
import ConfirmationScreenLayout from '../components/confirmationscreen'

class ConfirmationScreen extends Component {
    redirectToBranches = () => (
        this.props.navigation.navigate('Branches')
    )

    redirectToQuestions = () => (
        this.props.navigation.navigate('Questions')
    )

    /*redirectToReport = () => (
        this.props.navigation.navigate('Report')
    )*/

    render() {
        return (
            <ConfirmationScreenLayout 
                redirectToBranches={this.redirectToBranches}
                redirectToQuestions={this.redirectToQuestions}
                //redirectToReport={this.redirectToReport}
            />
        )
    }
}

function mapStateToProps(state, props) {
    //console.log(`El state (confirmation) es: ${JSON.stringify(state)}`)
    console.log('En CONFIRMATION')
    return {
        
    }
}

export default connect(mapStateToProps)(ConfirmationScreen)
