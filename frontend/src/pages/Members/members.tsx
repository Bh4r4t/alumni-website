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
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import RollbackOutlined from '@ant-design/icons'

const { Meta } = Card;

const { TabPane } = Tabs;
const { Option } = Select;

const { Content } = Layout;



export default function Members() {
    const [values, setvalues] = useState("location");
    const handleClick = ({ e }: { e: any }) => {
        console.log('click ', e);
        setvalues(e.key);
    };

    return (
        <div className="main-contain">
            <div className="member-contain">
                
                <Row style={{ marginLeft: "10vh" }}>
                    <Col span={3}>
                        <h1 style={{ fontSize: 45, fontWeight: 400 }}>Members </h1>
                    </Col>
                    <Col span={5} style={{ marginTop: 22, marginLeft: "1vh" }}>
                        <h1 style={{ fontSize: 25, fontWeight: 400, color: "gray" }}>
                            Browse members by
        </h1></Col>
                </Row>
                <Row style={{ marginLeft: "10vh", marginTop: -15 }}>

                    <Menu  mode="horizontal" style={{ width: "140vh" }}>
                        


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
                <div className="search-contain">
                    <Row>
                        <div className="card-container">
                            <Tabs type="card">
                                <TabPane tab="Name, Email" key="1">
                                    <Row style={{ marginTop: "2vh" }}>
                                        <Col span={20}>
                                            <Input placeholder="Name or Email" id="name" size="large" />
                                        </Col>
                                        <Col span={1}>
                                        </Col>
                                        <Col span={2}>
                                            <Tooltip title="search">
                                                <Button type="primary" size="large" shape="circle" icon={<SearchOutlined />} style={{ color: "white", backgroundColor: "green" }} />
                                            </Tooltip>

                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tab="Course & Year" key="2">
                                    <Row style={{ marginTop: "2vh" }}>
                                        <Col span={4}>
                                            <Select size="large" style={{ width: "27vh" }} placeholder="Select Degree" >
                                                <Option value="undergrad">UnderGraduate</Option>
                                                <Option value="postgrad">PostGraduate</Option>
                                                <Option value="doctoral">Doctoral</Option>
                                                <Option value="dualdegree">Dual Degree</Option>

                                            </Select>
                                        </Col>
                                        <Col span={1}></Col>
                                        <Col span={4}>
                                            <Select size="large" style={{ width: "27vh" }} placeholder="Select Course" >
                                                <Option value="btech">B.Tech</Option>
                                                <Option value="msc">M.Sc.</Option>
                                                <Option value="mtech">M.Tech.</Option>
                                                <Option value="phd">Ph.D.</Option>
                                                <Option value="dd">Dual Degree</Option>

                                            </Select>
                                        </Col>
                                        <Col span={1}></Col>
                                        <Col span={4}>
                                            <Select size="large" style={{ width: "27vh" }} placeholder="Select Stream" >
                                                <Option value="0">-- Select Stream --</Option>
                                                <Option value="96">Biomedical Engineering</Option>
                                                <Option value="20">Chemical Engineering</Option>
                                                <Option value="52">Chemistry</Option>
                                                <Option value="10">Civil Engineering</Option>
                                                <Option value="27">Computer Science &amp; Engineering</Option>
                                                <Option value="54">Computer Science Engineering</Option>
                                                <Option value="104">Electrical Engineering</Option>
                                                <Option value="1536">Humanities and Social Sciences</Option>
                                                <Option value="1626">Materials &amp; Energy Engineering</Option>
                                                <Option value="53">Mathematics</Option>
                                                <Option value="11">Mechanical Engineering</Option>
                                                <Option value="51">Physics</Option>

                                            </Select>
                                        </Col>
                                        <Col span={1}></Col>
                                        <Col span={4}>
                                            <Select size="large" style={{ width: "27vh" }} placeholder="Select Graduation Year" >
                                                <Option value="">Graduation Year</Option>
                                                <Option value="2008">2008</Option>
                                                <Option value="2009">2009</Option>
                                                <Option value="2010">2010</Option>
                                                <Option value="2011">2011</Option>
                                                <Option value="2012">2012</Option>
                                                <Option value="2013">2013</Option>
                                                <Option value="2014">2014</Option>
                                                <Option value="2015">2015</Option>
                                                <Option value="2016">2016</Option>
                                                <Option value="2017">2017</Option>
                                                <Option value="2018">2018</Option>
                                                <Option value="2019">2019</Option>
                                                <Option value="2020">2020</Option>
                                                <Option value="2021">2021</Option>
                                                <Option value="2022">2022</Option>
                                                <Option value="2023">2023</Option>
                                                <Option value="2024">2024</Option>
                                                <Option value="2025">2025</Option>
                                                <Option value="2026">2026</Option>

                                            </Select>
                                        </Col>
                                        <Col span={2} style={{ marginLeft: "7vh" }}>
                                            <Tooltip title="search">
                                                <Button type="primary" size="large" shape="circle" icon={<SearchOutlined />} style={{ color: "white", backgroundColor: "green" }} />
                                            </Tooltip>

                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tab="Location" key="3">
                                    <Row style={{ marginTop: "2vh" }}>
                                        <Col span={6}>
                                            <Input size="large" placeholder="City" id="city" />
                                        </Col>
                                        <Col span={1}>
                                        </Col>
                                        <Col span={6}>
                                            <Input size="large" placeholder="State" id="state" />

                                        </Col>
                                        <Col span={1}> </Col>
                                        <Col span={6}>
                                            <Input size="large" placeholder="Country" id="country" />


                                        </Col>


                                        <Col span={1}> </Col>

                                        <Col span={2}>
                                            <Tooltip title="search">
                                                <Button type="primary" size="large" shape="circle" icon={<SearchOutlined />} style={{ color: "white", backgroundColor: "green" }} />
                                            </Tooltip>

                                        </Col>
                                    </Row>

                                </TabPane>
                                <TabPane tab="Company" key="4">
                                    <Row style={{ marginTop: "2vh" }}>
                                        <Col span={20}>
                                            <Input size="large" placeholder="Company Name" id="company" />

                                        </Col>
                                        <Col span={1}>
                                        </Col>
                                        <Col span={2}>
                                            <Tooltip title="search">
                                                <Button type="primary" size="large" shape="circle" icon={<SearchOutlined />} style={{ color: "white", backgroundColor: "green" }} />
                                            </Tooltip>

                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tab="Professional Skills" key="5">
                                    <Row style={{ marginTop: "2vh" }}>
                                        <Col span={4} style={{ marginRight: "1vh" }}>
                                            <Input size="large" placeholder="Roles" id="role" />
                                        </Col>

                                        <Col span={4} style={{ marginRight: "1vh" }}>
                                            <Input size="large" placeholder="Industries" id="industry" />

                                        </Col>
                                        <Col span={4} style={{ marginRight: "1vh" }}>
                                            <Input size="large" placeholder="Professional" id="professional" />


                                        </Col>
                                        <Col span={3} style={{ marginRight: "4vh" }}>
                                            <Select size="large" style={{ width: "20vh" }} placeholder="Experience Year From" >
                                                <Option value="yf1">1</Option>
                                                <Option value="yf2">2</Option>
                                                <Option value="yf3">3</Option>
                                                <Option value="yf4">4</Option>
                                                <Option value="yf5">5</Option>
                                                <Option value="yf6">6</Option>
                                                <Option value="yf7">7</Option>
                                                <Option value="yf8">8</Option>
                                                <Option value="yf9">9</Option>
                                                <Option value="yf10">10</Option>


                                            </Select>
                                        </Col>
                                        <Col span={3} style={{ marginRight: "1vh" }}>
                                            <Select size="large" style={{ width: "20vh" }} placeholder="Experience Year To" >
                                                <Option value="yt1">1</Option>
                                                <Option value="yt2">2</Option>
                                                <Option value="yt3">3</Option>
                                                <Option value="yt4">4</Option>
                                                <Option value="yt5">5</Option>
                                                <Option value="yt6">6</Option>
                                                <Option value="yt7">7</Option>
                                                <Option value="yt8">8</Option>
                                                <Option value="yt9">9</Option>
                                                <Option value="yt10">10</Option>


                                            </Select>
                                        </Col>
                                        <Col span={1}> </Col>

                                        <Col span={2}>
                                            <Tooltip title="search">
                                                <Button type="primary" size="large" shape="circle" icon={<SearchOutlined />} style={{ color: "white", backgroundColor: "green" }} />
                                            </Tooltip>

                                        </Col>
                                    </Row>

                                </TabPane>

                            </Tabs>
                        </div>

                    </Row>
                </div>

                <Row style={{ marginLeft: "10vh", marginTop: "2vh", width: "170vh" }}>
                    <Col span={5}>
                        <Card
                            style={{ width: 300 }}
                            cover={
                                <Avatar style={{ marginLeft: "5vh", marginTop: "2vh" }} size={200} icon={<img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />} />

                            }

                        >
                            <Divider orientation="center">
                                <Meta
                                    title={<h1 style={{ fontSize: "3vh", marginBottom: "0" }}>Naveen</h1>}
                                    description="B.Tech 2018,CSE"
                                />
                            </Divider>
                        </Card>
                    </Col>
                    <Col span={5} style={{ marginRight: "0" }}>
                        <Card
                            style={{ width: 300 }}
                            cover={
                                <Avatar style={{ marginLeft: "5vh", marginTop: "2vh" }} size={200} icon={<img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />} />

                            }

                        >
                            <Divider orientation="center">
                                <Meta
                                    title={<h1 style={{ fontSize: "3vh", marginBottom: "0" }}>Naveen</h1>}
                                    description="B.Tech 2018,CSE"
                                />
                            </Divider>
                        </Card>
                    </Col>
                    <Col span={5}>
                        <Card
                            style={{ width: 300 }}
                            cover={
                                <Avatar style={{ marginLeft: "5vh", marginTop: "2vh" }} size={200} icon={<img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />} />

                            }

                        >
                            <Divider orientation="center">
                                <Meta
                                    title={<h1 style={{ fontSize: "3vh", marginBottom: "0" }}>Naveen</h1>}
                                    description="B.Tech 2018,CSE"
                                />
                            </Divider>
                        </Card>
                    </Col>
                    <Col span={5}>
                        <Card
                            style={{ width: 300 }}
                            cover={
                                <Avatar style={{ marginLeft: "5vh", marginTop: "2vh" }} size={200} icon={<img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />} />

                            }

                        >
                            <Divider orientation="center">
                                <Meta
                                    title={<h1 style={{ fontSize: "3vh", marginBottom: "0" }}>Naveen</h1>}
                                    description="B.Tech 2018,CSE"
                                />
                            </Divider>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ marginLeft: "10vh", marginTop: "2vh", width: "170vh" }}>
                    <Col span={5}>
                        <Card
                            style={{ width: 300 }}
                            cover={
                                <Avatar style={{ marginLeft: "5vh", marginTop: "2vh" }} size={200} icon={<img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />} />

                            }

                        >
                            <Divider orientation="center">
                                <Meta
                                    title={<h1 style={{ fontSize: "3vh", marginBottom: "0" }}>Naveen</h1>}
                                    description="B.Tech 2018,CSE"
                                />
                            </Divider>
                        </Card>
                    </Col>
                    <Col span={5} style={{ marginRight: "0" }}>
                        <Card
                            style={{ width: 300 }}
                            cover={
                                <Avatar style={{ marginLeft: "5vh", marginTop: "2vh" }} size={200} icon={<img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />} />

                            }

                        >
                            <Divider orientation="center">
                                <Meta
                                    title={<h1 style={{ fontSize: "3vh", marginBottom: "0" }}>Naveen</h1>}
                                    description="B.Tech 2018,CSE"
                                />
                            </Divider>
                        </Card>
                    </Col>
                    <Col span={5}>
                        <Card
                            style={{ width: 300 }}
                            cover={
                                <Avatar style={{ marginLeft: "5vh", marginTop: "2vh" }} size={200} icon={<img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />} />

                            }

                        >
                            <Divider orientation="center">
                                <Meta
                                    title={<h1 style={{ fontSize: "3vh", marginBottom: "0" }}>Naveen</h1>}
                                    description="B.Tech 2018,CSE"
                                />
                            </Divider>
                        </Card>
                    </Col>
                    <Col span={5}>
                        <Card
                            style={{ width: 300 }}
                            cover={
                                <Avatar style={{ marginLeft: "5vh", marginTop: "2vh" }} size={200} icon={<img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />} />

                            }

                        >
                            <Divider orientation="center">
                                <Meta
                                    title={<h1 style={{ fontSize: "3vh", marginBottom: "0" }}>Naveen</h1>}
                                    description="B.Tech 2018,CSE"
                                />
                            </Divider>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ marginLeft: "10vh", marginTop: "2vh", width: "170vh" }}>
                    <Col span={5}>
                        <Card
                            style={{ width: 300 }}
                            cover={
                                <Avatar style={{ marginLeft: "5vh", marginTop: "2vh" }} size={200} icon={<img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />} />

                            }

                        >
                            <Divider orientation="center">
                                <Meta
                                    title={<h1 style={{ fontSize: "3vh", marginBottom: "0" }}>Naveen</h1>}
                                    description="B.Tech 2018,CSE"
                                />
                            </Divider>
                        </Card>
                    </Col>
                    <Col span={5} style={{ marginRight: "0" }}>
                        <Card
                            style={{ width: 300 }}
                            cover={
                                <Avatar style={{ marginLeft: "5vh", marginTop: "2vh" }} size={200} icon={<img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />} />

                            }

                        >
                            <Divider orientation="center">
                                <Meta
                                    title={<h1 style={{ fontSize: "3vh", marginBottom: "0" }}>Naveen</h1>}
                                    description="B.Tech 2018,CSE"
                                />
                            </Divider>
                        </Card>
                    </Col>
                    <Col span={5}>
                        <Card
                            style={{ width: 300 }}
                            cover={
                                <Avatar style={{ marginLeft: "5vh", marginTop: "2vh" }} size={200} icon={<img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />} />

                            }

                        >
                            <Divider orientation="center">
                                <Meta
                                    title={<h1 style={{ fontSize: "3vh", marginBottom: "0" }}>Naveen</h1>}
                                    description="B.Tech 2018,CSE"
                                />
                            </Divider>
                        </Card>
                    </Col>
                    <Col span={5}>
                        <Card
                            style={{ width: 300 }}
                            cover={
                                <Avatar style={{ marginLeft: "5vh", marginTop: "2vh" }} size={200} icon={<img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />} />

                            }

                        >
                            <Divider orientation="center">
                                <Meta
                                    title={<h1 style={{ fontSize: "3vh", marginBottom: "0" }}>Naveen</h1>}
                                    description="B.Tech 2018,CSE"
                                />
                            </Divider>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}