import {useState} from 'react'

const Simple = () => {
  const [status, setStatus] = useState("Not Delivered")
  return (
    <>
      <h1>Product is: {status}</h1>
      <button onClick={() => setStatus('Delivered')}>Deliver</button>
    </>
  )
}

export default Simple
