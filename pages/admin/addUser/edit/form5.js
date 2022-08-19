import React, { useState } from 'react';
import Link from 'next/link';
import { Form, FormGroup, Input, Card, CardHeader, CardBody, Container, Row, Col, Button, Table } from 'reactstrap';
import Admin from 'layouts/Admin.js';
import CustomHeader from '../../../../components/Headers/CustomHeader';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { form5 } from '../../../../redux/actions/newUser';
import { useDispatch, useSelector } from 'react-redux';

const Form5 = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	//USE SELECTOR
	const strategy = useSelector((state) => state.newUser.strategy);

	const formik = useFormik({
		initialValues: {
			strategy: strategy === '' ? '' : strategy,
		},
		validationSchema: Yup.object({
			strategy: Yup.string().required('Required'),
		}),
		onSubmit: (values) => {
			dispatch(form5(values.strategy));
			router.push('/admin/addUser/form6');
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
								<h2>Security Selection</h2>
							</CardHeader>
							<CardBody>
								<Form onSubmit={formik.handleSubmit}>
									<Row>
										<Col md='4'>
											<Card className='shadow'>
												<CardHeader>
													<h4>Strategy Options</h4>
												</CardHeader>
												<CardBody>
													<h5>Selected Strategy: </h5>
													<FormGroup>
														<Input id='strategy' name='strategy' type='select' {...formik.getFieldProps('strategy')} className={`form-control ${formik.touched.strategy && formik.errors.strategy && 'is-invalid'} text-dark w-100`}>
															<option hidden>Choose strategy</option>
															<option value={'Low Volatility'}>Low Volatility</option>
															<option value={'Default'}>Default</option>
															<option value={'Optimized'}>Optimized</option>
														</Input>
														{formik.touched.strategy && formik.errors.strategy ? <div className='text-danger text-left'>{formik.errors.strategy}</div> : null}
													</FormGroup>
												</CardBody>
											</Card>
										</Col>
										<Col md='8'>
											<Card className='shadow'>
												<CardHeader>
													<h4>Output</h4>
												</CardHeader>
												<CardBody>
													<Table className='align-items-center table-flush border' responsive>
														<thead className='thead-light'>
															<tr>
																<th scope='col'>Stock Selection</th>
																<th scope='col' className='text-right'>
																	Percentage
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<th scope='row'>Stock A</th>
																<td className='text-right'>15%</td>
															</tr>
															<tr>
																<th scope='row'>Stock B</th>
																<td className='text-right'>30%</td>
															</tr>
															<tr>
																<th scope='row'>Stock C</th>
																<td className='text-right'>20%</td>
															</tr>
															<tr>
																<th scope='row'>Stock D</th>
																<td className='text-right'>20%</td>
															</tr>
															<tr>
																<th scope='row'>Stock E</th>
																<td className='text-right'>15%</td>
															</tr>
														</tbody>
													</Table>
												</CardBody>
											</Card>
										</Col>
									</Row>
									<Row className='mt-4'>
										<Col md='12'>
											<Card className='shadow'>
												<CardHeader>
													<h4>Portfolio Performance (Dashboard)</h4>
												</CardHeader>
												<CardBody>
													<Table className='align-items-center table-flush border' responsive>
														<thead className='thead-light'>
															<tr>
																<th scope='col'></th>
																<th scope='col'>1M</th>
																<th scope='col'>3M</th>
																<th scope='col'>10M</th>
																<th scope='col'>1Y</th>
																<th scope='col'>3Y</th>
																<th scope='col'>5Y</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<th scope='row'>Return</th>
																<td>5%</td>
																<td>12%</td>
																<td>15%</td>
																<td>5%</td>
																<td>-15%</td>
																<td>-20%</td>
															</tr>
															<tr>
																<th scope='row'>Volatility</th>
																<td>1%</td>
																<td>2%</td>
																<td>2%</td>
																<td>5%</td>
																<td>15%</td>
																<td>15%</td>
															</tr>
															<tr>
																<th scope='row'>Sharpe</th>
																<td>1.2</td>
																<td>1.3</td>
																<td>0.8</td>
																<td>1.2</td>
																<td>1.3</td>
																<td>1.5</td>
															</tr>
														</tbody>
													</Table>
												</CardBody>
											</Card>
										</Col>
									</Row>
									<div className='text-right mt-5'>
										<Link href={'form4'} passHref>
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

Form5.layout = Admin;

export default Form5;
