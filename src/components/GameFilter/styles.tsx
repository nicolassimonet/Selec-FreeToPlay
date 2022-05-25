import styled from 'styled-components'
import { breakpoints } from 'styles/breakpoints'
import { backgroundColor, secondaryTextColor } from 'styles/theme'

export const Form = styled.form`
	display: flex;
	justify-content: space-between;
	max-width: 542px;
	padding: 0 16px;
	margin: 24px auto;
	color: ${secondaryTextColor};
	box-sizing: border-box;

	@media (min-width: ${breakpoints.tablet}) {
		max-width: ${breakpoints.tablet};
	}

	@media (max-width: 375px) {
		display: flex;
		flex-direction: column;
	}

	@media (min-width: ${breakpoints.desktop}) {
		max-width: 1010px;
	}
`

export const Label = styled.label`
	margin-right: 16px;
	flex-basis: 25%;

	&:last-of-type {
		margin-right: 0;
	}
`

export const Select = styled.select`
	width: 100%;
	margin-top: 10px;
	color: white;
	background-color: ${backgroundColor};
	border-radius: 3px;
	box-shadow: -1px 1px 4px 1px #ff0000;
`
