import {useState} from 'react'
import {FaStar} from 'react-icons/fa'

const createArray = (length) => [
  ...Array(length)
]

const Rating = ({selected = false, onSelect}) => {
  return(
    <>
      <FaStar
        color={selected ? "red" : "gray"}
        onClick= {onSelect}
      />
    </>
  )
}

const StraRating = ({totalStars = 5 }) => {
  const [selectedStar, setSelectedStar] = useState(0)
  return(
    <>
      {createArray(totalStars).map((n, i) => (
        <Rating
          key={i}
          selected = {selectedStar > i}
          onSelect= {() => setSelectedStar(i + 1)}
        />
      ))}
      <p>{selectedStar} of {totalStars}</p>
    </>
  )
}

const Star = () => {
  return (
    <>
      <StraRating totalStars={5} />
    </>
  )
}

export default Star
