import SectionHeader from './SectionHeader'
import { useTranslation } from 'react-i18next'

type Cert = { title: string, org: string, desc: string, url: string }

const certs: Cert[] = [
  { title: 'Git e GitHub', org: 'Udemy', desc: 'Controle de versão, GitHub Pages, branches e commits descritivos.', url: 'https://www.udemy.com/certificate/UC-c89ebe4b-b9ce-48ea-ba08-defb6645f09d/' },
  { title: 'Linux Unhatched', org: 'Cisco Networking Academy', desc: 'Comandos básicos de Linux para programação.', url: 'https://github.com/JV-L0pes/Certificados/blob/main/LinuxUnhatched.pdf' },
  { title: 'Git Cursa', org: 'Plataforma de Cursos', desc: 'Fundamentos de Git para colaboração.', url: 'https://github.com/JV-L0pes/Certificados/blob/main/Git_Cursa.png' },
]

export default function Certifications(){
  const { t } = useTranslation()
  return (
    <section id="certifications" className="section">
      <div className="container-max">
        <SectionHeader title={t('certifications.title')} />
        <div className="grid md:grid-cols-3 gap-6">
          {certs.map(c => (
            <a key={c.title} href={c.url} target="_blank" rel="noreferrer" className="card card-hover p-6 flex flex-col">
              <h3 className="text-xl text-primary mb-2">{c.title}</h3>
              <p className="text-muted mb-2">{c.org}</p>
              <p className="flex-1">{c.desc}</p>
              <span className="btn btn-outline mt-4 self-start">Ver certificado</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
