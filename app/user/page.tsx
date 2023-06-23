import React from 'react'
import Container from '../components/Container'
import Navbar from '../components/navbar/Navbar'
import getCurrentUser from '../actions/getCurrentUser'
import getFavoriteCars from '../actions/getFavoriteCars'
const page = async () => {
  const currentUser = await getCurrentUser()
  const favorites = await getFavoriteCars()


  return (
    <Container>
        <Navbar currentUser={currentUser} />
    </Container>

  )
}

export default page