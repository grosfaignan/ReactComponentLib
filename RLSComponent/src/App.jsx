import { Fragment } from 'react'
import { SubmitButton } from './components/index'

function App() {

  const handleClick=()=>{
    console.log('handleclick')
    alert("j'ai cliqué sur le titre")
  }

  return (
    <Fragment>
      <p>
        <strong>
          bonjour les gens
        </strong>
      </p>
      <SubmitButton text='submit' onClick={handleClick} href='#' />
    </Fragment>
  )
}

export default App
