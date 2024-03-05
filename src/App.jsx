import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import { List } from "immutable";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

function App() {
  return (
    <>
      <h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
              <Route />
            </Route>
          </Routes>
        </BrowserRouter>
      </h1>
    </>
  );
}

export default App;
