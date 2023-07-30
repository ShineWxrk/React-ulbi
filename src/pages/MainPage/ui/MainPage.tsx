import { Counter } from "entities/Counter"
import { useTranslation } from "react-i18next"



export const MainPage = () => {

  const { t } = useTranslation()
  
  return (
    <div>
      {t('Главная страница')}
      <Counter />
    </div>
  )
}

export default MainPage