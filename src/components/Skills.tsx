import SectionHeader from './SectionHeader'
import { useTranslation } from 'react-i18next'

const groups = [
  { key: 'frontend', items: ['HTML5','CSS3','React','Next.js','TypeScript'] },
  { key: 'backend', items: ['JavaScript','Node.js','Python','PostgreSQL','MySQL'] },
  { key: 'tools',   items: ['Git/GitHub','VSCode/Cursor','SCRUM','Prisma','Tailwind CSS'] },
]

export default function Skills(){
  const { t } = useTranslation()
  return (
    <section id="skills" className="section">
      <div className="container-max">
        <SectionHeader title={t('skills.title')} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {groups.map(g => (
            <div key={g.key} className="card card-hover p-6">
              <h3 className="text-primary text-xl mb-4 border-b border-[rgba(255,0,51,0.2)] pb-2">{t(`skills.${g.key}`)}</h3>
              <div className="grid grid-cols-2 gap-4">
                {g.items.map(i => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-lg">•</span>
                    <span>{i}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="card card-hover mt-8 p-6">
          <h3 className="text-2xl text-primary mb-4">{t('skills.soft')}</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {(t('skills.softItems', { returnObjects: true }) as string[]).map(s => (
              <div key={s} className="bg-background rounded-lg p-4 border border-[rgba(255,0,51,0.1)] text-center">{s}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
