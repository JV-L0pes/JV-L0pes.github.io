import SectionHeader from './SectionHeader'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function About(){
  const { t } = useTranslation()
  const stats = t('about.stats', { returnObjects: true }) as {h:string,p:string}[]
  
  return (
    <section id="about" className="section">
      <div className="container-max">
        <SectionHeader title={t('about.title')} />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full"></div>
                <p className="pl-6 text-lg leading-relaxed text-muted">{t('about.p1')}</p>
              </div>
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-accent to-primary rounded-full"></div>
                <p className="pl-6 text-lg leading-relaxed text-muted">{t('about.p2')}</p>
              </div>
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full"></div>
                <p className="pl-6 text-lg leading-relaxed text-muted">{t('about.p3')}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {stats.map((s, i)=> (
              <motion.div 
                key={i} 
                className={`card card-hover p-8 text-center group ${i === 2 ? 'sm:col-span-1' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="space-y-3">
                  <h3 className={`font-bold gradient-text ${i === 2 ? 'text-2xl' : 'text-3xl'}`}>{s.h}</h3>
                  <p className="text-muted font-medium">{s.p}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
