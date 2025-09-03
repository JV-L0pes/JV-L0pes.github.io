import { useTranslation } from 'react-i18next'
export default function Footer(){
  const { t } = useTranslation()
  return (
    <footer className="bg-[#050505] border-t border-[rgba(255,0,51,0.1)] py-8 text-center">
      <div className="container-max text-muted">
        {t('footer.made')}
      </div>
    </footer>
  )
}
