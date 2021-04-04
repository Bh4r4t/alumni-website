import { Layout, Row, Col, Divider } from 'antd';
import { Card, Avatar } from 'antd';
import './JobPortal.css';
import {  Input, Select, Button } from 'antd';

const { Content } = Layout;
const { Option } = Select;


export default function JobPortal() {
    return (
        <Layout>
            <Content>

                <Row style={{ backgroundSize:"contain", backgroundImage: 'url("http://utouchdesign.com/themes/envato/escort/assets/img/slider_bg.jpg")', opacity: 1.3, height: "85vh" }}>
                    <Col xs={12} style={{ marginTop: 200, marginLeft: 50, height: "15vh" }}>
                        <div className="job-statement">Search Between More<br></br> Than <span className="number-jobs">100</span> Open Jobs.</div>

                    </Col>
                    <Col xs={24} style={{ marginTop: 80, marginLeft: 50 }}>
                        <div className="job-search-keyword">Trending Job Keywords: <span className="keyword-jobs">Web developer</span> <span className="keyword-jobs">Web designer</span> <span className="keyword-jobs">IOS Developer</span> <span className="keyword-jobs">Android Developer</span> </div>

                    </Col>
                    <Col xs={18} style={{ marginLeft: 50, marginBottom: 200 }}>
                        <span>
                            <Input
                                type="text"
                                placeholder="Search Keywords"
                                style={{ width: 200, margin: '0' }}
                            />
                            <Select
                                size="large"
                                style={{ width: 200, margin: '0 8px' }}
                                placeholder="Location"
                            >
                                <Option value="Delhi">Delhi</Option>
                                <Option value="Mumsi">Mumbai</Option>
                            </Select>
                            <Select
                                size="large"
                                style={{ width: 200, margin: '0' }}
                                placeholder="Category"
                            >
                                <Option value="WebDev">Web Developer</Option>
                                <Option value="AppDev">App Developer</Option>
                            </Select>

                            <Select
                                size="large"
                                style={{ width: 200, margin: '0 8px' }}
                                placeholder="Company"
                            >
                                <Option value="Amazon">Amazon</Option>
                                <Option value="Flipkart">Flipkart</Option>
                            </Select>

                            <Button style={{ width: 200, margin: '0px 5px', backgroundColor: "green", color: "white", fontSize: "2vh", fontWeight: 500 }} size="large">
                                SEARCH</Button>

                        </span>

                    </Col>

                </Row>
                <Row>
                    <Divider orientation="center">


                        <h1 style={{ fontWeight: 800, fontSize: 35, color: "#334e6f" }}>Latest Jobs</h1>

                    </Divider>
                </Row>
                <Row style={{ marginLeft: 50, marginRight: 50 }} gutter={20}>
                    <Col xs={24} md={12} lg={6}>
                        <Card style={{ width: "1000" }}>
                            <Col xs={15} style={{ color: "green" }}>
                                <span className="full-type">FULL TIME</span>
                            </Col>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <Avatar src="http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_1.png" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} />
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <h1>Product Redesign</h1>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 0 }} >
                                    <h2 style={{ fontWeight: 200 }}>Delhi</h2>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Button style={{ width: 200, margin: '8px 8px', backgroundColor: "white", color: "green", fontSize: "2vh", fontWeight: 500, borderColor: "green" }} size="large">
                                    APPLY NOW</Button>
                            </Row>

                        </Card>
                    </Col>
                    <Col xs={24} md={12} lg={6}>
                        <Card style={{ width: "1000" }}>
                            <Col xs={15} style={{ color: "green" }}>
                                <span className="full-type">FULL TIME</span>
                            </Col>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <Avatar src="http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_2.png" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} />
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <h1>Product Redesign</h1>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 0 }} >
                                    <h2 style={{ fontWeight: 200 }}>Delhi</h2>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Button style={{ width: 200, margin: '8px 8px', backgroundColor: "white", color: "green", fontSize: "2vh", fontWeight: 500, borderColor: "green" }} size="large">
                                    APPLY NOW</Button>
                            </Row>

                        </Card>
                    </Col>
                    <Col xs={24} md={12} lg={6}>
                        <Card style={{ width: "1000" }}>
                            <Col xs={15} style={{ color: "green" }}>
                                <span className="part-type">PART TIME</span>
                            </Col>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <Avatar src="http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_3.png" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} />
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <h1>Product Redesign</h1>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 0 }} >
                                    <h2 style={{ fontWeight: 200 }}>Delhi</h2>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Button style={{ width: 200, margin: '8px 8px', backgroundColor: "white", color: "green", fontSize: "2vh", fontWeight: 500, borderColor: "green" }} size="large">
                                    APPLY NOW</Button>
                            </Row>

                        </Card>
                    </Col>
                    <Col xs={24} md={12} lg={6}>
                        <Card style={{ width: "1000" }}>
                            <Col xs={15} style={{ color: "green" }}>
                                <span className="part-type">PART TIME</span>
                            </Col>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <Avatar src="http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_1.png" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} />
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <h1>Product Redesign</h1>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 0 }} >
                                    <h2 style={{ fontWeight: 200 }}>Delhi</h2>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Button style={{ width: 200, margin: '8px 8px', backgroundColor: "white", color: "green", fontSize: "2vh", fontWeight: 500, borderColor: "green" }} size="large">
                                    APPLY NOW</Button>
                            </Row>

                        </Card>
                    </Col>
                </Row>
                <Row style={{ marginLeft: 50, marginRight: 50, marginTop: 20, marginBottom: 20 }} gutter={20}>
                    <Col xs={24} md={12} lg={6}>
                        <Card style={{ width: "1000" }}>
                            <Col xs={15} style={{ color: "green" }}>
                                <span className="intern-type">INTERNSHIP</span>
                            </Col>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <Avatar src="http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_5.png" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} />
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <h1>Product Redesign</h1>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 0 }} >
                                    <h2 style={{ fontWeight: 200 }}>Delhi</h2>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Button style={{ width: 200, margin: '8px 8px', backgroundColor: "white", color: "green", fontSize: "2vh", fontWeight: 500, borderColor: "green" }} size="large">
                                    APPLY NOW</Button>
                            </Row>

                        </Card>
                    </Col>
                    <Col xs={24} md={12} lg={6}>
                        <Card style={{ width: "1000" }}>
                            <Col xs={15} style={{ color: "green" }}>
                                <span className="full-type">FULL TIME</span>
                            </Col>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <Avatar src="http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_7.png" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} />
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <h1>Product Redesign</h1>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 0 }} >
                                    <h2 style={{ fontWeight: 200 }}>Delhi</h2>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Button style={{ width: 200, margin: '8px 8px', backgroundColor: "white", color: "green", fontSize: "2vh", fontWeight: 500, borderColor: "green" }} size="large">
                                    APPLY NOW</Button>
                            </Row>

                        </Card>
                    </Col>
                    <Col xs={24} md={12} lg={6}>
                        <Card style={{ width: "1000" }}>
                            <Col xs={15} style={{ color: "green" }}>
                                <span className="part-type">PART TIME</span>
                            </Col>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <Avatar src="http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_7.png" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} />
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <h1>Product Redesign</h1>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 0 }} >
                                    <h2 style={{ fontWeight: 200 }}>Delhi</h2>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Button style={{ width: 200, margin: '8px 8px', backgroundColor: "white", color: "green", fontSize: "2vh", fontWeight: 500, borderColor: "green" }} size="large">
                                    APPLY NOW</Button>
                            </Row>

                        </Card>
                    </Col>
                    <Col xs={24} md={12} lg={6}>
                        <Card style={{ width: "1000" }}>
                            <Col xs={15} style={{ color: "green" }}>
                                <span className="intern-type">INTERNSHIP</span>
                            </Col>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <Avatar src="http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_8.png" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} />
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <h1>Product Redesign</h1>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 0 }} >
                                    <h2 style={{ fontWeight: 200 }}>Delhi</h2>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Button style={{ width: 200, margin: '8px 8px', backgroundColor: "white", color: "green", fontSize: "2vh", fontWeight: 500, borderColor: "green" }} size="large">
                                    APPLY NOW</Button>
                            </Row>

                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Divider orientation="center">

                        <Button style={{ width: 250, margin: '0px 5px', backgroundColor: "green", color: "white", fontSize: "2vh", fontWeight: 600, height:50}} size="large">
                            BROWSE  ALL  JOBS</Button>


                    </Divider>
                </Row>

            </Content>
        </Layout >

    )
}
