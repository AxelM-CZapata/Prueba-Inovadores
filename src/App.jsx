
import Form from './form/form'
import Nav from './nav/nav'
import { Route,Routes } from 'react-router-dom'
function App() {
  return (
    <>
     <Routes>
      <Route path='/' element= {<Form></Form>}></Route>
      <Route path = '/nav' element= {<Nav></Nav>}></Route>
     </Routes>
    </>
  )
}

export default App
