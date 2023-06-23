import React from 'react'
import Container from '../components/Container'
import Navbar from '../components/navbar/Navbar'
import getCurrentUser from '../actions/getCurrentUser'
import getFavoriteCars from '../actions/getFavoriteCars'
import UserClient from './UserClient'
import EmptyState from '../components/EmptyState'
const page = async () => {
  const currentUser = await getCurrentUser()
  const cars = await getFavoriteCars()

  if (!currentUser) {
    return (
      <>
        <Navbar currentUser={currentUser} />
        <EmptyState
          title="Unauthorized"
          subtitle="Please Login"
      />
      </>
    )
  }

  if (cars.length === 0) {
    return (
     <>
        <Navbar currentUser={currentUser} />
        <EmptyState
          title="No favorite found"
          subtitle="Looks like you have no favorites on your properties"
      />
     </>
    )
  }

  return (
    <Container>
        <Navbar currentUser={currentUser} />
        <UserClient
          currentUser = {currentUser}
          cars= {cars}
        />
    </Container>

  )
}

export default page