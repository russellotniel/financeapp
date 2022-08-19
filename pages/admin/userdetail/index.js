import React from 'react';
import Link from 'next/link';
import Chart from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Button, Card, CardHeader, CardBody, Table, Container, Row, Col } from 'reactstrap';
import Admin from 'layouts/Admin.js';
import { chartOptions, parseOptions } from 'variables/charts.js';
import AdminDetailHeader from 'components/Headers/AdminDetailHeader.js';

const UserDetail = () => {
	if (window.Chart) {
		parseOptions(Chart, chartOptions());
	}

	const proposed_data = {
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
		datasets: [
			{
				label: '# of Votes',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
				borderColor: ['rgba(255, 99, 132, 1.5)', 'rgba(54, 162, 235, 1.5)', 'rgba(255, 206, 86, 1.5)', 'rgba(75, 192, 192, 1.5)', 'rgba(153, 102, 255, 1.5)', 'rgba(255, 159, 64, 1.5)'],
				borderWidth: 1,
			},
		],
	};

	const current_data = {
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
		datasets: [
			{
				label: '# of Votes',
				data: [19, 3, 15, 12, 7, 10],
				backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
				borderColor: ['rgba(255, 99, 132, 1.5)', 'rgba(54, 162, 235, 1.5)', 'rgba(255, 206, 86, 1.5)', 'rgba(75, 192, 192, 1.5)', 'rgba(153, 102, 255, 1.5)', 'rgba(255, 159, 64, 1.5)'],
				borderWidth: 1,
			},
		],
	};

	const asset_data = {
		labels: ['Equities', 'Fixed Income'],
		datasets: [
			{
				label: 'percentage',
				data: [60, 40],
				backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
				borderColor: ['rgba(255, 99, 132, 1.5)', 'rgba(54, 162, 235, 1.5)'],
				borderWidth: 1,
			},
		],
	};
	return (
		<>
			<AdminDetailHeader />
			<Container className='mt--7' fluid>
				<Row>
					<Col xl='12'>
						<Card className='shadow'>
							<CardHeader className='bg-transparent'>
								<Row className='align-items-center'>
									<div className='col d-flex align-items-center justify-content-between'>
										<h2 className='mb-0'>Asset Allocation</h2>
										<Button>Edit</Button>
									</div>
								</Row>
							</CardHeader>
							<CardBody>
								{/* Chart */}
								<div className='chart'>
									<Pie data={asset_data} />
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
				<Row className='mt-4'>
					<Col xl='12'>
						<Card className='shadow'>
							<CardHeader>
								<Row>
									<div className='col'>
										<h2 className='mb-0'>Portfolio</h2>
									</div>
								</Row>
							</CardHeader>
							<CardBody>
								{/* Value */}
								<Row className='d-flex justify-content-center align-items-center'>
									<Col className='ml-0' xl='12'>
										<Table className='align-items-center table-flush border w-50 m-auto' responsive>
											<thead className='thead-light'>
												<tr>
													<th scope='col'>Value</th>
													<th scope='col' className='text-right'>
														Result
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope='row'>Contribution</th>
													<td className='text-right'>-</td>
												</tr>
												<tr>
													<th scope='row'>Return</th>
													<td className='text-right'>-</td>
												</tr>
												<tr>
													<th scope='row'>Price Return</th>
													<td className='text-right'>-</td>
												</tr>
												<tr>
													<th scope='row'>Expected Return</th>
													<td className='text-right'>-</td>
												</tr>
												<tr>
													<th scope='row'>Dividend</th>
													<td className='text-right'>-</td>
												</tr>
												<tr>
													<th scope='row'>Alpha</th>
													<td className='text-right'>-</td>
												</tr>
												<tr>
													<th scope='row'>Risk Free Rate</th>
													<td className='text-right'>-</td>
												</tr>
												<tr>
													<th scope='row'>Equity Risk Premium</th>
													<td className='text-right'>-</td>
												</tr>
											</tbody>
										</Table>
										{/* <Row className='icon-examples'>
											<Col lg='6'>
												<span className='btn-icon-clipboard' style={{ cursor: 'default' }}>
													<div className='d-flex w-100'>
														<i className='ni ni-box-2' />
														<span>Contribution</span>
														<span className='ml-auto'>40</span>
													</div>
												</span>
											</Col>
											<Col lg='6'>
												<span className='btn-icon-clipboard' style={{ cursor: 'default' }}>
													<div className='d-flex w-100'>
														<i className='ni ni-trophy' />
														<span>Return</span>
														<span className='ml-auto'>64%</span>
													</div>
												</span>
											</Col>
											<Col lg='6'>
												<span className='btn-icon-clipboard' style={{ cursor: 'default' }}>
													<div className='d-flex w-100'>
														<i className='ni ni-active-40' />
														<span>Price Return</span>
														<span className='ml-auto'>50</span>
													</div>
												</span>
											</Col>
											<Col lg='6'>
												<span className='btn-icon-clipboard' style={{ cursor: 'default' }}>
													<div className='d-flex w-100'>
														<i className='ni ni-spaceship' />
														<span>Expected Return</span>
														<span className='ml-auto'>42%</span>
													</div>
												</span>
											</Col>
											<Col lg='6'>
												<span className='btn-icon-clipboard' style={{ cursor: 'default' }}>
													<div className='d-flex w-100'>
														<i className='ni ni-money-coins' />
														<span>Dividend</span>
														<span className='ml-auto'>23</span>
													</div>
												</span>
											</Col>
											<Col lg='6'>
												<span className='btn-icon-clipboard' style={{ cursor: 'default' }}>
													<div className='d-flex w-100'>
														<i className='ni ni-check-bold' />
														<span>Alpha</span>
														<span className='ml-auto'>62%</span>
													</div>
												</span>
											</Col>
										</Row>
										<hr />
										<Row>
											<Col lg='6'>
												<span className='btn-icon-clipboard' style={{ cursor: 'default' }}>
													<div className='d-flex w-100'>
														<i className='ni ni-chart-bar-32' />
														<span>Risk Free Rate</span>
														<span className='ml-auto'>62%</span>
													</div>
												</span>
											</Col>
											<Col lg='6'>
												<span className='btn-icon-clipboard' style={{ cursor: 'default' }}>
													<div className='d-flex w-100'>
														<i className='ni ni-diamond' />
														<span>Equity Risk Premium</span>
														<span className='ml-auto'>62%</span>
													</div>
												</span>
											</Col>
											<div className='ml-auto'>
												<Button className='mr-3 mt-2'>Edit</Button>
											</div>
										</Row> */}
									</Col>
								</Row>
								<hr />
								<Row>
									<Col xl='6'>
										<Card className='shadow'>
											<CardBody>
												<h3>Current Composition</h3>
												<div className='chart mt-4'>
													<Pie data={current_data} />
												</div>
												<div className='text-right'>
													<Link href={'/admin/userdetail/currentcomposition'}>
														<Button className='mt-4'>View Detail</Button>
													</Link>
												</div>
											</CardBody>
										</Card>
									</Col>
									<Col xl='6'>
										<Card className='shadow'>
											<CardBody>
												<h3>Proposed Composition</h3>
												<div className='chart mt-4 d-flex justify-content-center align-items-center flex-column'>
													{/* <Pie data={proposed_data} /> */}

													<h4 className='text-center'>You haven't generated a proposed composition yet</h4>
													<h4 className='text-center'>Click the button below to generate.</h4>
												</div>
												<div className='text-right'>
													{/* <Link href={'/admin/userdetail/proposedcomposition'}>
														<Button className='mt-4'>View Detail</Button>
													</Link> */}
													<Link href={'/admin/rebalance/'}>
														<Button className='mt-4' color='primary'>
															Rebalance
														</Button>
													</Link>
												</div>
												{/* <h1>Test</h1> */}
											</CardBody>
										</Card>
									</Col>
								</Row>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

UserDetail.layout = Admin;

export default UserDetail;
