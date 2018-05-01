import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import { Input, Select,Table, Icon, Avatar, Popconfirm, message, Modal, notification, Card, Col, Row, Form } from 'antd';

class ListComponent extends Component {

    constructor(props) {
        super();
        this.state = {};
    }

    render() {
        let staffData = [];
        let columns = [{
            title: 'S.No',
            key: 'sno',
            dataIndex: 'sno'            
        }, {
            title: 'Name',
            key: 'name',
            dataIndex: 'name',
            render: (text, record) => <Link to={`/staff/${record.id}`}>{text}</Link>
        }, {
            title: 'Qualification',
            key: 'qualification',
            dataIndex: 'qualification'
        }];
        
        this.props.listJSON.map((element, index) => {
            staffData.push({
                sno: index+1,
                name: element.name,
                qualification: element.qualification,
                id: element._id
            });
        });

        return (
            <Table columns={columns} dataSource={staffData} />
        )
    }
}

function mapStateToProps(item) {
    return { ...item };
}

export default connect(mapStateToProps, actions)(ListComponent);