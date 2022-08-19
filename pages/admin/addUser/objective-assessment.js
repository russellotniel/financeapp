import React, { useState } from 'react';
import Link from 'next/link';
import Likert from '@vinhnguyen1211/react-likert-scale';
import { Form, FormGroup, Label, Input, Card, CardHeader, CardBody, Container, Row, Col, Button } from 'reactstrap';
import Admin from 'layouts/Admin.js';
import CustomHeader from '../../../components/Headers/CustomHeader';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { form2 } from '../../../redux/actions/newUser';
import { useDispatch, useSelector } from 'react-redux';

const Form2 = () => {
	const [q2, setQ2] = useState('3');
	const [q4, setQ4] = useState('3');
	const [q7, setQ7] = useState('3');
	const dispatch = useDispatch();
	const router = useRouter();

	const question1 = useSelector((state) => state.newUser.question1);
	const question2 = useSelector((state) => state.newUser.question2);
	const question3 = useSelector((state) => state.newUser.question3);
	const question4 = useSelector((state) => state.newUser.question4);
	const question5 = useSelector((state) => state.newUser.question5);
	const question6 = useSelector((state) => state.newUser.question6);
	const question7 = useSelector((state) => state.newUser.question7);

	const likertQuestion2 = {
		question: '2. Generally, I prefer an investment with little ups and downs in value, and I am willing to accept the lower return these investments may make. This question is required.',
		responses: [
			{
				value: 1,
				text: 'Strongly Disagree',
				checked: question2 === '1' ? true : false,
			},
			{
				value: 2,
				text: 'Disagree',
				checked: question2 === '2' ? true : false,
			},
			{
				value: 3,
				text: 'Average',
				checked: question2 === '3' ? true : false,
			},
			{
				value: 4,
				text: 'Agree',
				checked: question2 === '4' ? true : false,
			},
			{
				value: 5,
				text: 'Strongly Agree',
				checked: question2 === '5' ? true : false,
			},
		],
		onChange: (val) => {
			setQ2(val.value.toString());
		},
	};
	const likertQuestion4 = {
		question: '4. When the market goes down, I tend to sell some of my riskier investment and put money into safer investments.',
		responses: [
			{
				value: 1,
				text: 'Strongly Disagree',
				checked: question4 === '1' ? true : false,
			},
			{
				value: 2,
				text: 'Disagree',
				checked: question4 === '2' ? true : false,
			},
			{
				value: 3,
				text: 'Average',
				checked: question4 === '3' ? true : false,
			},
			{
				value: 4,
				text: 'Agree',
				checked: question4 === '4' ? true : false,
			},
			{
				value: 5,
				text: 'Strongly Agree',
				checked: question4 === '5' ? true : false,
			},
		],
		onChange: (val) => {
			setQ4(val.value.toString());
		},
	};
	const likertQuestion7 = {
		question: '7. When it comes to investing in the stock market, my level of experience would be...',
		responses: [
			{
				value: 1,
				text: 'Strongly Disagree',
				checked: question7 === '1' ? true : false,
			},
			{
				value: 2,
				text: 'Disagree',
				checked: question7 === '2' ? true : false,
			},
			{
				value: 3,
				text: 'Average',
				checked: question7 === '3' ? true : false,
			},
			{
				value: 4,
				text: 'Agree',
				checked: question7 === '4' ? true : false,
			},
			{
				value: 5,
				text: 'Strongly Agree',
				checked: question7 === '5' ? true : false,
			},
		],
		onChange: (val) => {
			setQ7(val.value.toString());
		},
	};

	const formik = useFormik({
		initialValues: {
			question1: question1 === '' ? '' : question1,
			question2: '',
			question3: question3 === '' ? '' : question3,
			question4: '',
			question5: question5 === '' ? '' : question5,
			question6: question6 === '' ? '' : question6,
			question7: '',
		},
		validationSchema: Yup.object({
			question1: Yup.number().required('Required'),
			question3: Yup.number().required('Required'),
			question5: Yup.number().required('Required'),
			question6: Yup.number().required('Required'),
		}),
		onSubmit: (values) => {
			values.question2 = q2;
			values.question4 = q4;
			values.question7 = q7;
			dispatch(form2(values.question1, q2, values.question3, q4, values.question5, values.question6, q7));
			router.push('/admin/addUser/risk-profile');
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
								<h2>Objective Assessment</h2>
							</CardHeader>
							<CardBody>
								<Form className='mt--3' onSubmit={formik.handleSubmit}>
									<FormGroup>
										<Label for='question1'>1. Please choose your favourite holding period</Label>
										<p>Holding period: How long do you tend to hold on to a stock/a portfolio</p>
										<Input id='question1' name='question1' type='select' {...formik.getFieldProps('question1')} className={`form-control ${formik.touched.question1 && formik.errors.question1 && 'is-invalid'} text-dark`}>
											<option hidden>Choose your answer</option>
											<option value={5}>Less than 1 year</option>
											<option value={4}>1-2 years</option>
											<option value={3}>3-5 years</option>
											<option value={2}>6-10 years</option>
											<option value={1}>More than 10 years</option>
										</Input>
										{formik.touched.question1 && formik.errors.question1 ? <div className='text-danger'>{formik.errors.question1}</div> : null}
									</FormGroup>
									<FormGroup className='mt-5'>
										<Likert {...likertQuestion2} />
									</FormGroup>
									<FormGroup className='mt-5'>
										<Label for='question3'>3. During the March 2020 period, the global stock market loses more than 30% of its value. If I owned a stock that lost about 30% in just a month, I would...</Label>
										<Input id='question3' name='question3' type='select' {...formik.getFieldProps('question3')} className={`form-control ${formik.touched.question3 && formik.errors.question3 && 'is-invalid'} text-dark`}>
											<option hidden>Choose your answer</option>
											<option value={1}>Sell everything</option>
											<option value={2}>Sell some</option>
											<option value={3}>Hold and sell nothing</option>
											<option value={4}>Buy more of the investment</option>
										</Input>
										{formik.touched.question3 && formik.errors.question3 ? <div className='text-danger'>{formik.errors.question3}</div> : null}
									</FormGroup>
									<FormGroup className='mt-5'>
										<Likert {...likertQuestion4} />
									</FormGroup>
									<FormGroup className='mt-5'>
										<Label for='question5'>5. The chart below shows the one year movement of two different hypothetical investments of $1,000. Given the volatility in any one year, I would invest my money in...</Label>
										<Input id='question5' name='question5' type='select' {...formik.getFieldProps('question5')} className={`form-control ${formik.touched.question5 && formik.errors.question5 && 'is-invalid'} text-dark`}>
											<option hidden>Choose your answer</option>
											<option value={5}>Blue</option>
											<option value={3}>Orange</option>
											<option value={1}>None of the above, both investment seems to be too risky to me.</option>
										</Input>
										{formik.touched.question5 && formik.errors.question5 ? <div className='text-danger'>{formik.errors.question5}</div> : null}
									</FormGroup>
									<FormGroup className='mt-5'>
										<Label for='question6'>
											6. The chart on the side shows the highest one year gain and loss on three different hypothetical investments of $10,000. Given the potential gain/ loss in any one year, I would invest my money in...
										</Label>
										<Input id='question6' name='question6' type='select' {...formik.getFieldProps('question6')} className={`form-control ${formik.touched.question6 && formik.errors.question6 && 'is-invalid'} text-dark`}>
											<option hidden>Choose your answer</option>
											<option value={1}>Investment A</option>
											<option value={3}>Invesment B</option>
											<option value={5}>Investment C</option>
											<option value={0}>None of the above, I'm not willing to accept any risk.</option>
										</Input>
										{formik.touched.question6 && formik.errors.question6 ? <div className='text-danger'>{formik.errors.question6}</div> : null}
									</FormGroup>
									<FormGroup className='mt-5'>
										<Likert {...likertQuestion7} />
									</FormGroup>
									<div className='text-right mt-5'>
										<Link href={'new-portfolio'} passHref>
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

Form2.layout = Admin;

export default Form2;
