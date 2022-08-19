import React from 'react';
import Link from 'next/link'
import CustomHeader from 'components/Headers/CustomHeader';
import Admin from 'layouts/Admin.js';
import { Container, Row, Col, Card, CardHeader, CardBody, Button, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Table } from 'reactstrap';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js';
import { chartOptions, parseOptions } from 'variables/charts.js';

const CurrentComposition = () => {
	const [chartExample1Data, setChartExample1Data] = React.useState('data1');

	if (window.Chart) {
		parseOptions(Chart, chartOptions());
	}

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

	return (
		<>
			<CustomHeader pageName='Current Portfolio Composition' />
			<Container className='mt--8' fluid>
				<Row>
					<Col xl='12'>
						<Card className='shadow'>
							<CardHeader className='border-0'>
								<h1 className='mb-0'>Current Portfolio Composition</h1>
							</CardHeader>
							<CardBody>
								<Table className='align-items-center table-flush text-center border' responsive>
									<thead className='thead-light'>
										<tr>
											<th scope='col'>Investment Product Name</th>
											<th scope='col'>Ticker</th>
											<th scope='col'>Quantity</th>
											<th scope='col'>Avg Price</th>
											<th scope='col'>Last Price</th>
											<th scope='col'>Performance</th>
											<th scope='col' className='bg-primary text-secondary'>
												Benchmark
											</th>
											<th scope='col' className='bg-primary text-secondary'>
												Performance
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>ABF Indonesia Bond Index Fund</td>
											<td>ABF IBI</td>
											<td>10</td>
											<td>7,000</td>
											<td>46,920</td>
											<td>-0.58%</td>
											<td>INDO 10Y</td>
											<td>0.00%</td>
										</tr>
										<tr>
											<td>Sucoinvest Stable Fund</td>
											<td>RDSSF</td>
											<td>2</td>
											<td>1,300</td>
											<td>1,190</td>
											<td>1.00%</td>
											<td>INDO 10Y</td>
											<td>0.00%</td>
										</tr>
										<tr>
											<td>Vanguard 500 Index Fund ETF</td>
											<td>VOO</td>
											<td>3</td>
											<td>1,300</td>
											<td>5,962,880</td>
											<td>-0.55%</td>
											<td>S&P 500</td>
											<td>2.22%</td>
										</tr>
									</tbody>
								</Table>
								<hr />
								<div className='chart mt-6'>
									<Pie data={current_data} />
								</div>
								<div className='text-right mt-4'>
									<Link href={'/admin/userdetail'} passHref>
										<Button color='secondary'>Back to Home</Button>
									</Link>
									<Button color='primary'>Edit</Button>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

CurrentComposition.layout = Admin;

export default CurrentComposition;
