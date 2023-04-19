import { Route, Routes } from "react-router-dom";
import { Landing, Userpage, Signin, Signup, Task, Home } from "./Pages";
import { AppContext } from "./Context/context";

function App() {
  return (
    <AppContext>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addtask" element={<Task />} />
        <Route path="/edituser" element={<Userpage />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </AppContext>
  );
}

export default App;
