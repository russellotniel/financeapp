import React from 'react';
import Link from 'next/link';
import { Form, FormGroup, Label, Input, Card, CardHeader, CardBody, Container, Row, Col, Button } from 'reactstrap';
import Admin from 'layouts/Admin.js';
import CustomHeader from '../../../components/Headers/CustomHeader';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

const NewPortfolio = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			portfolioName: '',
			budget: '',
		},
		validationSchema: Yup.object({
			portfolioName: Yup.string().required('Required'),
			budget: Yup.string().required('Required'),
		}),
		onSubmit: (values) => {
			router.push('/admin/addUser/objective-assessment');
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
								<h2>New Portfolio</h2>
							</CardHeader>
							<CardBody>
								<Form className='mt--3' onSubmit={formik.handleSubmit}>
									<FormGroup>
										<Label for='name'>Portfolio Name</Label>
										<Input
											id='portfolioName'
											name='portfolioName'
											placeholder='Enter portfolio name'
											type='text'
											{...formik.getFieldProps('portfolioName')}
											className={`form-control ${formik.touched.portfolioName && formik.errors.portfolioName && 'is-invalid'} text-dark`}
										/>
										{formik.touched.portfolioName && formik.errors.portfolioName ? <div className='text-danger'>{formik.errors.portfolioName}</div> : null}
									</FormGroup>
									<FormGroup>
										<Label for='budget'>Budget</Label>
										<Input
											id='budget'
											name='budget'
											placeholder='Enter your budget in Rupiah'
											type='number'
											{...formik.getFieldProps('budget')}
											className={`form-control ${formik.touched.budget && formik.errors.budget && 'is-invalid'} text-dark`}
										/>
										{formik.touched.budget && formik.errors.budget ? <div className='text-danger'>{formik.errors.budget}</div> : null}
									</FormGroup>

									<div className='text-right mt-5'>
										<Link href={'/admin/addUser/portfolio-manager'} passHref>
											<Button>Back</Button>
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

NewPortfolio.layout = Admin;

export default NewPortfolio;
