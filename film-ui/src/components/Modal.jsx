import React from 'react'
import FilmGrid from './FilmGrid'

function Modal({film,poster}) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button> X </button>
        <div className="title">
          <h1></h1>
        </div>
        <div className="modalBody">
          <p>movie description</p>
          <div className="modalFooter">
            <button>Cancel</button>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal