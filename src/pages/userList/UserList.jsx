import "./UserList.css";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Popconfirm, message, Modal } from 'antd';
// const loginInfo = require ("../../loginInfo");
import { loginInfo, role } from "../../loginInfo";
import {
    EditFilled
} from '@ant-design/icons';
import axios from "axios";

export default function UserList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:4000/${role()}/qlsv/user/`, { headers: loginInfo() })
            .then(res => setData(res.data));
        console.log(data);
    }, [])

    const handleDelete = (_id) => {
        axios.delete(`http://localhost:4000/${role()}/qlsv/user/${_id}`, { headers: loginInfo() })
            .then(res => {
                console.log(res);
                setData(data.filter((item) => item._id !== _id))
            });
    }
    // function confirm(e) {
    //     console.log(e);
    //     message.success("Click on Yes");
    // }

    const confirm = () => {
        Modal.confirm({
            title: 'Do you Want to delete these items?',
            icon: null,
            content: 'Some descriptions',

            onOk() {
                console.log('OK');
            },

            onCancel() {
                console.log('Cancel');
            },
        });
    }


    const columns = [
        { field: "userid", headerName: "MSV", width: 130 },
        {
            field: "name",
            headerName: "Họ tên",
            width: 180,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        {/* <img className="userListImg" src={params.row.avatar} alt="" /> */}
                        {params.row.name}
                    </div>
                );
            },
        },
        { field: "dob", headerName: "Ngày sinh", width: 150 },
        {
            field: "address",
            headerName: "Địa chỉ",
            width: 150,
        },
        { field: "telephone", headerName: "Phone", width: 150 },
        { field: "sex", headerName: "Giới tính", width: 100 },
        {
            field: "action",
            headerName: "Hành động",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row._id}>
                            <EditFilled className="userListEdit" />
                        </Link>
                        <DeleteOutline
                            className="userListDelete"
                            onClick={(comfirm) => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="userList">
            <h2 className="tieude">DANH SÁCH SINH VIÊN</h2>
            <div> <Link to="/newUser">
                <button className="userAdd">Thêm sinh viên</button>
            </Link>
            </div>
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                components={{ Toolbar: GridToolbar }}
                pageSize={25}
                getRowId={(row) => row._id}
            />
        </div>

    );
};