import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

const Landing = (props) => {
	return (
		<Fragment>
			<nav
				className='navbar navbar-expand-lg navbar-light fixed-top'
				id='mainNav'
			>
				<div className='container'>
					<Link className='navbar-brand js-scroll-trigger' to='/'>
						wave
					</Link>
					<button
						className='navbar-toggler navbar-toggler-right'
						type='button'
						data-toggle='collapse'
						data-target='#navbarResponsive'
						aria-controls='navbarResponsive'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						Menu
						<i className='fas fa-bars'></i>
					</button>
					<div className='collapse navbar-collapse' id='navbarResponsive'>
						<ul className='navbar-nav ml-auto'>
							<li className='nav-item'>
								<Link className='nav-link js-scroll-trigger' to='/champions'>
									Champions
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<header className='masthead'>
				<div className='container d-flex h-100 align-items-center'>
					<div className='mx-auto text-center'>
						<h1 className='mx-auto my-0 text-uppercase'>wave</h1>
						<h2 className='text-white-50 mx-auto mt-2 mb-5'>
							A small project by Darren Wong.
						</h2>

						<Link to='/champions' className='btn btn-primary js-scroll-trigger'>
							Get Started
						</Link>
					</div>
				</div>
			</header>
		</Fragment>
	);
};

Landing.propTypes = {};

export default Landing;
