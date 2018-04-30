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
        let staffDOM = '';
        let columns = [{
            title: 'S.No',
            key: 'sno',
        }, {
            title: 'Name',
            key: 'name',
        }];
        let data = [{
            sno: 1,
            name: 'name'
        }]
        return (
            <Table columns={columns} dataSource={data} />
        )
    }
}

function mapStateToProps(item) {
    return { ...item };
}

export default connect(mapStateToProps, actions)(ListComponent);