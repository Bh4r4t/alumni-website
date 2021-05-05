import { Layout, Row, Col, Divider, Menu } from 'antd';
import { useEffect, useState } from 'react';
import './Admindashboard.css';
import querystring from 'querystring'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BusinessIcon from '@material-ui/icons/Business';
import SchoolIcon from '@material-ui/icons/School';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Tabs, Input, Button, Tooltip, Select } from 'antd';
import { SearchOutlined, CalendarTwoTone, ClockCircleTwoTone } from '@ant-design/icons';
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import RollbackOutlined from '@ant-design/icons'
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { Table, Tag, Space } from 'antd';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { GetEventDetails } from '../../services/api/event';

export default function EventDescription(props: any) {
    var params = { id: '' }
    params = useParams();
    console.log(params.id)
    const global_state = useSelector((state: any) => state.authReducer.user);
    const [event, setevent] = useState<any>({});

    useEffect(() => {
        GetEventDetails(global_state.token, params.id)
            .then(response => {
                console.log(response.data)
                setevent(response.data)
                console.log(event)
            })

    }, [])
    return (
        <div className="admain-contain">
            <div className="addash-contain">
                <Row style={{ marginLeft: "3vh" }}>
                    <Col span={1} style={{ marginTop: "1vh" }}>
                        <Button href="/admin_dashboard/pending_events" icon={<ArrowBackIcon />} size="large">


                        </Button>
                    </Col>
                    <Col span={3}>
                        <h1 style={{ fontSize: 30, fontWeight: 400 }}>Event Details</h1>
                    </Col>
                </Row>
                <div style={{ marginLeft: "10vh", backgroundColor: "white", paddingLeft: "2vh", marginRight: "5vh", paddingTop: "2vh", paddingBottom: "2vh" }}>
                    <Row style={{ marginBottom: "-2vh" }}>
                        <h1>{event.event_name}</h1>
                    </Row>
                    <Row>
                        <Col xs={22}>
                            <hr style={{ backgroundColor: "blue", height: "0.4vh" }}></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span style={{ fontSize: "2vh" }}><CalendarTwoTone /> Date: {event.event_date?.split('T')[0]}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span style={{ fontSize: "2vh" }}><ClockCircleTwoTone /> Time: {event.event_time}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <LocationOnIcon style={{ color: "#1890ff", marginTop: 1 }} />
                        </Col>
                        <Col>
                            <span style={{ fontSize: "2vh", marginBottom: "10vh" }}> Venue: {event.event_venue}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={22}>
                            <hr style={{ backgroundColor: "blue", height: "0.3vh" }}></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span style={{ fontSize: "2vh" }}>{event.event_description}</span>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>

    )
}