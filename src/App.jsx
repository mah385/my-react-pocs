import "./App.css";

import { toast } from "react-toastify";

function App() {
  return (
    <div className="app vh-100 d-flex flex-column align-items-center justify-content-center">
      <p className="display-1">BRANCH_BASE</p>
      <button
        type="button"
        className="btn btn-lg btn-outline-success "
        onClick={() => toast.success("BRANCH_BASE")}
      >
        BRANCH_BASE
      </button>
    </div>
  );
}

export default App;
