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
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';

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

function Event3 ()  {
  const classes = useStyles();

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="INR">INR</Option>
        
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
								<h1>Add Event Fee</h1>
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
      initialValues={{prefix: 'INR',
      }}
      scrollToFirstError
    >
                
      <Form.Item
        name="Fee Name"
        label="Fee Name"
        rules={[
          {
            required: true,
            message: 'Please input Fee Name',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Fee Description"
        label="Fee Description"
        rules={[
          {},
        ]}
        
      >
        <Input />
      </Form.Item>

      <Form.Item name="Service Charge" label="Service Charge" rules={[{  }]}>
          <Select
            placeholder="Service charge applies on all fees and it can't be updated"
            allowClear
          >
            <Option value="Inclusive">Inclusive</Option>
            <Option value="Exclusive">Exclusive</Option>
            
          </Select>
        </Form.Item>

      <Form.Item
        name="Fee Amount"
        label="Fee Amount"
        rules={[{ required: true, message: 'Amount' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>
      
      <Form.Item name="Fee Type" label="Fee Type" rules={[{  }]}>
          <Select
            placeholder="Participation"
            allowClear
          >
            <Option value="Participation">Participation</Option>
            <Option value="Accommodation">Accommodation</Option>
            <Option value="Advertisements">Advertisements</Option>
            <Option value="Contributions">Contributions</Option>
            <Option value="Food Pass">Food Pass</Option>
            <Option value="Merchandise">Merchandise</Option>
            <Option value="Others">Others</Option>
            
          </Select>
        </Form.Item>
      
      <Form.Item name="Valid From" label="Valid From" rules={[
          {
            required: true,
            message: 'Please input Valid From',
          },
        ]}>
        <DatePicker />
      </Form.Item>
            
    </Form>
    
        
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" href="/news">
          Submit
        </Button>
      </Form.Item>
      </Grid>




    </Grid>
    </div>
    </div>
    </Container>
  );
};

export default Event3 ;