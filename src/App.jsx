
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {

  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Body />}>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <Body /> */}
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
    </>
  )
}

export default App
