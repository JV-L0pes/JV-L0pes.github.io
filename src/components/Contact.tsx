import SectionHeader from './SectionHeader'
import { useTranslation } from 'react-i18next'

export default function Contact(){
  const { t } = useTranslation()
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    alert('Mensagem enviada com sucesso!')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="section bg-surface">
      <div className="container-max">
        <SectionHeader title={t('contact.title')} />
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="card p-6">
            <div className="grid sm:grid-cols-2 gap-3">
              <ContactItem label={t('contact.email')} href="mailto:joaovictorlopesr10@gmail.com" />
              <ContactItem label="GitHub" href="https://github.com/JV-L0pes" />
              <ContactItem label="LinkedIn" href="https://www.linkedin.com/in/joaovictorlopesrosa" />
              <ContactItem label="WhatsApp" href="https://wa.me/5512983003034" />
            </div>
          </div>
          <form className="card p-6 space-y-4" onSubmit={onSubmit}>
            <input className="w-full rounded-md bg-[rgba(26,26,26,0.8)] border border-border px-3 py-2" placeholder="Nome" required/>
            <input className="w-full rounded-md bg-[rgba(26,26,26,0.8)] border border-border px-3 py-2" type="email" placeholder="Email" required/>
            <textarea className="w-full rounded-md bg-[rgba(26,26,26,0.8)] border border-border px-3 py-2 min-h-[150px]" placeholder="Mensagem" required/>
            <button className="btn btn-primary" type="submit">{t('contact.send')}</button>
          </form>
        </div>
      </div>
    </section>
  )
}

function ContactItem({label, href}:{label:string, href:string}){
  return (
    <a className="card card-hover p-4 flex items-center justify-center text-center" href={href} target="_blank" rel="noreferrer">
      <span className="text-primary mr-2">◆</span> {label}
    </a>
  )
}
