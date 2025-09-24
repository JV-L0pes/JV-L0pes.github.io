import SectionHeader from './SectionHeader'
import { useTranslation } from 'react-i18next'

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
    company: 'ExceptionH4ndlers - Sistema Multi-Banco de Dados',
    period: '2024 - 2025',
    description: 'Desenvolvimento de sistema complexo com múltiplos bancos de dados (Furnas, Balcar, SIMA) utilizando arquitetura de microserviços. Projeto acadêmico da FATEC Jacareí com React + TypeScript frontend e Node.js + PostgreSQL backend, containerizado com Docker.',
    technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'SCRUM', 'CI/CD'],
    achievements: [
      'Coordenação de equipe de 5 desenvolvedores como Scrum Master',
      'Arquitetura de sistema com múltiplos bancos de dados independentes',
      'Implementação de CI/CD com GitHub Actions',
      'Containerização completa com Docker Compose',
      'Desenvolvimento de API RESTful com Node.js + TypeScript',
      'Interface React responsiva com styled-components',
      'Metodologia Scrum com Product Backlog e Sprints estruturados'
    ]
  }
]

export default function Experience() {
  const { t } = useTranslation()
  
  return (
    <section id="experience" className="section bg-surface">
      <div className="container-max">
        <SectionHeader title="Experiências Profissionais" />
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card card-hover p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl text-primary font-semibold">{exp.title}</h3>
                  <p className="text-lg font-medium text-foreground">{exp.company}</p>
                  <p className="text-muted">{exp.period}</p>
                </div>
              </div>
              
              <p className="text-muted mb-4">{exp.description}</p>
              
              <div className="mb-4">
                <h4 className="text-primary font-semibold mb-2">Principais Conquistas:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-primary font-semibold mb-2">Tecnologias:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-background px-3 py-1 rounded-full text-sm border border-[rgba(255,0,51,0.2)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
