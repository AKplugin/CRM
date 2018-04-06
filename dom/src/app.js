import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from './actions';
const FormItem = Form.Item;

class App extends Component {
    constructor(props){
        super();
        this.fireLogin = this.fireLogin.bind(this);
    }

    fireLogin(){
        console.log("hi")
        axios.get('/api/login');
    }
    componentWillMount(){
        // debugger;
    }

    

    render() {
        return (
            <Form className="login-form">
                <FormItem>
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                </FormItem>
                <FormItem>
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                </FormItem>
                <FormItem>
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.fireLogin}>
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
        )
    }
}

export default connect(null, actions)(App);