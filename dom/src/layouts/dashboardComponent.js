import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import { Input, Form, Select, Icon, Avatar, Popconfirm, message, Button, Modal, notification } from 'antd';
import Navigation from './components/navigation';
import StaffComponent from './staffComponent';

class DashboardComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            visible: false,
            teacherDetails: {
                name: '',
                qualification: ''
            }
        };
        this.showForm = this.showForm.bind(this);
        this.addTeacher = this.addTeacher.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }

    showForm() {
        this.setState({
            visible: !this.state.visible
        });
    }

    addTeacher() {
        this.props.addTeacher(this.state.teacherDetails);
    }

    componentWillReceiveProps(prevProps, nextProps) {
        if (prevProps.statusMessage.type === 'success') {
            this.setState({
                visible: false
            });
            const openNotificationWithIcon = (type) => {
                notification[type]({
                    message: 'Added the record successfully.'
                });
            };
            openNotificationWithIcon('success');
        }
    }

    onValueChange(event) {
        const { teacherDetails } = this.state;
        teacherDetails[event.target.id] = event.target.value;
        this.setState({
            teacherDetails
        });
    }

    render() {
        const { teacherDetails } = this.state;

        let staffDOM = '';

        if(this.props.staff.listOfStaff){
            staffDOM = this.props.staff.listOfStaff.map((element) => {
                return <div>
                        {element.name} {element.qualification}
                    </div>
            });
        }

        return (
            <div>
                <button onClick={this.showForm}>Add Teacher</button>
                <Modal title="Add Teacher" visible={this.state.visible} onOk={this.handleOk} onCancel={this.showForm} >
                    <Input type='text' id="name" value={teacherDetails.name} onChange={this.onValueChange} />
                    <Input type='text' id="qualification" value={teacherDetails.qualification} onChange={this.onValueChange} />
                    <button onClick={this.addTeacher}>Register</button>
                </Modal>
                
                {staffDOM}

            </div>
        )
    }
}

function mapStateToProps(item) {
    return { ...item };
}

export default connect(mapStateToProps, actions)(DashboardComponent);