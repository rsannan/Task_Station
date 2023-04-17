import { Route, Routes } from "react-router-dom";
import { Landing, Userpage, Signin, Signup, Task } from "./Pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/addtask" element={<Task />} />
      <Route path="/edituser" element={<Userpage />} />
    </Routes>
  );
}

export default App;
