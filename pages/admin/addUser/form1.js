import React from 'react';
import Link from 'next/link';
import { Form, FormGroup, Label, Input, Card, CardHeader, CardBody, Container, Row, Col, Button } from 'reactstrap';
import Admin from 'layouts/Admin.js';
import CustomHeader from '../../../components/Headers/CustomHeader';

const Form1 = () => {
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
								<Form className='mt--3'>
									<FormGroup>
										<Label for='name'>Name</Label>
										<Input id='name' name='name' placeholder='Input a name' type='text' />
									</FormGroup>
									<FormGroup>
										<Label for='email'>Email</Label>
										<Input id='email' name='email' placeholder='Input an email' type='text' />
									</FormGroup>
									<FormGroup>
										<Label for='phoneNumber'>Phone Number</Label>
										<Input id='phoneNumber' name='phoneNumber' placeholder='Input phone number' type='number' />
									</FormGroup>
								</Form>
								<div className='text-right mt-5'>
									<Link href={'admin/dashboard'} passHref>
										<Button>Back to Home</Button>
									</Link>
									<Link href={'form2'} passHref>
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

Form1.layout = Admin;

export default Form1;
