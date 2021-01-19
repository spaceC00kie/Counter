import React, { useState } from "react"
import Button from "react-bootstrap/Button"

const Counter = () => {
  const [score, setScore] = useState(10)
  return (
    <div>
      <Button variant="primary">I Do Nothing</Button>{" "}
      <button
        onClick={() => {
          if (score > 9) {
            setScore(0)
          } else {
            setScore(score + 1)
          }
        }}
      >
        Plus
      </button>
      <p>count {score}</p>
      <button
        onClick={() => {
          if (score > 0) {
            setScore(score - 1)
          }
        }}
      >
        Minus
      </button>
    </div>
  )
}

export default Counter
