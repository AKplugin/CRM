import React, { Component } from 'react';

class SidebarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
        this.toggleCollapsed = this.toggleCollapsed.bind(this);
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <div style={{ width: 256, height: '300px', float: 'left' }}>
                <ul>
                    <li>Staffs</li>
                </ul>
            </div>
        );
    }
}

export default SidebarComponent;