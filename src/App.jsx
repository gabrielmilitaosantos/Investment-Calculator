import { useState } from "react";

import Header from "./Components/Header";
import UserInput from "./Components/UserInput";


function App() {

  const [userInput, setUserInput] = useState({
    initialInvestiment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setUserInput(prevValues => {
      const updatedUserInput = {
        ...prevValues,
        [name]: value
      }

      return updatedUserInput;
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      
    </>
  )
}

export default App;