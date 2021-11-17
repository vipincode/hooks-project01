import {useState} from 'react'

const Checkbox = () => {
  const [checked, setChecked] = useState(false)
  return(
    <div>
      <input type="checkbox" value={checked} onChange={() => setChecked((checked) => !checked)} />
      <p>{checked ? "Checked" : "Not Checked"}</p>
    </div>
  )
}

export default Checkbox
