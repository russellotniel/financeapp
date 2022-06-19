import React from 'react';
import Link from 'next/link';
import { Form, FormGroup, Label, Input, Card, CardHeader, CardBody, Container, Row, Col, Button, Table } from 'reactstrap';
import Admin from 'layouts/Admin.js';
import CustomHeader from '../../../components/Headers/CustomHeader';
import axios from 'axios';

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const Form3 = ({ stocks }) => {
	return (
		<>
			<CustomHeader />
			<Container className='mt--7' fluid>
				<Row>
					<Col>
						<Card className='shadow'>
							<CardHeader className='border-0 d-flex justify-content-between align-items-center'>
								<h2>Stock Universe</h2>
							</CardHeader>
							<CardBody>
								<Table className='align-items-center table-flush text-left border' responsive>
									<thead className='thead-light'>
										<tr>
											<th scope='col' className='text-center'>
												Selection
											</th>
											<th scope='col'>Name</th>
											<th scope='col'>Code</th>
											<th scope='col'>Last (Price)</th>
										</tr>
									</thead>
									<tbody>
										{stocks.data.map((stock) => {
											return (
												<tr key={stock.Id}>
													<td className='text-center'>
														<FormGroup>
															<span className='pl-3'>
																<Input type='checkbox' />
															</span>
														</FormGroup>
													</td>
													<td>{stock.Name}</td>
													<td>{stock.Code}</td>
													<td>{numberWithCommas(stock.Last)}</td>
												</tr>
											);
										})}
									</tbody>
								</Table>
								<div className='text-right mt-5'>
									<Link href={'form2'} passHref>
										<Button>Back</Button>
									</Link>
									<Link href={'#'} passHref>
										<Button color='primary'>Next</Button>
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

export async function getStaticProps() {
	try {
		const response = await axios.get('https://indonesia-stock-exchange.vercel.app/api');
		const data = response.data;
		return {
			props: {
				stocks: data,
			},
		};
	} catch (error) {
		console.log(error);
	}
}

Form3.layout = Admin;

export default Form3;
