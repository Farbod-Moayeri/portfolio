import React from 'react'
import { NavigationBar } from './navbar'
import { ProfileHeader } from './ProfileHeader'
import { JobTimeLine } from './JobTimeLine'
import { ProjectDisplay } from './ProjectDisplay'
import { SectorDivisor } from './SectorDivisor'
import { ExampleComponent } from './exampleComponent'


export const App = () => {
  return (
    
    <>
        <NavigationBar />
        <ProfileHeader />
        <SectorDivisor />
        <JobTimeLine />
        <SectorDivisor />
        <ProjectDisplay />
        <ExampleComponent />
    </>
  )
}
