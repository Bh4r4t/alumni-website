import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Dashboard.css';
import { Card, Avatar } from 'antd';
import { ReadOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Upload, message, Button, List, Space } from 'antd';
import { UploadOutlined, MessageOutlined, LikeOutlined, CalendarTwoTone, StarOutlined } from '@ant-design/icons';
import { BorderAll } from '@material-ui/icons';
import { orange } from '@material-ui/core/colors';
const { TextArea } = Input;
const { Meta } = Card;



const IconText = ({ icon, text }: { icon: any, text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        rootm: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    })
);

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info: any) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};


const tabListNoTitle = [
    {
        key: 'Make_Post',
        tab: 'Make Post',
    },
    {
        key: 'Photos_Videos',
        tab: 'Photos/Videos',
    },

];

const contentListNoTitle: { [id: string]: any } = {
    Make_Post: <Grid container direction="column" ><Grid item xs><TextArea rows={7} maxLength={100} showCount /></Grid><Grid item xs ><Button type="primary">Post</Button></Grid></Grid>,
    Photos_Videos: <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
};
const listData = [{
    href: 'https://ant.design',
    title: 'Naveen Yadav',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        '31 March 2021 10:00 AM',
    content:
        'Hi I am Naveen Yadav.'
}];
for (let i = 2; i < 23; i++) {
    listData.push({
        href: 'https://ant.design',
        title: `Naveen Yadav`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            '31 March 2021 5:00 PM',
        content:
            'Hi I am Naveen Yadav.',
    });
}
const initialValues = {
    noTitleKey: 'Make_Post',
}


export default function Dash() {
    const [values, setvalues] = useState(initialValues);
    const onTabChange = (key: any, type: any) => {
        console.log(key, type);
        setvalues({
            ...values,
            [type]: key
        })
    };
    const classes = useStyles();
    return (
        <Container maxWidth="xl">
            <div className="dashboard-body">
                <div className={classes.root}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <div className="dashboard-head">
                                <h1>Dashboard</h1>
                                <hr />
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container direction="row" spacing={1}> <Grid item><div className="dashboard-heading">Welcome, Naveen!</div></Grid>
                                <Grid item> <div className="dashboard-sub-heading">See What's Happening</div></Grid>
                            </Grid>
                            <Card
                                style={{ width: "auto", marginTop: 30}}
                                tabList={tabListNoTitle}
                                activeTabKey={values.noTitleKey}
                                tabBarExtraContent={<a href="#">More</a>}
                                onTabChange={key => {
                                    onTabChange(key, 'noTitleKey');
                                }}
                            >   {contentListNoTitle[values.noTitleKey]}
                            </Card>

                        </Grid>

                        <Grid item xs={5} style={{ marginLeft: 70 }}>

                            <h1>News</h1>
                            <div className="news_line"></div>
                            <br></br>
                            <Card
                                style={{ width: "xs" }}

                                actions={[
                                    <ReadOutlined />,

                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={<Grid container direction="column" spacing={0}><h2 style={{ color: "green" ,marginBottom:0 }}>News 1</h2>
                                    <h5>1 April 2021, 9:00PM</h5></Grid>}
                                    description={<h3>This is the description</h3>}
                                />
                            </Card>
                            <br></br>
                            <Card
                                style={{ width: "xs" }}

                                actions={[
                                    <ReadOutlined />,

                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={<Grid container direction="column" spacing={0}><h2 style={{ color: "green" ,marginBottom:0 }}>News 2</h2>
                                    <h5>1 April 2021, 9:00PM</h5></Grid>}
                                    description={<h3>This is the description</h3>}
                                />
                            </Card>
                            <Grid container direction="column" alignItems="flex-end">
                                <Button type="link">
                                    See More
                            </Button>
                            </Grid>


                        </Grid>
                        <Grid item xs={6}>
                            <List
                                itemLayout="vertical"
                                style={{marginTop:-90}}
                                size="large"
                                pagination={{
                                    onChange: page => {
                                        console.log(page);
                                    },
                                    pageSize: 7,
                                }}
                                dataSource={listData}
                                renderItem={item => (
                                    <div className="list-border">
                                        <List.Item
                                            key={item.title}
                                            actions={[
                                                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />
                                            ]}
                                            extra={
                                                <img
                                                    width={272}
                                                    alt="logo"
                                                    src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/9/2020_9$largeimg_1283253066.jpg"
                                                />
                                            }
                                        >
                                            <List.Item.Meta
                                                avatar={<Avatar src={item.avatar} />}
                                                title={<a href={item.href}>{item.title}</a>}
                                                description={item.description}
                                            />
                                            {item.content}

                                        </List.Item>
                                    </div>

                                )}
                            />

                        </Grid>
                        <Grid item xs={5} style={{ marginLeft: 70 }}>
                            <Grid container direction="column">
                                <h1>Invite</h1>
                                <div className="news_line"></div>
                                <br></br>
                                <Card
                                    style={{ width: "xs" }}

                                    actions={[
                                        <Grid container direction="column" alignItems="flex-start">
                                            <Button type="primary" style={{ marginLeft: 16 }}>
                                                Invite By Email
                                    </Button>
                                        </Grid>
                                    ]}
                                >
                                    <Meta

                                        description={<h3>Spread the word about the network to your friends and help us build the Alumni Network</h3>}
                                    />
                                </Card>
                                <br></br>

                                <h1>Events</h1>
                                <div className="news_line"></div>
                                <br></br>
                                <Card
                                    style={{ width: "xs" }}
                                    actions={[

                                    ]}
                                >
                                    <Meta
                                        avatar={<CalendarTwoTone style={{ fontSize: 40, marginBottom: 16 }} />}
                                        title={<h2 style={{color:"orange"}}>Alumni Meet 1<br></br></h2>}

                                    />
                                    <Card> <Meta
                                        description={<Grid container direction="column"><h3>Date : 1 April 2021</h3><h3>Event Name : Event 1</h3><h3>Venue : IIT Ropar</h3></Grid>} /></Card>
                                </Card>
                                <br></br>
                                <Card
                                    style={{ width: "xs" }}
                                    actions={[

                                    ]}
                                >
                                    <Meta
                                        avatar={<CalendarTwoTone style={{ fontSize: 40, marginBottom: 16 }} />}
                                        title={<h2 style={{color:"orange"}}>Alumni Meet 2<br></br></h2>}

                                    />
                                    <Card> <Meta
                                        description={<Grid container direction="column"><h3>Date : 1 April 2021</h3><h3>Event Name : Event 2</h3><h3>Venue : IIT Ropar</h3></Grid>} /></Card>
                                </Card>
                                <Grid container direction="column" alignItems="flex-end">
                                    <Button type="link">
                                        See More
                            </Button>
                                </Grid>

                            </Grid>
                        </Grid>

                    </Grid>
                </div>
            </div>
        </Container>


    )
};

