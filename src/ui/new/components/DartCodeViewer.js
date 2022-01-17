import React from 'react'
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import dart from 'react-syntax-highlighter/dist/esm/languages/hljs/dart'
import { useSelector } from 'react-redux'
SyntaxHighlighter.registerLanguage('dart', dart)

const DartCodeViewer = () => {
	const dartClasses = useSelector(state => state.dartClasses.classes)
	const selectedIndex = useSelector(state => state.dartClasses.selectedIndex)

	return (
		<div className='code-container'>
			<SyntaxHighlighter
				language="dart"
				style={customTheme}
				showLineNumbers={true}
				lineNumberStyle={{ color: '#67717A' }}
				className='output'>
				{dartClasses[selectedIndex].code}
			</SyntaxHighlighter>

		</div>
	)
}

export default DartCodeViewer;


const customTheme = {
	"hljs": {
		"display": "block",
		"overflowX": "auto",
		"padding": "0.5em",
		"color": "#ffffff",
		"background": "#00000000"
	},
	"hljs-comment": {
		"color": "#999999"
	},
	"hljs-keyword": {
		"color": "#88aece"
	},
	"hljs-selector-tag": {
		"color": "#88aece"
	},
	"hljs-meta-keyword": {
		"color": "#88aece"
	},
	"hljs-doctag": {
		"color": "#88aece"
	},
	"hljs-section": {
		"color": "#88aece"
	},
	"hljs-selector-class": {
		"color": "#88aece"
	},
	"hljs-meta": {
		"color": "#88aece"
	},
	"hljs-selector-pseudo": {
		"color": "#88aece"
	},
	"hljs-attr": {
		"color": "#88aece"
	},
	"hljs-attribute": {
		"color": "v#c59bc1"
	},
	"hljs-name": {
		"color": "#f08d49"
	},
	"hljs-type": {
		"color": "#f08d49"
	},
	"hljs-number": {
		"color": "#f08d49"
	},
	"hljs-selector-id": {
		"color": "#f08d49"
	},
	"hljs-quote": {
		"color": "#f08d49"
	},
	"hljs-template-tag": {
		"color": "#f08d49"
	},
	"hljs-built_in": {
		"color": "#f08d49"
	},
	"hljs-title": {
		"color": "#f08d49"
	},
	"hljs-literal": {
		"color": "#f08d49"
	},
	"hljs-string": {
		"color": "#b5bd68"
	},
	"hljs-regexp": {
		"color": "#b5bd68"
	},
	"hljs-symbol": {
		"color": "#b5bd68"
	},
	"hljs-variable": {
		"color": "#b5bd68"
	},
	"hljs-template-variable": {
		"color": "#b5bd68"
	},
	"hljs-link": {
		"color": "#b5bd68"
	},
	"hljs-selector-attr": {
		"color": "#b5bd68"
	},
	"hljs-meta-string": {
		"color": "#b5bd68"
	},
	"hljs-bullet": {
		"color": "#cccccc"
	},
	"hljs-code": {
		"color": "#cccccc"
	},
	"hljs-deletion": {
		"color": "#de7176"
	},
	"hljs-addition": {
		"color": "#76c490"
	},
	"hljs-emphasis": {
		"fontStyle": "italic"
	},
	"hljs-strong": {
		"fontWeight": "bold"
	}
}
