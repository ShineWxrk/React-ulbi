import { Suspense, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import Modal from 'shared/ui/Modal/Modal'
import Button from 'shared/ui/Button/Button'

const App = () => {
  const { theme } = useTheme()

  return (
    <div
      className={classNames('app', { hovered: true, selected: false }, [theme])}
    >
      <Suspense fallback={''}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
