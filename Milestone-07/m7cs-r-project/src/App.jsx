
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import IssuesManagement from "./components/IssuesManagement";
import { Suspense } from "react";
import Loading from "./components/Loading";

const fetchData = async () => {
  const response = await fetch("/Data.json");
  return response.json();
}//this introduced by es6 thats why we trying to use it instant of .then



function App() {
  const fetchPromise = fetchData();


  return (
    <>
      {/* Navbar  */}
      <Navbar />

      <Suspense fallback={<Loading></Loading>}>
        <IssuesManagement fetchPromise={fetchPromise} />
      </Suspense>

      {/* Footer  */}
      <Footer />
    </>
  )
}

export default App
