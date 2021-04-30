import React, { useState } from 'react';
import {
  Form,
  Input,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,DatePicker
} from 'antd';
import './Event.css';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {  message } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';

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



const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

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

function Event2 ()  {
  const classes = useStyles();

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="91">91</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

  const onWebsiteChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map(website => ({
    label: website,
    value: website,
  }));

  return (
    <Container fixed>
      <div className="register-body">
      <div className={classes.root}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
      <div className="register-head">
								<h1>Event Fee</h1>
								<hr />
			</div>
      </Grid>
      <br></br>
      <Grid item xs={5}>
      </Grid>
      <Grid item xs={9}>
        <h2>If it is a paid event, you can collect the event fee online. <br></br> Click on the link below to set up fee collection.</h2>
      </Grid>
      <Grid item xs={1}>
      </Grid>
      <Grid item xs={3}>
        </Grid>
      <Grid item xs={6}>
      
      </Grid>
      <Grid item xs={3}>
          </Grid>     
          <Grid item xs={3}>
          </Grid>
        <Grid item xs={11} justify="center">
      <Form.Item {...tailFormItemLayout} >
        <Button type="primary" htmlType="submit" href="/events/create_event_3">
         Set up Registration Fee
        </Button>
      </Form.Item>
      </Grid>

      <Grid item xs={12} justify="center">
      <Form.Item {...tailFormItemLayout} >
        <Button type="primary" htmlType="submit" href="/event4">
        Skip This Step
        </Button>
      </Form.Item>
      </Grid>
 


    </Grid>
    </div>
    </div>
    </Container>
  );
};

export default Event2;