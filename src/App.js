import { Header } from "./Components/Header"
import { Home } from "./Pages/Home"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { AddExpense } from "./Pages/AddExpense"


export const App = () => {
  return (
    <>
      <div>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/add-expense" element={<AddExpense/>}/>
          </Routes>
        </BrowserRouter>
        <h1>Footer</h1>
      </div>
    </>
  )
}