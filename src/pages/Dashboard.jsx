import { Sidebar, Navbar, DashboardDetails } from '../components/DashBoardComponents'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductPage from './ProductPage';

const Dashboard = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Container fluid>
			<Row>
				{isOpen && (
					<Col
						sm={12}
						md={2}
						className="text-bg-primary text-left"
						style={{ minHeight: '100vh' }}
					>
						<Sidebar />
					</Col>
				)}

				<Col md={isOpen ? 10 : 12} sm={12}>
					<Container>
						<Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
						<Routes>
							<Route path='/add/product' element={<ProductPage />} />
							<Route path='/' element={<DashboardDetails />} />
						</Routes>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default Dashboard;
