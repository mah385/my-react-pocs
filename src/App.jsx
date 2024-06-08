import "./App.css";

import MyReactFormCase_1 from "./components/MyReactFormCase_1/MyReactFormCase_1.jsx";
import MyReactFormCase_2 from "./components/MyReactFormCase_2/MyReactFormCase_2.jsx";
import MyReactFormCase_3 from "./components/MyReactFormCase_3/MyReactFormCase_3.jsx";

function App() {
  return (
    <div className="app vh-100 d-flex gap-4 align-items-center justify-content-center">
      <MyReactFormCase_1 />
      <MyReactFormCase_2 />
      <MyReactFormCase_3 />
    </div>
  );
}

export default App;
