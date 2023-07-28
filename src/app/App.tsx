import './styles/index.scss'
import { Suspense, useEffect, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import Modal from 'shared/ui/Modal/Modal'
import Button from 'shared/ui/Button/Button'

const App = () => {
  const { theme } = useTheme()
  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <div
      className={classNames('app', { hovered: true, selected: false }, [theme])}
    >
      <Suspense fallback={''}>
        <Navbar />
        <Button onClick={() => setIsOpen(true)}>toggle</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptate id repudiandae. Adipisci exercitationem id culpa dignissimos ex ea cumque vero similique facere officiis nulla quasi autem, perspiciatis laboriosam inventore!
        </Modal>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
