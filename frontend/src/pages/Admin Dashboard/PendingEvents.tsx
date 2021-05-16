import {  Row, Col } from 'antd';
import { useEffect, useState } from 'react';
import './Admindashboard.css';
import {  Button } from 'antd';
import { Table, Tag, Space } from 'antd';
import EventDescription from './EventDescription';
import { CancelEvent, ConfirmEvent, GetPendingEvents } from '../../services/api/event';
import { useDispatch, useSelector } from 'react-redux';


export default function PendingEvents() {
    const global_state = useSelector((state: any) => state.authReducer.user);
    const [rowsregular, setrowsregular] = useState<any>(null);
    const [refresh, setrefresh] = useState(false);
    const handleConfirm = (eventid: any) => {
        console.log(eventid)
        ConfirmEvent(global_state.token,eventid)
            .then(response => {
                if (response.data === "success") {
                    alert('Event confirmed')
                    setrefresh(!refresh)
                }
                else
                    alert("Error in confirming event")
            }
        )
    }

    const handleCancel = (eventid:any) => {
        CancelEvent(global_state.token,eventid)
            .then(response => {
                if (response.data === "success") {
                    alert('Event cancelled')
                    setrefresh(!refresh)
                }
                else
                    alert("Error in cancelling event")
            }
        )
    }

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
    var rows_regular: any = [];
    useEffect(() => {

        GetPendingEvents(global_state.token)
            .then(response => {
                console.log(response.data.events)
                response.data.events.map((details: any,) => (
                    rows_regular.push({
                        event_name: details.event_name,
                        event_date: details.event_date,
                        event_time: details.event_time,
                        event_venue: details.event_venue,
                        created_by: details.created_by,
                        Action: <Button color="primary" onClick={() => { handleConfirm(details._id) }} style={{ backgroundColor: "blue", color: "white", fontWeight: 600 }}>Confirm</Button>,
                        Cancel: <Button color="secondary" onClick={()=>{handleCancel(details._id)}} style={{ backgroundColor: "red", color: "white", fontWeight: 600 }}>Cancel</Button>,
                        View: <Button color="lightsecondary" href={"/admin_dashboard/pending_events/event_description/" + details._id} > View </Button>
                    })
                ))
                setrowsregular(rows_regular)
            })
    }, [refresh])

    return (
        <div className="admain-contain">
            <div className="addash-contain">
                <Row>
                    <Col span={6}>
                        <h1 style={{ fontSize: 30, fontWeight: 400 }}>Pending Events</h1>
                    </Col>
                </Row>
                <Row>
                    <Col span={23}>

                        <Table columns={columns} dataSource={rowsregular} pagination={false} />
                    </Col>
                </Row>
            </div>
        </div>

    )
}