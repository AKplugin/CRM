import React, { Component } from 'react';
import { Input, Button, Icon, Modal, Form, notification } from 'antd';
import { connect } from 'react-redux';
import * as eventActions from '../../actions/eventAction';
const Search = Input.Search;
const { Item } = Form;
const { TextArea } = Input;

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
            displayType: true
        };
        this.showForm = this.showForm.bind(this);
        this.changeDisplay = this.changeDisplay.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.addEvent = this.addEvent.bind(this);
    }

    componentWillReceiveProps(prev, next) {
        if (prev.events.statusMsg && prev.events.statusMsg === 'success' && this.state.visible) {
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

    render() {
        const { eventDetails } = this.state;

        return (
            <div>
                Events
                <Button type="primary" icon="schedule" onClick={this.showForm}>Add Event</Button>

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

            </div>
        );
    }
}

const mapStateToProps = (props) => {
    return { events: { ...props.events } }
}

export default connect(mapStateToProps, eventActions)(EventComponent);