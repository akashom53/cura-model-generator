import React from 'react'
import Header from './components/Header'
import './DartPage.css'
import './JsonPage.css'
import LeftBar from './components/LeftBar'
import FileExplorer from './components/FileExplorer'
import DartCodeViewer from './components/DartCodeViewer'
import JsonEditor from './components/JsonEditor'
import { useSelector, useDispatch } from 'react-redux'
import { setJsonMode } from '../../redux/jsonModeSlice'
import { setJsonData } from '../../redux/jsonDataSlice'
import { showModal } from '../../redux/modalSlice'
import JSZip from "jszip"
import { saveAs } from "file-saver";

const MainPage = () => {
	const dispatch = useDispatch()

	const jsonMode = useSelector(state => state.jsonMode.value)
	const jsonData = useSelector(state => state.jsonData.value)

	const dartClasses = useSelector(state => state.dartClasses.classes)


	const onGenerateClicked = () => {
		dispatch(showModal())
	}
	const onDownloadClicked = () => {
		if (dartClasses.length == 0) return
		let zip = new JSZip()
		for (let dartClass of dartClasses) {
			zip.file(`${dartClass.name}.dart`, dartClass.code)
		}
		zip.generateAsync({ type: "blob" }).then(function (content) {
			saveAs(content, "models.zip")
			
		})
	}
	const onJsonSelected = () => {
		dispatch(setJsonMode(true))
	}
	const onDartSelected = () => {
		dispatch(setJsonMode(false))
	}

	const onJsonChange = (newJson) => {
		dispatch(setJsonData(newJson.jsObject))
	}

	return (
		<div className='main-container'>
			<Header
				onGenerateClicked={onGenerateClicked}
				onDownloadClicked={onDownloadClicked} />
			<LeftBar
				jsonMode={jsonMode}
				onJsonSelected={onJsonSelected}
				onDartSelected={onDartSelected} />
			{!jsonMode && <FileExplorer />}
			{!jsonMode && <DartCodeViewer />}
			{jsonMode && <JsonEditor json={jsonData} onChange={onJsonChange} />}
		</div>
	)
}

export default MainPage