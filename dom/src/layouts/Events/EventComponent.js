import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'antd';

class EventComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                Events
                <Button type="primary" icon="schedule">Add Event</Button>
            </div>
        );
    }
}

export default EventComponent;