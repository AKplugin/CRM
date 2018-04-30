import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';

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
        debugger
        this.props.updateStaff();
    }

    componentWillMount() {
        this.props.getTeacherDetails({ id: this.props.match.params.id });
    }

    render() {
        let templateRender = '';

        if (this.props.staff.selectedTeacher) {
            const { selectedTeacher } = this.props.staff;
            templateRender = <Container>
                <form onSubmit={() => this.updateDetails}>
                    <Row>
                        <Col xs="3" sm="3">
                            <img style={{ width: '100%' }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        </Col>
                        <Col className="detail-list">
                            <span className="staff-name">
                                <Row>
                                    <Col xs="3" sm="3">Name: </Col>
                                    <Col xs="9" sm="9">
                                        {this.state.isEdit ? <input type="text" name="name" value={selectedTeacher.name} /> : (<text>{selectedTeacher.name}</text>)}
                                    </Col>
                                </Row>
                            </span>
                            <span className="staff-qualification">
                                <Row>
                                    <Col xs="3" sm="3">Qualification: </Col>
                                    <Col xs="9" sm="9">
                                        {this.state.isEdit ? <input type="text" name="qualification" value={selectedTeacher.qualification} /> : (<text>{selectedTeacher.qualification}</text>)}
                                    </Col>
                                </Row>
                            </span>
                            <span className="staff-qualification">
                                <Row>
                                    <Col xs="3" sm="3">Joining Date: </Col>
                                    <Col xs="9" sm="9">
                                        {this.state.isEdit ? <input type="text" name="joindate" value={selectedTeacher.name} /> : (<text>{selectedTeacher.qualification}</text>)}
                                    </Col>
                                </Row>
                            </span>
                            <span className="staff-qualification">
                                <Row>
                                    <Col xs="3" sm="3">Total Experience: </Col>
                                    <Col xs="9" sm="9">
                                        {this.state.isEdit ? <input type="text" value={selectedTeacher.qualification} /> : (<text>{selectedTeacher.qualification}</text>)}
                                    </Col>
                                </Row>
                            </span>
                            <span className="staff-qualification">
                                <Row>
                                    <Col xs="3" sm="3">Address: </Col>
                                    <Col xs="9" sm="9">
                                        {this.state.isEdit ? <input type="text" value={selectedTeacher.qualification} /> : (<text>{selectedTeacher.qualification}</text>)}
                                    </Col>
                                </Row>
                            </span>
                            <span className="staff-qualification">
                                <Row>
                                    <Col xs="3" sm="3">
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
            <div>
                <div className="bread-nav">
                    <Breadcrumb>
                        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/dashboard">Staffs</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Data</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div>
                    <div>

                    </div>
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