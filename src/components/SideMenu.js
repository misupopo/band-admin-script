import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

class SideMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: [
                {
                    title: 'recruitment',
                    flag: false,
                },
            ],
        };

        console.log('constructor');
    }

    openMenu = (index) => {
        const stateItems = [...this.state.menu];
        stateItems[index].flag = stateItems[index].flag !== true;
        this.setState({
            menu: stateItems
        })
    };

    render() {
        if (!this.props.sideMenu) {
            return;
        }

        return (
            <div className="sideMenuBox">
                <h2>Menu</h2>
                <ul className="sideMenuBoxListBox">
                    {
                        this.props.sideMenu.map((data, index) => {
                            return (
                                <li key={index}>
                                    <div onClick={() => {
                                        this.openMenu(index);
                                    }} className="sideMenuBoxListBox_title">{data.title}</div>
                                    <ul className={classNames({
                                        'sideMenuBoxListBox_childBox': true,
                                        'collapsed': this.state.menu[index].flag === true
                                    })}>
                                        {
                                            this.props.sideMenu[index].child.map((childData, childIndex) => {
                                                return (
                                                    <li key={childIndex}>
                                                        <a href="./recruitment"> {childData.title} </a>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default SideMenu;
