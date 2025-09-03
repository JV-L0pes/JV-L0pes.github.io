export default function SectionHeader({title}:{title:string}){
  return (
    <div className="text-center mb-12">
      <h2 className="section-title">{title}</h2>
      <span className="section-underline"/>
    </div>
  )
}
