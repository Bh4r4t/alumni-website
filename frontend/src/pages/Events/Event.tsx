import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Input, Select, Button, DatePicker, Grid } from 'antd';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MDEditor from '../../components/MDEditor/mdEditor.component';
import './Event.css';
import { createNewEvent } from '../../services/api/event';
import { useHistory } from 'react-router-dom';

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

const { useBreakpoint } = Grid;

function Event() {
	const global_state = useSelector((state: any) => state.authReducer.user);
	const [desc, setDesc] = useState('');
	const classes = useStyles();
	const history = useHistory();

	const [form] = Form.useForm();

	const onFinish = (payload: any) => {
		const start = payload.event_start.unix() * 1000;
		const end = payload.event_end.unix() * 1000;
		createNewEvent(
			{ ...payload, event_start: start, event_end: end },
			global_state.token
		)
			.then((res: any) => {
				if (res.data.error) {
					throw new Error(res.data.message);
				} else {
					history.push('/events');
					console.log(res);
				}
			})
			.catch((err: any) => console.log(err.message));
	};

	const { md } = useBreakpoint();
	return (
		<Container fixed>
			<div className="register-body">
				<div className={classes.root}>
					<div className="register-head">
						<h1>Event Details</h1>
						<hr />
					</div>

					<Form
						{...formItemLayout}
						layout={md ? 'horizontal' : 'vertical'}
						form={form}
						name="register"
						onFinish={onFinish}
						labelAlign="left"
						initialValues={{
							prefix: '91',
						}}
						scrollToFirstError
					>
						<Form.Item
							name="event_category"
							label="Category"
							rules={[{ required: true }]}
						>
							<Select placeholder="Select an option" allowClear>
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

						<Form.Item
							name="event_start"
							label="Event Date/Time"
							rules={[
								{
									required: true,
									message: 'Please input Event Date',
								},
							]}
						>
							<DatePicker showTime showToday />
						</Form.Item>

						<Form.Item
							name="event_end"
							label="Event End Date/Time"
							rules={[
								{
									required: true,
									message: 'Please input Event End Date',
								},
							]}
						>
							<DatePicker showTime showToday />
						</Form.Item>

						<Form.Item
							name="event_venue"
							label="Venue"
							rules={[
								{
									required: true,
								},
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							name="address"
							label="Address"
							rules={[{ required: true }]}
						>
							<Input.TextArea rows={4} />
						</Form.Item>

						<Form.Item
							name="event_description"
							label="Description"
							rules={[{}]}
						>
							<MDEditor value={desc} onChange={setDesc} />
						</Form.Item>

						<Form.Item {...tailFormItemLayout}>
							<Button type="primary" htmlType="submit">
								{' '}
								Submit
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		</Container>
	);
}

export default Event;
