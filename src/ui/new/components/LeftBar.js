import React, { Component } from 'react'
import dartIcon from '../../../assets/dart_icon.svg'
import selectedDartIcon from '../../../assets/dart_icon_selected.svg'
import jsonIcon from '../../../assets/json_icon.svg'
import selectedjsonIcon from '../../../assets/json_icon_selected.svg'
import LeftBarButton from './LeftBarButton'
import { useSelector } from 'react-redux'

const LeftBar = ({jsonMode, onDartSelected, onJsonSelected}) => {
	const dartClasses = useSelector(state => state.dartClasses.classes)
	return (
		<div className='left-bar'>
			<LeftBarButton
				active={jsonMode}
				activeIcon={selectedjsonIcon}
				inactiveIcon={jsonIcon}
				onClick={onJsonSelected}
			/>
			{dartClasses.length > 0 ? <LeftBarButton
				active={!jsonMode}
				activeIcon={selectedDartIcon}
				inactiveIcon={dartIcon}
				onClick={onDartSelected}
			/> : <></>}
		</div>
	)
}

export default LeftBar