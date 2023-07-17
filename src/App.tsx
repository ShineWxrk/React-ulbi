import './styles/index.scss'
import { Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { Suspense } from 'react'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'



const App = () => {
  const {theme, toogleTheme} = useTheme()
 
  return (
    <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
      <button onClick={toogleTheme}>TOOGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />}></Route>
          <Route path={'/'} element={<MainPageAsync />}></Route>
        </Routes>
      </Suspense>
    </div> 
  )
}

export default App