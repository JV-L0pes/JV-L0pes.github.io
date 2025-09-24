import SectionHeader from './SectionHeader'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

type Experience = {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
  achievements: string[]
}

const experiences: Experience[] = [
  {
    title: 'Estagiário de Desenvolvimento de Software',
    company: 'AllTech Digital',
    period: 'Jul 2025 - Presente',
    description: 'Estágio remoto focado em desenvolvimento de soluções com Inteligência Artificial e automação. Desenvolvimento de projetos reais utilizados por clientes, incluindo sistemas de IA, automação com n8n e desenvolvimento web.',
    technologies: ['Python', 'n8n', 'Inteligência Artificial', 'Machine Learning', 'Computer Vision', 'YOLO11'],
    achievements: [
      'Desenvolvimento de projetos de IA utilizados por clientes reais',
      'Implementação de soluções de automação com n8n',
      'Criação de sistemas de Computer Vision com YOLO11',
      'Desenvolvimento de aplicações web modernas',
      'Trabalho remoto com equipe distribuída'
    ]
  },
  {
    title: 'Scrum Master & Desenvolvedor Frontend',
    company: 'ErrorSquad-ABP - Sistema de Gestão Acadêmica',
    period: '2024 - 2025',
    description: 'Desenvolvimento de sistema web para otimizar a gestão de horários acadêmicos da FATEC Jacareí, substituindo informes impressos por plataforma digital integrada. Atuação como Scrum Master facilitando cerimônias ágeis e desenvolvimento frontend responsivo.',
    technologies: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'SCRUM'],
    achievements: [
      'Facilitação de cerimônias ágeis como Scrum Master',
      'Desenvolvimento de sistema de gestão acadêmica completo',
      'Digitalização de processos administrativos da instituição',
      'Implementação de interface responsiva e intuitiva',
      'Elaboração de documentação técnica detalhada'
    ]
  },
      {
        title: 'Scrum Master & Desenvolvedor FullStack',
        company: 'ExceptionH4ndlers - Sistema de Visualização e Disseminação de Dados Limnológicos',
        period: '2025',
        description: 'Desenvolvimento de sistema complexo para análise de dados limnológicos com múltiplos bancos de dados (Furnas, Balcar, SIMA). Projeto acadêmico da FATEC Jacareí em parceria com o INPE, com arquitetura de microserviços, React + TypeScript frontend e Node.js + PostgreSQL backend, totalmente containerizado com Docker.',
        technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'SCRUM', 'CI/CD', 'GitHub Actions'],
        achievements: [
          'Coordenação de equipe de 5 desenvolvedores como Scrum Master',
          'Arquitetura de sistema com múltiplos bancos de dados independentes para dados limnológicos',
          'Implementação de CI/CD com GitHub Actions e pipeline automatizado',
          'Containerização completa com Docker Compose (3 bancos PostgreSQL)',
          'Desenvolvimento de API RESTful com Node.js + TypeScript',
          'Interface React responsiva com styled-components e Vite',
          'Metodologia Scrum com Product Backlog, Sprints e Burndown Charts',
          'Estrutura organizada: front/, server/, múltiplos bancos de dados'
        ]
      }
]

export default function Experience() {
  const { t } = useTranslation()
  
  return (
    <section id="experience" className="section">
      <div className="container-max">
        <SectionHeader title={t('experience.title')} />
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="card card-hover p-8 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold gradient-text">{exp.title}</h3>
                    <p className="text-xl font-semibold text-white">{exp.company}</p>
                    <p className="text-primary font-medium">{exp.period}</p>
                  </div>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full lg:self-center"></div>
                </div>
                
                {/* Description */}
                <p className="text-lg text-muted leading-relaxed">{exp.description}</p>
                
                {/* Achievements */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Principais Conquistas
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Tecnologias
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-white hover:border-primary/40 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
