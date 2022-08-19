import React, { useState } from 'react';
import Link from 'next/link';
// import { Form, FormGroup, Label, Input, Card, CardHeader, CardBody, Container, Row, Col, Button, Table, Media, Badge } from 'reactstrap';
import { Button, Card, CardHeader, CardFooter, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Table, Container, Row } from 'reactstrap';
import { MoreVertical, Eye, Trash2 } from 'react-feather';
import Admin from 'layouts/Admin.js';
import CustomHeader from '../../../components/Headers/CustomHeader';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

const PortfolioManager = () => {
	return (
		<>
			<CustomHeader />
			<Container className='mt--7' fluid>
				<Row>
					<div className='col'>
						<Card className='shadow'>
							<CardHeader className='border-0'>
								<h3 className='mb-0'>Portfolio Manager</h3>
							</CardHeader>
							<Table className='align-items-center table-flush' responsive>
								<thead className='thead-light'>
									<tr>
										<th scope='col'>Portfolios</th>
										<th scope='col'>Budget</th>
										<th scope='col' className='text-right'>
											Action
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope='row'>
											<span className='mb-0 text-sm'>Personal Portfolio</span>
										</th>
										<td>Rp. 1.000.000.000</td>
										<td className='text-right px-2 align-middle'>
											<UncontrolledDropdown>
												<DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm'>
													<MoreVertical size={14} className='text-center' />
												</DropdownToggle>
												<DropdownMenu>
													<DropdownItem className='d-flex align-items-center'>
														<Eye size={14} />
														View
													</DropdownItem>
													<DropdownItem className='d-flex align-items-center'>
														<Trash2 size={14} />
														Delete
													</DropdownItem>
												</DropdownMenu>
											</UncontrolledDropdown>
										</td>
									</tr>
									<tr>
										<th scope='row'>
											<span className='mb-0 text-sm'>Personal Portfolio</span>
										</th>
										<td>Rp. 1.000.000.000</td>
										<td className='text-right px-2 align-middle'>
											<UncontrolledDropdown>
												<DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm'>
													<MoreVertical size={14} className='text-center' />
												</DropdownToggle>
												<DropdownMenu>
													<DropdownItem className='d-flex align-items-center'>
														<Eye size={14} />
														View
													</DropdownItem>
													<DropdownItem className='d-flex align-items-center'>
														<Trash2 size={14} />
														Delete
													</DropdownItem>
												</DropdownMenu>
											</UncontrolledDropdown>
										</td>
									</tr>
								</tbody>
							</Table>
							<CardFooter className='py-4 text-right'>
								<Link href={'/admin/addUser/new-portfolio'} passHref>
									<Button className='mb-0' color='primary'>
										Add New Portfolio
									</Button>
								</Link>
								<Link href={'/admin/dashboard'}>
									<Button className='mb-0' color='success'>
										Done
									</Button>
								</Link>
							</CardFooter>
						</Card>
					</div>
				</Row>
			</Container>
		</>
	);
};

PortfolioManager.layout = Admin;

export default PortfolioManager;
