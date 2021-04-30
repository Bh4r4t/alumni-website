import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Form,
  Input,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete, DatePicker
} from 'antd';
import './Event.css';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';

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

function Event() {
  const global_state = useSelector((state: any) => state.authReducer.user);

  const classes = useStyles();

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    const event_details = values;
    axios.post('http://localhost:3000/events/create', event_details, {
      withCredentials: true,
      headers: {
        authorization: 'Bearer ' + global_state.token
    },
    })
      .then(response => console.log(response))
    .catch(err=>console.log(err))
    
    
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
          <Grid container spacing={6}>
            <Grid item xs={6} justify="center" >
              <div className="register-head">
                <h1>Event Details</h1>
                <hr />
              </div>
            </Grid>
            <br></br>
            <Grid item xs={6} >
              <h1></h1>
            </Grid>

            <Grid item xs={6}>
              <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish} labelAlign="left"
                initialValues={{
                  prefix: '91',
                }}
                scrollToFirstError
              >
                <Form.Item name="event_category" label="Category" rules={[{ required: true }]}>
                  <Select
                    placeholder="Select an option"
                    allowClear
                  >
                    <Option value="All Events">All Events</Option>
                    <Option value="Reunions">Reunions</Option>
                    <Option value="Webinars">Webinars</Option>

                  </Select>
                </Form.Item>

                <Form.Item
                  name="event_name"
                  label="Title"
                  rules={[
                    {
                      required: true,
                      message: 'Please input Title',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item name="event_date" label="Start Date" rules={[
                  {
                    required: true,
                    message: 'Please input Start Date',
                  },
                ]}>
                  <DatePicker />
                </Form.Item>

                <Form.Item name="event_time" label="Start Time" rules={[{ required: true }]}>
                  <Select
                    placeholder="Select an option"
                    allowClear
                  >
                    <Option value="12:00 am">12:00 am</Option>
                    <Option value="12:30 am">12:30 am</Option>
                    <Option value="01:00 am">01:00 am</Option>
                    <Option value="01:30 am">01:30 am</Option>
                    <Option value="02:00 am">02:00 am</Option>
                    <Option value="02:30 am">02:30 am</Option>
                    <Option value="03:00 am">03:00 am</Option>
                    <Option value="03:30 am">03:30 am</Option>
                    <Option value="04:00 am">04:00 am</Option>
                    <Option value="04:30 am">04:30 am</Option>
                    <Option value="05:00 am">05:00 am</Option>
                    <Option value="05:30 am">05:30 am</Option>
                    <Option value="06:00 am">06:00 am</Option>
                    <Option value="06:30 am">06:30 am</Option>
                    <Option value="07:00 am">07:00 am</Option>
                    <Option value="07:30 am">07:30 am</Option>
                    <Option value="08:00 am">08:00 am</Option>
                    <Option value="08:30 am">08:30 am</Option>
                    <Option value="09:00 am">09:00 am</Option>
                    <Option value="09:30 am">09:30 am</Option>
                    <Option value="10:00 am">10:00 am</Option>
                    <Option value="10:30 am">10:30 am</Option>
                    <Option value="11:00 am">11:00 am</Option>
                    <Option value="11:30 am">11:30 am</Option>
                    <Option value="12:00 pm">12:00 pm</Option>
                    <Option value="12:30 pm">12:30 pm</Option>
                    <Option value="01:00 pm">01:00 pm</Option>
                    <Option value="01:30 pm">01:30 pm</Option>
                    <Option value="02:00 pm">02:00 pm</Option>
                    <Option value="02:30 pm">02:30 pm</Option>
                    <Option value="03:00 pm">03:00 pm</Option>
                    <Option value="03:30 pm">03:30 pm</Option>
                    <Option value="04:00 pm">04:00 pm</Option>
                    <Option value="04:30 pm">04:30 pm</Option>
                    <Option value="05:00 pm">05:00 pm</Option>
                    <Option value="05:30 pm">05:30 pm</Option>
                    <Option value="06:00 pm">06:00 pm</Option>
                    <Option value="06:30 pm">06:30 pm</Option>
                    <Option value="07:00 pm">07:00 pm</Option>
                    <Option value="07:30 pm">07:30 pm</Option>
                    <Option value="08:00 pm">08:00 pm</Option>
                    <Option value="08:30 pm">08:30 pm</Option>
                    <Option value="09:00 pm">09:00 pm</Option>
                    <Option value="09:30 pm">09:30 pm</Option>
                    <Option value="10:00 pm">10:00 pm</Option>
                    <Option value="10:30 pm">10:30 pm</Option>
                    <Option value="11:00 pm">11:00 pm</Option>
                    <Option value="11:30 pm">11:30 pm</Option>

                  </Select>
                </Form.Item>

                <Form.Item name="event_end_time" label="End Time" rules={[{}]}>
                  <Select
                    placeholder="Select an option"
                    allowClear
                  >
                    <Option value="12:00 am">12:00 am</Option>
                    <Option value="12:30 am">12:30 am</Option>
                    <Option value="01:00 am">01:00 am</Option>
                    <Option value="01:30 am">01:30 am</Option>
                    <Option value="02:00 am">02:00 am</Option>
                    <Option value="02:30 am">02:30 am</Option>
                    <Option value="03:00 am">03:00 am</Option>
                    <Option value="03:30 am">03:30 am</Option>
                    <Option value="04:00 am">04:00 am</Option>
                    <Option value="04:30 am">04:30 am</Option>
                    <Option value="05:00 am">05:00 am</Option>
                    <Option value="05:30 am">05:30 am</Option>
                    <Option value="06:00 am">06:00 am</Option>
                    <Option value="06:30 am">06:30 am</Option>
                    <Option value="07:00 am">07:00 am</Option>
                    <Option value="07:30 am">07:30 am</Option>
                    <Option value="08:00 am">08:00 am</Option>
                    <Option value="08:30 am">08:30 am</Option>
                    <Option value="09:00 am">09:00 am</Option>
                    <Option value="09:30 am">09:30 am</Option>
                    <Option value="10:00 am">10:00 am</Option>
                    <Option value="10:30 am">10:30 am</Option>
                    <Option value="11:00 am">11:00 am</Option>
                    <Option value="11:30 am">11:30 am</Option>
                    <Option value="12:00 pm">12:00 pm</Option>
                    <Option value="12:30 pm">12:30 pm</Option>
                    <Option value="01:00 pm">01:00 pm</Option>
                    <Option value="01:30 pm">01:30 pm</Option>
                    <Option value="02:00 pm">02:00 pm</Option>
                    <Option value="02:30 pm">02:30 pm</Option>
                    <Option value="03:00 pm">03:00 pm</Option>
                    <Option value="03:30 pm">03:30 pm</Option>
                    <Option value="04:00 pm">04:00 pm</Option>
                    <Option value="04:30 pm">04:30 pm</Option>
                    <Option value="05:00 pm">05:00 pm</Option>
                    <Option value="05:30 pm">05:30 pm</Option>
                    <Option value="06:00 pm">06:00 pm</Option>
                    <Option value="06:30 pm">06:30 pm</Option>
                    <Option value="07:00 pm">07:00 pm</Option>
                    <Option value="07:30 pm">07:30 pm</Option>
                    <Option value="08:00 pm">08:00 pm</Option>
                    <Option value="08:30 pm">08:30 pm</Option>
                    <Option value="09:00 pm">09:00 pm</Option>
                    <Option value="09:30 pm">09:30 pm</Option>
                    <Option value="10:00 pm">10:00 pm</Option>
                    <Option value="10:30 pm">10:30 pm</Option>
                    <Option value="11:00 pm">11:00 pm</Option>
                    <Option value="11:30 pm">11:30 pm</Option>

                  </Select>
                </Form.Item>

                <Form.Item
                  name="event_venue"
                  label="Venue"
                  rules={[
                    {},
                  ]}

                >
                  <Input />
                </Form.Item>

                <Form.Item name="address" label="Address" rules={[{}]}>
                  <TextArea rows={4} />
                </Form.Item>

                <Form.Item
                  name="Webinar Link"
                  label="Webinar Link"
                  rules={[
                    {},
                  ]}

                >
                  <Input />
                </Form.Item>

                <Form.Item name="Visibility" label="Visibility" rules={[{ required: true }]}>
                  <Select
                    placeholder="Select an option"
                    allowClear
                  >

                    <Option value="Registered members">Registered members</Option>

                  </Select>
                </Form.Item>

                <Form.Item name="Disable Registrations?" label="Disable Registrations?" rules={[{}]}>
                  <Select
                    placeholder="Users would be not able to register if Yes is selected."
                    allowClear
                  >
                    <Option value="Yes">Yes</Option>
                    <Option value="No">No</Option>

                  </Select>
                </Form.Item>

                <Form.Item name="Registrations Close Date" label="Registrations Close Date" rules={[
                  {
                    required: true,
                    message: '',
                  },
                ]}>
                  <DatePicker />
                </Form.Item>

                <Form.Item name="event_description" label="Description" rules={[{}]}>
                  <TextArea rows={6} />
                </Form.Item>

                <Form.Item name="Event Image" label="Event Image">
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Choose file</Button>
                  </Upload>
                </Form.Item>



                <Form.Item {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit" >  Next
        </Button>
                </Form.Item>
              </Form>

            </Grid>




          </Grid>
        </div>
      </div>
    </Container>
  );
};

export default Event;