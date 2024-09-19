import { useState } from "react";
import "./App.css";
import MultiStepForm from "./multi-step-form";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cancel, setCancel] = useState(false);

  function onSubmit(data) {
    setFormSubmitted(true);
  }

  function onCancel(data) {
    setCancel(true);
  }

  return (
    <div>
      {formSubmitted && <h1> Form Submitted</h1>}
      {!formSubmitted && (
        <MultiStepForm onCancel={onCancel} onSubmit={onSubmit}></MultiStepForm>
      )}

      {cancel && <h1> User want's to cancel</h1>}
    </div>
  );
}

export default App;
