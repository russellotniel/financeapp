import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
	Form,
	FormGroup,
	Input,
	Card,
	CardHeader,
	CardBody,
	Container,
	Row,
	Col,
	Button,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	DropdownToggle,
	DropdownMenu,
	Label,
	UncontrolledButtonDropdown,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from 'reactstrap';
import { Filter, Plus, X } from 'react-feather';
import Admin from 'layouts/Admin.js';
import CustomHeader from '../../../components/Headers/CustomHeader';
import axios from 'axios';
import { form4 } from '../../../redux/actions/newUser';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import DataTable from 'react-data-table-component';

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const Form4 = ({ stocks }) => {
	const [availableStocks, setAvailableStocks] = useState(stocks.data);

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	const handleChange = ({ selectedRows }) => {
		console.log('Selected Rows: ', selectedRows);
	};

	// const handleClearRows = () => {
	// 	setToggleClearRows(!toggledClearRows);
	// };

	const submitList = () => {
		// dispatch(form4(stockList));
		router.push('/admin/addUser/security-selection');
	};

	const columns = [
		{
			name: 'Code',
			selector: (row) => row.Code,
			sortable: true,
		},
		{
			name: 'Name',
			selector: (row) => row.Name,
			sortable: true,
		},
		{
			name: 'SubSectorName',
			selector: (row) => row.SubSectorName,
			sortable: true,
		},
		{
			name: 'Last',
			selector: (row) => row.Last,
			sortable: true,
		},
	];

	const dispatch = useDispatch();
	const router = useRouter();

	return (
		<>
			<CustomHeader />
			<Container className='mt--7' fluid>
				<Row>
					<Col>
						<Card className='shadow'>
							<CardHeader className='border-0 d-flex justify-content-between align-items-center'>
								<h2>Stock Universe</h2>
								<div className='d-flex align-items-center'>
									<div className='mr-4'>
										<UncontrolledButtonDropdown>
											<DropdownToggle color='primary' caret outline>
												<Filter size={15} />
											</DropdownToggle>
											<DropdownMenu right>
												<Form className='p-2'>
													<FormGroup check>
														<Input type='checkbox' defaultChecked id='basic-cb-checked' />
														<Label for='basic-cb-checked' check>
															IDX30
														</Label>
													</FormGroup>
													<FormGroup check>
														<Input type='checkbox' id='basic-cb-unchecked' />
														<Label for='basic-cb-checked' check>
															KOMPAS
														</Label>
													</FormGroup>
													<FormGroup check>
														<Input type='checkbox' id='basic-cb-unchecked' />
														<Label for='basic-cb-checked' check>
															IDXHIGHDIV
														</Label>
													</FormGroup>
													<FormGroup check>
														<Input type='checkbox' id='basic-cb-unchecked' />
														<Label for='basic-cb-checked' check>
															LQ
														</Label>
													</FormGroup>
													<FormGroup check>
														<Input type='checkbox' id='basic-cb-unchecked' />
														<Label for='basic-cb-checked' check>
															JII
														</Label>
													</FormGroup>
													<FormGroup check>
														<Input type='checkbox' id='basic-cb-unchecked' />
														<Label for='basic-cb-checked' check>
															IGRADE
														</Label>
													</FormGroup>
													<FormGroup check>
														<Input type='checkbox' id='basic-cb-unchecked' />
														<Label for='basic-cb-checked' check>
															SRIKEHATI
														</Label>
													</FormGroup>
													<div className='mt-2'>
														<Button color='danger' className='p-2  mr-2'>
															Reset
														</Button>
														<Button color='primary' className='p-2'>
															Apply Filter
														</Button>
													</div>
												</Form>
											</DropdownMenu>
										</UncontrolledButtonDropdown>
									</div>
									<Form className='navbar-search navbar-search-light form-inline'>
										<FormGroup className='mb-0'>
											<InputGroup className='input-group-alternative'>
												<InputGroupAddon addonType='prepend'>
													<InputGroupText>
														<i className='fas fa-search' />
													</InputGroupText>
												</InputGroupAddon>
												<Input placeholder='Search' type='text' />
											</InputGroup>
										</FormGroup>
									</Form>
								</div>
							</CardHeader>
							<CardBody>
								<Row>
									<DataTable columns={columns} data={availableStocks} selectableRows onSelectedRowsChange={handleChange} pagination />
								</Row>

								<div className='text-right mt-5'>
									<Link href={'risk-profile'} passHref>
										<Button>Back</Button>
									</Link>

									<Button color='primary' onClick={toggle}>
										Next
									</Button>

									<Modal isOpen={modal} toggle={toggle} size='xl'>
										<ModalHeader toggle={toggle}>Modal title</ModalHeader>
										<ModalBody>
											{/* <Button color='danger' onClick={handleClearRows}>Delete Selected Stocks</Button> */}
											{/* <DataTable columns={columns} data={availableStocks} selectableRows onSelectedRowsChange={handleChange} clearSelectedRows={toggledClearRows} pagination /> */}
											<DataTable columns={columns} data={availableStocks} selectableRows onSelectedRowsChange={handleChange} pagination />
										</ModalBody>
										<ModalFooter>
											<Button color='secondary' onClick={toggle}>
												Cancel
											</Button>{' '}
											<Button color='primary' onClick={submitList}>
												Submit
											</Button>
										</ModalFooter>
									</Modal>

									{/* <Button color='primary' onClick={submitList}>
										Next
									</Button> */}
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

Form4.layout = Admin;

export default Form4;

{
	/* <td className='text-center'>
	<FormGroup className='pl-3'>
		<Input
			type='checkbox'
			onChange={(e) => {
				if (e.target.checked) {
					// setChecked(true);
					setStockList([
						...stockList,
						{
							Code: stock.Code,
							Name: stock.Name,
							SubSectorName: stock.SubSectorName,
							Last: stock.Last,
						},
					]);
				} else {
					setStockList(stockList.filter((list) => list.Code !== stock.Code));
				}
			}}
			value={stockList}
		/>
	</FormGroup>
</td>; */
}

{
	/* <td className='text-center'>
	<FormGroup className='pl-3'>
		<Input
			type='checkbox'
			onChange={(e) => {
				if (e.target.checked) {
					// setChecked(true);
					setStockList([
						...stockList,
						{
							Code: stock.Code,
							Name: stock.Name,
							SubSectorName: stock.SubSectorName,
							Last: stock.Last,
						},
					]);
				} else {
					setStockList(stockList.filter((list) => list.Code !== stock.Code));
				}
			}}
			value={stockList}
		/>
	</FormGroup>
</td>; */
}

{
	/* Table untuk stocks yang bisa dipilih */
}
{
	/* <div className='col-6'>
										<Table className='align-items-center table-flush text-left border' responsive>
											<thead className='thead-light'>
												<tr>
													<th scope='col'></th>
													<th scope='col' onClick={() => requestSort('Code')} style={{ cursor: 'pointer' }}>
														Code
													</th>
													<th scope='col' onClick={() => requestSort('Name')} style={{ width: '50%', cursor: 'pointer' }}>
														Name
													</th>
													<th scope='col' onClick={() => requestSort('Last')} style={{ cursor: 'pointer' }}>
														Last (Price)
													</th>
													<th scope='col' onClick={() => requestSort('SubSectorName')} style={{ cursor: 'pointer' }}>
														Sector
													</th>
												</tr>
											</thead>
											<tbody>
												{availableStocks.map((stock, index) => {
													return (
														<tr key={index}>
															<td>
																<Plus
																	size={14}
																	style={{ cursor: 'pointer' }}
																	// onClick={() => {
																	// 	setStockList([
																	// 		...stockList,
																	// 		{
																	// 			Code: stock.Code,
																	// 			Name: stock.Name,
																	// 			SubSectorName: stock.SubSectorName,
																	// 			Last: stock.Last,
																	// 		},
																	// 	]);
																	// }}
																	onClick={() => addToList(stock.Code, stock.Name, stock.SubSectorName, stock.Last)}
																/>
															</td>
															<td>{stock.Code}</td>
															<td>{stock.Name}</td>
															<td>{numberWithCommas(stock.Last)}</td>
															<td>{stock.SubSectorName}</td>
														</tr>
													);
												})}
											</tbody>
										</Table>
									</div> */
}
{
	/* Table untuk stocks yg dipilih */
}
{
	/* <div className='col-6'>
										<Table className='align-items-center table-flush text-left border' responsive>
											<thead className='thead-light'>
												<tr>
													<th scope='col'></th>
													<th scope='col' onClick={() => requestSort('Code')} style={{ cursor: 'pointer' }}>
														Code
													</th>
													<th scope='col' onClick={() => requestSort('Name')} style={{ width: '50%', cursor: 'pointer' }}>
														Name
													</th>
													<th scope='col' onClick={() => requestSort('Last')} style={{ cursor: 'pointer' }}>
														Last (Price)
													</th>
													<th scope='col' onClick={() => requestSort('SubSectorName')} style={{ cursor: 'pointer' }}>
														Sector
													</th>
												</tr>
											</thead>
											<tbody>
												{stockList.map((stock, index) => {
													return (
														<tr key={index}>
															<td>
																<X size={14} style={{ cursor: 'pointer' }} onClick={() => deleteFromList(stock.Code, stock.Name, stock.SubSectorName, stock.Last)} />
															</td>
															<td>{stock.Code}</td>
															<td>{stock.Name}</td>
															<td>{numberWithCommas(stock.Last)}</td>
															<td>{stock.SubSectorName}</td>
														</tr>
													);
												})}
											</tbody>
										</Table>
									</div> */
}

// const useSortableData = (availableStocks, config = {}) => {
// 	const [sortConfig, setSortConfig] = useState(config);

// 	const sortedStocks = useMemo(() => {
// 		let sortableItems = [...availableStocks];
// 		if (sortableItems !== null) {
// 			sortableItems.sort((a, b) => {
// 				if (a[sortConfig.key] < b[sortConfig.key]) {
// 					return sortConfig.direction === 'ascending' ? -1 : 1;
// 				}
// 				if (a[sortConfig.key] > b[sortConfig.key]) {
// 					return sortConfig.direction === 'ascending' ? 1 : -1;
// 				}
// 				return 0;
// 			});
// 		}

// 		return sortableItems;
// 	}, [availableStocks, sortConfig]);

// 	const requestSort = (key) => {
// 		let direction = 'ascending';
// 		if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
// 			direction = 'descending';
// 		}
// 		setSortConfig({ key, direction });
// 	};

// 	return { availableStocks: sortedStocks, requestSort, sortConfig };
// };

// const addToList = (Code, Name, SubSectorName, Last) => {
// 	setStockList([
// 		...stockList,
// 		{
// 			Code: Code,
// 			Name: Name,
// 			SubSectorName: SubSectorName,
// 			Last: Last,
// 		},
// 	]);

// 	setUnpickedStocks(unpickedStocks.filter((list) => list.Code !== Code));
// };

// const deleteFromList = (Code, Name, SubSectorName, Last) => {
// 	setStockList(stockList.filter((list) => list.Code !== Code));

// 	setAvailableStocks([
// 		...availableStocks,
// 		{
// 			Code: Code,
// 			Name: Name,
// 			SubSectorName: SubSectorName,
// 			Last: Last,
// 		},
// 	]);
// };

// const [stockList, setStockList] = useState([]);
// const { availableStocks, requestSort, sortConfig } = useSortableData(stocks.data);
// const [availableStocks, setAvailableStocks]= useState(useSortableData(stocks.data));
// const [unpickedStocks, setUnpickedStocks] = useState(availableStocks);
