import React, { Component } from "react";
import api from "../../services/api";

class Main extends Component {
	
	componentDidMount() {
		this.loadProducts();
	}

	loadProducts = async () => {
		let products = await api.get('/products');
		console.log(products);
	}

	render() {
		return <h1>Main Page</h1>;
	}
}

export default Main;