import React from 'react'
import { useSelector } from 'react-redux'
import NameGetterModal from './ui/new/components/NameGetterModal'
import MainPage from './ui/new/MainPage'


const App = () => {
  const showModal = useSelector(state => state.modal.showModal)

  return (
    <>
      <MainPage />
      {showModal && <NameGetterModal />}
    </>
  )
}

export default App

