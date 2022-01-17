import React, { Component } from 'react'

import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import sampleJson from '../../../assets/sample.json'


export default class JsonEditor extends Component {
	render() {
		return (
			<div className='json-editor'>
				<JSONInput
					onChange={this.props.onChange}
					placeholder={sampleJson}
					width='100%'
					height='100%'
					theme='dark_vscode_tribute'
					colors={{ 
						background: 'transparent',
					}}
					style={{
						labels: {
							fontSize: '12px',
							lineHeight: '20px',
						},
						body: {
							fontSize: '12px',
							lineHeight: '20px',
						}
					}}
					locale={locale}

				/>
			</div>
		)
	}
}
