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
import { useParams }from 'react-router-dom';

import { Table, Tag, Space } from 'antd';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

export default function EventDescription(props: any) {
    let  id  = useParams();
    console.log(id)
    return (
        <div>{props.id}</div>
    )
}