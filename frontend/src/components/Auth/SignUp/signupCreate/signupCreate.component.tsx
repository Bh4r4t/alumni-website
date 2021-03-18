import { useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
	Button,
	Card,
	Form,
	Input,
	Alert,
	DatePicker,
	Radio,
	Progress,
	AutoComplete,
} from 'antd';
import './signupCreate.component.css';
import AuthFooter from '../../../Footer/authFooter/authFooter.component';
import AuthNavBar from '../../../Navbar/authNavBar/authNavBar.component';

function SignUpCreate() {
	const [isLoading, setLoading] = useState(false);
	const [dataP1, setDataP1] = useState(null);
	const [salut, setSalut] = useState();
	const salutation_dict = {
		1: 'Mr',
		2: 'Ms',
		3: 'Dr',
		4: 'Prof',
		5: 'Other',
	};
	const [gender, setGender] = useState();
	const gender_dict = {
		1: 'Male',
		2: 'Female',
		3: 'Prefer not to say',
	};
	const [error, setError] = useState('');
	const location = useLocation();
	const email: string = location.state as string;
	console.log('email', email);

	// form for page 1
	const [basicInfoForm] = Form.useForm();
	// form for page 2
	const [batchForm] = Form.useForm();

	const handleSubmit = () => {};

	const formItemLayout = {
		labelCol: {
			xs: { span: 24 },
			sm: { span: 7 },
		},
		wrapperCol: {
			xs: { span: 24 },
			sm: { span: 16 },
		},
	};

	return email ? (
		<>
			<AuthNavBar />
			<div className="auth-view">
				<div className="auth-container-wrapper">
					{error ? (
						<Alert
							className="signup-email-check-error"
							message={error}
							type="error"
							closable
							onClose={() => setError('')}
						/>
					) : null}
					<div className="signup-head">
						<h1>Register</h1>
						<span>Connect with your alumni network</span>
					</div>
					<Card className="auth-form-wrapper">
						<div className="auth-form-create-page-info">
							<Progress type="circle" percent={0} width={75} />
							<h1>Basic Info</h1>
						</div>
						<hr />
						<div className="signupCreate-form-div">
							<Form
								className="signupCreate-form"
								{...formItemLayout}
								form={basicInfoForm}
								name="register"
								onFinish={handleSubmit}
								labelAlign="left"
								initialValues={{ prefix: '91' }}
								scrollToFirstError
							>
								<Form.Item
									initialValue={email}
									className="signupCreate-form-email"
									name="email"
									label="Primary Email Id"
									rules={[
										{
											type: 'email',
											required: true,
											message:
												'Please Enter valid Email Address',
										},
									]}
								>
									<Input disabled />
								</Form.Item>
								<Form.Item
									name="Salutation"
									label="Salutation"
									rules={[{ required: true }]}
								>
									<Radio.Group
										onChange={(e) => {
											setSalut(e.target.value);
										}}
									>
										<Radio value={1}>Mr</Radio>
										<Radio value={2}>Ms</Radio>
										<Radio value={3}>Dr</Radio>
										<Radio value={4}>Prof</Radio>
										<Radio value={5}>Other</Radio>
									</Radio.Group>
								</Form.Item>
								<Form.Item
									name="First-name"
									label="First Name"
									rules={[
										{
											required: true,
											message:
												'Please input your First Name',
										},
									]}
								>
									<Input placeholder="First Name"/>
								</Form.Item>

								<Form.Item
									name="Last-name"
									label="Last Name"
									rules={[
										{
											required: true,
											message:
												'Please input your Last Name',
										},
									]}
								>
									<Input placeholder="Last Name"/>
								</Form.Item>

								<Form.Item
									name="gender"
									label="Gender"
									rules={[{ required: true }]}
								>
									<Radio.Group
										onChange={(e) =>
											setGender(e.target.value)
										}
									>
										<Radio value={1}>Male</Radio>
										<Radio value={2}>Female</Radio>
										<Radio value={3}>
											Prefer not to say
										</Radio>
									</Radio.Group>
								</Form.Item>

								<Form.Item
									name="DateofBirth"
									label="Date of Birth"
									rules={[
										{
											required: true,
											message: 'Please select your DOB!',
										},
									]}
								>
									<DatePicker />
								</Form.Item>
								<Form.Item
									name="mobile_num"
									label="Mobile No."
									rules={[
										{
											required: true,
											message:
												'Please input your mobile number!',
										},
									]}
								>
									<Input placeholder="+91 0123456789"/>
								</Form.Item>
								<Form.Item
									name="current_city"
									label="Current City"
									rules={[
										{
											required: true,
											message:
												'Please select your current city!',
										},
									]}
								>
									<AutoComplete className="city-search-autocomplete" placeholder="Type to search" />
								</Form.Item>
								<Form.Item
									className="signupCreate-form-password"
									name="password"
									label="Password"
									rules={[
										{
											required: true,
											message: 'Please enter password',
										},
									]}
								>
									<Input.Password />
								</Form.Item>
								<div className="signupCreate-form-submit-button-div">
									<Form.Item className="signupCreate-form-submit">
										<Button
											className=""
											type="primary"
											htmlType="submit"
										>
											Submit
										</Button>
									</Form.Item>
								</div>
							</Form>
						</div>
					</Card>
				</div>
			</div>
			<AuthFooter />
		</>
	) : (
		<Redirect to={'/auth/signup'} />
	);
}

export default SignUpCreate;
