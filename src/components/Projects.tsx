import SectionHeader from './SectionHeader'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'EPI-YOLO11',
    desc: 'Sistema de detecção de EPIs usando YOLO11 para segurança no trabalho. Projeto desenvolvido durante estágio na AllTech Digital, utilizado por clientes reais para identificação de equipamentos de proteção individual.',
    demo: 'https://github.com/JV-L0pes/EPI-YOLO11', 
    code: 'https://github.com/JV-L0pes/EPI-YOLO11',
    technologies: ['Python', 'YOLO11', 'Computer Vision', 'OpenCV', 'Machine Learning'],
    client: 'AllTech Digital - Projeto Real'
  },
  {
    title: 'ATENA',
    desc: 'Sistema de análise e processamento de dados com IA desenvolvido durante estágio. Projeto real utilizado por clientes para análise inteligente de dados utilizando técnicas de machine learning.',
    demo: 'https://github.com/JV-L0pes/ATENA', 
    code: 'https://github.com/JV-L0pes/ATENA',
    technologies: ['Python', 'Machine Learning', 'Data Analysis', 'AI'],
    client: 'AllTech Digital - Projeto Real'
  },
  {
    title: 'Shomer',
    desc: 'Sistema de monitoramento e análise com inteligência artificial. Plataforma desenvolvida durante estágio na AllTech Digital, utilizada por clientes para monitoramento inteligente e tomada de decisões.',
    demo: 'https://github.com/JV-L0pes/Shomer', 
    code: 'https://github.com/JV-L0pes/Shomer',
    technologies: ['Python', 'AI', 'Monitoring', 'Data Processing'],
    client: 'AllTech Digital - Projeto Real'
  },
  {
    title: 'AllTech Site',
    desc: 'Site moderno desenvolvido com tecnologias atuais durante estágio na AllTech Digital. Projeto real utilizado pela empresa para apresentação de serviços e soluções tecnológicas.',
    demo: 'https://github.com/JV-L0pes/AllTech-Site', 
    code: 'https://github.com/JV-L0pes/AllTech-Site',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Modern Web'],
    client: 'AllTech Digital - Projeto Real'
  },
  {
    title: 'sql-to-diagram',
    desc: 'Transforma scripts SQL em diagramas ER visuais. Ferramenta web que converte automaticamente scripts SQL em diagramas de relacionamento entidade intuitivos e visuais.',
    demo: 'https://github.com/JV-L0pes/sql-to-diagram', 
    code: 'https://github.com/JV-L0pes/sql-to-diagram',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SQL', 'PostgreSQL']
  },
  {
    title: 'Burndown Chart Generator',
    desc: 'Dashboard integrado com Trello para acompanhamento ágil. Sistema de burndown chart que se integra com Trello para visualização de progresso em metodologias ágeis.',
    demo: 'https://github.com/JV-L0pes/burndown-chart', 
    code: 'https://github.com/JV-L0pes/burndown-chart',
    technologies: ['JavaScript', 'DOM', 'SCRUM', 'Trello API']
  },
  {
    title: 'Sistema de Gestão Pedagógica',
    desc: 'Projeto ABP - FATEC Jacareí. Sistema completo de gestão pedagógica com frontend responsivo e backend robusto. Contribuições como Frontend Lead e Backend Developer.',
    demo: 'https://github.com/ErrorSquad-ABP/Gerenciamento_Pedagogico-Documentacao', 
    code: 'https://github.com/ErrorSquad-ABP/Gerenciamento_Pedagogico-Documentacao',
    technologies: ['React', 'JavaScript', 'Node.js', 'SCRUM', 'Documentation']
  }
]

export default function Projects(){
  return (
    <section id="projects" className="section">
      <div className="container-max">
        <SectionHeader title="Projetos" />
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((p, index) => (
            <motion.div 
              key={p.title} 
              className="card card-hover p-8 flex flex-col group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 flex-1">
                {/* Header */}
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-2xl font-bold gradient-text">{p.title}</h3>
                </div>
                
                {/* Description */}
                <p className="text-lg text-muted leading-relaxed">{p.desc}</p>
                
                {/* Technologies */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Tecnologias
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {p.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-white hover:border-primary/40 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Actions */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a 
                  className="btn btn-primary flex-1 text-center" 
                  target="_blank" 
                  href={p.demo}
                >
                  Ver Projeto
                </a>
                <a 
                  className="btn btn-outline flex-1 text-center" 
                  target="_blank" 
                  href={p.code}
                >
                  Código
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
