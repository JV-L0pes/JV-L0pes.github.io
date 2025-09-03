import SectionHeader from './SectionHeader'

const projects = [
  {
    title: 'Portfólio Pessoal',
    desc: 'Portfolio responsivo para apresentar projetos e habilidades.',
    demo: '#', code: '#'
  },
  {
    title: 'Burndown Chart Generator',
    desc: 'App web para criação e visualização de burndown charts.',
    demo: 'https://github.com/JV-L0pes/burndown-chart', code: 'https://github.com/JV-L0pes/burndown-chart'
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
              <h3 className="text-xl text-primary mb-2">{p.title}</h3>
              <p className="text-muted mb-4">{p.desc}</p>
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
