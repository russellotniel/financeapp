import React from 'react';

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col, Button } from 'reactstrap';

function AdminDetailHeader() {
	return (
		<>
			<div className='header bg-gradient-dark pb-8 pt-5 pt-md-8'>
				<Container fluid>
					<div className='header-body'>
						<Row>
							<Col xl='12'>
								<Card className='card-stats mb-4 mb-xl-0'>
									<CardBody>
										<Row>
											<div className='col'>
												<CardTitle tag='h5' className='text-uppercase text-muted mb-0'>
													User Profile
												</CardTitle>
												<span className='h2 font-weight-bold'>Hugo Julio</span>
												<p className='mt-1 mb-1 text-sm'>
													<span className='text-nowrap'>hugojuliolaman@gmail.com</span>
												</p>
												<p className='text-sm'>
													<span className='text-nowrap'>081181811818</span>
												</p>
											</div>
											{/* <div className='col'>
												<h4>Year: 2022</h4>
												<h4>Quarter: 1</h4>
												<h4>Beginning date: 1/01/2022</h4>
												<h4>Report cut-off date: 31/03/2022</h4>
												<h4>Holidays (FY): 14</h4>
												<h4>Period: 60</h4>
											</div> */}
											<Col className='col-auto'>
												{/* <div className='icon icon-shape bg-danger text-white rounded-circle shadow'>
													<i className='fas fa-users' />
												</div> */}
												<h4>Year: 2022</h4>
												<h4>Quarter: 1</h4>
												<h4>Beginning date: 1/01/2022</h4>
												<h4>Report cut-off date: 31/03/2022</h4>
												<h4>Holidays (FY): 14</h4>
												<h4>Period: 60</h4>
											</Col>
										</Row>
										<div className='text-right'>
											<Button>Edit</Button>
										</div>
									</CardBody>
								</Card>
							</Col>
							{/* <Col xl='6'>
								<Card className='card-stats mb-4 mb-xl-0'>
									<CardBody>
										<Row>
											<div className='col'>
												<span className='h2 font-weight-bold'>Hugo Julio</span>
												<p className='mt-1 mb-1 text-sm'>
													<span className='text-nowrap'>hugojuliolaman@gmail.com</span>
												</p>
												<p className='text-sm'>
													<span className='text-nowrap'>081181811818</span>
												</p>
											</div>
											<Col className='col-auto'>
												<div className='icon icon-shape bg-danger text-white rounded-circle shadow'>
													<i className='fas fa-users' />
												</div>
											</Col>
										</Row>
										<div className='text-right'>
											<Button>Edit</Button>
										</div>
									</CardBody>
								</Card>
							</Col> */}
							{/* <Col lg='12' xl='6'>
								<Card className='card-stats mb-4 mb-xl-0'>
									<CardBody>
										<Row>
											<div className='col'>
												<CardTitle tag='h5' className='text-uppercase text-muted mb-0'>
													New users
												</CardTitle>
												<span className='h2 font-weight-bold mb-0'>2,356</span>
											</div>
											<Col className='col-auto'>
												<div className='icon icon-shape bg-warning text-white rounded-circle shadow'>
													<i className='fas fa-chart-pie' />
												</div>
											</Col>
										</Row>
										<p className='mt-3 mb-0 text-muted text-sm'>
											<span className='text-danger mr-2'>
												<i className='fas fa-arrow-down' /> 3.48%
											</span>{' '}
											<span className='text-nowrap'>Since last week</span>
										</p>
									</CardBody>
								</Card>
							</Col> */}
							{/* <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Sales
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">924</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-users" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-warning mr-2">
                        <i className="fas fa-arrow-down" /> 1.10%
                      </span>{" "}
                      <span className="text-nowrap">Since yesterday</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Performance
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">49,65%</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="fas fa-percent" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fas fa-arrow-up" /> 12%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col> */}
						</Row>
					</div>
				</Container>
			</div>
		</>
	);
}

export default AdminDetailHeader;
