import { useState } from 'react'
import Card from './Card'
import Button from './Button'

function App() {
  // const [state, functionToUpdateState] = useState(initialState)
  const [isShowingDetails, setIsShowingDetails] = useState(false)

  const fruits = ['apple', 'banana', 'strawberry', 'papaya']

  const apple = fruits[0]
  const banana = fruits[1]
  const strawberry = fruits[2]

  // Destructuring of arrays
  const [one, two, three] = fruits
  // Which is the same as:
  // const one = fruits[0] which is 'apple'
  // const two = fruits[1] which is 'banana'
  // const three = fruits[2] which is 'strawberry'

  function toggleDetails() {
    setIsShowingDetails(!isShowingDetails)
  }

  function logSomeStuff(stuff) {
    console.log(stuff)
  }

  return (
    <>
      <h1>Hello to OMR React Basics!</h1>
      <Card currywurst={isShowingDetails} onToggleDetails={toggleDetails} />
      <Button
        text="Logg me something"
        clickHandler={() => logSomeStuff('OMR React Basics')} //Wenn eine Funktion einen Parameter übegeben bekommt, muss ich sie als Arrow Funktion an meine Komponente übergeben
      />
    </>
  )
}

export default App
