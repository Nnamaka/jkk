//  background-color: #282c34;
// import Login from "./components/Login";
// import Login2 from "./components/Login2";
// import Login3 from "./components/Login3";
// import Mytry from "./components/mytry";
import Homepage from "./components/Homepage";
import Feature from "./components/feature";
import About from "./components/About";

function App() {
  return (
    <div className="grid gap-10 md:gap-0">
      {/* <Login2 /> */}
      {/* <Login /> */}
      {/* < Login3 /> */}
      {/* <Mytry/> */}
      <Homepage/>
      <Feature/>
      
      <About />
    </div>
  );
}

export default App;
