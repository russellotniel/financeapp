import React, { useState } from 'react';
import Link from 'next/link';
import { Form, FormGroup, Label, Input, Card, CardHeader, CardBody, Container, Row, Col, Button } from 'reactstrap';
import { Bar } from 'react-chartjs-2';
import Admin from 'layouts/Admin.js';
import CustomHeader from '../../../../components/Headers/CustomHeader';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { form3 } from '../../../../redux/actions/newUser';
import { useDispatch, useSelector } from 'react-redux';

const Form3 = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const fixedIncome = useSelector((state) => state.newUser.fixedIncome);
	const equity = useSelector((state) => state.newUser.equity);

	const formik = useFormik({
		initialValues: {
			fixedIncome: fixedIncome === '' ? 50 : fixedIncome,
			equity: equity === '' ? 50 : equity,
		},
		validationSchema: Yup.object({
			fixedIncome: Yup.number().min(0, 'Input cannot be below 0').max(100, 'Input cannot be above 100').required('Required'),
			equity: Yup.number().min(0, 'Input cannot be below 0').max(100, 'Input cannot be above 100').required('Required'),
		}),
		onSubmit: (values) => {
			let total = 0;
			total = values.equity + values.fixedIncome;

			if (total === 100) {
				dispatch(form3(values.fixedIncome, values.equity));
				router.push('/admin/addUser/form6');
			} else {
				alert('Asset Allocation has to add up to 100%.\nPlease make changes.');
			}
		},
	});
	const data = {
		labels: ['first', 'second', 'third', '4th', '5th'],
		datasets: [
			{
				label: 'First set',
				data: [-10, 2, -4, 8, -20],
				backgroundColor: 'blue',
			},
			{
				label: 'Second set',
				data: [10, -2, 4, -8, 20],
				backgroundColor: 'red',
			},
		],
	};

	const options = {
		responsive: true,
		scales: {
			xAxes: [
				{
					gridLines: {
						display: true,
						drawBorder: false,
						borderDash: [3, 3],
						zeroLineColor: 'blue',
					},
					categoryPercentage: 0.7,
					barPercentage: 0.9,
					ticks: {
						beginAtZero: true,
					},
				},
			],
			yAxes: [
				{
					display: true,
					gridLines: {
						display: true,
						zeroLineColor: 'transparent',
					},
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	};

	return (
		<>
			<CustomHeader />
			<Container className='mt--7' fluid>
				<Row>
					<Col>
						<Card className='shadow'>
							<CardHeader className='border-0 d-flex justify-content-between align-items-center'>
								<h2>Risk Profile</h2>
							</CardHeader>
							<CardBody>
								<Form onSubmit={formik.handleSubmit}>
									<Row>
										<Col xl='6' className='border p-4'>
											<h3>Your Profile: Moderate (3)</h3>
											<hr />
											<p>
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, laudantium harum. Quam voluptate laborum numquam ab tenetur repellendus soluta, assumenda ad repellat magni, magnam alias a asperiores. Ab
												quasi, aperiam a, laboriosam porro vitae asperiores facilis beatae optio dolore molestiae.
											</p>
										</Col>
										<Col xl='6' className='border p-4'>
											<h3>Asset Allocation (100%)</h3>
											<hr />
											<FormGroup>
												<div className='d-flex justify-content-between align-items-center'>
													<Label for='fixedIncome'>Fixed Income</Label>
													<Input
														id='fixedIncome'
														name='fixedIncome'
														type='number'
														{...formik.getFieldProps('fixedIncome')}
														className={`form-control ${formik.touched.fixedIncome && formik.errors.fixedIncome && 'is-invalid'} text-dark w-25`}
													/>
												</div>
												{formik.touched.fixedIncome && formik.errors.fixedIncome ? <div className='text-danger text-right'>{formik.errors.fixedIncome}</div> : null}
											</FormGroup>
											<FormGroup>
												<div className='d-flex justify-content-between align-items-center'>
													<Label for='equity'>Equity</Label>
													<Input id='equity' name='equity' type='number' {...formik.getFieldProps('equity')} className={`form-control ${formik.touched.equity && formik.errors.equity && 'is-invalid'} text-dark w-25`} />
												</div>
												{formik.touched.equity && formik.errors.equity ? <div className='text-danger text-right'>{formik.errors.equity}</div> : null}
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col xl='12' className='border p-4'>
											<h3>Return Risk</h3>
											<hr />
											<div className='chart' style={{ height: '100%' }}>
												<Bar options={options} data={data} />
											</div>
										</Col>
									</Row>
									<div className='text-right mt-5'>
										<Link href={'form2'} passHref>
											<Button>Back</Button>
										</Link>

										<Button color='primary' type='submit'>
											Results
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

Form3.layout = Admin;

export default Form3;
