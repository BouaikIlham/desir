import Navbar from "./components/navbar/Navbar";
import getCurrentUser from './actions/getCurrentUser'
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
export default async function  Home() {
  const currentUser = await getCurrentUser();
  const isEmpty = true

  if (isEmpty) {
    return (
      <>
         <Navbar currentUser={currentUser} />
         <EmptyState showReset />
      </>
     
    )
  }
  return (
    <>
       <Navbar currentUser={currentUser} />
       <Container>
          <div className="pt-24
                          grid
                          grid-cols-1
                          sm:grid-cols-2
                          md:grid-cols-3
                          lg:grid-cols-4
                          xl:grid-cols-5
                          2xl:grid-cols-6
                          gap-8">
            <div>
                Cars for users
            </div>
          </div>
        </Container>
    </>
   
  )
}
