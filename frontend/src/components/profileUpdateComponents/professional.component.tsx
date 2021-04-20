import { Form, Input, Button, Select, InputNumber } from 'antd';

function ProfessionalDetails(props: any) {
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

	const [profHeadForm] = Form.useForm();
	const [overallExpForm] = Form.useForm();
	const [workExpForm] = Form.useForm();
	return (
		<div className="profileupdate-menu-wrapper">
			<div className="profileupdate-menu-head">
				<h1>Professional Details</h1>
				<span>
					Please update work experience and professional details to
					optimize your visibility
				</span>
			</div>
			<hr />
			<Form
				form={profHeadForm}
				name="profesionalHeadForm"
				{...formItemLayout}
				onFinish={handleSubmit}
				labelAlign="left"
				initialValues={{ prefix: '91' }}
				scrollToFirstError
			>
				<Form.Item name="prof_head" label="Professional headline">
					<Input placeholder="Ex.: SDE II at Amazon" />
					<span style={{ color: 'rgb(160, 160, 160)' }}>
						This appears on your profile card and immediately below
						your name on profile. A good headline tells others about
						you and helps to reach for right connections.
					</span>
				</Form.Item>
				<div className="signupCreate-form-submit-button-div">
					<Form.Item className="profileupdate-form-submit">
						<Button
							type="primary"
							htmlType="submit"
							loading={props.isLoading}
						>
							Update
						</Button>
					</Form.Item>
				</div>
			</Form>

			<div className="profileupdate-submenu-head">
				<h2>Overall Experience</h2>
				<span style={{ color: 'rgb(160, 160, 160)' }}>
					Summary of your work experience
				</span>
			</div>
			<hr />
			<Form
				form={overallExpForm}
				name="overallExpForm"
				{...formItemLayout}
				onFinish={handleSubmit}
				labelAlign="left"
				initialValues={{ prefix: '91' }}
				scrollToFirstError
			>
				<Form.Item name="total_exp" label="Total Experience">
					<InputNumber placeholder="years" />
				</Form.Item>
				<Form.Item name="roles" label="Roles played">
					<Input placeholder="Ex: SDE, SDM" />
					<span style={{ color: 'rgb(160, 160, 160)' }}>
						Enter multiple comma seperated fields
					</span>
				</Form.Item>
				<Form.Item name="corrs_postal_code" label="Postal Code">
					<Input placeholder="postal code" />
				</Form.Item>
				<div className="signupCreate-form-submit-button-div">
					<Form.Item className="profileupdate-form-submit">
						<Button
							type="primary"
							htmlType="submit"
							loading={props.isLoading}
						>
							Update
						</Button>
					</Form.Item>
				</div>
			</Form>
			<div className="profileupdate-submenu-head">
				<h2>Work Experience</h2>
				<span style={{ color: 'rgb(160, 160, 160)' }}>
					Your Association with Organizations
				</span>
			</div>
			<hr />
			<Form
				form={workExpForm}
				name="workExpForm"
				{...formItemLayout}
				onFinish={handleSubmit}
				labelAlign="left"
				initialValues={{ prefix: '91' }}
				scrollToFirstError
			>
				<Form.Item name="company" label="Organization">
					<Input placeholder="Organization" />
				</Form.Item>
				<Form.Item name="industry" label="Industry">
					<Input placeholder="Ex.: Software" />
				</Form.Item>
				<Form.Item name="exp" label="Experience">
					<InputNumber placeholder="Years" />
				</Form.Item>
				<Form.Item name="role" label="Role">
					<Input placeholder="Ex: SDE" />
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
	);
}

export default ProfessionalDetails;
