import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

const links = ['home','about','experience','skills','certifications','education','projects','contact'] as const

export default function Navbar(){
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const [scrollDir, setScrollDir] = useState<'up'|'down'|'neutral'>('neutral')

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const cur = window.scrollY
      if (cur <= 0) setScrollDir('neutral')
      else setScrollDir(cur > last ? 'down' : 'up')
      last = cur
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(()=>{
    document.body.style.overflow = open ? 'hidden' : ''
  },[open])

  return (
    <nav className={`nav-blur ${scrollDir==='down'?'translate-y-[-100%]':'translate-y-0'} transition-transform` } aria-label="Main Navigation">
      <div className="container-max flex items-center justify-between h-16">
        <a href="#home" className="text-xl font-extrabold tracking-wide">JV<span className="text-primary">Lopes</span></a>
        <button className="md:hidden text-2xl" aria-label="menu" onClick={()=>setOpen(o=>!o)}>☰</button>
        <ul className={`md:flex items-center gap-8 hidden`} role="menubar">
          {links.map(k => (
            <li key={k} role="none"><a role="menuitem" className="hover:text-primary relative py-2" href={`#${k}`}>{t(`nav.${k}`)}</a></li>
          ))}
          <LanguageSwitcher />
        </ul>
      </div>
      {/* Mobile */}
      <div className={`${open?'block':'hidden'} md:hidden border-t border-border bg-[rgba(13,13,13,0.95)] backdrop-blur`}> 
        <ul className="container-max flex flex-col py-4 gap-3">
          {links.map(k => (
            <li key={k}><a onClick={()=>setOpen(false)} className="block py-2" href={`#${k}`}>{t(`nav.${k}`)}</a></li>
          ))}
          <LanguageSwitcher onChange={()=>setOpen(false)}/>
        </ul>
      </div>
    </nav>
  )

  function LanguageSwitcher({onChange}:{onChange?:()=>void}){
    const [open, setOpen] = useState(false)
    return (
      <li className="relative" role="none">
        <button onClick={()=>{setOpen(o=>!o)}} className="px-3 py-1 rounded-md border border-border">🌐</button>
        <ul className={`absolute right-0 mt-2 w-36 bg-surface border border-border rounded-md ${open?'block':'hidden'}`}>
          <li><button className="w-full text-left px-3 py-2 hover:bg-card" onClick={()=>{i18n.changeLanguage('pt'); setOpen(false); onChange?.()}}>🇧🇷 Português</button></li>
          <li><button className="w-full text-left px-3 py-2 hover:bg-card" onClick={()=>{i18n.changeLanguage('en'); setOpen(false); onChange?.()}}>🇺🇸 English</button></li>
        </ul>
      </li>
    )
  }
}
