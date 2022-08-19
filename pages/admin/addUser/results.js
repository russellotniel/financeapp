import React, { useState } from 'react';
import Link from 'next/link';
import { Form, FormGroup, Input, Card, CardHeader, CardBody, Container, Row, Col, Button, Table, Label } from 'reactstrap';
import { Filter } from 'react-feather';
import Admin from 'layouts/Admin.js';
import CustomHeader from '../../../components/Headers/CustomHeader';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import '../../../assets/css/table.css';

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const Form6 = () => {
	const name = useSelector((state) => state.newUser.name);
	const email = useSelector((state) => state.newUser.email);
	const phoneNumber = useSelector((state) => state.newUser.phoneNumber);
	const fixedIncome = useSelector((state) => state.newUser.fixedIncome);
	const equity = useSelector((state) => state.newUser.equity);
	// const stockList = useSelector((state) => state.newUser.stockList);
	const strategy = useSelector((state) => state.newUser.strategy);

	const stockList = [
		{
			Id: 1,
			Name: 'Astra Agro Lestari Tbk.',
			Code: 'AALI',
			SubSectorName: 'Plantation',
			Last: '9500',
		},
		{
			Id: 2,
			Name: 'Mahaka Media Tbk.',
			Code: 'ABBA',
			SubSectorName: 'Advertising, Printing, dan Media',
			Last: '9500',
		},
		{
			Id: 3,
			Name: 'Asuransi Bina Dana Arta Tbk.',
			Code: 'ABDA',
			SubSectorName: 'Insurance',
			Last: '9500',
		},
		{
			Id: 4,
			Name: 'ABM Investama Tbk.',
			Code: 'ABMM',
			SubSectorName: 'Investment Company',
			Last: '9500',
		},
		{
			Id: 5,
			Name: 'Ace Hardware Indonesia Tbk.',
			Code: 'ACES',
			SubSectorName: 'Retail Trade',
			Last: '9500',
		},
		{
			Id: 6,
			Name: 'Acset Indonusa Tbk.',
			Code: 'ACST',
			SubSectorName: 'Building Construction',
			Last: '9500',
		},
		{
			Id: 7,
			Name: 'Adhi Commuter Properti Tbk.',
			Code: 'ADCP',
			SubSectorName: 'Plantation',
			Last: '9500',
		},
		{
			Id: 8,
			Name: 'Akasha Wira International Tbk.',
			Code: 'ADES',
			SubSectorName: 'Food & Beverages',
			Last: '9500',
		},
		{
			Id: 9,
			Name: 'Adhi Karya (Persero) Tbk.',
			Code: 'ADHI',
			SubSectorName: 'Building Construction',
			Last: '9500',
		},
		{
			Id: 10,
			Name: 'Adira Dinamika Multi Finance Tbk.',
			Code: 'ADMF',
			SubSectorName: 'Financial Institution',
			Last: '9500',
		},
		{
			Id: 11,
			Name: 'Polychem Indonesia Tbk.',
			Code: 'ADMG',
			SubSectorName: 'Chemicals',
			Last: '9500',
		},
	];

	return (
		<>
			<CustomHeader />
			<Container className='mt--7' fluid>
				<Row>
					<Col>
						<Card className='shadow'>
							<CardHeader className='border-0 d-flex justify-content-between align-items-center'>
								<h2>Results</h2>
							</CardHeader>
							<CardBody>
								{/* Personal Info */}
								<div className='border p-4'>
									<div className='d-flex justify-content-between align-items-center mb-3'>
										<h3 className='mb-3'>Personal Details</h3>
										<Link href={'/admin/addUser/edit/form1'} passHref>
											<Button color='primary'>Edit</Button>
										</Link>
									</div>
									<FormGroup>
										<Row className='d-flex align-items-center'>
											<Col md={3}>
												<Label>Name:</Label>
											</Col>
											<Col md={9}>
												<Input disabled placeholder={name} type='text' className='text-dark w-100' />
											</Col>
										</Row>
									</FormGroup>
									<FormGroup>
										<Row className='d-flex align-items-center'>
											<Col md={3}>
												<Label>Email:</Label>
											</Col>
											<Col md={9}>
												<Input disabled placeholder={email} type='text' className='text-dark w-100' />
											</Col>
										</Row>
									</FormGroup>
									<FormGroup>
										<Row className='d-flex align-items-center'>
											<Col md={3}>
												<Label>Phone Number:</Label>
											</Col>
											<Col md={9}>
												<Input disabled placeholder={`+${phoneNumber}`} type='text' className='text-dark w-100' />
											</Col>
										</Row>
									</FormGroup>
								</div>
								<hr />
								{/* Asset Allocation */}
								<div className='border p-4'>
									<div className='d-flex justify-content-between align-items-center mb-3'>
										<h3 className='mb-3'>Risk Profile</h3>
										<Link href={'/admin/addUser/edit/form3'} passHref>
											<Button color='primary'>Edit</Button>
										</Link>
									</div>
									<Row>
										<Col xl={6} className='border p-4'>
											<h3>Your Profile: Moderate (3)</h3>
											<hr />
											<p>
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, laudantium harum. Quam voluptate laborum numquam ab tenetur repellendus soluta, assumenda ad repellat magni, magnam alias a asperiores. Ab
												quasi, aperiam a, laboriosam porro vitae asperiores facilis beatae optio dolore molestiae.
											</p>
										</Col>
										<Col xl={6} className='border p-4'>
											<h3>Asset Allocation</h3>
											<hr />
											<FormGroup>
												<div className='d-flex justify-content-between align-items-center'>
													<Label for='fixedIncome'>Fixed Income</Label>
													<Input disabled placeholder={fixedIncome} type='number' className='w-25' />
												</div>
											</FormGroup>
											<FormGroup>
												<div className='d-flex justify-content-between align-items-center'>
													<Label for='equity'>Equity</Label>
													<Input disabled placeholder={equity} type='number' className='w-25' />
												</div>
											</FormGroup>
										</Col>
									</Row>
								</div>
								<hr />
								{/* Stock Universe */}
								<div className='border p-4'>
									<div className='d-flex justify-content-between align-items-center mb-3'>
										<h3 className='mb-3'>Stock Universe</h3>
										<Link href={'/admin/addUser/edit/form4'} passHref>
											<Button color='primary'>Edit</Button>
										</Link>
									</div>
									<div className='stock-table'>
										<Table className='align-items-center table-flush text-left border' responsive>
											<thead className='thead-light'>
												<tr>
													<th scope='col'>Code</th>
													<th scope='col'>Name</th>
													<th scope='col'>SubSectorName</th>
													<th scope='col'>Last (Price)</th>
												</tr>
											</thead>
											<tbody>
												{stockList.map((stock, i) => {
													return (
														<tr key={i}>
															<td>{stock.Code}</td>
															<td>{stock.Name}</td>
															<td>{stock.SubSectorName}</td>
															<td>{numberWithCommas(stock.Last)}</td>
														</tr>
													);
												})}
											</tbody>
										</Table>
									</div>
								</div>
								<hr />
								{/* Stock Universe */}
								<div className='border p-4'>
									<div className='d-flex justify-content-between align-items-center mb-3'>
										<h3 className='mb-3'>Security Selection</h3>
										<Link href={'/admin/addUser/edit/form5'} passHref>
											<Button color='primary'>Edit</Button>
										</Link>
									</div>
									<Row>
										<Col md='4'>
											<Card className='shadow'>
												<CardHeader>
													<h4>Strategy Options</h4>
												</CardHeader>
												<CardBody>
													<h5>Selected Strategy: </h5>
													<FormGroup>
														<Input disabled value={strategy} className='w-100' />
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
								</div>
								<div className='text-right mt-5'>
									<Link href={'risk-profile'} passHref>
										<Button>Back</Button>
									</Link>
									<Link href={'portfolio-manager'}>
										<Button color='primary'>Save</Button>
									</Link>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

Form6.layout = Admin;

export default Form6;
