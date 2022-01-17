import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './NameGetterModal.css'
import { setRootModelName, hideModal } from "../../../redux/modalSlice";
import { setJsonMode } from '../../../redux/jsonModeSlice'
import { setDartClasses } from "../../../redux/dartClassesSlice";
import Generator from "../../../generator/Generator";

const NameGetterModal = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const jsonData = useSelector(state => state.jsonData.value)

  const onClick = () => {
    dispatch(setRootModelName(name))
    dispatch(hideModal())
    let dartClasses = Generator.generateDart(JSON.stringify(jsonData), name)
    dartClasses = dartClasses.map(
      (dart) => {
        return {
          name: dart.fileName,
          code: dart.generateDartCode()
        }
      }
    )
    dispatch(setDartClasses(dartClasses))
    dispatch(setJsonMode(false))
  }

  return (
    <div className='modal-container'>
      <div className='modal'>
        Root model name
        <input onChange={(e) => { setName(e.target.value) }} value={name} />
        <input type='button' value='Generate' onClick={(_) => { onClick() }} />
      </div>
    </div>
  )
}

export default NameGetterModal
