import { Layout, Row, Col, Divider, Menu } from 'antd';
import { useEffect, useState } from 'react';
import './Admindashboard.css';
import querystring from 'querystring'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BusinessIcon from '@material-ui/icons/Business';
import SchoolIcon from '@material-ui/icons/School';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ApartmentIcon from '@material-ui/icons/Apartment';
import { Tabs, Input, Button, Tooltip, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import RollbackOutlined from '@ant-design/icons'
import React from 'react';
import { Table, Tag, Space } from 'antd';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import EventDescription from './EventDescription';
import { GetPendingEvents } from '../../services/api/event';
import { useDispatch, useSelector } from 'react-redux';


export default function PendingEvents() {
    const global_state = useSelector((state: any) => state.authReducer.user);
    const [rowsregular, setrowsregular] = useState<any>(null);
    const columns = [

        {
            title: 'Event Name',
            key: 'event_name',
            dataIndex: 'event_name'
        },
        {
            title: 'Event Date',
            key: 'event_date',
            dataIndex: 'event_date'
        },
        {
            title: 'Event Venue',
            key: 'event_venue',
            dataIndex: 'event_venue',
        },
        {
            title: 'Created By',
            key: 'created_by',
            dataIndex: 'created_by'
        },
        {
            title: 'Event Time',
            key: 'event_time',
            dataIndex: 'event_time'
        },
        {
            title: 'Action',
            key: 'Action',
            dataIndex: 'Action'
        },
        {
            title: 'Cancel',
            key: 'Cancel',
            dataIndex: 'Cancel'
        }
        ,
        {
            title: 'View Event Description',
            key: 'View',
            dataIndex: 'View'
        }
    ];
    var rows_regular :any= [];
    useEffect(() => {

        GetPendingEvents(global_state.token)
            .then(response => {
                console.log(response.data.events)
                response.data.events.map((details:any,) => (
                    rows_regular.push({
                        event_name: details.event_name,
                        event_date: details.event_date,
                        event_time: details.event_time,
                        event_venue: details.event_venue,
                        created_by: details.created_by,
                        Action: <Button color="primary" style={{ backgroundColor: "blue", color: "white", fontWeight: 600 }}>Confirm</Button>,
                        Cancel: <Button color="secondary" style={{ backgroundColor: "red", color: "white", fontWeight: 600 }}>Cancel</Button>,
                        View: <Button color="lightsecondary" href="/admin_dashboard/pending_events/event_description/123" onClick={() => { return <EventDescription id="hi" /> }}> View </Button>
                    })
                ))
                setrowsregular(rows_regular)
            })
    }, [])

    return (
        <div className="admain-contain">
            <div className="addash-contain">
                <Row>
                    <Col span={23}>

                        <Table columns={columns} dataSource={rowsregular} pagination={false} />
                    </Col>
                </Row>
            </div>
        </div>

    )
}