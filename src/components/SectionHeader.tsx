import { motion } from 'framer-motion'

export default function SectionHeader({title}:{title:string}){
  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-6">{title}</h2>
      <motion.div 
        className="section-underline mx-auto"
        initial={{ width: 0 }}
        whileInView={{ width: "6rem" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </motion.div>
  )
}
