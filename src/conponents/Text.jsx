import React, {useState} from 'react'
import Number from './Number';

const Text = () => {
  const [coun, setCount] = useState(0);
  return (
    <div className="textBox" >
      <Number count={coun} />
      <button onClick={() => setCount(coun + 1)} className="textButton" >
        +
      </button>
      <button onClick={coun == 0 ? () =>setCount(0) : () => setCount(coun - 1)} className="textButton" >
        -
      </button>
      <button onClick={() => setCount(0)} className="textButton" >
        Reset
      </button>

    </div>
  )
}

export default Text
