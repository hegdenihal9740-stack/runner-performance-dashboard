// @ts-nocheck
import React, { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform, useSpring, useMotionValue, useMotionValueEvent, useInView, MotionConfig } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Menu, X, ChevronDown, Check, Zap, ShieldCheck, Globe2, Layers3, Workflow, BarChart3, Users, Boxes, Wallet, Truck, FileText, LockKeyhole, GraduationCap, ShoppingBag, Rocket, Play, Sparkles, Plus, Minus, Phone, MapPin, Github, Linkedin, Twitter, Search, CalendarDays, Mail, TrendingUp, Activity, Clock3 } from 'lucide-react'
const OrbitalScene = React.lazy(() => import('./OrbitalScene'))
function ClientOrbitalScene(){const [mounted,setMounted]=useState(false);React.useEffect(()=>setMounted(true),[]);if(!mounted)return <div className="orbital-canvas"/>;return <React.Suspense fallback={<div className="orbital-canvas"/>}><OrbitalScene/></React.Suspense>}

const modules = [
  {n:'01',name:'Sales & CRM',desc:'Keep sales activity and customer relationships connected in one shared workspace.',icon:Workflow,tag:'Customer growth',color:'blue'},
  {n:'02',name:'Inventory',desc:'Track stock across warehouses and channels with a clearer view of every movement.',icon:Boxes,tag:'Stock intelligence',color:'cyan'},
  {n:'03',name:'Marketing',desc:'Bring campaign planning and customer engagement into your connected operations.',icon:Sparkles,tag:'Customer engagement',color:'violet'},
  {n:'04',name:'Human Resources',desc:'Bring people operations and team workflows into the same business platform.',icon:Users,tag:'People operations',color:'blue'},
  {n:'05',name:'Finance',desc:'Manage financial workflows with a clear, connected view of your business.',icon:Wallet,tag:'Financial control',color:'green'},
  {n:'06',name:'Logistics',desc:'Coordinate routes, shipments and delivery operations from one place.',icon:Truck,tag:'Connected operations',color:'orange'},
  {n:'07',name:'Documents',desc:'Keep business files organised with centralised access and version history.',icon:FileText,tag:'One source of truth',color:'cyan'},
  {n:'08',name:'Compliance',desc:'Support accountable operations with audit trails and role-based permissions.',icon:ShieldCheck,tag:'Governance',color:'violet'}
]
const industries = [
  {name:'Education',desc:'Connect admissions, fees, faculty and academic administration.',icon:GraduationCap,number:'01'},
  {name:'Startups',desc:'Build a connected operational foundation that can grow with your team.',icon:Rocket,number:'02'},
  {name:'Retail & E-commerce',desc:'Coordinate multichannel inventory, point of sale and customer relationships.',icon:ShoppingBag,number:'03'}
]
const heroKeywordTags = [
 {label:'Finance',icon:Wallet,position:'keyword-finance'},
 {label:'Operations',icon:Workflow,position:'keyword-operations'},
 {label:'Sales',icon:TrendingUp,position:'keyword-sales'},
 {label:'HR',icon:Users,position:'keyword-hr'},
 {label:'Logistics',icon:Truck,position:'keyword-logistics'}
]
const faqs = [
  ['What is The Manager?','The Manager is an AI-powered business operating system from DevOps Manager LLP, bringing sales, inventory, HR, finance and operations into one platform.'],
  ['Which business modules are included?','The Manager brings together Sales & CRM, Inventory, Marketing, Human Resources, Finance, Logistics, Documents and Compliance.'],
  ['Can I try The Manager?','The official website advertises a 14-day premium trial. Use the enquiry form to ask the team about access.'],
  ['Can I request a product demonstration?','Yes. Use the Book a demo actions or contact DevOps Manager LLP by phone to discuss your requirements.'],
]
const ease=[.16,1,.3,1]
const easeIn=[.7,0,.84,0]
const fadeUp={hidden:{opacity:0,y:46,rotateX:16,scale:.97,filter:'blur(8px)'},show:(d=0)=>({opacity:1,y:0,rotateX:0,scale:1,filter:'blur(0px)',transition:{duration:.9,ease,delay:d}})}
function Reveal({children,className='',delay=0}) {return <motion.div className={className} style={{transformPerspective:1100,transformOrigin:'50% 100%'}} variants={fadeUp} custom={delay} initial="hidden" whileInView="show" viewport={{once:true,amount:.14}}>{children}</motion.div>}
function useMedia(query){const [match,setMatch]=useState(false);React.useEffect(()=>{const mq=window.matchMedia(query);const f=()=>setMatch(mq.matches);f();mq.addEventListener('change',f);return()=>mq.removeEventListener('change',f)},[query]);return match}
function ScrollStage({children,className=''}){
 const ref=React.useRef(null)
 const {scrollYProgress}=useScroll({target:ref,offset:['start end','start 0.35']})
 const p=useSpring(scrollYProgress,{stiffness:90,damping:22,mass:.4})
 const rotateX=useTransform(p,[0,1],[14,0]),scale=useTransform(p,[0,1],[.92,1]),y=useTransform(p,[0,1],[90,0]),opacity=useTransform(p,[0,.6],[.25,1])
 return <motion.div ref={ref} className={className} style={{rotateX,scale,y,opacity,transformPerspective:1400,transformOrigin:'50% 0%'}}>{children}</motion.div>
}
function TiltCard({children,className='',max=8}){
 const rx=useMotionValue(0),ry=useMotionValue(0)
 const sx=useSpring(rx,{stiffness:180,damping:18}),sy=useSpring(ry,{stiffness:180,damping:18})
 const onMove=e=>{if(e.pointerType!=='mouse')return;const r=e.currentTarget.getBoundingClientRect();ry.set(((e.clientX-r.left)/r.width-.5)*max*2);rx.set(-((e.clientY-r.top)/r.height-.5)*max*2)}
 const reset=()=>{rx.set(0);ry.set(0)}
 return <motion.div className={`tilt-wrap ${className}`} onPointerMove={onMove} onPointerLeave={reset} style={{rotateX:sx,rotateY:sy,transformPerspective:1000}}>{children}</motion.div>
}
function Logo(){return <a href="#home" className="brand"><span className="brand-mark">M</span><span>the<span className="brand-light">manager</span></span></a>}
function Header(){
 const [open,setOpen]=useState(false),[scrolled,setScrolled]=useState(false)
 React.useEffect(()=>{const f=()=>setScrolled(window.scrollY>20);window.addEventListener('scroll',f);return()=>window.removeEventListener('scroll',f)},[])
 const links=[['Platform','#platform'],['Solutions','#industries'],['Resources','#resources'],['Company','#company']]
 return <header className={`header ${scrolled?'scrolled':''}`}><div className="nav-wrap"><Logo/><nav className={`nav ${open?'nav-open':''}`}>{links.map(([l,h])=><a key={l} href={h} onClick={()=>setOpen(false)}>{l}{l==='Platform'&&<ChevronDown size={13}/>}</a>)}</nav><div className="nav-actions"><a href="#contact" className="button button-small">Book a demo <ArrowUpRight size={15}/></a></div><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open?<X/>:<Menu/>}</button></div></header>
}
function Eyebrow({children}){return <div className="eyebrow"><span className="eyebrow-dot"/>{children}</div>}
const headingParent={hidden:{},show:{transition:{staggerChildren:.12}}}
const headingChild={hidden:{opacity:0,y:30,rotateX:-40,filter:'blur(6px)'},show:{opacity:1,y:0,rotateX:0,filter:'blur(0px)',transition:{duration:.9,ease}}}
function SectionHeading({eyebrow,title,copy,center=false}){return <motion.div className={`section-heading ${center?'center':''}`} style={{perspective:900}} variants={headingParent} initial="hidden" whileInView="show" viewport={{once:true,amount:.3}}><motion.div variants={headingChild}><Eyebrow>{eyebrow}</Eyebrow></motion.div><motion.h2 variants={headingChild} style={{transformOrigin:'50% 100%'}}>{title}</motion.h2>{copy&&<motion.p variants={headingChild}>{copy}</motion.p>}</motion.div>}
function HeroKeywords(){
 const prefersReducedMotion=!!useReducedMotion()
 return <div className="hero-keyword-orbit" role="list" aria-label="Business areas">
  {heroKeywordTags.map(({label,icon:Icon,position},index)=><motion.div key={label} className={`orbit-label hero-keyword-tag ${position}`} role="listitem" initial={prefersReducedMotion?false:{opacity:0,y:12,scale:.94,filter:'blur(5px)'}} animate={{opacity:1,y:0,scale:1,filter:'blur(0px)'}} transition={{duration:prefersReducedMotion?0:.5,delay:prefersReducedMotion?0:.2+index*.1,ease:[.22,1,.36,1]}}><Icon size={14}/>{label}</motion.div>)}
 </div>
}
const dashTabs=[
  {label:'Overview',icon:BarChart3,eyebrow:'BUSINESS OVERVIEW',greeting:'Good morning, team',copy:'Here’s your business at a glance.',metrics:[['Total revenue','$284,120','12.8%'],['Orders processed','1,842','8.4%'],['Active customers','3,604','4.2%']],chart:'Revenue overview',chartMeta:'Revenue · USD',bars:[35,50,43,68,54,76,62,84,72,93,67,100,82,91,75,96,70,88,78,100,84,95,72,89]},
  {label:'Workflows',icon:Workflow,eyebrow:'WORKFLOW PULSE',greeting:'Work is in motion',copy:'A live view of work moving across your teams.',metrics:[['Open workflows','128','9.6%'],['Completed today','64','14.2%'],['Avg. cycle time','2.4 days','6.1%']],chart:'Workflow activity',chartMeta:'Completed · this month',bars:[38,45,54,48,68,58,77,64,70,82,73,91,65,84,78,95,80,74,89,96,83,100,86,92]},
  {label:'Inventory',icon:Boxes,eyebrow:'STOCK INTELLIGENCE',greeting:'Inventory is in sync',copy:'Stock signals from every location, in one view.',metrics:[['SKUs in stock','8,420','5.3%'],['Low-stock items','18','12.0%'],['Fulfilment rate','98.6%','2.8%']],chart:'Stock movement',chartMeta:'Units · this month',bars:[67,72,58,78,63,82,70,88,73,92,77,96,84,71,91,80,98,76,86,100,82,94,88,97]},
  {label:'Finance',icon:Wallet,eyebrow:'FINANCE SNAPSHOT',greeting:'Your numbers, at a glance',copy:'A clearer view of cash flow and business performance.',metrics:[['Monthly revenue','$284,120','12.8%'],['Operating costs','$92,460','3.2%'],['Net margin','32.5%','4.7%']],chart:'Cash flow',chartMeta:'Inflow · USD',bars:[35,43,52,47,63,56,70,62,76,69,84,75,92,81,73,87,79,95,84,100,88,96,82,91]},
  {label:'Team',icon:Users,eyebrow:'TEAM OVERVIEW',greeting:'Great work happens together',copy:'People operations and team momentum in one place.',metrics:[['Team members','246','6.2%'],['On track','92%','3.4%'],['Open positions','12','2 new']],chart:'Team activity',chartMeta:'Team actions · this month',bars:[42,50,48,61,57,68,63,76,69,82,72,89,80,75,92,84,96,78,90,100,86,95,83,97]}
 ]
const sceneV={hidden:{},show:{transition:{staggerChildren:.06}},exit:{opacity:0,y:-14,rotateX:8,filter:'blur(6px)',transition:{duration:.22,ease:easeIn}}}
const sceneItem={hidden:{opacity:0,y:18,filter:'blur(6px)'},show:{opacity:1,y:0,filter:'blur(0px)',transition:{duration:.6,ease}}}
const metricV={hidden:{opacity:0,rotateX:-75,y:20},show:i=>({opacity:1,rotateX:0,y:0,transition:{type:'spring',stiffness:260,damping:20,delay:.08+i*.07}})}
const barV={hidden:{scaleY:0},show:i=>({scaleY:1,transition:{duration:.7,ease:[.34,1.56,.64,1],delay:.15+i*.018}})}
function DashboardMock({activeTab,onTab,progress}){
 const [period,setPeriod]=useState('Last 30 days')
 const current=dashTabs[activeTab]
 return <div className="dashboard">
  <div className="dash-top"><div className="dash-brand"><span className="mini-mark">M</span><b>themanager.app</b></div>
   <div className="dash-steps" aria-live="polite"><span className="dash-step-count">0{activeTab+1}<i>/ 0{dashTabs.length}</i></span><AnimatePresence mode="wait" initial={false}><motion.b key={activeTab} initial={{y:10,opacity:0,rotateX:-80}} animate={{y:0,opacity:1,rotateX:0}} exit={{y:-10,opacity:0,rotateX:80}} transition={{duration:.35,ease}}>{current.label}</motion.b></AnimatePresence></div>
   <span className="dash-live"><b/> Live workspace</span>
   <motion.div className="dash-progress" style={{scaleX:progress}}/>
  </div>
  <div className="dash-body"><aside className="dash-side" aria-label="Workspace sections"><div className="dash-avatar">M</div>{dashTabs.map(({icon:Icon,label},i)=><button type="button" className={`dash-tab ${i===activeTab?'active':''}`} key={label} onClick={()=>onTab(i)} aria-label={label} aria-pressed={i===activeTab} title={label}>{i===activeTab&&<motion.span layoutId="dash-tab-pill" className="dash-tab-pill" transition={{type:'spring',stiffness:420,damping:32}}/>}<Icon size={15}/></button>)}</aside>
   <div className="dash-main"><AnimatePresence mode="wait" initial={false}><motion.div key={activeTab} className="dash-scene" variants={sceneV} initial="hidden" animate="show" exit="exit">
    <motion.div className="dash-welcome" variants={sceneItem}><div><small>{current.eyebrow}</small><h3>{current.greeting} <span>✦</span></h3><p>{current.copy}</p></div><label className="period-select"><span className="sr-only">Reporting period</span><select value={period} onChange={event=>setPeriod(event.target.value)}><option>Last 7 days</option><option>Last 30 days</option><option>Last 90 days</option></select></label></motion.div>
    <div className="metric-grid">{current.metrics.map(([label,value,change],i)=><motion.div className="metric" key={label} variants={metricV} custom={i} style={{transformPerspective:600,transformOrigin:'50% 0%'}}><small>{label}</small><strong>{value}</strong><em>↗ {change} <span>vs last month</span></em></motion.div>)}</div>
    <motion.div className="dash-chart" variants={sceneItem}><div className="chart-head"><b>{current.chart}</b><small>{current.chartMeta}</small></div><div className="chart-bars">{current.bars.map((h,i)=><motion.i key={i} variants={barV} custom={i} style={{height:`${h}%`,transformOrigin:'50% 100%'}}/>)}</div><div className="chart-labels"><span>OCT 18</span><span>OCT 25</span><span>NOV 01</span><span>NOV 08</span><span>NOV 16</span></div></motion.div>
   </motion.div></AnimatePresence></div>
  </div>
  <div className="dash-float float-one"><span className="float-icon"><Check size={15}/></span><span><b>Inventory synced</b><small>All locations updated</small></span><span className="float-check">✓</span></div>
  <div className="dash-float float-two"><span className="float-icon purple"><Zap size={15}/></span><span><b>AI insight ready</b><small>3 opportunities found</small></span></div>
 </div>
}
function Hero(){
 const ref=React.useRef(null)
 const {scrollYProgress}=useScroll({target:ref,offset:['start start','end start']})
 const p=useSpring(scrollYProgress,{stiffness:100,damping:24,mass:.3})
 const copyY=useTransform(p,[0,1],[0,-140]),copyO=useTransform(p,[0,.75],[1,0]),copyBlur=useTransform(p,[0,.75],['blur(0px)','blur(6px)'])
 const visY=useTransform(p,[0,1],[0,180]),visScale=useTransform(p,[0,1],[1,.74]),visRot=useTransform(p,[0,1],[0,-22])
 return <section ref={ref} className="hero" id="home"><div className="hero-grid-bg"/><div className="hero-glow"/>
  <div className="container hero-inner"><motion.div className="hero-copy" style={{y:copyY,opacity:copyO,filter:copyBlur}}>  <motion.div initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.1}}><span className="release-pill"><span/> Beta release <ArrowUpRight size={13}/></span></motion.div>
  <motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{delay:.2,duration:.8}}>Run your entire<br/><span>business, beautifully.</span></motion.h1>
  <motion.p className="hero-sub" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.35}}>One unified platform for sales, inventory, HR, finance and operations. Real-time data flows across every module, so your teams can work from one source of truth.</motion.p>
   <motion.div className="hero-buttons" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.48}}><a className="button" href="#contact">Get started <ArrowUpRight size={17}/></a><a className="button button-ghost" href="#platform"><span className="play"><Play size={12} fill="currentColor"/></span> Explore the platform</a></motion.div>
   <motion.div className="hero-proof" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.7}}><div className="proof-avatars"><i>J</i><i>A</i><i>M</i><i>+</i></div><span>Built for ambitious teams<br/><b>Join 10,000+ teams scaling their operations.</b></span></motion.div>
  </motion.div><motion.div className="hero-visual-parallax" style={{y:visY,scale:visScale,rotateX:visRot,transformPerspective:1200}}><motion.div className="hero-visual" initial={{opacity:0,scale:.88}} animate={{opacity:1,scale:1}} transition={{delay:.25,duration:1}}><ClientOrbitalScene/><HeroKeywords/></motion.div></motion.div></div>
  <div className="hero-bottom"><span>BUILT FOR TEAMS THAT MOVE FORWARD</span><div className="scroll-line"/><span>SCROLL TO EXPLORE ↓</span></div>
 </section>
}
function Ticker(){return <div className="ticker"><div className="ticker-track">{['Real-time sync','AI insights','Cloud native','Bank-grade security','Multi-currency','Open API','24/7 support','Mobile first','Custom workflows','Smart automation','Global scale','Zero downtime','Real-time sync','AI insights','Cloud native','Bank-grade security','Multi-currency','Open API','24/7 support','Mobile first','Custom workflows','Smart automation','Global scale','Zero downtime'].map((x,i)=><span key={i}><i>✳</i>{x}</span>)}</div></div>}
function Platform(){
 const pinRef=React.useRef(null)
 const n=dashTabs.length
 const [active,setActive]=useState(0)
 const {scrollYProgress}=useScroll({target:pinRef,offset:['start 15%','end 85%']})
 const smooth=useSpring(scrollYProgress,{stiffness:120,damping:26,mass:.3})
 useMotionValueEvent(scrollYProgress,'change',v=>{const i=Math.max(0,Math.min(n-1,Math.floor(v*n)));setActive(prev=>prev===i?prev:i)})
 const {scrollYProgress:enter}=useScroll({target:pinRef,offset:['start end','start 30%']})
 const enterS=useSpring(enter,{stiffness:80,damping:20,mass:.5})
 const rotateX=useTransform(enterS,[0,1],[32,0]),scale=useTransform(enterS,[0,1],[.84,1]),y=useTransform(enterS,[0,1],[110,0])
 const rotateY=useTransform(smooth,[0,.5,1],[-6,0,6])
 const goTo=i=>{const el=pinRef.current;if(!el)return;const vh=window.innerHeight;const top=el.getBoundingClientRect().top+window.scrollY-vh*.15;const range=el.offsetHeight-vh*.7;window.scrollTo({top:top+range*((i+.5)/n),behavior:'smooth'})}
 return <section className="section platform-section" id="platform"><div className="container"><div className="platform-intro"><SectionHeading eyebrow="THE PLATFORM" title={<>The whole business.<br/><span className="gradient-text">Finally in sync.</span></>} copy="Every module speaks the same language. Real-time information connects sales, inventory, finance and operations without a separate integration to maintain."/></div><div ref={pinRef} className="dash-pin"><motion.div className="dash-stage" style={{rotateX,rotateY,scale,y,transformPerspective:1600,transformOrigin:'50% 0%'}}><DashboardMock activeTab={active} onTab={goTo} progress={smooth}/></motion.div><div className="dash-pin-spacer" style={{height:`${n*55}vh`}} aria-hidden="true"/></div>
  <div className="platform-bottom"><div><span className="mini-kicker">ONE CONNECTED EXPERIENCE</span><h3>Every team sees<br/>the bigger picture.</h3></div><p>When your business runs on a shared foundation, information moves with your work. Give teams the context they need to make better decisions.</p><a href="#modules" className="text-link">Explore all modules <ArrowRight size={16}/></a></div>
 </div></section>
}
const moduleAccents={blue:'#8fb0ff',cyan:'#5ee6d6',violet:'#bf9bff',green:'#6ee7a8',orange:'#ffb27a'}
function Modules(){
 const [active,setActive]=useState(0)
 const [workspaceOpen,setWorkspaceOpen]=useState(false)
 const openWorkspace=index=>{setActive(index);setWorkspaceOpen(true)}
 const rowRefs=React.useRef([])
 React.useEffect(()=>{const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)setActive(Number(e.target.dataset.index))})},{rootMargin:'-46% 0px -46% 0px'});rowRefs.current.forEach(el=>el&&io.observe(el));return()=>io.disconnect()},[])
 return <section className="section modules-section" id="modules" style={{'--mod-accent':moduleAccents[modules[active].color]}}><div className="modules-aurora" aria-hidden="true"><i/><i/><span className="modules-grid"/></div><div className="container"><SectionHeading eyebrow="CAPABILITIES" title={<>Everything you need.<br/><span className="muted-heading">Nothing you don't.</span></>} copy="Choose a module to step inside a live, interactive workspace. Explore the connected tools your team could use every day."/>
 <div className="module-layout"><div className="module-list" role="list" aria-label="Business modules">{modules.map((m,i)=>{const I=m.icon;return <motion.button type="button" key={m.name} ref={el=>{rowRefs.current[i]=el}} data-index={i} onMouseEnter={()=>setActive(i)} initial={{opacity:0,x:-40,rotateY:-25}} whileInView={{opacity:1,x:0,rotateY:0}} viewport={{once:true,amount:.5}} transition={{duration:.7,ease,delay:i*.05}} style={{transformPerspective:900,transformOrigin:'0% 50%'}} className={`module-row ${active===i?'selected':''}`} onClick={()=>openWorkspace(i)} aria-pressed={active===i}>{active===i&&<motion.span layoutId="module-active-bar" className="module-active-bar" transition={{type:'spring',stiffness:380,damping:30}}/>}<span className="module-num">{m.n}</span><span className={`module-icon ${m.color}`}><I size={19}/></span><span className="module-title">{m.name}<small>{m.tag}</small></span><ArrowUpRight className="module-arrow" size={17}/></motion.button>})}</div>
 <TiltCard className="module-feature-stage" max={6}><AnimatePresence mode="wait" initial={false}><motion.div className={`module-feature ${modules[active].color}`} key={active} style={{transformPerspective:1200}} initial={{opacity:0,rotateY:38,x:40,scale:.94,filter:'blur(8px)'}} animate={{opacity:1,rotateY:0,x:0,scale:1,filter:'blur(0px)',transition:{duration:.55,ease}}} exit={{opacity:0,rotateY:-30,x:-30,scale:.96,filter:'blur(6px)',transition:{duration:.2,ease:easeIn}}}><div className="feature-particles" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/><i/></div><motion.div className={`feature-orb ${modules[active].color}`} initial={{rotateY:-180,scale:.5,opacity:0}} animate={{rotateY:0,scale:1,opacity:1}} transition={{type:'spring',stiffness:160,damping:14,delay:.05}} style={{transformPerspective:600}}>{React.createElement(modules[active].icon,{size:43,strokeWidth:1.4})}</motion.div><span className="feature-number">MODULE / {modules[active].n}</span><h3 className="feature-title" aria-label={modules[active].name}>{modules[active].name.split('').map((c,k)=><motion.span key={k} aria-hidden="true" initial={{opacity:0,y:'0.6em',rotateX:-90}} animate={{opacity:1,y:0,rotateX:0}} transition={{delay:.12+k*.028,duration:.5,ease}} style={{display:'inline-block',whiteSpace:'pre',transformOrigin:'50% 100%'}}>{c}</motion.span>)}</h3><p>{modules[active].desc}</p><button type="button" className="text-link" onClick={()=>openWorkspace(active)}>Open interactive workspace <ArrowUpRight size={16}/></button><div className="feature-lines" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></motion.div></AnimatePresence></TiltCard></div>
 </div>{workspaceOpen&&<ModuleWorkspace key={active} moduleIndex={active} onSelect={setActive} onClose={()=>setWorkspaceOpen(false)}/>}</section>
}
const operationalViews=[
 null,
 {title:'Inventory overview',summary:'A live snapshot of stock across your locations.',metrics:[['Stock value','₹24.8L','Across 3 locations'],['Active SKUs','8,420','126 categories'],['Needs attention','18','Low-stock items']],columns:['PRODUCT','LOCATION','ON HAND','STATUS'],rows:[['Studio headphones','Bengaluru · A-12','124 units','Healthy'],['Arc desk lamp','Mangaluru · B-04','18 units','Reorder soon'],['Everyday backpack','Mumbai · C-08','306 units','Healthy']]},
 {title:'Campaign studio',summary:'See what is reaching customers and what is gaining momentum.',metrics:[['Campaigns live','12','Across 4 channels'],['People reached','48.2K','This month'],['Engagement','8.6%','Up 1.4%']],columns:['CAMPAIGN','CHANNEL','REACH','STATUS'],rows:[['Autumn launch','Email · Social','12.4K','In progress'],['Welcome journey','Email','8.1K','Always on'],['Studio stories','Social','5.7K','Scheduled']]},
 {title:'People operations',summary:'A thoughtful overview of your team and people workflows.',metrics:[['Team members','246','Across 6 teams'],['Onboarding','8','In progress'],['Time off','14','Requests to review']],columns:['TEAM MEMBER','DEPARTMENT','NEXT STEP','STATUS'],rows:[['Aarav Mehta','Sales','Welcome check-in','On track'],['Mira Shah','Design','First-week review','Today'],['Dev Patel','Operations','Equipment setup','In progress']]},
 {title:'Finance overview',summary:'Keep cash flow, invoices and upcoming payments in view.',metrics:[['Receivables','₹8.4L','24 open invoices'],['Payables','₹3.2L','Due this week'],['Net cash flow','₹5.2L','Up 8.3%']],columns:['TRANSACTION','REFERENCE','AMOUNT','STATUS'],rows:[['Northstar Studio','INV-2408','₹84,000','Awaiting payment'],['Fieldwork Supply','BILL-118','₹32,500','Due tomorrow'],['Orchid Retail','INV-2403','₹1,24,000','Paid']]},
 {title:'Delivery control room',summary:'Coordinate shipments and keep every delivery moving.',metrics:[['In transit','38','Across 5 routes'],['Delivered today','124','On schedule'],['Needs attention','3','Review routes']],columns:['SHIPMENT','DESTINATION','ETA','STATUS'],rows:[['TM-2048','Bengaluru South','11:40 AM','In transit'],['TM-2047','Mangaluru Central','12:15 PM','On schedule'],['TM-2046','Mumbai West','1:05 PM','Delayed']]},
 {title:'Document library',summary:'Find the latest business files and keep work in one place.',metrics:[['Files shared','1,284','Across 18 folders'],['Awaiting review','7','3 due today'],['Storage used','42%','Of 500 GB']],columns:['DOCUMENT','OWNER','UPDATED','STATUS'],rows:[['Q3 operating plan','Aarav Mehta','Today · 9:42 AM','In review'],['Retail partnership','Mira Shah','Yesterday','Approved'],['Team handbook','Dev Patel','Nov 14','Updated']]},
 {title:'Compliance center',summary:'A clear view of reviews, controls and upcoming obligations.',metrics:[['Controls active','42','Across 8 areas'],['Reviews complete','96%','This quarter'],['Due this week','2','Plan ahead']],columns:['REVIEW','OWNER','DUE DATE','STATUS'],rows:[['Access review','IT operations','Nov 20','In progress'],['Vendor assessment','Finance','Nov 22','Needs review'],['Policy acknowledgement','People team','Nov 28','On track']]}
]
const startingContacts=[
 {name:'Aarav Mehta',company:'Northstar Studio',email:'aarav@northstar.studio',value:'₹4.8L',status:'Qualified',initials:'AM',tone:'coral'},
 {name:'Mira Shah',company:'Fieldwork Supply',email:'mira@fieldwork.co',value:'₹2.2L',status:'Proposal',initials:'MS',tone:'lilac'},
 {name:'Kabir Rao',company:'Orchid Retail',email:'kabir@orchid.in',value:'₹1.6L',status:'New lead',initials:'KR',tone:'mint'},
 {name:'Isha Nair',company:'Good Ground Co.',email:'isha@goodground.co',value:'₹3.4L',status:'Contacted',initials:'IN',tone:'blue'}
]
const crmDeals=[
 {stage:'Qualified',amount:'₹18.4L',deals:[['Northstar Studio','Aarav Mehta','₹4.8L','AM'],['Cedar & Co.','Tara Bose','₹3.2L','TC']]},
 {stage:'Proposal',amount:'₹12.6L',deals:[['Fieldwork Supply','Mira Shah','₹2.2L','MS'],['Morrow Living','Neel Das','₹6.4L','NL']]},
 {stage:'Negotiation',amount:'₹8.1L',deals:[['Orchid Retail','Kabir Rao','₹1.6L','KR'],['Good Ground Co.','Isha Nair','₹3.4L','IN']]}
]
const crmActivities=[
 ['09:42 AM','Proposal shared','Mira Shah · Fieldwork Supply','proposal'],
 ['10:18 AM','Discovery call booked','Aarav Mehta · Northstar Studio','calendar'],
 ['11:05 AM','New lead added','Kabir Rao · Orchid Retail','lead'],
 ['12:30 PM','Follow-up reminder','Isha Nair · Good Ground Co.','follow']
]
function ModuleWorkspace({moduleIndex,onSelect,onClose}){
 const currentModule=modules[moduleIndex]
 const ModuleIcon=currentModule.icon
 const [tab,setTab]=useState('Pipeline')
 const [query,setQuery]=useState('')
 const [contacts,setContacts]=useState(startingContacts)
 const [leadFormOpen,setLeadFormOpen]=useState(false)
 const workspaceShellRef=React.useRef(null)
 React.useEffect(()=>{
  const previousOverflow=document.body.style.overflow
  const handleKeyDown=event=>{if(event.key==='Escape'){event.preventDefault();if(leadFormOpen)setLeadFormOpen(false);else onClose()}}
  document.body.style.overflow='hidden'
  document.addEventListener('keydown',handleKeyDown,true)
  return ()=>{document.body.style.overflow=previousOverflow;document.removeEventListener('keydown',handleKeyDown,true)}
 },[leadFormOpen,onClose])
 React.useEffect(()=>{workspaceShellRef.current?.focus()},[])
 const addLead=event=>{
  event.preventDefault()
  const data=new FormData(event.currentTarget)
  const name=String(data.get('name')||'').trim()
  const company=String(data.get('company')||'').trim()
  const email=String(data.get('email')||'').trim()
  const initials=name.split(/\s+/).slice(0,2).map(part=>part[0]).join('').toUpperCase()
  setContacts(previous=>[{name,company,email,value:'—',status:'New lead',initials,tone:'blue'},...previous])
  setQuery('')
  setTab('Contacts')
  setLeadFormOpen(false)
 }
 const isCRM=moduleIndex===0
 const operational=operationalViews[moduleIndex]
 return <div className="workspace-overlay" role="presentation" onClick={event=>{if(event.target===event.currentTarget)onClose()}}>
  <div ref={workspaceShellRef} tabIndex={-1} className={`workspace-shell workspace-${currentModule.color}`} role="dialog" aria-modal="true" aria-labelledby="workspace-title" onClick={event=>event.stopPropagation()}>
   <header className="workspace-site-header">
    <a href="#home" className="workspace-brand" onClick={onClose}><span className="workspace-brand-mark">M</span><span><b>themanager</b><small>BUSINESS PLATFORM</small></span></a>
    <nav className="workspace-site-links" aria-label="Website navigation"><a href="#platform" onClick={onClose}>Platform</a><a href="#industries" onClick={onClose}>Solutions</a><a href="#resources" onClick={onClose}>Resources</a><a href="#company" onClick={onClose}>Company</a></nav>
    <div className="workspace-site-actions">
     <label className="workspace-search"><Search size={16}/><input aria-label="Search module content" placeholder={isCRM?'Search deals or contacts':'Search records'} value={query} onChange={event=>setQuery(event.target.value)}/></label>
     <button type="button" className="workspace-close" aria-label="Return to the main website" onClick={onClose}><span>Back to site</span><X size={16}/></button>
    </div>
   </header>
   <div className="workspace-module-bar">
    <span className="workspace-module-bar-label">Explore the platform</span>
    <nav className="workspace-module-nav" aria-label="Business modules">{modules.map((item,index)=>{const Icon=item.icon;return <button type="button" key={item.name} className={`workspace-module-link ${index===moduleIndex?'current':''}`} aria-current={index===moduleIndex?'page':undefined} onClick={()=>onSelect(index)}><Icon size={16}/><span>{item.name}</span></button>})}</nav>
   </div>
   <div className="workspace-main">
    {isCRM?<section className="crm-workspace">
     <div className="crm-heading"><div><span className="workspace-eyebrow"><ModuleIcon size={14}/> CUSTOMER RELATIONSHIPS</span><h2 id="workspace-title">Sales, with a clearer view.</h2><p>Every conversation, opportunity and next step—connected in one place.</p></div><div className="crm-heading-actions"><span className="crm-sync"><i/> Sample data</span><button type="button" className="crm-primary-button" onClick={()=>setLeadFormOpen(true)}><Plus size={16}/> New lead</button></div></div>
     <div className="crm-stats">{[['Pipeline value','₹39.1L','+12.8%'],['Open opportunities','24','+6 this month'],['Won this month','08','+18.4%'],['Avg. deal size','₹2.4L','+4.2%']].map(([label,value,delta],index)=><div className={`crm-stat crm-stat-${index}`} key={label}><span>{label}</span><b>{value}</b><small><TrendingUp size={13}/>{delta}</small></div>)}</div>
     <div className="crm-tab-row" role="tablist" aria-label="CRM views">{['Pipeline','Contacts','Activities'].map((view,index)=><button type="button" role="tab" aria-selected={tab===view} className={tab===view?'active':''} key={view} onClick={()=>setTab(view)}>{index===0?<Activity size={15}/>:index===1?<Users size={15}/>:<CalendarDays size={15}/>} {view}</button>)}</div>
     <div className="crm-content-grid"><section className="crm-primary-panel">
      <div className="crm-panel-heading"><div><b>{tab==='Pipeline'?'Deal pipeline':tab==='Contacts'?'People & companies':'Team activity'}</b><small>{tab==='Pipeline'?'Move opportunities forward with confidence':tab==='Contacts'?'Your relationships, all in one place':'The latest updates across your workspace'}</small></div>{tab==='Pipeline'&&<span className="crm-view-label">THIS QUARTER <ChevronDown size={13}/></span>}</div>
      {tab==='Pipeline'&&<div className="deal-pipeline">{crmDeals.map(stage=>{const deals=stage.deals.filter(deal=>deal.join(' ').toLowerCase().includes(query.toLowerCase()));return <div className="deal-stage" key={stage.stage}><div className="deal-stage-heading"><span><i/> {stage.stage}</span><b>{stage.amount}</b></div><div className="deal-stage-cards">{deals.map(([company,owner,value,initials])=><article className="deal-card" key={company}><div className="deal-card-top"><b>{company}</b><span aria-hidden="true">···</span></div><span className="deal-owner"><i>{initials}</i>{owner}</span><div className="deal-value"><b>{value}</b><span>Potential value</span></div></article>)}{deals.length===0&&<p className="crm-empty">No matching deals</p>}</div></div>})}</div>}
      {tab==='Contacts'&&<div className="contacts-table-wrap"><table className="contacts-table"><thead><tr><th>CONTACT</th><th>COMPANY</th><th>DEAL VALUE</th><th>STAGE</th></tr></thead><tbody>{contacts.filter(contact=>`${contact.name} ${contact.company} ${contact.email}`.toLowerCase().includes(query.toLowerCase())).map(contact=><tr key={`${contact.email}-${contact.name}`}><td><span className={`contact-avatar ${contact.tone}`}>{contact.initials}</span><span className="contact-name">{contact.name}<small>{contact.email}</small></span></td><td>{contact.company}</td><td>{contact.value}</td><td><span className={`contact-status status-${contact.status.toLowerCase().replace(/\s/g,'-')}`}>{contact.status}</span></td></tr>)}</tbody></table>{contacts.filter(contact=>`${contact.name} ${contact.company} ${contact.email}`.toLowerCase().includes(query.toLowerCase())).length===0&&<p className="crm-empty contacts-empty">No contacts match your search.</p>}</div>}
      {tab==='Activities'&&<div className="activity-feed">{crmActivities.filter(item=>item.join(' ').toLowerCase().includes(query.toLowerCase())).map(([time,title,detail,type],index)=><article className="activity-row" key={title}><span className={`activity-icon activity-${type}`}>{type==='calendar'?<CalendarDays size={15}/>:type==='lead'?<Users size={15}/>:type==='follow'?<Clock3 size={15}/>:<Mail size={15}/>}</span><div><b>{title}</b><small>{detail}</small></div><time>{time}</time><i className={index===0?'unread':''}/></article>)}{crmActivities.filter(item=>item.join(' ').toLowerCase().includes(query.toLowerCase())).length===0&&<p className="crm-empty">No activity matches your search.</p>}</div>}
     </section>
     <aside className="crm-insight-panel"><div className="insight-kicker"><span/> THE MOMENTUM MAP</div><div className="crm-orbit-art" aria-hidden="true"><div className="crm-orbit-ring ring-one"/><div className="crm-orbit-ring ring-two"/><div className="crm-orbit-ring ring-three"/><div className="crm-orbit-core"><span>M</span></div><i className="crm-orbit-node node-one"/><i className="crm-orbit-node node-two"/><i className="crm-orbit-node node-three"/></div><span className="insight-caption">HEALTHY PIPELINE</span><b className="insight-value">+18.4%</b><p>More qualified opportunities than last month.</p><div className="insight-divider"/><span className="insight-next-label">NEXT BEST ACTION</span><b className="insight-next-title">Follow up with 3 warm leads</b><span className="insight-next-copy">A timely check-in can keep the conversation moving.</span><button type="button" className="insight-action" onClick={()=>{setTab('Contacts');setQuery('')}}>View suggested contacts <ArrowRight size={14}/></button></aside>
     </div>
    </section>:<OperationalWorkspace module={currentModule} moduleIndex={moduleIndex} data={operational} query={query}/>}
   </div>
   {leadFormOpen&&<div className="lead-form-overlay" onClick={event=>{if(event.target===event.currentTarget)setLeadFormOpen(false)}}><form className="lead-form-card" onSubmit={addLead}><button type="button" className="lead-form-close" aria-label="Close new lead form" onClick={()=>setLeadFormOpen(false)}><X size={18}/></button><span className="workspace-eyebrow">CRM / NEW RELATIONSHIP</span><h3>Add a new lead</h3><p>Capture the essentials and keep the conversation moving.</p><label>Full name<input name="name" required autoFocus placeholder="e.g. Rhea Kapoor"/></label><label>Company<input name="company" required placeholder="e.g. Fieldnotes Studio"/></label><label>Work email<input name="email" type="email" required placeholder="rhea@company.com"/></label><div className="lead-form-actions"><button type="button" className="lead-cancel" onClick={()=>setLeadFormOpen(false)}>Cancel</button><button type="submit" className="crm-primary-button"><Plus size={15}/> Save lead</button></div></form></div>}
  </div>
 </div>
}
function OperationalWorkspace({module,moduleIndex,data,query}){
 const Icon=module.icon
 const rows=data.rows.filter(row=>row.join(' ').toLowerCase().includes(query.toLowerCase()))
 return <section className={`operational-workspace operational-${module.color}`}>
  <div className="crm-heading">
   <div><span className="workspace-eyebrow"><Icon size={14}/> {module.tag.toUpperCase()}</span><h2 id="workspace-title">{data.title}</h2><p>{data.summary}</p></div>
   <span className="crm-sync"><i/> Sample data</span>
  </div>
  <div className="crm-stats">{data.metrics.map(([label,value,delta],index)=><div className={`crm-stat crm-stat-${index}`} key={label}><span>{label}</span><b>{value}</b><small>{delta}</small></div>)}</div>
  <div className="ops-overview-grid">
   <section className="crm-primary-panel operational-table-panel">
    <div className="crm-panel-heading"><div><b>Recent activity</b><small>Updates from across your {module.name.toLowerCase()} workspace</small></div><span className="crm-view-label"><Activity size={13}/> RECENT RECORDS</span></div>
    <div className="contacts-table-wrap"><table className="contacts-table"><thead><tr>{data.columns.map(column=><th key={column}>{column}</th>)}</tr></thead><tbody>{rows.map(([primary,secondary,value,status])=><tr key={primary}><td><span className="contact-avatar coral"><Icon size={15}/></span><span className="contact-name">{primary}</span></td><td>{secondary}</td><td>{value}</td><td><span className={`contact-status status-${status.toLowerCase().replace(/\s/g,'-')}`}>{status}</span></td></tr>)}</tbody></table>{rows.length===0&&<p className="crm-empty contacts-empty">No records match your search.</p>}</div>
   </section>
   <aside className="ops-visual-panel">
    <div className="ops-visual-head"><span>MODULE SIGNAL</span><span className="ops-visual-live"><i/> SAMPLE</span></div>
    <div className={`ops-3d-stage ops-scene-${moduleIndex}`} aria-hidden="true"><div className="ops-visual-glow"/><div className="ops-visual-ring ops-ring-a"/><div className="ops-visual-ring ops-ring-b"/><div className="ops-cube-spinner"><WorkspaceCube className="ops-cube-main" Icon={Icon}/></div><WorkspaceCube className="ops-cube-satellite" Icon={Icon}/><span className="ops-spark spark-one"/><span className="ops-spark spark-two"/><span className="ops-spark spark-three"/></div>
    <div className="ops-visual-value"><span>CONNECTED SIGNAL</span><b>{data.metrics[0][1]}</b><small>{data.metrics[0][0]}</small></div><p>{data.summary}</p>
    <div className="ops-visual-footer"><span><i/> WORKSPACE READY</span></div>
   </aside>
  </div>
  <div className="operational-footnote"><span className="workspace-orbit-mini"><i/></span><div><b>Connected by design</b><small>{module.desc}</small></div><span className="operational-live"><i/> SAMPLE DATA</span></div>
 </section>
}
function WorkspaceCube({className,Icon}){
 return <div className={`ops-cube ${className}`}><span className="ops-cube-face ops-face-front"><Icon size={27}/></span><span className="ops-cube-face ops-face-back"/><span className="ops-cube-face ops-face-right"/><span className="ops-cube-face ops-face-left"/><span className="ops-cube-face ops-face-top"/><span className="ops-cube-face ops-face-bottom"/></div>
}
function modulesIcon({icon:Icon}){return <Icon size={43} strokeWidth={1.4}/>}
function Industries(){
 return <section className="section industries-section" id="industries"><ScrollStage className="container"><div className="industry-head"><SectionHeading eyebrow="BUILT FOR YOUR WORLD" title={<>Flexible by design.<br/><span className="gradient-text">Ready for your industry.</span></>} copy="Different industries. Different challenges. One connected platform that adapts to the way your organisation works."/><a href="#contact" className="text-link">Find your solution <ArrowRight size={16}/></a></div><div className="industry-grid">{industries.map((x,i)=>{const I=x.icon;return <Reveal key={x.name} delay={i*.08}><TiltCard max={9}><a className="industry-card" href="#contact"><div className="industry-top"><span>{x.number} / INDUSTRY</span><ArrowUpRight size={18}/></div><div className="industry-icon"><I size={29}/></div><h3>{x.name}</h3><p>{x.desc}</p><span className="industry-link">Explore solution <ArrowRight size={15}/></span><div className="industry-glow"/></a></TiltCard></Reveal>})}</div></ScrollStage></section>
}
function Why(){
 const items=[['One connected source','Reduce silos with shared data across teams and departments.',Layers3],['Clarity in real time','Give decision-makers a more current view of business performance.',Zap],['Built with security in mind','Support controlled access and accountable workflows.',LockKeyhole],['Ready to grow with you','Connect more processes as your organisation evolves.',Globe2]]
 return <section className="section why-section" id="company"><ScrollStage className="container why-grid"><div><SectionHeading eyebrow="THE MANAGER DIFFERENCE" title={<>Less complexity.<br/><span className="gradient-text">More momentum.</span></>} copy="The Manager is an AI-powered business operating system from DevOps Manager LLP, built for companies ready to scale. Bring finance, operations, sales, HR and customer workflows together."/><a className="button button-dark" href="#contact">Meet The Manager <ArrowUpRight size={16}/></a></div><div className="why-items">{items.map(([t,d,I],i)=><Reveal key={t} delay={i*.08}><div className="why-item"><span className="why-icon"><I size={20}/></span><div><h3>{t}</h3><p>{d}</p></div><span className="why-index">0{i+1}</span></div></Reveal>)}</div></ScrollStage></section>
}
function Process(){
 const steps=[['Discover','Understand your teams, priorities and current workflows.'],['Connect','Bring the right modules and information together.'],['Coordinate','Help teams work from shared, up-to-date context.'],['Improve','Use insights to keep refining how work gets done.']]
 return <section className="section process-section"><ScrollStage className="container"><SectionHeading eyebrow="A CLEARER WAY FORWARD" title="From disconnected to in sync." copy="A thoughtful path to bringing your business workflows together." center/><div className="process-grid">{steps.map(([t,d],i)=><Reveal key={t} delay={i*.1}><div className="process-step"><div className="process-top"><span>0{i+1}</span>{i!==3&&<motion.div className="process-connector" initial={{scaleX:0}} whileInView={{scaleX:1}} viewport={{once:true,amount:1}} transition={{duration:1.1,ease,delay:.3+i*.15}} style={{transformOrigin:'0% 50%'}}/>}</div><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div></ScrollStage></section>
}
function Trust(){
 return <section className="trust-strip"><ScrollStage className="container trust-inner"><div><span className="mini-kicker">A CONNECTED FOUNDATION</span><h3>One ecosystem.<br/><span className="gradient-text">Many possibilities.</span></h3></div><div className="trust-points"><span><Check/> Real-time workflows</span><span><Check/> Cloud-native foundation</span><span><Check/> Open API approach</span><span><Check/> Role-based access</span></div></ScrollStage></section>
}
function Resources(){
 const posts=[['GUIDE','A practical guide to connected business operations','Learn how a unified view can help teams reduce friction between everyday workflows.','01'],['INSIGHTS','From business data to better decisions','Explore why timely information matters when teams need to make confident decisions.','02'],['PRODUCT','Getting started with a modular management platform','A look at how teams can approach connected modules around their needs.','03']]
 const [selectedPost,setSelectedPost]=useState(null)
 return <section className="section resources-section" id="resources"><ScrollStage className="container"><div className="resources-head"><SectionHeading eyebrow="THE KNOWLEDGE DESK" title={<>Ideas for better<br/><span className="muted-heading">ways of working.</span></>} copy="Perspectives, practical guides and product updates for teams building what comes next."/></div><div className="resource-grid">{posts.map(([tag,title,desc,n],i)=><Reveal key={n} delay={i*.08}><TiltCard max={6}><article className="resource-card"><div className={`resource-art art-${i}`}><span>{tag} / 2026</span><div className="art-shape"><i/><i/><i/></div><b>TM<span>.</span></b></div><div className="resource-content"><span className="resource-tag">{tag} <span>·</span> 5 MIN READ</span><h3>{title}</h3><p>{desc}</p><button type="button" className="text-link" onClick={()=>setSelectedPost({tag,title,desc})}>Read article <ArrowUpRight size={15}/></button></div></article></TiltCard></Reveal>)}</div></ScrollStage><AnimatePresence>{selectedPost&&<motion.div className="article-modal" role="presentation" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSelectedPost(null)}><motion.div className="article-dialog" role="dialog" aria-modal="true" aria-labelledby="article-title" initial={{opacity:0,y:18,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:10,scale:.98}} onClick={e=>e.stopPropagation()}><button type="button" className="article-close" aria-label="Close article preview" onClick={()=>setSelectedPost(null)}><X size={20}/></button><Eyebrow>{selectedPost.tag} / ARTICLE PREVIEW</Eyebrow><h3 id="article-title">{selectedPost.title}</h3><p>{selectedPost.desc}</p><a href="#contact" className="button" onClick={()=>setSelectedPost(null)}>Talk to our team <ArrowUpRight size={16}/></a></motion.div></motion.div>}</AnimatePresence></section>
}
function FAQ(){
 const [expanded,setExpanded]=useState(0)
 return <section className="section faq-section"><ScrollStage className="container faq-layout"><div><SectionHeading eyebrow="NEED TO KNOW" title={<>A few things,<br/><span className="muted-heading">made clearer.</span></>} copy="Have a question about The Manager? Start here, or get in touch with our team."/></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item ${expanded===i?'open':''}`} key={q}><button aria-expanded={expanded===i} onClick={()=>setExpanded(expanded===i?-1:i)}><span>{q}</span>{expanded===i?<Minus size={18}/>:<Plus size={18}/>}</button><AnimatePresence>{expanded===i&&<motion.p initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}>{a}</motion.p>}</AnimatePresence></div>)}</div></ScrollStage></section>
}
function Contact(){
 const [sent,setSent]=useState(false)
 const submit=e=>{e.preventDefault();setSent(true)}
 return <section className="contact-section" id="contact"><ScrollStage className="container contact-wrap"><div className="contact-copy"><Eyebrow>YOUR NEXT CHAPTER STARTS HERE</Eyebrow><h2>Ready to manage<br/><span>better?</span></h2><p>Ask DevOps Manager LLP about The Manager, its 14-day premium trial, or a product demonstration.</p><div className="contact-details"><a href="tel:+917259108111"><Phone size={16}/> 072591 08111 <small>Call DevOps Manager LLP</small></a><a href="https://www.google.com/maps/search/?api=1&query=Old+Kent+Rd%2C+Attavar%2C+Mangaluru%2C+Karnataka+575001" target="_blank" rel="noreferrer"><MapPin size={16}/> DevOps Manager LLP <small>Old Kent Rd, Attavar, Mangaluru, Karnataka 575001</small></a></div></div><form className="contact-form" onSubmit={submit}><div className="form-top"><span>LET'S TALK</span><span className="form-step">01 — 04</span></div><h3>Tell us a little about yourself.</h3><div className="form-row"><label>Full name<input required placeholder="Your name"/></label><label>Work email<input required type="email" placeholder="you@company.com"/></label></div><div className="form-row"><label>Company<input placeholder="Company name"/></label><label>I'm interested in<select defaultValue=""><option value="" disabled>Select a module</option>{modules.map(m=><option key={m.name}>{m.name}</option>)}<option>Full platform demo</option><option>14-day premium trial</option></select></label></div><label>How can we help?<textarea rows="3" placeholder="Tell us what you're looking to improve..."/></label><button className="button form-submit" type="submit">{sent?'Request captured locally':'Request a demo or trial'} <ArrowUpRight size={16}/></button><small className="form-note">{sent?'Demo mode only: connect this form to your CRM or backend to receive enquiries.':'By submitting, you agree to be contacted about your enquiry.'}</small></form></ScrollStage></section>
}
function Footer(){
 return <footer className="footer"><div className="container"><div className="footer-top"><div className="footer-brand"><Logo/><p>Redefining the architecture of enterprise management. Precision, scale and intelligence in one unified platform.</p><div className="socials"><a href="#contact" aria-label="LinkedIn"><Linkedin/></a><a href="#contact" aria-label="X"><Twitter/></a><a href="#contact" aria-label="GitHub"><Github/></a></div></div><div className="footer-col"><b>PLATFORM</b><a href="#modules">Modules</a><a href="#platform">Features</a><a href="#industries">Solutions</a><a href="#contact">Book a demo</a></div><div className="footer-col"><b>COMPANY</b><a href="#company">About</a><a href="#resources">Insights</a><a href="#contact">Careers</a><a href="#contact">Contact</a></div><div className="footer-col"><b>RESOURCES</b><a href="#resources">Guides</a><a href="#resources">Documentation</a><a href="#contact">API enquiries</a><a href="#contact">Support</a></div><div className="footer-col"><b>LEGAL</b><a href="#contact">Privacy</a><a href="#contact">Terms</a><a href="#contact">Security</a><a href="#contact">Cookies</a></div></div><div className="footer-bottom"><span>© 2026 The Manager. All rights reserved.</span><span>Designed for connected work <span className="footer-star">✳</span></span></div></div></footer>
}
function IntroLoader(){
 return <motion.div className="intro-screen" role="status" aria-label="Loading The Manager" exit={{opacity:0,scale:.985,transition:{duration:.45,ease:'easeInOut'}}}>
 <div className="intro-grid" aria-hidden="true"/>
 <div className="intro-content">
  <div className="intro-visual" aria-hidden="true">
   <div className="intro-visual-glow"/>
   <div className="intro-orbit intro-orbit-one"><i/></div>
   <div className="intro-orbit intro-orbit-two"><i/></div>
   <div className="intro-orbit intro-orbit-three"><i/></div>
   <span className="intro-mark"><b>M</b><i/><span/></span>
   <span className="intro-spark intro-spark-one"/>
   <span className="intro-spark intro-spark-two"/>
  </div>
  <div className="intro-brand-name"><span className="intro-wordmark">the<span>manager</span></span><small>BUSINESS OPERATING SYSTEM</small></div>
  <p className="intro-tagline">One workspace. Everything in sync.</p>
  <div className="intro-loading-meta"><span className="intro-status"><i/> Connecting your business</span></div>
  <div className="intro-progress"><i/></div>
 </div>
 <div className="intro-orb intro-orb-one" aria-hidden="true"/>
 <div className="intro-orb intro-orb-two" aria-hidden="true"/>
 </motion.div>
}
export default function ManagerSite(){
 const [introVisible,setIntroVisible]=useState(true)
 const {scrollYProgress}=useScroll()
 const progress=useSpring(scrollYProgress,{stiffness:140,damping:28,mass:.3})
 React.useEffect(()=>{
 const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches
 const timer=window.setTimeout(()=>setIntroVisible(false),reducedMotion?650:2750)
 return ()=>window.clearTimeout(timer)
 },[])
 return <MotionConfig reducedMotion="user"><motion.div className="scroll-progress" style={{scaleX:progress}} aria-hidden="true"/><AnimatePresence>{introVisible&&<IntroLoader key="intro"/>}</AnimatePresence><Header/><main><Hero/><Ticker/><Platform/><Modules/><Industries/><Why/><Process/><Trust/><Resources/><FAQ/><Contact/></main><Footer/><a href="#home" className="back-top" aria-label="Back to top">↑</a></MotionConfig>
}