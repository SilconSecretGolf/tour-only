import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button  style={{border: 'none', background: 'none', cursor: 'pointer'}} onClick={() => navigate(-1)}><span className="fs-3 link-dark oi oi-arrow-thick-left">&nbsp;</span></button>
  )
}

export default BackButton
