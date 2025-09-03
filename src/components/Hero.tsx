import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Hero(){
  const { t } = useTranslation()
  const words = t('hero.typing', { returnObjects: true }) as string[]
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [del, setDel] = useState(false)

  // typing effect (preserva o comportamento do main.js)
  useEffect(()=>{
    const full = words[idx]
    const step = () => {
      setText(prev => {
        if(!del){
          const next = full.slice(0, prev.length+1)
          if(next.length === full.length){ setDel(true); setTimeout(step, 1000); return next }
          return next
        } else {
          const next = full.slice(0, prev.length-1)
          if(next.length===0){ setDel(false); setIdx((idx+1)%words.length); setTimeout(step, 300); return next }
          return next
        }
      })
    }
    const id = setTimeout(step, 120)
    return () => clearTimeout(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[idx, words])

  // Parallax sutil
  const [y, setY] = useState(0)
  useEffect(()=>{
    const onScroll = () => setY(window.scrollY)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  },[])

  const contentY = useMemo(()=> y*0.25, [y])
  const imageY = useMemo(()=> y*-0.15, [y])

  return (
    <section id="home" className="section">
      <div className="container-max grid md:grid-cols-2 items-center gap-8">
        <motion.div style={{ transform: `translateY(${contentY}px)` }} initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} transition={{ duration: .7 }}>
          <h1 className="text-5xl font-bold leading-tight">{t('hero.hello')} <span className="text-primary">João Victor</span></h1>
          <h2 className="text-2xl text-primary mt-2">{t('hero.role')}</h2>
          <p className="mt-4 text-muted border-l-4 border-primary pl-3 text-lg min-h-[2.2rem]">{text}</p>
          <div className="mt-6 flex gap-4">
            <a className="btn btn-primary" href="#projects">Ver Projetos</a>
            <a className="btn btn-outline" href="#contact">Contato</a>
          </div>
        </motion.div>
        <motion.div className="flex justify-center" style={{ transform: `translateY(${imageY}px)` }} initial={{ opacity:0, scale:.9 }} animate={{ opacity:1, scale:1 }} transition={{ duration: .8, delay: .2 }}>
          <img src="/pfp.jpg" alt="João Victor Lopes" className="w-[300px] h-[300px] rounded-full object-cover p-[4px] border border-transparent avatar-ring" onError={(e)=>{(e.target as HTMLImageElement).src='https://via.placeholder.com/300x300?text=JV+Lopes'}} />
        </motion.div>
      </div>
    </section>
  )
}
