import agent from '../../agent';
import React, {Component} from 'react';
import Header from '../Header';
import RecruitmentContent from './RecruitmentContent';
import SideMenu from '../SideMenu';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/App.css';
import {connect} from 'react-redux';
import {APP_LOAD, REDIRECT} from '../../constants/actionTypes';
import {Route, Switch} from 'react-router-dom';
import {store} from '../../store';
import {push} from 'react-router-redux';

const mapStateToProps = state => {
    return {
        appName: state.common.appName,
        sideMenu: state.common.menu
    };
};

const mapDispatchToProps = dispatch => ({
    onLoad: (payload, token) =>
        dispatch({type: APP_LOAD, payload, token, skipTracking: true}),
    onRedirect: () =>
        dispatch({type: REDIRECT}),
});

class Recruitment extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.redirectTo) {
            // this.context.router.replace(nextProps.redirectTo);
            store.dispatch(push(nextProps.redirectTo));
            this.props.onRedirect();
        }
    }

    componentWillMount() {
        console.log('リクルート');
    }

    render() {
        return (
            <div className="contentBox">
                <Header
                    appName={this.props.appName}
                />
                <div className="layout-container layoutContainerBox">
                    <SideMenu sideMenu={this.props.sideMenu} />
                    <RecruitmentContent />リクルート
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recruitment);
