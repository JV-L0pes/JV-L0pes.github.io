import SectionHeader from './SectionHeader'
import { useTranslation } from 'react-i18next'

export default function Education(){
  const { t } = useTranslation()
  return (
    <section id="education" className="section bg-surface">
      <div className="container-max">
        <SectionHeader title={t('education.title')} />
        <div className="grid md:grid-cols-2 gap-6">
          {[{
            h3: 'Curso Superior de Tecnologia em Desenvolvimento de Software Multiplataforma', p1:'Fatec Jacareí', p2:'2025 - 2027 (Previsão)'
          },{
            h3: 'Ensino Médio e Pré-Vestibular', p1:'Anglo Jacareí', p2:'2020 - 2022'
          }].map((e)=> (
            <div key={e.h3} className="card card-hover p-6">
              <h3 className="text-xl text-primary mb-1">{e.h3}</h3>
              <p className="text-muted">{e.p1}</p>
              <p className="text-muted">{e.p2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
