import agent from '../agent';
import React, {Component} from 'react';
import Header from './Header';
import '../styles/App.scss';
import {connect} from 'react-redux';
import {APP_LOAD, REDIRECT} from '../constants/actionTypes';
import { Route, Switch } from 'react-router-dom';
import { store } from '../store';
import { push } from 'react-router-redux';

const mapStateToProps = state => {
    return {
        appName: state.common.appName,
    };
};

const mapDispatchToProps = dispatch => ({
    onLoad: (payload, token) =>
        dispatch({type: APP_LOAD, payload, token, skipTracking: true}),
    onRedirect: () =>
        dispatch({type: REDIRECT}),
});

class App extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.redirectTo) {
            // this.context.router.replace(nextProps.redirectTo);
            store.dispatch(push(nextProps.redirectTo));
            this.props.onRedirect();
        }
    }

    componentWillMount() {
    }

    render() {
        return (
            <div className="contentBox">
                <Header
                    appName={this.props.appName}
                />
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
