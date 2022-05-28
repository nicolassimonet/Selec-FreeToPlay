import styled from 'styled-components'
import { breakpoints } from 'styles/breakpoints'

export const Lien = styled.a`
	color: red;
	font-size: 24px;
`

export const Error = styled.p`
	color: white;
	font-size: 24px;
	display: flex;
	justify-content: center;
	margin-top: 250px;
`

export const List = styled.ul`
	display: block;
	max-width: 542px;
	margin: 0 auto;
	padding: 0 16px;
	margin-top: 50px;
	list-style-type: none;
	box-sizing: border-box;

	@media (min-width: ${breakpoints.tablet}) {
		max-width: ${breakpoints.tablet};
	}

	@media (min-width: ${breakpoints.desktop}) {
		max-width: ${breakpoints.desktop};
	}
`

export const ListItem = styled.li`
	margin-bottom: 24px;
	transition: all 0.2s ease-in-out;
	position: relative;

	&:hover::before,
	&:hover::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 4px;
		background: linear-gradient(
			45deg,
			#ff0000,
			#00f0f0,
			#00ff00,
			#0000ff,
			#ff0000,
			#00f0f0,
			#00ff00,
			#0000ff,
			#f00f0f
		);
		width: 100%;
		height: 100%;
		background-size: 500%;
		z-index: -1;
		transform: scale(1.01);
		animation: animate 20s infinite;
	}

	&:hover::after {
		filter: blur(5px);
	}

	@keyframes animate {
		0% {
			background-position: 0 0;
		}
		50% {
			background-position: 300% 0;
		}
		100% {
			background-position: 0 0;
		}
	}

	&:hover {
		transform: scale(1.02);
	}

	@media (min-width: ${breakpoints.tablet}) {
		display: inline-block;
		max-width: 332px;
		margin-right: 24px;

		&:nth-of-type(even) {
			margin-right: 0;
		}
	}

	@media (min-width: ${breakpoints.desktop}) {
		max-width: 312px;

		&:nth-of-type(even) {
			margin-right: 24px;
		}

		&:nth-of-type(3n + 3) {
			margin-right: 0;
		}
	}
`
