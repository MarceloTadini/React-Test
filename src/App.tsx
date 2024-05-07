import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Config from "./Pages/Config";
import Sort from "./Pages/Sort";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Config/>}></Route>
          <Route path="/sort" element={<Sort/>}></Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
