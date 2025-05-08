import Navbar from "../components/layout/navbar/Navbar";

function ErrorPage() {
  return (
    <>
    <Navbar></Navbar>
    <div className="container fluid flex wrap text-gray-300 ">
      <h1 className="text-center !text-9xl w-full pt-[15%] leading-16">404</h1>
      <h2 className="text-center !text-4xl w-full ">page not found</h2>
      </div>
  </>
  )
}

export default ErrorPage