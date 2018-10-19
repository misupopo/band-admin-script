import agent from '../../agent';
import React, {Component} from 'react';
import Header from '../Header';
import RecruitmentContent from './RecruitmentContent';
import SideMenu from '../SideMenu';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/App.css';
import {connect} from 'react-redux';
import {RECRUITMENT_PAGE_LOADED, REDIRECT} from '../../constants/actionTypes';
import {Route, Switch} from 'react-router-dom';
import {store} from '../../store';
import {push} from 'react-router-redux';

const mapStateToProps = state => {

    return {
        ...state,
        recruitment: state.recruitment.recruitment,
        appName: state.common.appName,
        sideMenu: state.common.menu
    };
};

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({type: RECRUITMENT_PAGE_LOADED, payload}),
    onRedirect: () =>
        dispatch({type: REDIRECT}),
});

class Recruitment extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.redirectTo) {
            console.log('redirect');

            store.dispatch(push(nextProps.redirectTo));
            this.props.onRedirect();
        }
    }

    async componentWillMount() {
        this.props.onLoad(await agent.Recruitment.getList());
    }

    render() {
        if (!this.props.recruitment) {
            return <React.Fragment></React.Fragment>;
        }

        console.log(this.props.recruitment.pm2.app.appName);

        return (
            <div className="contentBox">
                <Header
                    appName={this.props.appName}
                />
                <div className="layout-container layoutContainerBox">
                    <SideMenu sideMenu={this.props.sideMenu} />
                    <RecruitmentContent recruitment={this.props.recruitment}/>fsfsdfddfsdfs{this.props.recruitment.pm2.app.appName}
                </div>
                <div>ステータス</div>
                <div>{this.props.recruitment.title}</div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recruitment);
