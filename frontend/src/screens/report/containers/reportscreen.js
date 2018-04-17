import React, { Component } from 'react'
import { connect } from 'react-redux'
import { insertEmployeeCode, fetchEmployeeReport } from '../../../actions/report'
import ReportLayout from '../components/reportscreen'
import LoadingScreen from '../../loading/loading'

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
