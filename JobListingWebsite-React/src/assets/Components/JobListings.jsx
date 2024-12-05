import {useState,useEffect} from 'react'
import JobList from './JobList.jsx'

//Create new context


const JobListings = ({isHome=false}) => {
  
  const[jobListigs,setJobs]=useState([]);

  const apiUrl=isHome
                    ?'/api/jobs?_limit=3'
                    :'/api/jobs';
  useEffect(()=>{
    const fetchJobs=async()=>
      {
        try {
          const res=await fetch(apiUrl)
          const data=await res.json();
          console.log(data)
          setJobs(data)
        } catch (error) {
         console.error
        }
         
      }
      fetchJobs();
  },[])

 //fetch jobs from the App component and serve them
 


    
  return (
    <section className="bg-blue-50 px-4 py-10">
      
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
         {isHome? 'Browse Jobs':'All Jobs'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         
          {jobListigs.map((job)=>(
             <JobList key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default JobListings