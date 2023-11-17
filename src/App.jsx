import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Create from './assets/comm/user/Create.jsx'
import Index from './assets/comm/user/Index.jsx'
import Details from './assets/comm/user/Details.jsx'
import Edit from './assets/comm/user/Edit.jsx'
function App() {
  return (
<Routes>
  <Route path='/'/>
  <Route path='/user/index' element={<Index/>}/>
  <Route path='/user/create'  element={<Create/>}/>
  <Route path='/user/:id'  element={<Details/>}/>
  <Route path='/user/edit/:id'  element={<Edit/>}/>

  <Route path='*'  element={<h2> user not found</h2>}/>

</Routes>
    

    )
}

export default App