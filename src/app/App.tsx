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
import { Sidebar } from 'widgets/Sidebar'
import { useTranslation } from 'react-i18next'

const Component = () => {
  
}



const App = () => {
  const {theme} = useTheme()
 
  return (
    <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
      <Suspense fallback={''}>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div> 
  )
}

export default App