import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBranches, selectBranch } from '../../../actions/branches'
import BranchScreenLayout from '../components/branchscreen'
import { Text } from 'react-native'

class BranchScreen extends Component {
    onChangePicker = (itemValue, itemPosition) => {
        console.log(`Branch id selected: ${itemValue}`)
        this.props.dispatch(selectBranch(itemValue))
    }

    pressNextButton = () => {
        console.log(`Redirecting to Questions view...`)
        if(this.props.selectedBranch != 0)
            this.props.navigation.navigate('Questions')
    }

    componentDidMount() {
        this.props.dispatch(fetchBranches())
    }

    render() {
        if(this.props.loading)
            return (
                <Text>Cargando ...</Text>
            )
        return (
            <BranchScreenLayout 
                branches={this.props.branches}
                selectedBranch={this.props.selectedBranch}
                onChangePicker={this.onChangePicker}
                pressNextButton={this.pressNextButton}
            />
        )
    }
}

function mapStateToProps(state, props) {
    //console.log(`El state (branch) es: ${JSON.stringify(state)}`)
    return {
        branches: state.branches.items,
        selectedBranch: state.branches.selectedItem,
        loading: state.branches.loading,
    }
}

export default connect(mapStateToProps)(BranchScreen)
