import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from "./Product";
import Product_pop from "./Product_pop";
import Title from "./Title";
//load the data from file
import {ProductConsumer} from "../context";
//import '../assets/scss/redeem.scss';
import AuthUserContext from '../session/authUserContext';
import {firebase,db } from '../firebase/firebase';
import styled from 'styled-components';





export class ProductList extends Component {

	render() {
		return (
			<ProductWrapper>
			<div className='redeem-outer-wrap mb-5'>
				  	<ProductConsumer>

							{(value)=>{
						
								//value.getUserPoint_once(firebase.auth().currentUser.uid)
								return (<Title name="Redeem" title={value.user_point}/>)

							}}
					</ProductConsumer>
				
				<div className='redeem-wrap'>
					<div className='popular-wrap'>
						<div className='redeem-content-title'>Popular</div>
							<ProductConsumer>
								{(value)=>{
									return value.products.map( product => {
										if(product.popular === true)
											return <Product_pop key={product.id} product={product} />
									})
								}}
							</ProductConsumer>
					</div>
					<div className='more-wrap'>
						<div className='redeem-content-title'>More</div>
						<Row >
							<ProductConsumer>
								{(value)=>{
									return value.products.map( product => {
										return <Product key={product.id} product={product} />
									})
								}}
							</ProductConsumer>
						</Row>
					</div>
				</div>
			</div>
			</ProductWrapper>
		);
	}
}

const ProductWrapper = styled.div`
.redeem-outer-wrap{
  height: 100 px;
  width: 100%;
  padding: 0 0 60px 0;
  overflow-y: scroll;
  overflow-x: hidden;
}
`

export default ProductList;


