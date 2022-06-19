import React from 'react';

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col, Button } from 'reactstrap';

function CustomHeader() {
	return (
		<>
			<div className='header bg-gradient-dark pb-8 pt-5 pt-md-8'>
				<Container fluid>
					<div className='header-body'></div>
				</Container>
			</div>
		</>
	);
}

export default CustomHeader;
