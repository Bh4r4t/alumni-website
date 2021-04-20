import { Layout, Row, Col, Divider, Menu } from 'antd';
import { useState } from 'react';
import './members.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BusinessIcon from '@material-ui/icons/Business';
import SchoolIcon from '@material-ui/icons/School';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ApartmentIcon from '@material-ui/icons/Apartment';
import { Tabs, Input, Button, Tooltip, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { Card, Avatar,Tag } from 'antd';
const { Meta } = Card;

const { TabPane } = Tabs;
const { Option } = Select;

const { Content } = Layout;

export default function Company() {
    const [values, setvalues] = useState("company");
    const handleClick = ({ e }: { e: any }) => {
        console.log('click ', e);
        setvalues(e.key);
    };

    return (
        <div className="main-contain">
            <div className="member-contain">
                <Row>

                    
                </Row>
                <Row style={{ marginLeft: "3vh" }}>
                <Col span={1} style={{marginTop:"1vh"}}>
                        <Button href="http://localhost:3000/members" icon={<ArrowBackIcon />} size="large">
                            
                        
                        </Button>
                        </Col>
                    <Col span={3}>
                        <h1 style={{ fontSize: 45, fontWeight: 400 }}>Members </h1>
                    </Col>
                    <Col span={5} style={{ marginTop: 22, marginLeft: "1vh" }}>
                        <h1 style={{ fontSize: 25, fontWeight: 400, color: "gray" }}>
                            Browse members by
        </h1></Col>
                </Row>
                <Row style={{ marginLeft: "10vh", marginTop: -15 }}>

                    <Menu selectedKeys={[values]} mode="horizontal" style={{ width: "140vh" }}>

                    <Menu.Item key="location" style={{ color: "grey", fontSize: "2vh", fontWeight: "bold" }} icon={<LocationOnIcon style={{ fontSize: "2vh", color: "blue" }} />} >
                        <Link to="/members/location" style={{ color: "grey", fontSize: "2vh", fontWeight: "bold" }}>
                                 Location
          </Link>
        </Menu.Item>
                        <Menu.Item key="company" style={{ color: "grey", fontSize: "2vh", fontWeight: "bold" }} icon={<BusinessIcon style={{ fontSize: "2vh", color: "blue" }} />}>
                        <Link to="/members/company" style={{ color: "grey", fontSize: "2vh", fontWeight: "bold" }}>
                                Company
          </Link>
        </Menu.Item>

                        <Menu.Item key="institute" style={{ color: "grey", fontSize: "2vh", fontWeight: "bold" }} icon={<SchoolIcon style={{ fontSize: "2vh", color: "blue" }} />}>
                            <Link to="/members/institute" style={{ color: "grey", fontSize: "2vh", fontWeight: "bold" }}>
                                Institute
          </Link>
                        </Menu.Item>
                        <Menu.Item key="roles" style={{ color: "grey", fontSize: "2vh", fontWeight: "bold" }} icon={<BusinessCenterIcon style={{ fontSize: "2vh", color: "blue" }} />}>
                        <Link to="/members/roles" style={{ color: "grey", fontSize: "2vh", fontWeight: "bold" }}>
                                Roles
          </Link>
                        </Menu.Item>
                        <Menu.Item key="professional" style={{ color: "grey", fontSize: "2vh", fontWeight: "bold" }} icon={<ReceiptIcon style={{ fontSize: "2vh", color: "blue" }} />}>
                        <Link to="/members/prof_skills" style={{ color: "grey", fontSize: "2vh", fontWeight: "bold" }}>
                                Professional Skills
          </Link>
                        </Menu.Item>
                        <Menu.Item key="industry" style={{ color: "grey", fontSize: "2vh", fontWeight: "bold" }} icon={<ApartmentIcon style={{ fontSize: "2vh", color: "blue" }} />}>
                        <Link to="/members/industry" style={{ color: "grey", fontSize: "2vh", fontWeight: "bold" }}>
                                Industry
          </Link>
                        </Menu.Item>
                    </Menu>
                </Row>
                <div className="insti-contain">
                    <Row>
                        <Col span={24} offset={1}>
                            <h1>Browse by Company</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={20} offset={1}>

                            <Input id="search-insti" placeholder="Search" size="large" ></Input>
                        </Col>

                    </Row>
                    <br></br>
                    <Row style={{marginBottom:"2vh"}}>
                        <Col span={5} offset={1}>
                        <Link to="https://github.com/ant-design/ant-design/issues/1862" style={{color:"black"}}>
                                Amazon
                            </Link>
                        </Col>
                        <Col span={5} >
                        <Link to="https://github.com/ant-design/ant-design/issues/1862" style={{color:"black"}}>
                                Flipkart
                            </Link>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={5} >
                            <Link to="https://github.com/ant-design/ant-design/issues/1862" style={{color:"black"}}>
                               Snapdeal
                            </Link>
                        </Col>
                        <Col span={1}></Col>

                        <Col span={5} >
                        <Link to="https://github.com/ant-design/ant-design/issues/1862" style={{color:"black"}}>
                                Microsoft
                            </Link>
                        </Col>
                    </Row>
                    <Row style={{marginBottom:"2vh"}}>
                        <Col span={5} offset={1}>
                        <Link to="https://github.com/ant-design/ant-design/issues/1862" style={{color:"black"}}>
                                Apple
                            </Link>
                        </Col>
                        <Col span={5} >
                        <Link to="https://github.com/ant-design/ant-design/issues/1862" style={{color:"black"}}>
                                Samsung
                            </Link>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={5} >
                            <Link to="https://github.com/ant-design/ant-design/issues/1862" style={{color:"black"}}>
                                DE Shaw
                            </Link>
                        </Col>
                        <Col span={1}></Col>

                        <Col span={5} >
                        <Link to="https://github.com/ant-design/ant-design/issues/1862" style={{color:"black"}}>
                               Goldman Sachs
                            </Link>
                        </Col>
                    </Row>
                    <Row style={{marginBottom:"2vh"}}>
                        <Col span={5} offset={1}>
                        <Link to="https://github.com/ant-design/ant-design/issues/1862" style={{color:"black"}}>
                                Codeninja
                            </Link>
                        </Col>
                        <Col span={5} >
                        <Link to="https://github.com/ant-design/ant-design/issues/1862" style={{color:"black"}}>
                                Myntra
                            </Link>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={5} >
                            <Link to="https://github.com/ant-design/ant-design/issues/1862" style={{color:"black"}}>
                                Google
                            </Link>
                        </Col>
                        <Col span={1}></Col>

                        <Col span={5} >
                        <Link to="https://github.com/ant-design/ant-design/issues/1862" style={{color:"black"}}>
                                Paypal
                            </Link>
                        </Col>
                    </Row>
                </div>
            </div>

        </div>
    )
}


