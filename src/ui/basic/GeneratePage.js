import React, { Component } from 'react'
import Generator from '../../generator/Generator'
import './GeneratePage.css'
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import dart from 'react-syntax-highlighter/dist/esm/languages/hljs/dart';
import stackoverflowDark from 'react-syntax-highlighter/dist/esm/styles/hljs/stackoverflow-dark';
SyntaxHighlighter.registerLanguage('dart', dart);

export default class GeneratePage extends Component {
	constructor(props) {
		super(props)
		this.state = { jsonString: '', dartClasses: [], selected: 0 }
	}

	onChange = (newVal) => {
		this.setState({ jsonString: newVal })
	}

	onSubmit = () => {
		const dartClasses = Generator.generateDart(this.state.jsonString, "Hello")
		this.setState({ dartClasses: dartClasses.reverse(), selected: 0 })
	}

	onFileClick = (index) => {
		this.setState({ selected: index })
	}


	render() {
		return (
			<div className='container'>
				<div className='form'>
					<textarea id="input" name="input" onChange={(e) => { this.onChange(e.target.value) }}>
					</textarea>
					<button onClick={(e) => { this.onSubmit() }}>Test</button>
				</div>
				{this.state.dartClasses.length > 0 && <div className='explorer'>
					{this.state.dartClasses.map((dart, index) => (
						<div
							key={dart.fileName}
							className={`${this.state.selected === index ? 'selected' : ''} fileItem`}
							onClick={(e) => { this.onFileClick(index) }}>
							{dart.fileName}.dart
						</div>
					))}
				</div>}
				{this.state.dartClasses.length > 0 &&
					<SyntaxHighlighter
						language="dart"
						style={stackoverflowDark}
						className='output'>
						{this.state.dartClasses[this.state.selected].generateDartCode()}
					</SyntaxHighlighter>}
			</div>
		)
	}
}
