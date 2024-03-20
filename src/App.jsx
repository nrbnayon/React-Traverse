import AxiosLearn from "./Components/AxiosDataFetch/AxiosLearn";
import Chatting from "./Components/Chatting/Chatting";
import NavBar from "./Components/NavBar/NavBar";
import Prices from "./Components/Price/Price";
import MyLineChart from "./Components/ReactChart/MyLineChart";

function App() {
  return (
    <>
      <NavBar />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Chatting />
      <Prices />
      <MyLineChart />
      <AxiosLearn />
    </>
  );
}

export default App;
