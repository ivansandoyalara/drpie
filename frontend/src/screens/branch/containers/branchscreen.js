import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBranches, selectBranch } from '../../../actions/branches'
import { changeConnectionStatus } from '../../../actions/connectionstatus'
import { syncVisitors } from '../../../actions/queuedvisitors'
import BranchScreenLayout from '../components/branchscreen'
import LoadingScreen from '../../loading/loading'
import { 
    NetInfo,
} from 'react-native'

class BranchScreen extends Component {
    static navigationOptions = {
        title: 'Punto de venta',
    }

    onChangePicker = (itemValue, itemPosition) => {
        console.log(`Branch id selected: ${itemValue}`)
        this.props.dispatch(selectBranch(itemValue))
    }

    pressNextButton = () => {
        console.log(`Redirecting to Confirmation view...`)
        if(this.props.selectedBranch != 0) {
            // remove event listener
            NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange)
            this.props.navigation.navigate('Confirmation')
        }
    }

    handleConnectionChange = isConnected => {
        this.props.dispatch(changeConnectionStatus(isConnected))
        // if connected, try to fetch branches
        if(this.props.isConnected) {
            this.props.dispatch(fetchBranches())
            // additionally here try to sync queued visitors
            this.props.dispatch(syncVisitors(this.props.queuedVisitors))
        }
    }

    componentDidMount() {
        // get initial internet connection info
        NetInfo.isConnected.fetch().then(isConnected => {
            this.props.dispatch(changeConnectionStatus(isConnected))
            if(isConnected) {
                this.props.dispatch(fetchBranches())
                // additionally here try to sync queued visitors
                this.props.dispatch(syncVisitors(this.props.queuedVisitors))
            }
        });
        // verify internet connection status (event listener)
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange)
    }

    render() {
        if(this.props.loading)
            return (
                <LoadingScreen />
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
    console.log(`[State from Branch]: ${JSON.stringify(state)}`)
    return {
        branches: state.branches.items,
        selectedBranch: state.branches.selectedItem,
        loading: state.branches.loading,
        isConnected: state.connectionstatus.isConnected,
        queuedVisitors: state.queuedvisitors.visitors,
    }
}

export default connect(mapStateToProps)(BranchScreen)
