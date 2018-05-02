import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import { Input, Select, DatePicker } from 'antd';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
const Option = Select.Option;
const { TextArea } = Input;

class StaffComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
        this.removeRecord = this.removeRecord.bind(this);
        this.enableEdit = this.enableEdit.bind(this);
        this.updateDetails = this.updateDetails.bind(this);
    }

    removeRecord(id) {
        this.props.removeStaff({ 'id': this.props.staff.selectedTeacher._id });
        this.props.history.push('/dashboard');
    }

    enableEdit(event) {
        this.setState({
            isEdit: !this.state.isEdit
        });
    }

    updateDetails(event) {
        this.props.updateStaff();
    }

    componentWillMount() {
        this.props.getTeacherDetails({ id: this.props.match.params.id });
    }

    render() {
        let templateRender = '';
        const { selectedTeacher } = this.props.staff;

        if (this.props.staff.selectedTeacher) {
            templateRender = <Container>
                <form onSubmit={() => this.updateDetails}>
                    <Row>
                        <Col xs="3" sm="3">
                            <img style={{ width: '100%' }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        </Col>
                        <Col className="detail-list">
                            <span className="staff-name">
                                <Row>
                                    <Col xs="2" sm="2">Name: </Col>
                                    <Col xs="3" sm="3">
                                        <Input name="name" value={selectedTeacher.name} />
                                    </Col>

                                    <Col xs="2" sm="2">Gender: </Col>
                                    <Col xs="3" sm="3">
                                        <Select name="gender" value={selectedTeacher.gender}>
                                            <Option value="male">Male</Option>
                                            <Option value="female">Female</Option>
                                        </Select>
                                    </Col>
                                </Row>
                            </span>
                            <span className="staff-qualification">
                                <Row>
                                    <Col xs="2" sm="2">Qualification: </Col>
                                    <Col xs="3" sm="3">
                                        <Input name="qualification" value={selectedTeacher.qualification} />
                                    </Col>

                                    <Col xs="2" sm="2">Joining Date: </Col>
                                    <Col xs="3" sm="3">
                                        <DatePicker format="YYYY-MM-DD" />
                                    </Col>
                                </Row>
                            </span>
                            <span className="staff-qualification">
                                <Row>
                                    <Col xs="2" sm="2">Total Experience: </Col>
                                    <Col xs="8" sm="8">
                                        <Input name="experience" value={selectedTeacher.experience} />
                                    </Col>
                                </Row>
                            </span>
                            <span className="staff-qualification">
                                <Row>
                                    <Col xs="2" sm="2">Address: </Col>
                                    <Col xs="8" sm="8">
                                        <TextArea rows={6} name="address" value={selectedTeacher.address} />
                                    </Col>
                                </Row>
                            </span>
                            <span className="staff-qualification">
                                <Row>
                                    <Col xs="2" sm="2">
                                        {this.state.isEdit ?
                                            <button type="submit">Update</button> :
                                            <input type="button" onClick={this.enableEdit} value="Edit" />}
                                    </Col>
                                    <Col xs="9" sm="9"><button onClick={this.removeRecord}>Remove Record</button></Col>
                                </Row>
                            </span>
                        </Col>
                    </Row>
                </form>
            </Container >
        }

        return (
            <div className="staff-area-element">
                <div className="bread-nav">
                    <Breadcrumb>
                        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/dashboard">Staffs</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{selectedTeacher.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div>
                    <div>
                        {templateRender}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(item) {
    return { ...item };
}

export default connect(mapStateToProps, actions)(StaffComponent);