import React, {useState} from 'react'
import Number from './Number';

const Text = () => {
  const [coun, setCount] = useState(0);
  return (
    <div>
      <Number count={coun} />
      <button onClick={() => setCount(coun + 1)}>
        Click
      </button>
    </div>
  )
}

export default Text
