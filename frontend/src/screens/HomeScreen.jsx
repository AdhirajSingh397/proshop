import { Col, Row } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'
//on small screens itll take 12 columns and so on
const HomeScreen = () => {
	return (
		<>
		<h1>Latest Products</h1>
		<Row>
			{products.map((product) => (
			<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
			</Col>
		)) }
		</Row>
		</>
)
}

export default HomeScreen