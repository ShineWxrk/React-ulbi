import './styles/index.scss'
import { Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"


import { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'



const App = () => {
  const {theme, toogleTheme} = useTheme()
 
  return (
    <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
      <button onClick={toogleTheme}>TOOGLE</button>
      
      <Navbar />
      <AppRouter />
    </div> 
  )
}

export default App