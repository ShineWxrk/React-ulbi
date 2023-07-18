import './styles/index.scss'
import { Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"


import { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { AppRouter } from './providers/router'



const App = () => {
  const {theme, toogleTheme} = useTheme()
 
  return (
    <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
      <button onClick={toogleTheme}>TOOGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <AppRouter />
    </div> 
  )
}

export default App