import { useTranslation } from 'react-i18next'

export default function Footer(){
  const { t } = useTranslation()
  return (
    <footer className="bg-[#050505] border-t border-[rgba(255,0,51,0.1)] py-8">
      <div className="container-max text-center">
        <p className="text-muted">
          {t('footer.made')} <span className="text-primary">❤️</span> <span className="gradient-text font-semibold">JV-L0pes</span>
        </p>
      </div>
    </footer>
  )
}
