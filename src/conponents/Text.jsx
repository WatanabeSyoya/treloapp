import React, {useState} from 'react'
import Number from './Number';

const Text = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);
  const openModal = () => {
    setShow(true);
  }
  const closeModal = () => {
    setShow(false);
  }
  const handleName = (e) => {
    console.log(e.target.value);
    setName(e.target.value)
  }
  const countUp = () => {
    setCount(prevState => prevState + 1)
  }
  const countDown = () => {
    setCount(count == 0 ? 0 : prevState => prevState - 1)
  }
  return (
    <div className="textBox" >
      {show ? (
        <div id="overlay" onClick={closeModal} >
          <div id="content" onClick={(e) => e.stopPropagation()}>
            <p>これがモーダルウィンドウです。</p>
            <p><button onClick={closeModal}>close</button></p>
          </div>
        </div>
      ) :(
        <></>// showFlagがfalseの場合はModalは表示しない
      )}
      <button onClick={openModal} >Click</button>

      <input
        onChange={(e) => handleName(e)}
        type={'text'}
        value={name}
      />
      <Number count={count} />
      <button onClick={countUp} className="textButton" >
        +
      </button>
      <button onClick={countDown} className="textButton" >
        -
      </button>
      <button onClick={() => setCount(0)} className="textButton" >
        Reset
      </button>

    </div>
  )
}

export default Text
