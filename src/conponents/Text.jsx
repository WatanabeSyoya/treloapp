import React, {useState} from 'react'
import Number from './Number';

const Text = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
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
