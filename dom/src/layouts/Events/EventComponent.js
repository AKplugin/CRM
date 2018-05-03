import React, { Component } from 'react';
import { Input, Button, Icon, Modal, Form, notification, List } from 'antd';
import { connect } from 'react-redux';
import * as eventActions from '../../actions/eventAction';
const Search = Input.Search;
const { Item } = Form;
const { TextArea } = Input;
const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

class EventComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            eventDetails: {
                name: '',
                description: '',
                startdate: '',
                enddate: '',
                organiser: ''
            },
            displayType: true,
            isDeleted: false
        };
        this.showForm = this.showForm.bind(this);
        this.changeDisplay = this.changeDisplay.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.addEvent = this.addEvent.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
    }

    deleteEvent(event) {
        this.props.deleteEvent(event.target.id);
        this.setState({ isDeleted: !this.state.isDeleted });
    }

    componentWillReceiveProps(prev, next) {
        switch (prev.events.statusMsg) {
            case 'success':
                if (this.state.visible) {
                    this.setState({
                        visible: false
                    });
                    const openNotificationWithIcon = (type) => {
                        notification[type]({
                            message: 'Added the event successfully.'
                        });
                    };
                    openNotificationWithIcon('success');
                }
                break;
            case 'deleted':
                if (this.state.isDeleted) {
                    this.setState({
                        isDeleted: false
                    });
                    const openNotificationWithIcon = (type) => {
                        notification[type]({
                            message: 'Removed the event successfully.'
                        });
                    };
                    openNotificationWithIcon('error');
                }
        }
    }

    addEvent() {
        this.props.addEvent(this.state.eventDetails);
    }

    changeDisplay() {
        this.setState({
            displayType: !this.state.displayType
        });
    }

    showForm() {
        this.setState({
            visible: !this.state.visible
        });
    }

    onValueChange(event) {
        const { eventDetails } = this.state;
        eventDetails[event.target.id] = event.target.value;
        this.setState({
            eventDetails
        });
    }

    componentWillMount() {
        this.props.fetchEvents();
    }

    render() {
        const { eventDetails } = this.state;
        let eventDOM = '';
        if (this.props.events) {
            const { listOfEvents } = this.props.events;
            eventDOM = <List
                itemLayout="vertical"
                size="large"
                dataSource={listOfEvents}
                renderItem={item => (
                    <List.Item
                        key={item.name}
                        extra={<Icon type="delete" id={item._id} onClick={this.deleteEvent} />}
                    >
                        <List.Item.Meta
                            title={<a href={item.href}>{item.name}</a>}
                            description={item.description}
                        />
                    </List.Item>)
                } />
        }

        return (
            <div className="events-container">
                <div className="events-navigation">
                    Events
                    <Button type="primary" icon="schedule" onClick={this.showForm}>Add Event</Button>
                </div>
                <Modal title="Add Staff" visible={this.state.visible} onOk={this.handleOk} onCancel={this.showForm}
                    footer={[]}>
                    <Item>
                        <Input type='text' id="name" value={eventDetails.name} onChange={this.onValueChange} placeholder="Enter the event name" />
                    </Item>
                    <Item>
                        <TextArea rows={6} id="description" value={eventDetails.description} onChange={this.onValueChange} placeholder="Enter the event description" />
                    </Item>
                    <Item>
                        <Input type='text' id="organiser" value={eventDetails.organiser} onChange={this.onValueChange} placeholder="Enter the event organiser" />
                    </Item>
                    <button onClick={this.addEvent}>Add Event</button>
                </Modal>
                <div className="events-dom-container">
                    {eventDOM}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (props) => {
    return { events: { ...props.events } }
}

export default connect(mapStateToProps, eventActions)(EventComponent);