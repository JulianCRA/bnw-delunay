import React from 'react'
import PropTypes from 'prop-types'

import CornerMenu from '../ui/CornerMenu'
import actions from '../utils/actions'
import styles from './BnWDelaunayMenu.module.css'

import animationImage 	from './assets/buttons/animate.svg'
import downloadImage 	from './assets/buttons/download.svg'
import trianglesImage 	from './assets/buttons/triangles.svg'
import loadImage 		from './assets/buttons/load.svg'

const BnWDelaunayMenu = ({update}) => {
	const height =  window.innerHeight || 
					document.documentElement.clientHeight || 
					document.body.clientHeight

	const elements = [
		{
			type : "range",
			label : "THRESHOLD",
			//image : animationImage,
			min : 0,
			max : 1,
			step : 0.025,
			value : 0.5,
			small : height < 500,
			action : value => update({action: actions._MODIFY_THRESHOLD, value: value})
		},
		{
			type : "button",
			tooltip : "Save the mosaic image to a file.",
			label : "SAVE",
			image : downloadImage,
			small : height < 500,
			action : () => update({action : actions._SAVE})
		},
		{
			type : "button",
			tooltip : "Load another image.",
			label : "LOAD",
			image : loadImage,
			small : height < 500,
			action : () => update({action : actions._DISPLAY_READER})
		},
		{
			type : "button",
			tooltip : "Watch as the triangles are placed progressively.",
			label : "ANIMATE",
			image : animationImage,
			small : height < 500,
			action : () => update({action : actions._ANIMATE})
		},
		{
			type : "button",
			label : "GO!",
			image : trianglesImage,
			small : height < 500,
			action : () => update({action : actions._DELAUNAY})
		}
	]
	
	return(
		<div className = {styles.bnwDelaunayMenu}>
			<CornerMenu 
				elements = {elements} 
				position = {{
					bottom:true, 
					toLeft:true
				}} 
			/>
		</div>
		
	)
}

BnWDelaunayMenu.propTypes = {
	update: PropTypes.func.isRequired
}

export default BnWDelaunayMenu




