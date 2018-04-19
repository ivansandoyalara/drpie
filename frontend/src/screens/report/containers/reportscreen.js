import React, { Component } from 'react'
import { connect } from 'react-redux'
import { insertEmployeeCode, fetchEmployeeReport } from '../../../actions/report'
import { changeConnectionStatus } from '../../../actions/connectionstatus'
import ReportLayout from '../components/reportscreen'
import LoadingScreen from '../../loading/loading'
import {
    NetInfo
} from 'react-native'

class ReportScreen extends Component {
    static navigationOptions = {
        title: 'Reporte vendedores',
    }

    changeEmployeeCode = code => (
        this.props.dispatch(insertEmployeeCode(code))
    )

    handleViewReport = () => (
        this.props.dispatch(fetchEmployeeReport(this.props.employeeCode))
    )

    redirectToConfirmation = () => (
        this.props.navigation.navigate('Confirmation')
    )

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
        if(this.props.loading)
            return (
                <LoadingScreen />
            )

        return (
            <ReportLayout 
                employeeCode={this.props.employeeCode}
                changeEmployeeCode={this.changeEmployeeCode}
                employeeReport={this.props.employeeReport}
                handleViewReport={this.handleViewReport}
                redirectToConfirmation={this.redirectToConfirmation}
            />
        )
    }
}

function mapStateToProps(state, props) {
    //console.log(`[State from Report]: ${JSON.stringify(state)}`)
    return {
        loading: state.report.loading,
        isConnected: state.connectionstatus.isConnected,
        queuedVisitors: state.queuedvisitors.visitors,
        employeeCode: state.report.employeeCode,
        employeeReport: state.report.employeeReport,
    }
}

export default connect(mapStateToProps)(ReportScreen)
