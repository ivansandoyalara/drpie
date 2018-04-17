import React, { Component } from 'react'
import { connect } from 'react-redux'
import ConfirmationScreenLayout from '../components/confirmationscreen'

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
        
    }
}

export default connect(mapStateToProps)(ConfirmationScreen)
