/* ═══════════════════════════════════════════════════════════════
   LATEH LUXE COLLECTIONS — ll-core.js  v2.1
   Shared: Supabase, auth, SVG icons, utilities
   ═══════════════════════════════════════════════════════════════ */
'use strict';
const LL = window.LL = (function(){
const SB_URL='https://rpucjtuudbwnzoolseav.supabase.co';
const SB_KEY='sb_publishable_MQ5fBMcvfOsd9bLb3h9d5Q_wCI0L0lm';
const WA='2349122834983';
const db=supabase.createClient(SB_URL,SB_KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true,storage:window.localStorage}});

const ICONS={
  dashboard:`<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>`,
  browse:`<path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>`,
  cart:`<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>`,
  orders:`<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/>`,
  wishlist:`<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>`,
  notifications:`<path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>`,
  support:`<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>`,
  products:`<path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>`,
  inventory:`<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>`,
  customers:`<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>`,
  reviews:`<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`,
  settings:`<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>`,
  'sign-out':`<path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>`,
  return:`<polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 00-4-4H4"/>`,
  menu:`<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>`,
  search:`<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>`,
  filter:`<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>`,
  plus:`<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>`,
  edit:`<path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>`,
  trash:`<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/>`,
  check:`<polyline points="20 6 9 17 4 12"/>`,
  x:`<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>`,
  'chevron-down':`<polyline points="6 9 12 15 18 9"/>`,
  'chevron-right':`<polyline points="9 18 15 12 9 6"/>`,
  'arrow-left':`<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>`,
  user:`<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>`,
  mail:`<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>`,
  phone:`<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.61 3.41 2 2 0 013.6 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.82a16 16 0 006.29 6.29l.95-.95a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>`,
  lock:`<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>`,
  eye:`<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`,
  'eye-off':`<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/>`,
  star:`<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`,
  'star-fill':`<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor"/>`,
  gift:`<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/>`,
  truck:`<rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>`,
  package:`<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>`,
  'credit-card':`<rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>`,
  whatsapp:`<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>`,
  affiliate:`<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/><circle cx="5" cy="13" r="2"/><path d="M1 20c0-2.5 1.8-4 4-4"/><circle cx="19" cy="13" r="2"/><path d="M23 20c0-2.5-1.8-4-4-4"/>`,
  copy:`<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>`,
  upload:`<polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/>`,
  download:`<polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"/>`,
  info:`<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>`,
  alert:`<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>`,
  gem:`<polygon points="6 3 18 3 22 9 12 22 2 9"/><line x1="2" y1="9" x2="22" y2="9"/><line x1="12" y1="3" x2="6" y2="9"/><line x1="12" y1="3" x2="18" y2="9"/>`,
  analytics:`<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>`,
};
function icon(name,size=18){const p=ICONS[name]||ICONS.info;return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;}
function renderIcons(){document.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML=icon(el.dataset.icon,el.dataset.size||18);delete el.dataset.icon;});}
const esc=s=>String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const fmt=n=>Number(n||0).toLocaleString('en-NG');
const fmtM=n=>{const v=Number(n||0);return v>=1e6?(v/1e6).toFixed(2)+'M':v>=1e3?(v/1e3).toFixed(0)+'K':String(v);};
const fmtDate=iso=>iso?new Date(iso).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'}):'—';
const timeSince=iso=>{const d=Date.now()-new Date(iso).getTime();if(d<60000)return'Just now';if(d<3600000)return Math.floor(d/60000)+'m ago';if(d<86400000)return Math.floor(d/3600000)+'h ago';return Math.floor(d/86400000)+'d ago';};
const toInit=s=>(s||'').split(' ').filter(Boolean).map(w=>w[0]).join('').slice(0,2).toUpperCase()||'LL';
const g=id=>document.getElementById(id);
const setTxt=(id,v)=>{const e=g(id);if(e)e.textContent=String(v??'');};
const setHtml=(id,v)=>{const e=g(id);if(e)e.innerHTML=v;};
const getLocal=key=>{try{return JSON.parse(localStorage.getItem(key)||'null');}catch(_){return null;}};
const setLocal=(key,v)=>{try{localStorage.setItem(key,JSON.stringify(v));}catch(_){}};
const getUser=()=>getLocal('ll_user');
const saveUser=u=>setLocal('ll_user',u);
const getCart=()=>getLocal('ll_cart')||[];
const saveCart=c=>setLocal('ll_cart',c);
function buildUserObj(su){const m=su.user_metadata||{};return{id:su.id,email:su.email,name:m.full_name||[m.first_name,m.last_name].filter(Boolean).join(' ')||su.email,firstName:m.first_name||'',lastName:m.last_name||'',phone:m.phone||'',role:m.role||'customer',tier:m.tier||'Silver',promoChannel:m.promo_channel||'',affiliateStatus:m.affiliate_status||'',loggedIn:true};}
async function getSession(){const{data:{session}}=await db.auth.getSession();return session;}
async function requireAuth(role){const session=await getSession();if(!session){location.replace('lateh-luxe-auth.html');return null;}const u=buildUserObj(session.user);if(role==='admin'&&u.role!=='admin'){location.replace('lateh-luxe-dashboard.html');return null;}saveUser(u);return{session,user:session.user,u};}
async function signOut(){try{await db.auth.signOut();}catch(_){}try{localStorage.removeItem('ll_user');}catch(_){}location.replace('lateh-luxe-auth.html');}
function watchAuth(){db.auth.onAuthStateChange(ev=>{if(ev==='SIGNED_OUT')location.replace('lateh-luxe-auth.html');});}
function paintUser(u){const init=toInit(u.name||u.email||'G');const name=u.isGuest?'Guest':(u.name||u.email||'Member');const email=u.isGuest?'Not signed in':(u.email||'');const tier=u.isGuest?'Guest':((u.tier||'Silver')+' Member');['sbAv','tbAv'].forEach(id=>{const el=g(id);if(el&&!el.querySelector('img'))el.textContent=init;});setTxt('sbName',name);setTxt('sbEmail',email);setTxt('sbTier',tier);setTxt('sbRole',u.role==='admin'?'Administrator':tier);syncBadges();}
function syncBadges(){const cartN=getCart().reduce((s,c)=>s+(c.qty||1),0);['cartB','navBadge','navCartCount'].forEach(id=>{const el=g(id);if(el){el.textContent=cartN;el.style.display=cartN>0?'':'none';}});const cDot=g('cDot');if(cDot)cDot.style.display=cartN>0?'':'none';try{const notifs=getLocal('ll_notifications')||[];const un=notifs.filter(n=>n.unread).length;const nEl=g('notifB')||g('navNotifBadge');if(nEl){nEl.textContent=un;nEl.style.display=un>0?'':'none';}const nDot=g('nDot');if(nDot)nDot.style.display=un>0?'':'none';}catch(_){}}
async function upsertProfile(su){const m=su.user_metadata||{};const p={id:su.id,full_name:m.full_name||[m.first_name,m.last_name].filter(Boolean).join(' ')||su.email,first_name:m.first_name||'',last_name:m.last_name||'',phone:m.phone||'',role:m.role||'customer',tier:m.tier||'Silver',affiliate_status:m.affiliate_status||null,promo_channel:m.promo_channel||null,updated_at:new Date().toISOString()};try{const{data}=await db.from('profiles').upsert(p,{onConflict:'id'}).select().single();return data;}catch(_){return null;}}
async function fetchProfile(uid){try{const{data}=await db.from('profiles').select('*').eq('id',uid).maybeSingle();return data;}catch(_){return null;}}
function toast(msg,type='success',dur=3200){let wrap=g('ll-toast');if(!wrap){wrap=document.createElement('div');wrap.id='ll-toast';wrap.style.cssText='position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:8px;pointer-events:none;max-width:300px;';document.body.appendChild(wrap);}const bg={success:'rgba(90,158,124,.95)',error:'rgba(212,89,106,.95)',info:'rgba(90,142,201,.95)',warn:'rgba(201,132,76,.95)'};const el=document.createElement('div');el.style.cssText=`background:${bg[type]||bg.info};color:#fff;padding:10px 14px;border-radius:6px;font-size:.78rem;font-family:'Raleway',sans-serif;box-shadow:0 4px 20px rgba(0,0,0,.5);pointer-events:all;line-height:1.5;`;el.textContent=msg;wrap.appendChild(el);setTimeout(()=>{el.style.cssText+=';opacity:0;transform:translateY(4px);transition:all .3s;';setTimeout(()=>el.remove(),300);},dur);}
const waLink=(msg='')=>`https://wa.me/${WA}${msg?'?text='+encodeURIComponent(msg):''}`;
window.toggleSidebar=()=>{const sb=document.querySelector('#sidebar');const ov=document.querySelector('#overlay');if(sb)sb.classList.toggle('open');if(ov)ov.classList.toggle('show');};
window.closeSidebar=()=>{const sb=document.querySelector('#sidebar');const ov=document.querySelector('#overlay');if(sb)sb.classList.remove('open');if(ov)ov.classList.remove('show');};
window.llSignOut=signOut;
(function(){if(document.getElementById('ll-toast-css'))return;const s=document.createElement('style');s.id='ll-toast-css';s.textContent='@keyframes toastIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}';document.head.appendChild(s);})();
return{db,WA,waLink,icon,renderIcons,ICONS,esc,fmt,fmtM,fmtDate,timeSince,toInit,g,setTxt,setHtml,getLocal,setLocal,getUser,saveUser,getCart,saveCart,buildUserObj,getSession,requireAuth,signOut,watchAuth,paintUser,syncBadges,upsertProfile,fetchProfile,toast};
})();
