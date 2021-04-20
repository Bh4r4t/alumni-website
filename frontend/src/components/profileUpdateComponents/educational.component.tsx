import {
	Form,
	Input,
	Button,
	Select,
	Grid,
	Col,
	Row,
	Divider,
	DatePicker,
} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';

const { useBreakpoint } = Grid;

function EducationalMenu(props: any) {
	const [form] = Form.useForm();
	const { Option } = Select;

	const handleSubmit = () => {};
	const formItemLayout = {
		labelCol: {
			xs: { span: 24 },
			sm: { span: 7 },
		},
		wrapperCol: {
			xs: { span: 24 },
			sm: { span: 24 },
		},
	};

	return (
		<div className="profileupdate-menu-wrapper">
			<div className="profileupdate-menu-head">
				<h1>Educational Details</h1>
				<span>Add or update your educational details.</span>
			</div>
			<hr />
			<div className="eduinfo-card">
				<EduCard
					org="Indian Institute of Technology Ropar"
					stream="B.Tech. - Computer Science & Engineering"
					batch="2022"
				/>
				<EduCard
					org="Indian Institute of Technology Ropar"
					stream="B.Tech. - Computer Science & Engineering"
					batch="2022"
				/>
			</div>
			<Divider>Add a new Education Entry</Divider>
			<div className="profileupdate-menu-form">
				<Form
					className="signupCreate-form"
					form={form}
					name="basicProfile"
					{...formItemLayout}
					onFinish={handleSubmit}
					labelAlign="left"
					initialValues={{ prefix: '91' }}
					scrollToFirstError
				>
					<Form.Item
						name="name_of_organization"
						label="Institute Name"
						rules={[
							{
								required: true,
								message: 'Please input the institute name',
							},
						]}
					>
						<Input placeholder="Institute Name" />
					</Form.Item>

					<Form.Item
						name="degree_name"
						label="Degree"
						rules={[
							{
								required: true,
								message: 'Please input your Degree Name',
							},
						]}
					>
						<Input placeholder="Degree Name" />
					</Form.Item>

					<Form.Item
						name="stream_name"
						label="Stream"
						rules={[
							{
								required: true,
								message: 'Please input your Stream Name',
							},
						]}
					>
						<Input placeholder="Stream Name" />
					</Form.Item>

					<Form.Item
						name="start_date"
						label="Start Date"
						rules={[{ required: true }]}
					>
						<DatePicker />
					</Form.Item>

					<Form.Item
						name="end_date"
						label="End Date(expected/left)"
						rules={[{ required: true }]}
					>
						<DatePicker />
					</Form.Item>

					<div className="signupCreate-form-submit-button-div">
						<Form.Item className="profileupdate-form-submit">
							<Button
								type="primary"
								htmlType="submit"
								loading={props.isLoading}
							>
								Submit
							</Button>
						</Form.Item>
					</div>
				</Form>
			</div>
		</div>
	);
}

function EduCard(props: any) {
	const { md } = useBreakpoint();
	return (
		<Col span={md ? 16 : 24} className="educard-wrapper">
			<Row className="educard-row">
				<Col span={md ? 16 : 24} className="educard-col1">
					<h4>{props.org}</h4>
					<p>{props.stream + ' - ' + props.batch}</p>
				</Col>
				<Col span={md ? 8 : 24} className="educard-col">
					<Button type="text" onClick={() => null}>
						<EditOutlined style={{ fontSize: '1.3em' }} />
					</Button>
					<Button danger={true} type="text">
						<DeleteOutlined style={{ fontSize: '1.3em' }} />
					</Button>
				</Col>
			</Row>
		</Col>
	);
}

export default EducationalMenu;
