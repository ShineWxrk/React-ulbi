import { useTranslation } from "react-i18next"



export const MainPage = () => {

  const { t } = useTranslation()
  
  return (
    <div>
      {t('Супер пупер перевод')}
      {t('Главная страница')}
    </div>
  )
}

export default MainPage