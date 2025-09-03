import SectionHeader from './SectionHeader'
import { useTranslation } from 'react-i18next'

export default function About(){
  const { t } = useTranslation()
  const stats = t('about.stats', { returnObjects: true }) as {h:string,p:string}[]
  return (
    <section id="about" className="section bg-surface">
      <div className="container-max grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeader title={t('about.title')} />
          <div className="space-y-4">
            <p className="pl-4 border-l-4 border-primary">{t('about.p1')}</p>
            <p className="pl-4 border-l-4 border-primary">{t('about.p2')}</p>
            <p className="pl-4 border-l-4 border-primary">{t('about.p3')}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {stats.map((s, i)=> (
            <div key={i} className="card card-hover p-6 min-w-[200px] text-center">
              <h3 className="text-2xl text-primary mb-2">{s.h}</h3>
              <p className="text-muted">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
