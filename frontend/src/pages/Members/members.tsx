import { Layout, Row, Col, Divider, Menu } from 'antd';
import { useEffect, useState } from 'react';
import './members.css';
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

const { Meta } = Card;

const { TabPane } = Tabs;
const { Option } = Select;

const { Content } = Layout;



export default function Members() {

    const [members, setmembers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/members/all/:1', {

        })
            .then(response => {
                setmembers(response.data.users)
                console.log(members)
            })

    }, [])

    const [values, setvalues] = useState("location");
    const [name_s, setname_s] = useState("");
    const [degree, setdegree] = useState("");
    const [course, setcourse] = useState("");
    const [stream, setstream] = useState("");
    const [city, setcity] = useState("");
    const [location, setlocation] = useState({ city: "", state: "", country: "" });
    const [year, setyear] = useState("");


    const handleInputChange = (e: any) => {
        console.log(e.target.id)
        setname_s(e.target.value);
        console.log(name_s)
    }

    const handleLocationChange = (e: any) => {
        setlocation({ ...location,[e.target.id]: e.target.value });
        console.log(location)
    }


    const handleClick = ({ e }: { e: any }) => {
        console.log('click ', e);
        setvalues(e.key);
    };

    const handleCourseSelect = (option: any) => {
        console.log(option)
        setcourse(option);

    }

    const handleStreamSelect = (option: any) => {
        setstream(option);

    }

    const handleYearSelect = (option: any) => {
        setyear(option);

    }



    const handleNameSubmit = (e: any) => {
        axios.get('http://localhost:3000/members/search?name=' + name_s,
            {
                withCredentials: true
            })
            .then(response => {
                console.log(response.data);
                setmembers(response.data.user)
            })
    }

    const handleCourseSubmit = (e: any) => {
        axios.get('http://localhost:3000/members/search?course=' + course + '&stream=' + stream + '&year=' + year, {
            withCredentials: true
        })
            .then(response => {
                console.log(response.data);
                setmembers(response.data.user)
            })
            .catch(err => console.log(err))
    }

    const handleLocationSubmit = (e: any) => {
        axios.get('http://localhost:3000/members/search?city=' + location.city + '&state=' + location.state + '&country=' + location.country, {
            withCredentials: true
        })
            .then(response => {
                console.log(response.data);
                setmembers(response.data.user)
            })
            .catch(err => console.log(err))
    }

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

                    <Menu mode="horizontal" style={{ width: "140vh" }}>



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
                                        <Col span={8}>
                                            <Input placeholder="Name" id="name" size="large" onChange={handleInputChange} />
                                        </Col>
                                        <Col span={1}>
                                        </Col>
                                        <Col span={8}>
                                            <Input placeholder="Email" id="email" size="large" />
                                        </Col>
                                        <Col span={1}>
                                        </Col>
                                        <Col span={2}>
                                            <Tooltip title="search">
                                                <Button type="primary" size="large" shape="circle" icon={<SearchOutlined />} style={{ color: "white", backgroundColor: "green" }} onClick={handleNameSubmit} />
                                            </Tooltip>

                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tab="Course & Year" key="2">
                                    <Row style={{ marginTop: "2vh" }}>

                                        <Col span={5}>
                                            <Select size="large" style={{ width: "33vh" }} placeholder="Select Course" onSelect={handleCourseSelect}>
                                                <Option value="Bachelor of Technology - B.Tech.">Bachelor of Technology - B.Tech.</Option>
                                                <Option value="Master of Science - M.Sc.">Master of Science - M.Sc.</Option>
                                                <Option value="Master of Technology - M.Tech.">Master of Technology - M.Tech.</Option>
                                                <Option value="Doctor of Philosophy - Ph.D.">Doctor of Philosophy - Ph.D.</Option>
                                                <Option value="Dual Degree (Bachelor of Technology + Master of Technology) - B.Tech. + M.Tech.">Dual Degree (Bachelor of Technology + Master of Technology) - B.Tech. + M.Tech.</Option>

                                            </Select>
                                        </Col>
                                        <Col span={1}></Col>
                                        <Col span={5}>
                                            <Select size="large" style={{ width: "33vh" }} placeholder="Select Stream" onSelect={handleStreamSelect}>
                                                <Option value="">-- Select Stream --</Option>
                                                <Option value="Biomedical Engineering">Biomedical Engineering</Option>
                                                <Option value="Chemical Engineering">Chemical Engineering</Option>
                                                <Option value="Chemistry">Chemistry</Option>
                                                <Option value="Civil Engineering">Civil Engineering</Option>
                                                <Option value="Computer Science and Engineering">Computer Science & Engineering</Option>
                                                <Option value="Electrical Engineering">Electrical Engineering</Option>
                                                <Option value="Humanities and Social Sciences">Humanities and Social Sciences</Option>
                                                <Option value="Materials and Energy Engineering">Materials & Energy Engineering</Option>
                                                <Option value="Mathematics">Mathematics</Option>
                                                <Option value="Mechanical Engineering">Mechanical Engineering</Option>
                                                <Option value="Physics">Physics</Option>

                                            </Select>
                                        </Col>
                                        <Col span={1}></Col>
                                        <Col span={5}>
                                            <Select size="large" style={{ width: "33vh" }} placeholder="Select Graduation Year" onSelect={handleYearSelect} >
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
                                                <Button type="primary" size="large" shape="circle" icon={<SearchOutlined />} style={{ color: "white", backgroundColor: "green" }} onClick={handleCourseSubmit} />
                                            </Tooltip>

                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tab="Location" key="3">
                                    <Row style={{ marginTop: "2vh" }}>
                                        <Col span={6}>
                                            <Input size="large" placeholder="City" id="city" onChange={handleLocationChange} />
                                        </Col>
                                        <Col span={1}>
                                        </Col>
                                        <Col span={6}>
                                            <Input size="large" placeholder="State" id="state" onChange={handleLocationChange} />

                                        </Col>
                                        <Col span={1}> </Col>
                                        <Col span={6}>
                                            <Input size="large" placeholder="Country" id="country" onChange={handleLocationChange}/>


                                        </Col>


                                        <Col span={1}> </Col>

                                        <Col span={2}>
                                            <Tooltip title="search">
                                                <Button type="primary" size="large" shape="circle" icon={<SearchOutlined />} style={{ color: "white", backgroundColor: "green" }} onClick={handleLocationSubmit} />
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
                    {members.map((member: any) => (


                        <Col span={5} style={{ marginBottom: "2vh" }}>
                            <Card
                                style={{ width: 300, height: 360 }}
                                cover={
                                    <Avatar style={{ marginLeft: "5vh", marginTop: "2vh" }} size={200} icon={<img src={img1} />} />

                                }

                            >
                                <h1 style={{ width: "20vh", fontSize: 20, marginBottom: "0", marginLeft: "6vh" }}>{member.basic_info.first_name + " " + member.basic_info.last_name}</h1>
                                <h3 style={{ fontSize: 16, fontWeight: 300, marginLeft: "6vh" }}>{member.educational_info[0]?.degree_name+" "+member.educational_info[0]?.end_date}</h3>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </div>
        </div>
    )
}