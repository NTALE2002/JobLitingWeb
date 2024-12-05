import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './assets/Pages/HomePage'
import LayOut from './assets/Pages/LayOut'
import JobsPage from './assets/Pages/JobsPage'
import NotFound from './assets/Pages/NotFound'
import JobPage  from './assets/Pages/JobPage.jsx'
import AddJobPage from './assets/Pages/AddJobPage'
import { useEffect } from 'react'



function App() { 
  
  const addJob=async(newJob)=>{
   await fetch('./api/jobs',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(newJob)
    
  })
return;
}
const deleteJob= async(id)=>{
  await fetch(`./api/jobs/${id}`,{
    method:'DELETE'
  })

}

  return (
    
    <Router >
      <Routes >
        <Route element={<LayOut/> }>
        <Route index element={<HomePage/>}/>
        <Route path='/jobs' element={<JobsPage />}/>
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/> } />
        <Route path='/add-job'  element={<AddJobPage addSubmitForm={addJob}/>} />
        <Route path='*' element={<NotFound/>}/>
        </Route>         
      </Routes>
    </Router>
   
  )
}

export default App

