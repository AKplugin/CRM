import React, { Component } from 'react';
import { Input, Button, Icon, Modal, Form, notification } from 'antd';
const Search = Input.Search;
const { Item } = Form;

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
        const { teacherDetails } = this.state;
        teacherDetails[event.target.id] = event.target.value;
        this.setState({
            teacherDetails
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
                        <Input type='text' id="description" value={eventDetails.description} onChange={this.onValueChange} placeholder="Enter the event description" />
                    </Item>
                    <Item>
                        <Input type='text' id="startdate" value={eventDetails.startdate} onChange={this.onValueChange} placeholder="Enter the event start date" />
                    </Item>
                    <button onClick={this.addTeacher}>Add Event</button>
                </Modal>

            </div>
        );
    }
}

export default EventComponent;