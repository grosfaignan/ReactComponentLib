import { Fragment } from 'react'
import { SubmitButton } from './components/index'

function Title({color, hidden, ...props}){
  if(hidden)
    return null

  // const props={
  //   id:'monid',
  //   className:'demo'
  // }
  return <h1 style={{color: color}}{...props}/>
}
function App() {

  const handleClick=()=>{
    console.log('handleclick')
    alert("j'ai cliqué sur le titre")
  }

  return (
    <Fragment>
      <Title color="green" id='monid' className="demo" data-demo="demo">Mon Composant</Title>
      <p>
        <strong>
          bonjour les gens
        </strong>
      </p>
      {/* <SubmitButton text='submit' onClick={handleClick} href='#' /> */}
    </Fragment>
  )
}

export default App
