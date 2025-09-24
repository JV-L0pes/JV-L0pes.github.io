import SectionHeader from './SectionHeader'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const contactItems = [
  { 
    label: 'E-mail', 
    href: 'mailto:joaovictorlopesr10@gmail.com',
    icon: 'https://img.icons8.com/color/48/000000/gmail-new.png'
  },
  { 
    label: 'GitHub', 
    href: 'https://github.com/JV-L0pes',
    icon: 'https://img.icons8.com/color/48/000000/github.png'
  },
  { 
    label: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/joaovictorlopesrosa',
    icon: 'https://img.icons8.com/color/48/000000/linkedin.png'
  },
  { 
    label: 'WhatsApp', 
    href: 'https://wa.me/5512983003034',
    icon: 'https://img.icons8.com/color/48/000000/whatsapp.png'
  }
]

export default function Contact(){
  const { t } = useTranslation()

  return (
    <section id="contact" className="section">
      <div className="container-max">
        <SectionHeader title={t('contact.title')} />
        <div className="flex justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl">
            {contactItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="card card-hover p-6 text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="space-y-4">
                  <img 
                    src={item.icon} 
                    alt={item.label}
                    className="w-12 h-12 mx-auto group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <span className="text-white font-medium">{item.label}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
