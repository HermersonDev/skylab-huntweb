import React, { Component } from "react";
import api from "../../services/api";

class Main extends Component {
	state = {
		products: []
	}

	componentDidMount() {
		this.loadProducts();
	}

	loadProducts = async () => {
		const response = await api.get('/products');
		console.log(response);
		this.setState({ products: response.data.docs });
	};

	render() {
		return (
			<div>
				<span id="products-count">
					{ this.state.products.length } 
				</span>

				<div className="product-list">
					{this.state.products.map(product => (
						<h3 key={product._id}>{product.title}</h3>
					))}				
				</div>
			</div>
		);
	}
}

export default Main;