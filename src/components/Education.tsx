import SectionHeader from './SectionHeader'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Education(){
  const { t } = useTranslation()
  return (
    <section id="education" className="section">
      <div className="container-max">
        <SectionHeader title={t('education.title')} />
        <div className="flex justify-center">
          <motion.div 
            className="card card-hover p-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold gradient-text">
                Curso Superior de Tecnologia em Desenvolvimento de Software
              </h3>
              <p className="text-xl font-semibold text-primary">Multiplataforma</p>
              <div className="space-y-2">
                <p className="text-lg text-white font-medium">Fatec Jacareí</p>
                    <p className="text-muted">2025 - 2027</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
