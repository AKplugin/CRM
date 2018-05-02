import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Input, Button, Icon, Modal, Form, notification } from 'antd';
import ListComponent from '../Staffs/listComponent';
import TableComponent from '../Staffs/tableComponent';
const Search = Input.Search;
const { Item } = Form;

class StaffListComponent extends Component {

    constructor(props) {
        super();
        this.state = {};
        this.onSearch = this.onSearch.bind(this);
        this.state = {
            visible: false,
            teacherDetails: {
                name: '',
                qualification: '',
                email: ''
            },
            displayType: true
        };
        this.showForm = this.showForm.bind(this);
        this.addTeacher = this.addTeacher.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.changeDisplay = this.changeDisplay.bind(this);
    }

    changeDisplay() {
        this.setState({
            displayType: !this.state.displayType
        });
    }

    onSearch(event) {
        this.props.searchTeacher({
            search: event.target.value
        });
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
        if (prevProps.statusMessage && prevProps.statusMessage.type === 'success' && this.state.visible) {
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

    componentWillMount() {
        this.props.getTeacher();
    }

    render() {
        const { teacherDetails } = this.state;

        return (
            <div>
                <div className="staff-nav-bar">
                    <Button type="primary" icon="user-add" onClick={this.showForm}>Add Staff</Button>
                    <Search placeholder="input search text" className="staff-nav-search" onChange={this.onSearch} />
                    <span><Icon onClick={this.changeDisplay} type={this.state.displayType ? "table" : "appstore-o"} /></span>
                </div>
                <Modal title="Add Staff" visible={this.state.visible} onOk={this.handleOk} onCancel={this.showForm}
                    footer={[]}>
                    <Item>
                        <Input type='text' id="name" value={teacherDetails.name} onChange={this.onValueChange} placeholder="Enter the staff name" />
                    </Item>
                    <Item>
                        <Input type='text' id="qualification" value={teacherDetails.qualification} onChange={this.onValueChange} placeholder="Enter the staff qualification" />
                    </Item>
                    <Item>
                        <Input type='text' id="email" value={teacherDetails.email} onChange={this.onValueChange} placeholder="Enter the staff email" />
                    </Item>
                    <button onClick={this.addTeacher}>Add Staff</button>
                </Modal>

                {this.props.staff.listOfStaff ? (this.state.displayType ? <ListComponent listJSON={this.props.staff.listOfStaff} /> : <TableComponent listJSON={this.props.staff.listOfStaff} />) : ''}
            </div>
        )
    }
}

function mapStateToProps(item) {
    return { ...item };
}

export default connect(mapStateToProps, actions)(StaffListComponent);