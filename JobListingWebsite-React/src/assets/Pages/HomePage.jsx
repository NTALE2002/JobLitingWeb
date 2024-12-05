import Hero from '../Components/Hero.jsx'
import HomeCards from '../Components/HomeCards.jsx'
import JobListings from '../Components/JobListings.jsx'
import ViewAllJobs from '../Components/ViewAllJobs.jsx'
const HomePage = () => {

  return (
    <div>
        <Hero/>
        <HomeCards/>
        <JobListings isHome={true}/>  
        <ViewAllJobs/>    
    </div>
  )
}

export default HomePage