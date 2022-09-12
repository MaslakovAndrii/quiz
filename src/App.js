import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import AppRouter from "./components/AppRouter/AppRouter";
// import { useState } from "react";



function App() {
     // const [questions, setQuestions] = useState([])

     // const createQuestion = (newQuestion) => {
     //      setQuestions([...questions, newQuestion])
     // }
     // console.log(questions);

     return (
          <>
               <BrowserRouter>
                    <Header />
                    <AppRouter/>
               </BrowserRouter>
          </>
     );
}

export default App;
