import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import axios from 'axios';
import { couldStartTrivia } from 'typescript';
import { Redirect, useHistory, useLocation } from 'react-router-dom';

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
    const global_state = useSelector((state: any) => state.authReducer.user);
    console.log(global_state.token)
    const history = useHistory();
    const [post_des, setpost_des] = useState('')
    const [likechange, setlikechange] = useState(false)
    const [refresh, setrefresh] = useState(false)

    const handlePostChange = (e: any) => {
        setpost_des(e.target.value)
    }

    const handleLikeClick = (post_id: any) => {
        console.log(post_id)
        axios.post('http://localhost:3000/posts/add_likes', {
            id: post_id
        }, {
            withCredentials: true,

            headers: {
                authorization: 'Bearer ' + global_state.token
            },
        })
            .then(response => {
                setlikechange(!likechange)
                console.log(response.data)
            })
            .catch(error => console.log(error))

    }

    const handlePostSubmit = (e: any) => {
        axios.post('http://localhost:3000/posts/create_post', {
            content: post_des
        }, {
            withCredentials: true,

            headers: {
                authorization: 'Bearer ' + global_state.token
            },
        })
            .then(response => {
                setrefresh(!refresh)

                console.log(response.data)
            })

    }

    const getDate_custom = (date: any) => {
        const _date = new Date(date);
        var time = _date.toLocaleTimeString('en-US');
        const time1 = time.substring(0, 5)
        const time2 = time.substring(9, 11)
        time=time1+" "+time2
        return `${_date.getDate()}-${_date.getMonth()}-${_date.getFullYear()} ${time}`;
    }

    const contentListNoTitle: { [id: string]: any } = {
        Make_Post: <Grid container direction="column" ><Grid item xs><TextArea rows={7} maxLength={100} showCount onChange={handlePostChange} /></Grid><Grid item xs ><Button type="primary" onClick={handlePostSubmit}>Post</Button></Grid></Grid>,
        Photos_Videos: <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
    };
    const [values, setvalues] = useState(initialValues);
    const [posts, setposts] = useState<any[]>([]);
    // const location: ILocationState = useLocation().state as ILocationState;
    //const accessToken: string = location.accessToken as string;

    const bodya = ({
        'email': 'nav@gmail.com'
    });
    useEffect(() => {
        axios.get('http://localhost:3000/posts/all_posts', {
            withCredentials: true,

            headers: {
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODU0ZjU1MmEzNDVkYThhZDllYmQ0MSIsImVtYWlsIjoic3VyZXNoQGdtYWlsLmNvbSIsImZpcnN0X25hbWUiOiJTdXJlc2giLCJsYXN0X25hbWUiOiJTaW5naCIsImlhdCI6MTYxOTQyMDA5NywiZXhwIjoxNjIyMDEyMDk3fQ.bWgo7-p-i2xVJgevgyOAToeP2JXno0hTIlF6uTrOXDM'
            },
        })
            .then(response => {
                console.log(response.data)
                setposts(response.data)
            })
    }, [likechange, refresh])

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
                                style={{ width: "auto", marginTop: 30 }}
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
                                    title={<Grid container direction="column" spacing={0}><h2 style={{ color: "green", marginBottom: 0 }}>News 1</h2>
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
                                    title={<Grid container direction="column" spacing={0}><h2 style={{ color: "green", marginBottom: 0 }}>News 2</h2>
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
                                style={{ marginTop: -90 }}
                                size="large"
                                pagination={{
                                    onChange: page => {
                                        console.log(page);
                                    },
                                    pageSize: 7,
                                }}
                                dataSource={posts}
                                renderItem={item => (
                                    <div className="list-border">
                                        <List.Item
                                            key={item?.user_name as string}
                                            actions={[
                                                <Button icon={<IconText icon={LikeOutlined} text={item.like_count} key="list-vertical-like-o" />} size="small" style={{ width: "auto", border: "none" }} onClick={() => { handleLikeClick(item._id) }}></Button>,
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
                                                avatar={<Avatar src={item?.avatar} />}
                                                title={<a href={item.href}>{item?.user_name}</a>}
                                                description={getDate_custom(item.post_date)}
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
                                        title={<h2 style={{ color: "orange" }}>Alumni Meet 1<br></br></h2>}

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
                                        title={<h2 style={{ color: "orange" }}>Alumni Meet 2<br></br></h2>}

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

