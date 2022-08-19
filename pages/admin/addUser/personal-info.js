import React from 'react';
import Link from 'next/link';
import { Form, FormGroup, Label, Input, Card, CardHeader, CardBody, Container, Row, Col, Button } from 'reactstrap';
import Admin from 'layouts/Admin.js';
import CustomHeader from '../../../components/Headers/CustomHeader';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { form1 } from '../../../redux/actions/newUser';
import { useDispatch, useSelector } from 'react-redux';

const Form1 = () => {
	const phoneRegex = /(\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+/;
	const router = useRouter();
	const dispatch = useDispatch();

	const name = useSelector((state) => state.newUser.name);
	const email = useSelector((state) => state.newUser.email);
	const phoneNumber = useSelector((state) => state.newUser.phoneNumber);

	const formik = useFormik({
		initialValues: {
			name: name === '' ? '' : name,
			email: email === '' ? '' : email,
			phoneNumber: phoneNumber === '' ? '' : phoneNumber,
		},
		validationSchema: Yup.object({
			name: Yup.string().required('Required'),
			email: Yup.string().email('Invalid email address').required('Required'),
			phoneNumber: Yup.string().matches(phoneRegex, 'Phone number is invalid').max(14, 'Phone number is too long').min(10, 'Phone number is too short').required('Required'),
		}),
		onSubmit: (values) => {
			dispatch(form1(values.name, values.email, values.phoneNumber));
			router.push('/admin/addUser/portfolio-manager');
		},
	});

	return (
		<>
			<CustomHeader />
			<Container className='mt--7' fluid>
				<Row>
					<Col>
						<Card className='shadow'>
							<CardHeader className='border-0 d-flex justify-content-between align-items-center'>
								<h2>Personal Information</h2>
							</CardHeader>
							<CardBody>
								<Form className='mt--3' onSubmit={formik.handleSubmit}>
									<FormGroup>
										<Label for='name'>Name</Label>
										<Input id='name' name='name' placeholder='ex. John Doe' type='text' {...formik.getFieldProps('name')} className={`form-control ${formik.touched.name && formik.errors.name && 'is-invalid'} text-dark`} />
										{formik.touched.name && formik.errors.name ? <div className='text-danger'>{formik.errors.name}</div> : null}
									</FormGroup>
									<FormGroup>
										<Label for='email'>Email</Label>
										<Input id='email' name='email' placeholder='ex. example@gmail.com' type='text' {...formik.getFieldProps('email')} className={`form-control ${formik.touched.email && formik.errors.email && 'is-invalid'} text-dark`} />
										{formik.touched.email && formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null}
									</FormGroup>
									<FormGroup>
										<Label for='phoneNumber'>Phone Number</Label>
										<Input
											id='phoneNumber'
											name='phoneNumber'
											placeholder='ex. +6212345678'
											type='number'
											{...formik.getFieldProps('phoneNumber')}
											className={`form-control ${formik.touched.phoneNumber && formik.errors.phoneNumber && 'is-invalid'} text-dark`}
										/>
										{formik.touched.phoneNumber && formik.errors.phoneNumber ? <div className='text-danger'>{formik.errors.phoneNumber}</div> : null}
									</FormGroup>
									<div className='text-right mt-5'>
										<Link href={'admin/dashboard'} passHref>
											<Button>Back to Home</Button>
										</Link>

										<Button color='primary' type='submit'>
											Next
										</Button>
									</div>
								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

Form1.layout = Admin;

export default Form1;
