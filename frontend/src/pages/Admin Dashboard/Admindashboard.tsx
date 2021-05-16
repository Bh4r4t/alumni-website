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
import img1 from '../../assets/profile.png';
import axios from 'axios';

export default function Admindashboard() {

    const handleClick = (str: any) => {
        console.log(str)
    }

    return (
        <div className="admain-contain">
            <div className="addash-contain">
                <Row style={{ marginLeft: "10vh" }}>
                    <Col span={3}>
                        <h1 style={{ fontSize: 30, fontWeight: 400 }}>Admin Panel </h1>
                    </Col>
                    <Col span={5} style={{ marginTop: 6 }}>
                        <h1 style={{ fontSize: 25, fontWeight: 400, color: "gray" }}>
                            Manage your site content
        </h1></Col>
                </Row>
                <Row style={{ backgroundColor: "white", paddingTop: 10, paddingLeft: 10, marginLeft: "10vh" }}>
                    <Col span={3}>
                        <h1 style={{ fontSize: 25, fontWeight: 200 }}>Quick Actions: </h1>
                    </Col>
                    <Col span={12} style={{ marginTop: 4 }}>
                        <Button type="primary" shape="round" size="middle" style={{ marginRight: 6 }}>
                            Post News
                            </Button>

                        <Button type="primary" shape="round" size="middle" style={{ backgroundColor: "green", marginRight: 6 }} href="/events/create_event_1">
                            Create Event
                            </Button>
                        <Button type="primary" shape="round" size="middle" style={{ backgroundColor: "orange", marginRight: 6 }} href="/post_job">
                            Post a Job
                            </Button>
                    </Col>
                </Row>
                <Row style={{ marginTop: 10, backgroundColor: "white", paddingTop: 10, paddingLeft: 10, marginLeft: "10vh" }}>
                    <Col span={4}>
                        <h1 style={{ fontSize: 25, fontWeight: 200 }}>Pending Actions: </h1>
                    </Col>
                    <Col span={1} style={{ marginTop: 0 }}>
                        <Button type="dashed" href="/admin_dashboard/pending_events" size="large" style={{ marginLeft: -60, fontSize: "20px", color: "black", fontWeight:400}}>Pending Events Approval</Button>
                    </Col>
                </Row>
            </div>
        </div>

    )
}