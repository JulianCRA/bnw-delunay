import React from 'react'
import PropTypes from 'prop-types'
import P5Wrapper from '../utils/P5Wrapper'
import bnwDelaunaySketch from './sketch/bnw-delaunay.js'

const BnWDelaunaySketch = ({config}) => {
	const propTypes = {
		config : PropTypes.shape({
			link: PropTypes.string.isRequired,
			action: PropTypes.func.isRequired
		}).isRequired
	}
	
	return (
		<P5Wrapper 
			sketch = {bnwDelaunaySketch} 
			config = {config}>
		</P5Wrapper>
	)
}

export default BnWDelaunaySketch