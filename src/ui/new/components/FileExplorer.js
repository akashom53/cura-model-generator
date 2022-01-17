import React from 'react'
import folderIcon from '../../../assets/folder_icon.svg'
import FileItem from './FileItem'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedIndex } from '../../../redux/dartClassesSlice'

const FileExplorer = () => {
	const dartClasses = useSelector(state => state.dartClasses.classes)
	const selectedIndex = useSelector(state => state.dartClasses.selectedIndex)
	const dispatch = useDispatch()

	const onClick = (index) => {
		dispatch(setSelectedIndex(index))
	 }

	 console.log(selectedIndex)
	return (
		<div className='file-explorer'>
			<div className='folder-container'>
				<img src={folderIcon} />
				<h1>models</h1>
			</div>
			<div className='file-list-container'>
				{dartClasses.map((f, i) => <FileItem
					fileName={`${f.name}.dart`}
					selected={i == selectedIndex}
					onClick={() => onClick(i)} />)}
			</div>
		</div>
	)

}

export default FileExplorer