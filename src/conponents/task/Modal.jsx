import React from 'react'

const Modal = (show, closeModal) => {
  return (
    <div>
      {show ? (
        <div id="overlay" onClick={closeModal} >
          <div id="content" >
            <p>これがモーダルウィンドウです。</p>
            <p><button onClick={closeModal}>close</button></p>
          </div>
        </div>
      ) :(
        <></>// showFlagがfalseの場合はModalは表示しない
      )}
    </div>
  )
}

export default Modal
