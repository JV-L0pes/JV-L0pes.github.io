import SectionHeader from './SectionHeader'

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
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(p => (
            <div key={p.title} className="card card-hover p-6 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl text-primary">{p.title}</h3>
                {p.client && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Projeto Real
                  </span>
                )}
              </div>
              <p className="text-muted mb-4">{p.desc}</p>
              
              <div className="mb-4">
                <h4 className="text-primary font-semibold mb-2">Tecnologias:</h4>
                <div className="flex flex-wrap gap-2">
                  {p.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-background px-3 py-1 rounded-full text-sm border border-[rgba(255,0,51,0.2)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto flex gap-3">
                <a className="btn btn-primary" target="_blank" href={p.demo}>Ver Projeto</a>
                <a className="btn btn-outline" target="_blank" href={p.code}>Código</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
