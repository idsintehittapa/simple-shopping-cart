import React from 'react'
import { useSelector } from 'react-redux'
import { Default } from 'react-spinners-css'

export const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)
  const style = { position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }

  return (
    <>
      {isLoading
        && <div style={style}>
          <Default color="#65AAE1" size={200} />
        </div>}
    </>
  )
}