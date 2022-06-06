import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./User.css";
import axios from 'axios';



class User extends React.Component {

    state = {
        txtmasv: '',
        txtpw: '',
        txtname: '',
        txtemail: '',
        txtaddres: '',
        txtphone: '',
        txtdob: ''
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'radio' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        const { txtmasv, txtpw, txtname, txtemail, txtaddres, txtphone, txtdob } = this.state;
        const { getData } = this.props;


        console.log("this", this.state)
        axios.get(`http://localhost:4000/admin/qlsv/user/`, {
            userid: txtmasv,
            password: txtpw,
            name: txtname,
            address: txtaddres,
            dob: txtdob,
            telephone: txtphone,
            role: "student",
        }).then(res => {
            console.log(res);
        });
    }

    onChange = (e) => {

    }
    render() {
        var { txtmasv, txtpw, txtname, txtemail, txtaddres, male, female } = this.state;
        return (
            <div className="user">
                <div className="userTitleContainer">
                    <h1 className="userTitle">SỬA THÔNG TIN</h1>
                    <Link to="/newUser">
                        <button className="userAddButton">Create</button>
                    </Link>

                </div>
                <div className="userContainer">
                    <div className="userShow">
                        <div className="userShowTop">
                            <img
                                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt=""
                                className="userShowImg"
                            />
                            <div className="userShowTopTitle">
                                <div>Họ tên: <span className="userShowUsername"></span></div>
                                <div>MSSV: <span className="userShowUsername"></span></div>
                                <div>Giới tính: <span className="userShowUsername">Nam</span></div>
                            </div>
                        </div>
                        <span className="userShowTt"><a href="#">Xem thông tin đầy đủ</a></span>
                        <div className="userShowBottom">
                            <span className="userShowTitle">THÔNG TIN CÁ NHÂN</span>
                            <div className="userShowInfo">
                                <PermIdentity className="userShowIcon" />
                                <span className="userShowInfoTitle">Lê Sĩ Nhật Linh</span>
                            </div>
                            <div className="userShowInfo">
                                <CalendarToday className="userShowIcon" />
                                <span className="userShowInfoTitle">10.12.1999</span>
                            </div>
                            <div className="userShowInfo">
                                <PhoneAndroid className="userShowIcon" />
                                <span className="userShowInfoTitle">091 234 5667</span>
                            </div>
                            <div className="userShowInfo">
                                <MailOutline className="userShowIcon" />
                                <span className="userShowInfoTitle">lesinhatlinh99@gmail.com</span>
                            </div>
                            <div className="userShowInfo">
                                <LocationSearching className="userShowIcon" />
                                <span className="userShowInfoTitle">Quảng Xương, Thanh Hoá</span>
                            </div>
                        </div>
                    </div>
                    <div className="userUpdate">
                        <span className="userUpdateTitle">Edit</span>
                        <form className="userUpdateForm" >
                            <div className="userUpdateLeft">
                                <div className="userUpdateItem">
                                    <label>Họ Tên</label>
                                    <input
                                        type="text"
                                        placeholder="họ tên"
                                        className="userUpdateInput"
                                        value={this.state.txtname}
                                        onChange={this.onm}
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Ngày sinh</label>
                                    <input
                                        type="text"
                                        placeholder="ngày sinh"
                                        className="userUpdateInput"
                                        value={this.state.txtdob}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Password</label>
                                    <input
                                        type="text"
                                        placeholder="password"
                                        className="userUpdateInput"
                                        value={this.state.txtpw}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        placeholder="nhập email"
                                        className="userUpdateInput"
                                        value={this.state.txtemail}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Số điện thoại</label>
                                    <input
                                        type="text"
                                        placeholder="+1 123 456 67"
                                        className="userUpdateInput"
                                        value={this.state.txtphone}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Địa chỉ</label>
                                    <input
                                        type="text"
                                        placeholder="nhập địa chỉ"
                                        className="userUpdateInput"
                                        value={this.state.txtaddres}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="userUpdateRight">
                                <button className="userUpdateButton" onClick={() => this.onSave()} >Cập nhật</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default User;