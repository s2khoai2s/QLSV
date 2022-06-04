import React from "react";
import "./Topbar.css";
import { NotificationsNone, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

import {
    LogoutOutlined
} from '@ant-design/icons';
export default function Topbar(props) {

    const { handleSetLogin } = props

    const navigate = useNavigate();
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Đại Học Bôn Ba</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <Link to="/taikhoan"><img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" /></Link>
                    <div className="topbarIconContainer" >
                        <div className="IconLogout">
                            <button onClick={() => {
                                localStorage.setItem('isLogin', false)
                                handleSetLogin(false)
                                navigate("/")
                            }}><LogoutOutlined /></button>
                            {/* <a href="/login" ></a> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}