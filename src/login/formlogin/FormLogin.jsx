import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import React from 'react';
import './FormLogin.css';
import { useNavigate } from "react-router-dom"
const Login = (props) => {

    const { handleSetLogin } = props

    const navigate = useNavigate();
    const onFinish = (values) => {
        axios.post("http://localhost:4000/login", null, {
            headers: {
                useridlogin: values.username,
                passwordlogin: values.password
            }
        }).then(res => {
            if (res.data.role) {
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("role", res.data.role)
                localStorage.setItem("isLogin", true)
                alert("Đăng nhập thành công.", navigate("/home"));
                handleSetLogin(true)
            }
            else {
                console.log("Đăng nhập thất bại")
                alert("Đăng nhập thất bại");
            }
        })
            .catch(err => {
                console.log("Đăng nhập thất bại")
                alert(`Đăng nhập thất bại
                    Lỗi : ${err}`);
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='login' >
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
