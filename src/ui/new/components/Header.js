

import React from 'react'

const Header = (props) => {


	return (
		<div className='header'>
			<h1>Cura Model Generator</h1>
			<div className='header-button-container'>
				<div className='header-button generate' onClick={(_) => { props.onGenerateClicked() }}>Generate Dart</div>
				<div className='header-button download' onClick={(_) => { props.onDownloadClicked() }}>Downlaod Files</div>
			</div>
		</div>
	)
}

export default Header
