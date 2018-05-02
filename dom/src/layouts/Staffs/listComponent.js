import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import { Icon, Avatar, Card, Col, Row } from 'antd';
const { Meta } = Card;

class ListComponent extends Component {

    constructor(props) {
        super();
        this.state = {
            visible: false,
            teacherDetails: {
                name: '',
                qualification: '',
                email: ''
            }
        };
    }

    render() {
        let staffDOM = '';

        staffDOM = this.props.listJSON.map((element) => {
            return <Col span={6} key={element._id}>
                <Card
                    style={{ width: '100%' }}
                    actions={[<Icon type="setting" />, <Link to={{ pathname: "/staff/" + element._id, state: { foo: 'bar' } }}><Icon type="edit" /></Link>, <Icon type="ellipsis" />]}
                >
                    <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={element.name}
                        description={element.qualification}
                    />
                </Card>
            </Col>
        });

        return (
            <Row gutter={8}>
                {staffDOM}
            </Row>
        )
    }
}

function mapStateToProps(item) {
    return { ...item };
}

export default connect(mapStateToProps, actions)(ListComponent);