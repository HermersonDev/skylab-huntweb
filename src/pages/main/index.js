import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css";

class Main extends Component {
	
	state = {
		products: [],
		productInfo: [],
		page: 1
	}

	componentDidMount() {
		this.loadProducts();
	}

	loadProducts = async (page = 1) => {
		const response = await api.get(`/products?page=${page}`);
		const { docs, ...productInfo } = response.data;

		this.setState({ 
			products: docs, 
			productInfo,
			page 
		});
	}

	prevPage = () => {
		const { page, productInfo } = this.state;

		if (page === 1)
			return;

		this.loadProducts(page - 1);
	}

	nextPage = () => {
		const { page, productInfo } = this.state;
		
		if (page === productInfo.pages)
			return;

		this.loadProducts(page + 1);
	}

	render() {
		const { products, productInfo, page } = this.state;

		return (
			<div>
				<span id="products-number">{products.length}</span>
				<div className="product-list">
					
					{products.map(product => (
						<article key={product._id}>
							<h4>{product.title}</h4>
							<p>{product.description}</p>
							<a href="">Acessar</a>
						</article>
					))}		
					<div className="actions">
						<button onClick={this.prevPage}
								disabled={page === 1} >
							Anterior
						</button>
						<button onClick={this.nextPage}
								disabled={page === productInfo.pages} >
							Próximo
						</button>
					</div>		
				</div>
			</div>
		);
	}
}

export default Main;