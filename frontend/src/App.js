import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import React, { useState } from "react";
import { BrowserRouter ,Route ,Routes} from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginPage/LoginScreen";
import RegisterPage from "./screens/RegisterPage/RegisterScreen";
import CreateNote from "./screens/CreateNote/CreateNote";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import SingleNote from "./screens/SingleNote/SingleNote";

const App = () => {
  const [search, setSearch] = useState("")
  // console.log(search);
  return (
  <BrowserRouter>
    <Header setSearch={setSearch} />
    <main>
      <Routes>
        <Route path="/" Component={LandingPage} exact />
        <Route path="/login" Component={LoginScreen} exact />
        <Route path="/profile" Component={ProfileScreen} exact />
        <Route path="/register" Component={RegisterPage} exact />
        <Route path="/createnote" Component={CreateNote} exact />
        <Route path="/note/:id" Component={SingleNote} exact />
        <Route exact="true" path="/mynotes" Component={() => <MyNotes search={search} />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
)};

export default App;
