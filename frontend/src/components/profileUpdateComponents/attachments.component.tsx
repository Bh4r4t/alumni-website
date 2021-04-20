import { useState } from 'react';
import {
	Form,
	Input,
	Button,
	Select,
	Upload,
	Card,
	Tag,
	Grid,
	Col,
	Row,
	Divider,
} from 'antd';
import {
	UploadOutlined,
	DownloadOutlined,
	DeleteOutlined,
} from '@ant-design/icons';

const { useBreakpoint } = Grid;

function AttachmentsMenu(props: any) {
	const [form] = Form.useForm();
	const [fileList, updateFileList] = useState([] as any);
	const [attachType, setAttachType] = useState('Resume');
	const attachTypes: string[] = [
		'Resume',
		'Published work',
		'Other documents',
	];
	const { Option } = Select;

	const formItemLayout = {
		labelCol: {
			xs: { span: 16 },
			sm: { span: 5 },
		},
		wrapperCol: {
			xs: { span: 24 },
			sm: { span: 12 },
		},
	};

	const fileUploadProps = {
		accept: '.doc,.docx,.pdf',
		onRemove: (file: any) => {
			const index = fileList.indexOf(file, 0);
			const newFileList = fileList;
			newFileList.splice(index, 1);
			updateFileList(newFileList);
			return true;
		},
		beforeUpload: (file: any) => {
			updateFileList([...fileList, file]);
			return false;
		},
		fileList,
	};

	const fileToBase = (file: any) => {
		return new Promise((resolve) => {
			const reader = new FileReader();
			reader.onload = () => {
				console.log(file);
				resolve({
					name: file.name,
					file_type: file.type,
					data: reader.result,
					size: file.size,
				});
			};
			reader.readAsDataURL(file);
		});
	};

	const handleSubmit = () => {};

	return (
		<div className="profileupdate-menu-wrapper">
			<div className="profileupdate-menu-head">
				<h1>Attachements</h1>
				<span>
					Manage Attachments like Resume, published work, documents
					etc.
				</span>
			</div>
			<hr />
			<div className="attachinfo-cards">
				<AttachCard title="user_cv_jan_2021.pdf" type="Resume" link="" _id="" />
				<AttachCard title="new_motor_work.docx" type="Published Work" link="" _id="" />
			</div>
			<Divider>Add a new attachment</Divider>
			<div className="profileupdate-menu-form">
				<Form
					className="attach-form"
					form={form}
					name="basicProfile"
					{...formItemLayout}
					onFinish={handleSubmit}
					labelAlign="left"
					initialValues={{ prefix: '91' }}
					scrollToFirstError
				>
					<Form.Item
						name="title"
						label="Title"
						rules={[
							{
								required: true,
							},
						]}
					>
						<Input placeholder="Title" />
					</Form.Item>

					<Form.Item
						name="attach_type"
						label="Attachment Type"
						rules={[
							{
								required: true,
							},
						]}
					>
						<Select
							className="mobile-num-selector"
							placeholder="type"
							onChange={(newType: string) =>
								setAttachType(newType)
							}
						>
							{attachTypes.map(
								(element: string, index: number) => (
									<Option value={element} key={index}>
										{element}
									</Option>
								)
							)}
						</Select>
					</Form.Item>

					<Form.Item
						name="attachment"
						label="Attachment"
						rules={[
							{
								required: true,
							},
						]}
					>
						<Upload {...fileUploadProps}>
							<Button icon={<UploadOutlined />}>
								Select File
							</Button>
						</Upload>
						<br />
						<span className="beamentor-upload-info">
							<span style={{ color: 'red' }}>*</span>(Allowed file
							types: .doc,.docx,.pdf)
						</span>
						<br />
						<span className="beamentor-upload-info">
							<span style={{ color: 'red' }}>*</span>(File size
							should be less than 2 MB)
						</span>
					</Form.Item>

					<div className="signupCreate-form-submit-button-div">
						<Form.Item className="profileupdate-form-submit">
							<Button
								type="primary"
								htmlType="submit"
								loading={props.isLoading}
							>
								Upload
							</Button>
						</Form.Item>
					</div>
				</Form>
			</div>
		</div>
	);
}

function AttachCard(props: any) {
	const { md } = useBreakpoint();
	return (
		<Col span={md ? 16 : 24} className="attachcard-wrapper">
			<Row className="attachcard">
				<Col span={md ? 16 : 24} className="attachcard-col1">
					<span>{props.title}</span>
					<Tag color="green">{props.type} </Tag>
				</Col>
				<Col span={md ? 8 : 24} className="attachcard-col">
					<Button type="text" href={props.link}>
						<DownloadOutlined style={{ fontSize: '1.4em' }} />
					</Button>
					<Button danger={true} type="text">
						<DeleteOutlined style={{ fontSize: '1.4em' }} />
					</Button>
				</Col>
			</Row>
		</Col>
	);
}

export default AttachmentsMenu;
