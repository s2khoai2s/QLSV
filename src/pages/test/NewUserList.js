import React from "react";
import "./NewUser.css";
import axios from 'axios';
import { message, Button } from 'antd';
class NewUserList extends React.Component {

    state = {
        txtmasv: '',
        txtpw: '',
        txtname: '',
        txtaddres: '',
        txtphone: '',
        txtsex: '',
        txtdob: ''
    }

    info = () => {
        message.info('Thêm thành công');
    };

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'radio' ? target.checked : target.value;
        this.setState({
            [name]: value
        });


        // const { txtmasv, txtpw, txtaddres, txtname, txtemail } = this.state
        // this.setState({ txtmasv: e.target.value, txtaddres: e.target.value, txtpw: e.target.value, txtname: e.target.value })
    }

    onSave = (e) => {
        e.preventDefault();
        const { txtmasv, txtpw, txtname, txtaddres, txtsex, txtphone, txtdob } = this.state;


        console.log("this", this.state)
        axios.post('http://localhost:4000/admin/qlsv/user/adduser', {
            userid: txtmasv,
            password: txtpw,
            name: txtname,
            address: txtaddres,
            telephone: txtphone,
            sex: txtsex,
            role: "student",
            dob: txtdob
        }).then(res => {
            console.log(res);
        });
    }


    render() {
        var { txtmasv, txtpw, txtname, txtdob, txtaddres, txtsex, txtdob, txtphone } = this.state;
        return (
            <div className="newUser">
                <h1 className="newUserTitle">THÊM SINH VIÊN </h1>
                <form className="newUserForm" onSubmit={this.onSave} >
                    <div className="userShow">
                        <div className="newUserItem">
                            <label>msv</label>
                            <input type="text"
                                placeholder="nhập mã sinh viên"
                                name="txtmasv"
                                value={this.state.txtmasv}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="newUserItem">
                            <label>password</label>
                            <input type="text"
                                placeholder="*********"
                                name="txtpw"
                                value={txtpw}
                                onChange={this.onChange}
                            />
                        </div>

                        <div className="newUserItem">
                            <label>Họ tên</label>
                            <input type="text"
                                placeholder="nhập họ tên"
                                name="txtname"
                                value={txtname}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="newUserItem">
                            <label>Ngày sinh</label>
                            <input type="text"
                                placeholder="ngày sinh"
                                name="txtdob"
                                value={txtdob}
                                onChange={this.onChange}
                            />
                        </div>

                        <div className="newUserItem">
                            <label>Số điện thoại</label>
                            <input type="text"
                                placeholder="nhập số điện thoại"
                                value={txtphone}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="newUserItem">
                            <label>Địa chỉ</label>
                            <input type="text"
                                placeholder="nhập địa chỉ"
                                name="txtaddres"
                                value={txtaddres}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="newUserItem">
                            <label>Giới tính</label>
                            <div className="newUserGender">
                                <input type="radio"
                                    name="male"
                                    id="male"
                                    value={txtsex}
                                    onChange={this.onChange}
                                />
                                <label >Nam</label>
                                <input type="radio" name="female"
                                    id="female"
                                    value={txtsex}
                                    onChange={this.onChange}
                                />
                                <label >Nữ</label>
                            </div>
                        </div>
                        <div className="newUserItem">
                            <label>Hành động</label>
                            <select className="newUserSelect" name="active" id="active">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <button className="newUserButton" onClick={this.info} >LƯU</button>
                    </div>


                </form>
            </div>
        );
    }

}
export default NewUserList;