import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Profile from './components/Profile'
import Login from './components/Login'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Feed from './components/Feed'
import Connections from './components/Connections'

function App() {

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename='/'>
          <Routes>
            <Route path='/' element={<Body />}>
              <Route path='/' element={<Feed />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/profile' element={<Profile />}></Route>
              <Route path='/connections' element={<Connections />}></Route>
              <Route path='/requests' element={<Profile />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
