import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Messages from './../../../Messages';

import './footer.css';

class Footer extends Component {
	render() {
		return (
			<Container className = 'footer'>
				<Row>
					<Col md={4} sm={8}>
						<ul>
							<li>{Messages.footer.footerEmail}</li>
							<li>{Messages.footer.footerPhone1}</li>
							<li>{Messages.footer.footerPhone2}</li>
							<li>{Messages.footer.footerPhone3}</li>
						</ul>
					</Col>
					<Col md={4} sm={8}>
						<ul>
							<li><a href="http://trims.com/" target = "blank">{Messages.footer.footerLi1}</a></li>
							<li><a href="http://www.handsome.com/" target = "blank">{Messages.footer.footerLi2}</a></li>
							<li><a href="https://barberha.com/"  target = "blank">{Messages.footer.footerLi3}</a></li>
						</ul>
					</Col>
					<Col md={4}  sm={8}  xs={8} >
						<ul className = 'social'>
							<li>
								<a href="https://twitter.com/" target = "blank">
									<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path  d="M243.196,0C108.891,0,0,108.891,0,243.196s108.891,243.196,243.196,243.196
										s243.196-108.891,243.196-243.196C486.392,108.861,377.501,0,243.196,0z M364.186,188.598l0.182,7.752
										c0,79.16-60.221,170.359-170.359,170.359c-33.804,0-65.268-9.91-91.776-26.904c4.682,0.547,9.454,0.851,14.288,0.851
										c28.059,0,53.868-9.576,74.357-25.627c-26.204-0.486-48.305-17.814-55.935-41.586c3.678,0.699,7.387,1.034,11.278,1.034
										c5.472,0,10.761-0.699,15.777-2.067c-27.39-5.533-48.031-29.7-48.031-58.701v-0.76c8.086,4.499,17.297,7.174,27.116,7.509
										c-16.051-10.731-26.63-29.062-26.63-49.825c0-10.974,2.949-21.249,8.086-30.095c29.518,36.236,73.658,60.069,123.422,62.562
										c-1.034-4.378-1.55-8.968-1.55-13.649c0-33.044,26.812-59.857,59.887-59.857c17.206,0,32.771,7.265,43.714,18.908
										c13.619-2.706,26.448-7.691,38.03-14.531c-4.469,13.984-13.953,25.718-26.326,33.135c12.069-1.429,23.651-4.682,34.382-9.424
										C386.073,169.659,375.889,180.208,364.186,188.598z"/></svg>
								</a>
							</li>
							<li>
								<a href="https://facebook.com/" target = "blank">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										x="0"
										y="0"
										enableBackground="new 0 0 97.75 97.75"
										version="1.1"
										viewBox="0 0 97.75 97.75"
										xmlSpace="preserve"
									>
										<path d="M48.875 0C21.882 0 0 21.882 0 48.875S21.882 97.75 48.875 97.75 97.75 75.868 97.75 48.875 75.868 0 48.875 0zm18.646 24.89l-6.76.003c-5.301 0-6.326 2.519-6.326 6.215v8.15h12.641l-.006 12.765H54.436v32.758H41.251V52.023H30.229V39.258h11.022v-9.414c0-10.925 6.675-16.875 16.42-16.875l9.851.015V24.89h-.001z" />
									</svg>
								</a>
							</li>
							<li>
								<a href="https://twitter.com/" target = "blank">
									<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path  d="M243.196,0C108.891,0,0,108.891,0,243.196s108.891,243.196,243.196,243.196
										s243.196-108.891,243.196-243.196C486.392,108.861,377.501,0,243.196,0z M364.186,188.598l0.182,7.752
										c0,79.16-60.221,170.359-170.359,170.359c-33.804,0-65.268-9.91-91.776-26.904c4.682,0.547,9.454,0.851,14.288,0.851
										c28.059,0,53.868-9.576,74.357-25.627c-26.204-0.486-48.305-17.814-55.935-41.586c3.678,0.699,7.387,1.034,11.278,1.034
										c5.472,0,10.761-0.699,15.777-2.067c-27.39-5.533-48.031-29.7-48.031-58.701v-0.76c8.086,4.499,17.297,7.174,27.116,7.509
										c-16.051-10.731-26.63-29.062-26.63-49.825c0-10.974,2.949-21.249,8.086-30.095c29.518,36.236,73.658,60.069,123.422,62.562
										c-1.034-4.378-1.55-8.968-1.55-13.649c0-33.044,26.812-59.857,59.887-59.857c17.206,0,32.771,7.265,43.714,18.908
										c13.619-2.706,26.448-7.691,38.03-14.531c-4.469,13.984-13.953,25.718-26.326,33.135c12.069-1.429,23.651-4.682,34.382-9.424
										C386.073,169.659,375.889,180.208,364.186,188.598z"/></svg>
								</a>
							</li>
						</ul>
					</Col>
				</Row>
				<div className='line'></div>
				<Row className = 'justify-content-center'>
					<Col xs = {10} className = 'copyright'>{`${Messages.footer.footerDate} ${new Date().getFullYear()}`}</Col>
				</Row>
			</Container>
		);
	}
}
export default Footer;