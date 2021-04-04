import React, { useState } from 'react';
import {
  Input,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,DatePicker,Image
} from 'antd';
import './Profile.css';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {  message } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';


  const { SubMenu } = Menu;
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });
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

const { Option } = Select;

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info : any) {
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

function ProfileAttachment ()  {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <div className="profile-body">
      <div className={classes.root}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
      <div className="profile-head">
								<h1>Profile</h1>
								<hr />
			</div>
      </Grid>
      <br></br>
      <Grid item xs={1}></Grid>
      <Grid item xs={2}>
        <Image width={200} src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"/>
      </Grid>
      <Grid item xs={3} justify="center">
        <div className="profile-page-name">Name</div>
        <div className="profile-page-batch">Batch</div>

      </Grid>
      <Grid item xs={6}>
      </Grid>
     
      <Grid item xs={12}>
      <div className="profile-subhead-hr"></div>
      </Grid>
      <Grid item xs={1}>
      </Grid>
      <Grid item xs={11}>
      <div className="prof-menu-container">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["attachment"]}>
        <Menu.Item key="personal" >
        <Link to="/user/profile">Personal Information</Link>
        </Menu.Item>
        <Menu.Item key="contact" >
        <Link to="/user/profilecontact">Contact Information</Link>
        </Menu.Item>
        <Menu.Item key="education" >
        <Link to="/user/profileeducation">Educational Details</Link>
        </Menu.Item>
        <Menu.Item key="professional" >
        <Link to="/user/profileprofessional">Professional Details</Link>
        </Menu.Item>
        <Menu.Item key="attachment" >
        <Link to="/user/profileattachment">Attachments</Link>
        </Menu.Item>
        <Menu.Item key="achievement" >
        <Link to="/user/profileachievement">Achievement</Link>
        </Menu.Item>
      </Menu>
      </div>
      </Grid>

        <Grid item xs={1}>
      </Grid>
      <Grid item xs={3}>
          <div className="profile-page-subhead">Attachments</div>
        </Grid>
      <Grid item xs={8}>
          </Grid>
          <Grid item xs={1}>
      </Grid>
      <Grid item xs={11}>
          <div className="profile-contents">Attachment Type: Resume</div>
        </Grid>
        <Grid item xs={1}>
      </Grid>
        <Grid item xs={11}>
          <div className="profile-contents">Title: My Resume</div>
        </Grid>
        <Grid item xs={1}>
      </Grid>
        <Grid item xs={11}>
          <div className="profile-contents">Attachment: -</div>
        </Grid>
        <Grid item xs={1}>
      </Grid>
        <Grid item xs={11}>
          <div className="profile-contents">Start Date: 17/03/2021</div>
        </Grid>
      
      

    </Grid>
    <Grid item xs={3}></Grid>
        <Grid item xs={3}>
      </Grid>
      </div>       
      </div> 

    </Container>
  );
};

export default ProfileAttachment;