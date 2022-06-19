import React from 'react';
import Link from 'next/link';
import { Form, FormGroup, Label, Input, Card, CardHeader, CardBody, Container, Row, Col, Button } from 'reactstrap';
import Admin from 'layouts/Admin.js';
import CustomHeader from '../../../components/Headers/CustomHeader';

const Form2 = () => {
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
								<Row>
									<Col xl='4' className='border p-4'>
										<h3>Your Profile: Moderate (3)</h3>
										<hr />
										<p>
											Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, laudantium harum. Quam voluptate laborum numquam ab tenetur repellendus soluta, assumenda ad repellat magni, magnam alias a asperiores. Ab quasi,
											aperiam a, laboriosam porro vitae asperiores facilis beatae optio dolore molestiae.
										</p>
									</Col>
									<Col xl='4' className='border p-4'>
										<h3>Asset Allocation</h3>
										<hr />
										<Form>
											<FormGroup>
												<div className='d-flex justify-content-between align-items-center'>
													<Label for='fixedIncome'>Fixed Income</Label>
													<Input id='fixedIncome' name='fixedIncome' type='number' className='w-25' />
												</div>
											</FormGroup>
											<FormGroup>
												<div className='d-flex justify-content-between align-items-center'>
													<Label for='Equity'>Equity</Label>
													<Input id='Equity' name='Equity' type='number' className='w-25' />
												</div>
											</FormGroup>
										</Form>
									</Col>
									<Col xl='4' className='border p-4'>
										<h3>Return Risk</h3>
										<hr />
										
									</Col>
								</Row>
								<div className='text-right mt-5'>
									<Link href={'form1'} passHref>
										<Button>Back</Button>
									</Link>
									<Link href={'form3'} passHref>
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

Form2.layout = Admin;

export default Form2;
