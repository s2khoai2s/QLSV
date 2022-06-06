import "./Diem.css";
import { DataGrid, GridToolbar, loading, totalPages } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DiemTBM } from '../../../dummyData';
import { EyeFilled } from '@ant-design/icons';

export default function Diem() {
    const [data, setData] = useState(DiemTBM);

    const columns = [
        { field: "id", headerName: "STT", width: 100 },
        { field: "userid", headerName: "MSV", width: 130 },
        {
            field: "name",
            headerName: "Họ tên",
            width: 120,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        {/* <img className="userListImg" src={params.row.avatar} alt="" /> */}
                        {params.row.name}
                    </div>
                );
            },
        },
        { field: "lop", headerName: "Lớp", width: 100 },
        { field: "khoa", headerName: "Khoa", width: 120 },
        {
            field: "Mh",
            headerName: "Môn học",
            width: 130,
        },
        { field: "diemTB", headerName: "Điểm TB", width: 130 },
        { field: "diemChu", headerName: "Điểm chữ", width: 150 },
        {
            field: "action",
            headerName: "Hành động",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <EyeFilled className="userListEdit" />
                        </Link>
                    </>
                );
            },
        },
    ];

    return (
        <div className="userList">
            <h1>Bảng Điểm</h1>

            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={25}
                components={{ Toolbar: GridToolbar }}
                getRowId={(row) => row.id}
            />


        </div>

    );
};