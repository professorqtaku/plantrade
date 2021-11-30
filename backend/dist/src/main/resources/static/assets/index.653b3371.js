var Vt=Object.defineProperty,Kt=Object.defineProperties;var Jt=Object.getOwnPropertyDescriptors;var ge=Object.getOwnPropertySymbols;var He=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var Ge=(t,s,r)=>s in t?Vt(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,Y=(t,s)=>{for(var r in s||(s={}))He.call(s,r)&&Ge(t,r,s[r]);if(ge)for(var r of ge(s))_e.call(s,r)&&Ge(t,r,s[r]);return t},pe=(t,s)=>Kt(t,Jt(s));var Ae=(t,s)=>{var r={};for(var o in t)He.call(t,o)&&s.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&ge)for(var o of ge(t))s.indexOf(o)<0&&_e.call(t,o)&&(r[o]=t[o]);return r};import{r as a,j as e,s as n,C as R,a as Ie,u as qe,S as Qt,b as d,T as Ee,F as T,I as te,d as Yt,c as Xt,B as X,e as Ve,f as Ke,g as Je,h as Te,i as Zt,k as ne,l as he,m as me,G as C,n as en,o as tn,p as nn,q as Be,t as fe,v as rn,w as De,x as Qe,y as xe,z as sn,A as j,D as Le,E as G,H as on,J as re,L as an,K as Pe,M as ln,N as cn,O as Ye,P as dn,Q as un,R as gn,U as pn,V as hn,W as mn,X as fn,Y as xn,Z as yn,_ as Sn,$ as bn,a0 as wn,a1 as vn,a2 as Xe,a3 as Cn,a4 as kn,a5 as $n,a6 as An,a7 as ye,a8 as In,a9 as En,aa as q,ab as Tn,ac as Bn,ad as Dn,ae as Ln,af as Pn,ag as Mn,ah as Ze,ai as et,aj as tt,ak as jn,al as nt,am as On,an as zn,ao as Nn,ap as Fn,aq as Rn,ar as rt,as as st,at as ot,au as it,av as at,aw as Wn,ax as Un,ay as Hn,az as _n,aA as Gn,aB as qn}from"./vendor.67879737.js";const Vn=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=r(i);fetch(i.href,l)}};Vn();const lt=a.exports.createContext(null),Se=()=>a.exports.useContext(lt),Kn=({children:t})=>{const[s,r]=a.exports.useState(),[o,i]=a.exports.useState(),m={getAuctionById:async x=>await(await fetch("/rest/auctions/"+x)).json(),createAuction:async(x,f,p)=>(p.delete("auction"),p.delete("categories"),p.append("auction",JSON.stringify(x)),p.append("categories",JSON.stringify(f)),await(await fetch("/rest/auctions",{method:"POST",body:p})).json()),usersAuctions:s,getUsersAuctions:async()=>{let x=await fetch("/rest/auctions/user");if(x.status===200){let f=await x.json();r(f)}},getWonAuctionsByUser:async()=>{let x=await fetch("/rest/auctions/won");if(x.status===200){let f=await x.json();i(f)}},usersWonAuctions:o};return e(lt.Provider,{value:m,children:t})},ct=a.exports.createContext(null),Me=()=>a.exports.useContext(ct),Jn=({children:t})=>{const[s,r]=a.exports.useState(),l={createBid:async c=>{let u=await fetch("/api/bid",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}});return u.status==200?await u.json():null},getHighestBid:async c=>{let u=await fetch(`/api/${c}/highest-bid`);if(u.status==200){let g=await u.json();r(g.price)}},highestBid:s};return e(ct.Provider,{value:l,children:t})},dt=a.exports.createContext(null),O=()=>a.exports.useContext(dt),Qn=({children:t})=>{const[s,r]=a.exports.useState(null),[o,i]=a.exports.useState(!1),[l,c]=a.exports.useState(!1),[u,g]=a.exports.useState(!0);a.exports.useEffect(()=>{f()},[!s]);const m=async y=>{let b=await fetch("/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)});return b.ok&&b.status==200?(c(!1),!0):(c(!0),!1)},x=async y=>{let b=await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)});if(b.ok&&b.status==200){let v=await b.json();return r(v),i(!1),v}else return i(!0),null},f=async()=>{let y=await fetch("/api/whoami");if(y.ok&&y.status===200){let b=await y.json();return r(b),b}return r(null),null},h={register:m,login:x,logout:async()=>{await fetch("/api/logout",{method:"DELETE",headers:{"content-type":"application/json"}}),g(!0),r(null)},wrongPassword:o,setWrongPassword:i,userExists:l,whoIsOnline:f,whoAmI:s,hasReadMsg:u,setHasReadMsg:g};return e(dt.Provider,{value:h,children:t})},ut=a.exports.createContext(null),U=()=>a.exports.useContext(ut),Yn=({children:t})=>{const[s,r]=a.exports.useState(),[o,i]=a.exports.useState([]),[l,c]=a.exports.useState(""),u=async()=>{let f=await fetch("/api/chats");if(f.status==200){const p=await f.json();return i(p),p}else return i([]),null},x={chatId:s,setChatId:r,chats:o,getChatsByCurrentUser:u,createChat:async f=>(await fetch("/api/chats",{method:"POST",body:JSON.stringify(f),headers:{"Content-Type":"application/json"}})).status===200?(u(),!0):!1,setChatTitle:c,chatTitle:l,getUnreadMsg:async()=>{let f=await fetch("/api/chats/unreadMsg");return f.status==200?await f.json():0}};return e(ut.Provider,{value:x,children:t})},gt=a.exports.createContext(null),H=()=>a.exports.useContext(gt),Xn=({children:t})=>{const[s,r]=a.exports.useState(!1),[o,i]=a.exports.useState(!1),c={showDrawer:s,setShowDrawer:r,toggleDrawer:()=>r(!s),showChatRoom:o,setShowChatRoom:i};return e(gt.Provider,{value:c,children:t})},Zn=n(R)`
  background: ${t=>t.background?t.background:"var(--status-green)"};
  color: white;
  width: 100%;
  max-width: 500px;
`,er=n(Ie)`
  justify-content: space-between;
`,tr=a.exports.forwardRef((t,s)=>{const{closeSnackbar:r}=qe(),o={success:"var(--status-green)",error:"var(--status-red)",warning:"var(--status-yellow)",info:"var(--dark-grey)"},i=()=>{typeof t.message=="object"&&typeof t.message.auction=="object"&&(location.href=`auctions/${t.message.auction.id}`)},l=typeof t.message=="object"&&t.message.status?o[t.message.status]:o.success,c=a.exports.useCallback(()=>{r(t.id)},[t.id,r]);return e(Qt,{ref:s,children:e(Zn,{background:l,children:d(er,{children:[e(Ee,{variant:"subtitle2",children:typeof t.message=="object"?d(T,{children:[t.message.message,t.message.auction&&e("p",{onClick:i,children:"Tryck h\xE4r f\xF6r att komma till auktionen"})]}):t.message}),e("div",{children:e(te,{onClick:c,children:e(Yt,{})})})]})})})}),pt=a.exports.createContext(null),Z=()=>a.exports.useContext(pt),nr=({children:t})=>e(Xt,{anchorOrigin:{vertical:"top",horizontal:"right"},content:(s,r)=>e(tr,{id:s,message:r}),children:e(rr,{children:t})}),rr=({children:t})=>{const{enqueueSnackbar:s}=qe(),o={addSnackbar:i=>{s(i)}};return e(pt.Provider,{value:o,children:t})},sr=n.div`
  margin: 1.5rem 1rem 5rem;
`,ht=n.h3`
  text-align: center;
  color: var(--dark-green);
  margin: 0;
  font-size: 1.7rem;
  font-weight: 600;
  letter-spacing: 0.7px;
  font-family: var(--font-title);
`,or=n(ht)`
  font-size: 0.9rem;
  line-height: 14px;
  text-transform: uppercase;
`,ir=n.p`
  font-size: 1.3rem;
  margin: 0;
`,ar=n.span`
  color: crimson;
`;n.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: auto;
`;const lr=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,cr=n.h1`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: var(--font-title);
  margin: 0 0 0px;
`,je=n.h2`
  font-size: 0.9rem;
  font-weight: 600;
  font-family: var(--font-title);
  line-height: 2px;
  letter-spacing: 0.9px;
  text-transform: uppercase;
`,dr=n(je)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 1rem;
  cursor: pointer;
`,ur=n.div`
  display: flex;
  flex-direction: row-reverse;
  max-width: 500px;
`,gr=n(X)`
  z-index: 1;
  background-color: var(--background-color);
  border-radius: 50%;
  padding: 20px;
  margin: -50px 0 0 0;
  right: 0;
  :hover {
    background-color: white;
  }
`,pr=n(Ve)`
  font-size: 2.5rem;
  color: var(--light-green);
`,mt=n.span`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-family: var(--font-title);
`,hr=n(Ke)`
  margin-right: 5px;
  font-size: 1rem;
`,mr=n(Je)`
  margin-right: 5px;
  font-size: 1rem;
`,fr=n.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1rem auto;
  margin-left: 16px;
  grid-gap: 10px;
`,xr=n(Te)`
display: grid;
`,yr=n.img`
  width: 100%;
`,Sr=n.p`
  text-align: center;
`;function br(){return e(lr,{children:d(Zt,{spacing:1,children:[e(ne,{variant:"rectangular",width:300,height:118}),e(ne,{variant:"circular",width:50,height:50}),e(ne,{variant:"text",width:300}),e(ne,{variant:"text",width:300}),e(ne,{variant:"text",width:300})]})})}const wr=n(he)`
  outline: none;
  margin-top: ${t=>t.margintop>0?`${t.margintop}px`:`${0}px`};
`,_=({label:t,type:s,updateState:r,value:o,InputLabelProps:i,InputProps:l,inputProps:c,required:u,margintop:g})=>e(wr,{onChange:m=>r(m.target.value),fullWidth:!0,required:!!u,value:o||"",type:s||"text",label:t,id:t,InputLabelProps:i,InputProps:l,inputProps:c,margintop:g||0}),vr=n.span`
  font-family: var(--font-text);
  font-size: 1rem;
  line-height: 0.2rem;
  margin: 1rem 0 0 0;
`,Cr=n.span`
  font-weight: 900;
  letter-spacing: 0.1px;
  color: var(--dark-green);
  padding: 0.1rem 0.3rem;
  border: 0.5px solid var(--dark-green);
  border-radius: 30px;
  &:hover{
    cursor: pointer;
  }
`;function kr({auctionDescription:t}){const[s,r]=a.exports.useState(),[o,i]=a.exports.useState("Visa mer"),[l,c]=a.exports.useState(!1),u=t.length,g=300;a.exports.useEffect(()=>{t&&u>g?r(t.substring(0,g)+"..."):r(t)},[]);const m=()=>{l?(i("Visa mindre"),r(t)):(i("Visa mer"),r(t.substring(0,g)+"...")),c(!l)};return d(T,{children:[e(vr,{children:s}),u>g&&e(X,{variant:"text",onClick:m,children:e(Cr,{children:o})})]})}const $r=n(X)`
  background: ${t=>t.backgroundcolor?t.backgroundcolor:"var(--light-green)"};
  text-transform: uppercase;
  font-size: ${t=>t.fontSize?t.fontSize:"1rem"};
  letter-spacing: 1px;
  &:hover {
    background: var(--light-green);
  }
`,se=({label:t,callback:s,costumFontSize:r,disabled:o,costumBackgroundColor:i})=>e($r,{onClick:s,variant:"contained",fontSize:r||"1rem",backgroundcolor:i,disabled:o,children:t}),Ar=n(me)`
  margin: 2px;
  color: white;
  background-color: var(--light-green);
`,Ir=n.button`
  border: 0;
  background: none;
  cursor: pointer;
`,Er=({categories:t,auctionId:s})=>{const[r,o]=a.exports.useState(!1),i=2,l=t.slice(0,i),c=u=>u.map(g=>e(Ar,{label:`#${g.name}`},`${s}-${g.name}`));return d(C,{item:!0,xs:12,md:12,children:[c(r?t:l),t.length>2&&d(Ir,{onClick:()=>o(!r),children:[" ",r?"Visa mindre":"Visa mer"," "]})]})},ft=a.exports.createContext(null),oe=()=>a.exports.useContext(ft),Tr=({children:t})=>{const[s,r]=a.exports.useState(!1),i={showLoginModal:s,toggleLoginModal:()=>{r(!s)}};return e(ft.Provider,{value:i,children:t})},Oe=n.div`
  font-weight: ${t=>t.me?"bolder":"normal"};
`,Br=n.p`
  text-align: center;
  padding-left: 10px;
`,Dr=[{id:"username",label:"Anv\xE4ndarnamn"},{id:"bids",label:"Bud (kr)",minWidth:70},{id:"date",label:"Datum"}];function Lr({auction:t,whoAmI:s}){const r=s==null?void 0:s.username,o=t.bids;return e(en,{sx:{maxHeight:440},children:d(tn,{stickyHeader:!0,"aria-label":"sticky table",children:[e(nn,{children:e(Be,{children:Dr.map(i=>e(fe,{style:{minWidth:i.minWidth},children:i.label},i.id))})}),e(rn,{children:(o==null?void 0:o.length)?o==null?void 0:o.map((i,l)=>{const c=r===i.user.username;return d(Be,{role:"checkbox",tabIndex:-1,sx:{backgroundColor:l%2?"lightgrey":"white"},children:[e(fe,{children:e(Oe,{me:c,children:i.user.username})}),e(fe,{children:e(Oe,{me:c,children:i.price})}),e(fe,{children:e(Oe,{me:c,children:new Date(i.createdDate).toLocaleString("sv-SV")})})]},i.id)}).reverse():e(Be,{role:"checkbox",tabIndex:-1,children:e(Br,{children:"Det finns inga bud \xE4n..."})})})]})})}function Pr({auction:t,whoAmI:s}){const[r,o]=a.exports.useState(!1),i=De(l=>{const g=l,{expand:c}=g,u=Ae(g,["expand"]);return e(te,Y({},u))})(({theme:l,expand:c})=>({transform:c?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:l.transitions.create("transform",{duration:l.transitions.duration.shortest})}));return d(R,{onClick:()=>o(!r),sx:{marginBottom:"70px"},children:[d(Ie,{disableSpacing:!0,children:[e("p",{children:"Budhistorik"}),e(i,{expand:r,children:e(Qe,{})})]}),e(xe,{in:r,timeout:"auto",unmountOnExit:!0,children:e(Lr,{auction:t,whoAmI:s})})]})}const xt=a.exports.createContext(null),V=()=>a.exports.useContext(xt),Mr=({children:t})=>{const[s,r]=a.exports.useState(!1),[o,i]=a.exports.useState(!1),[l,c]=a.exports.useState(!1),[u,g]=a.exports.useState(!1),[m,x]=a.exports.useState(!1),p={handleSelect:h=>{r(!1),i(!1),c(!1),g(!1),x(!1),h(!0)},home:s,auction:o,notis:l,message:u,profile:m,setHome:r,setAuction:i,setNotis:c,setMessage:g,setProfile:x};return e(xt.Provider,{value:p,children:t})},jr=()=>{const{id:t}=sn(),s=j(),{addSnackbar:r}=Z(),{getAuctionById:o}=Se(),{createChat:i}=U(),{setShowDrawer:l}=H(),{setMessage:c,handleSelect:u}=V(),{createBid:g,getHighestBid:m,highestBid:x}=Me(),{whoAmI:f}=O(),{toggleLoginModal:p}=oe(),[h,y]=a.exports.useState(),[b,v]=a.exports.useState(""),[I,S]=a.exports.useState(0),[$,E]=a.exports.useState(),[W,D]=a.exports.useState(),[k,w]=a.exports.useState(""),[L,B]=a.exports.useState(!1),[A,P]=a.exports.useState(!1);a.exports.useEffect(()=>{N()},[t,f]),a.exports.useEffect(()=>{S(x),w("H\xF6gsta budet")},[x]);const N=async()=>{const M=await o(t);y(M),m(M.id),E(new Date(M.endDate).toLocaleDateString("sv-SV")),D(new Date(M.endDate).toLocaleTimeString("sv-SV")),f&&f.id==M.host.id&&B(!0),M.bids.length||(S(M.startPrice),w("Startpris"))},F=async M=>{if(M.preventDefault(),f==null)return;if(parseInt(b)>I*2&&!A){P(!0);return}P(!1);const qt={userId:f.id,auctionId:h==null?void 0:h.id,price:parseInt(b),createdDate:Date.now()};await g(qt)!=null?(r("Giltigt bud!"),N()):r({message:"Ogiltigt bud",status:"error"}),v("")},Q=()=>{f&&i({auctionId:h==null?void 0:h.id})?(u(c),l(!0)):p()},ke=d(T,{children:[A?e(se,{label:"Nej",callback:()=>P(!1),disabled:L,costumBackgroundColor:"crimson"}):e(_,{label:"L\xE4gg ett bud",type:"number",value:b,updateState:v}),A?e(se,{label:"Ja",callback:F,disabled:L}):e(se,{label:"Buda",callback:F,disabled:L})]}),$e=d(T,{children:[e(Sr,{children:"Logga in f\xF6r att placera ett bud."}),e(se,{label:"Logga in",callback:()=>p()})]});return e(sr,{children:h?d(T,{children:[d(dr,{onClick:()=>s.push("/auctions"),children:[e(Le,{}),"Tillbaka"]}),d(C,{container:!0,spacing:2,children:[e(C,{item:!0,xs:12,md:12,children:e(xr,{initialActiveIndex:0,isRTL:!1,showArrows:!0,itemsToShow:1,pagination:!1,children:h.images.map(M=>e(yr,{src:M.path},M.path))})}),e(C,{item:!0,xs:8,md:8,children:e(cr,{children:h.title})}),e(C,{item:!0,xs:4,md:4,children:e(ur,{children:e(gr,{disabled:L,onClick:Q,children:e(pr,{children:e(Ve,{})})})})}),d(C,{item:!0,xs:8,md:8,children:[e(je,{children:"Sluttid"}),d(mt,{children:[e(mr,{children:e(Je,{})}),$]}),d(mt,{children:[e(hr,{children:e(Ke,{})}),W]})]}),d(C,{item:!0,xs:4,md:4,children:[d(ht,{children:["SEK ",I]}),e(or,{children:k})]}),d(C,{item:!0,xs:12,md:6,children:[e(je,{children:"Beskrivning"}),e(kr,{auctionDescription:h.description})]}),h.categories&&e(Er,{categories:h.categories,auctionId:h.id}),e(C,{item:!0,xs:12,md:12,children:A&&d(ir,{children:["\xC4r du s\xE4ker? Ditt bud \xE4r",d(ar,{children:[" ",b]})," SEK"]})}),e(fr,{children:f?ke:$e}),e(C,{item:!0,xs:12,children:e(Pr,{auction:h,whoAmI:f})})]})]}):e(br,{})})},Or=n.div`
  max-height: 100vh;
  display: grid;
  grid-template-rows: 25vh 1fr;
  
  @media (min-width: 769px) {
  max-height: 100%;
  }
`,zr=n.div`
  padding: 20px;
  margin: 0 auto;
  `,Nr=n.div`
  height: 100%;
  width: 100%;
  position: relative;
`,Fr=n.img`
  width: 100%;
  height: 75%;
  object-fit: cover;
`,Rr=n.div`
  width: 80%;
  margin: 0 auto;
  position: absolute;
  top: 60%;
  left: 10%;
  z-index: 50;
`,Wr=n.div`
  margin: 20px 0 100px 0;
  text-align: center;
  font-family: var(--font-text);
`,Ur=n(G)`
  margin: ${t=>!t.isFirstLoad&&"40px auto 80px 45%"};
`,Hr=24,be=1e3,ie=60*be,ae=60*ie,yt=Hr*ae,_r=(t,s,r,o,i,l)=>{t>ae&&(r(Math.floor(s/(1e3*60*60)%24)),o("Timmar kvar:"),setTimeout(async()=>{await l(),i(t-1)},ae)),t>=ie&&t<ae&&(r(Math.floor(s/(1e3*60)%60)),o("Minuter kvar:"),setTimeout(async()=>{await l(),i(t-1)},ie)),t>=be&&t<ie&&(r(Math.floor(s/1e3%60)),o("Sekunder kvar:"),setTimeout(async()=>{await l(),i(t-1)},be))},Gr=n(R)`
  height: 100%;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 35% 1fr;


  @media (min-width: 769px) {
    width: auto;
    height: 100%;
    max-height: 202.5px;
  }
`,qr=n(on)`
  display: grid;
  grid-template-rows: 35% 1fr auto;
`,Vr=n.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  :hover {
    cursor: pointer;
  }
`,Kr=n.div`
  width: 100%;
  height: 100%;
`,Jr=n.p`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-top: 0.3rem;
  padding-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
`,ze=n.p`
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-top: 0;
`,Qr=n(re)`
  background: var(--light-green);
  float: right;
`,Ne=n.span`
  font-weight: bolder;
`,Yr=n.div`
  &:hover {
    cursor: pointer;
  }
`,Fe=[{status:"OPEN",title:"P\xE5g\xE5ende"},{status:"SOLD",title:"Avslutade"}],le=[{sort:"asc",title:"Kortast tid kvar"},{sort:"desc",title:"L\xE4ngst tid kvar"},{sort:"none",title:"Senast tillagda"}],St=a.exports.createContext(null),K=()=>a.exports.useContext(St),Xr=({children:t})=>{const[s,r]=a.exports.useState([]),[o,i]=a.exports.useState(""),[l,c]=a.exports.useState([]),[u,g]=a.exports.useState(le[2]),[m,x]=a.exports.useState(Fe[0]),[f,p]=a.exports.useState(!1),[h,y]=a.exports.useState(!1),[b,v]=a.exports.useState(!1),I=()=>{i(""),c([]),x(Fe[0]),g(le[2]),p(!f),g(le[2]),r([]),S()},S=async(k,w)=>{const L=k!=null?k:0;let B=[];const A={title:(w==null?void 0:w.title)?w==null?void 0:w.title:o,sort:(w==null?void 0:w.sort)?w==null?void 0:w.sort:u,categories:(w==null?void 0:w.categories)?w.categories:l,status:(w==null?void 0:w.status)?w==null?void 0:w.status:m,page:L};let P=E(A.categories),N=W(A.status),F=$(A.sort),Q=await fetch(`/api/auctions/search?title=${A.title}${P}${N}&page=${A.page}${F}`);if(Q.ok&&Q.status==200){let ke=await Q.json(),$e=A.page===0?B:Object.assign([],s);r([...$e,...ke]),y(!1),v(!1)}Q.status===204&&(A.page===0?(y(!0),r(B),v(!1)):s.length>0&&v(!0))},$=k=>{let w="";return k.sort!=="none"&&(w=`&sort=${k.sort}`),w},E=k=>{let w="";if(k)for(let L of k)w.length<=0?w=`&category=${L.name}`:w+=encodeURI(` ${L.name}`);return w},W=k=>{let w="";return k&&(w="&status="+encodeURI(k.status)),w},D={auctions:s,setAuctions:r,clearFilter:I,searchText:o,setSearchText:i,selectedCategories:l,setSelectedCategories:c,selectedSortTime:u,setSelectedSortTime:g,selectedStatus:m,setSelectedStatus:x,getAuctionsByOptions:S,isRerender:f,noContent:h,lastItem:b,setNoContent:y};return e(St.Provider,{value:D,children:t})},bt=({auction:t,fetchAuctions:s,forwardRef:r})=>{var P;const{setNoContent:o}=K(),[i,l]=a.exports.useState(null),[c,u]=a.exports.useState(0),[g,m]=a.exports.useState(null),[x,f]=a.exports.useState("Dagar kvar:"),[p,h]=a.exports.useState(0),[y,b]=a.exports.useState(),v=j(),{createBid:I}=Me(),{whoAmI:S}=O(),{toggleLoginModal:$}=oe(),{addSnackbar:E}=Z(),W=S&&t.host&&t.host.id&&S.id==t.host.id;a.exports.useEffect(()=>{var N,F;((N=t.bids)==null?void 0:N.length)?h(t.bids[((F=t.bids)==null?void 0:F.length)-1].price):h(t.startPrice)},[t.bids]),a.exports.useEffect(()=>{w()},[!!p,p]),a.exports.useEffect(()=>{D()},[i]),a.exports.useEffect(()=>{k()},[g]);const D=async()=>{const N=new Date(t.endDate+"").getTime(),F=new Date().getTime();u(N-F),c<=0&&s(),c<=yt&&m(c),l(Math.round(c/(60*60*24*1e3)))},k=()=>{g!==null&&_r(g,c,l,f,m,D)},w=()=>{p&&(p<=10&&b(p+1),p<=100&&p>10&&b(p+10),p>=100&&p>100&&b(p+100),p==t.startPrice&&b(p+1))},L=async()=>{if(S==null){$();return}const N={userId:S.id,auctionId:t.id,price:y,createdDate:Date.now()},F=await I(N);E(F?"Giltigt bud!":{message:"Ogiltigt bud!",status:"error"})},B=()=>{o(!1),v.push(`/auctions/${t.id}`)},A=()=>e(G,{sx:{width:"100%"},children:e(an,{color:"success"})});return d(Gr,{ref:r,children:[e(Kr,{children:e(Vr,{src:t.images.length?t.images[0].path:"https://i.pinimg.com/564x/9e/8b/dc/9e8bdc74df3cb2f87fae194a18ba569a.jpg",onClick:B})}),d(qr,{children:[d("div",{children:[e(Qr,{children:(P=t.host)==null?void 0:P.username.charAt(0).toUpperCase()}),e(Jr,{onClick:B,children:t.title})]}),d(Yr,{onClick:B,children:[d(ze,{children:[e(Ne,{children:"Pris:"})," ",t.startPrice," SEK"]}),d(ze,{children:[e(Ne,{children:"H\xF6gsta bud:"})," ",p==t.startPrice?"Inga bud":p+" SEK"]}),d(ze,{children:[e(Ne,{children:x})," ",i]})]}),y?e(se,{label:`Snabb bud ${y} SEK`,callback:L,costumFontSize:"0.7rem",disabled:W}):A()]})]})},Zr=n(he)`
  background-color: ${t=>t.isfilteropen==="true"?"white":"var(--yellow)"};
  border-radius: ${t=>t.isfilteropen==="true"?"25px 25px 0 0":"100px"};
  padding: 0.5rem 5%;
  width: 90%;
  box-shadow: ${t=>t.isfilteropen==="true"?null:"0 0 3px var(--dark-grey)"};
  transition: ${t=>t.isfilteropen==="true"?"100ms":"1200ms"};
`,es=n(Pe)`
  width: 100%;
`,ts=n(te)`
  background-color: ${t=>t.input&&t.input.length>0&&"var(--light-green)"};
  transition: 500ms;
  &:focus {
    background-color: var(--light-green);
  }
`,ns=({searchText:t,setSearchText:s,showFilter:r,setShowFilter:o})=>e(es,{children:e(Zr,{id:"search-input-field",variant:"standard",type:"text",placeholder:"Vad letar du efter?",value:t,isfilteropen:r.toString(),onChange:i=>s(i.target.value),onFocus:()=>o(!0),inputProps:{style:{fontFamily:"var(--font-text)",fontSize:"1em"}},InputProps:{endAdornment:e(T,{children:e(ts,{type:"submit",input:t,children:e(ln,{})})}),disableUnderline:!0}})}),rs=n(xe)`
  background: white;
  width: 100%;
  border-radius: 0 0 5px 5px;
  max-height: 500px;
  position: relative;
  z-index: 100;
  box-shadow: 0 10px 10px rgb(0 0 0 / 0.2);
`,ss=n.div`
  background: white;
  width: 90%;
  margin: 3% auto;
  margin-top: 0;
  border-radius: 5px;
  padding: 3%;
  max-height: 400px;
`,Re=n.p`
  padding: ${t=>t.paddingtop?`${t.paddingtop} 10px 10px`:"30px 10px 10px"};
  margin: 0;
  font-family: var(--font-text);
`,os=n.div`
  position: absolute;
  top: 0;
  right: 5%;
  z-index: 100;
  `,is=n(te)`
  position: absolute;
  bottom: 5%;
  right: 5%;
  z-index: 100;
`,as=n(me)`
  background-color: var(--light-green);
`,ls=e(dn,{fontSize:"small"}),cs=e(un,{fontSize:"small"}),ds=({label:t,options:s,isRerender:r,setSelected:o,limitTags:i,selected:l})=>{const c=(u,g)=>{o(g)};return e(cn,{multiple:!0,limitTags:i,options:s,onChange:(u,g)=>c(u,g),disableCloseOnSelect:!0,value:l||" ",getOptionLabel:u=>u.name,renderTags:(u,g)=>u.map((m,x)=>e(as,pe(Y({},g({index:x})),{label:m.name}))),renderOption:(u,g,{selected:m})=>d("li",pe(Y({},u),{children:[e(Ye,{icon:ls,checkedIcon:cs,style:{marginRight:8},checked:m},`filter-category-checkbox-${g}`),g.name]})),renderInput:u=>e(he,pe(Y({},u),{label:t}))},`search-category-${r}`)},us=n(Pe)`
  width: 100%;
`,gs=n(gn)`
  padding: 2%;
`,ps=n(pn)`
  color: var(--light-green) !important;
`,wt=({options:t,updateState:s,optionKey:r,defaultValue:o,isRerender:i})=>e(us,{children:e(gs,{row:!0,"aria-label":"gender",name:"row-radio-buttons-group",onChange:c=>{if(typeof t=="object"&&r)for(let u of t)u[r]==c.target.value&&s(u);else s(c.target.value)},value:typeof o=="object"&&typeof r=="string"?o[r]:o!=null?o:" ",children:t.map((c,u)=>e(C,{item:!0,children:e(hn,{value:typeof r=="string"&&typeof t=="object"?c[r]:c!=null?c:" ",control:e(ps,{}),label:typeof r=="string"&&typeof t=="object"?c[r]:c})},`radio${u}`))},`search-status-${i}`)}),vt=a.exports.createContext(null),We=()=>a.exports.useContext(vt),hs=({children:t})=>{const[s,r]=a.exports.useState([]);a.exports.useEffect(()=>{s.length<=0&&o()},[]);const o=async()=>{let l=await fetch("/rest/categories");if(l.ok&&l.status===200){let c=await l.json();r(c)}},i={allCategories:s};return e(vt.Provider,{value:i,children:t})},ms=n(X)`
  text-transform: none;
  background: ${t=>t.backgroundcolor};
  font-size: ${t=>t.fontSize};
  letter-spacing: 1px;
  border-radius: 50px;
  color: var(--grey) !important;
  border-color: var(--grey) !important;
`,fs=({label:t,type:s,callback:r,costumFontSize:o,disabled:i,costumBackgroundColor:l})=>e(ms,{onClick:r,type:s||"button",variant:"outlined",fontSize:o||"0.7rem",backgroundcolor:l,disabled:i,children:t});function xs({isOpen:t,toggle:s,selectedStatus:r,setSelectedStatus:o,selectedCategories:i,setSelectedCategories:l,selectedSortTime:c,setSelectedSortTime:u,setShowFilter:g}){const{allCategories:m}=We(),{auctions:x,clearFilter:f,isRerender:p}=K();return e(rs,{in:t,timeout:"auto",unmountOnExit:!0,children:d(ss,{children:[e(is,{type:"button",onClick:()=>s(),children:e(mn,{})}),e(os,{children:e(fs,{label:"Rensa",type:"button",callback:()=>{f(),g(!1)}})}),d(G,{children:[e(Re,{paddingtop:"0",children:"KATEGORIER"}),e(ds,{isRerender:p,options:m,selected:i,setSelected:l,limitTags:1})]}),d(G,{children:[e(Re,{children:"SORTERA ANNONSER"}),e(wt,{isRerender:p,options:le,updateState:u,optionKey:"title",defaultValue:c})]}),d(G,{children:[e(Re,{children:"SE ENDAST"}),e(wt,{isRerender:p,options:Fe,updateState:o,optionKey:"title",defaultValue:r})]})]})})}const ys=n.form`
`,Ct=({searchWord:t})=>{const{auctions:s,setAuctions:r,getAuctionsByOptions:o,searchText:i,setSearchText:l,selectedCategories:c,setSelectedCategories:u,setSelectedSortTime:g,selectedSortTime:m,selectedStatus:x,setSelectedStatus:f}=K(),p=j(),[h,y]=a.exports.useState(!1),b=()=>y(!h);return d(ys,{autoComplete:"off",onSubmit:async I=>{I.preventDefault(),await r([]),await o(0),y(!1),b(),p.push("/auctions")},children:[e(ns,{searchText:i,setSearchText:l,showFilter:h,setShowFilter:y}),e(xs,{isOpen:h,toggle:b,selectedSortTime:m,setSelectedSortTime:g,selectedStatus:x,setSelectedStatus:f,selectedCategories:c,setSelectedCategories:u,setShowFilter:y})]})},Ss=()=>{const{getAuctionsByOptions:t,auctions:s,setAuctions:r,noContent:o,lastItem:i}=K(),{setAuction:l,handleSelect:c}=V(),u=a.exports.useRef(),[g,m]=a.exports.useState(0),[x,f]=a.exports.useState(""),[p,h]=a.exports.useState(!1);a.exports.useEffect(()=>(y(),c(l),()=>{r([]),m(0)}),[]),a.exports.useEffect(()=>{s.length||m(0)},[s]),a.exports.useEffect(()=>{i?(h(!1),f("Inga fler auktioner")):f("")},[i]);const y=async()=>{s.length<=0&&await t(0)},b=async()=>{h(!0),await t(g)},v=a.exports.useCallback((S,$)=>{u.current&&u.current.disconnect(),u.current=new IntersectionObserver(E=>{E[0].isIntersecting&&(m(g+1),b())}),S&&u.current.observe(S)},[s]),I=S=>e(Ur,{isFirstLoad:S,children:e(fn,{sx:{color:"var(--light-green)"}})});return d(Or,{children:[d(Nr,{children:[e(Fr,{src:"https://i.pinimg.com/564x/63/5e/b1/635eb177eef29242e96352f1206298da.jpg"}),e(Rr,{children:e(Ct,{})})]}),e(zr,{children:d(C,{container:!0,spacing:1,rowSpacing:1,children:[s&&s.length>0?s.map((S,$)=>s.length===$+1?e(C,{item:!0,xs:12,sm:6,md:4,children:e(bt,{auction:S,fetchAuctions:y,forwardRef:v},`auction-card-${S.id}`)},`auction-card-grid-${S.id}`):e(C,{item:!0,xs:12,sm:6,md:4,children:e(bt,{auction:S,fetchAuctions:y},`auction-card-${S.id}`)},`auction-card-grid-${S.id}`)):o?e("p",{children:"Inga resultat av din s\xF6kning :/"}):I(!0),e(C,{item:!0,xs:12,md:12,children:x&&e(Wr,{children:x})}),!i&&p&&e(C,{item:!0,xs:12,md:12,alignItems:"center",justifyContent:"center",children:I(!1)})]})})]})};var bs="/assets/BlackLeaf.d985d551.png",ws="/assets/BlackFlower.471371fc.png",vs="/assets/BlackTree.9bed74b6.png",Cs="/assets/BlackBush.9ddbfc39.png",ks="/assets/BlackSeed.effc4b21.png";const kt={tr\u00E4d:{imgFile:vs,text:"TR\xC4D"},fr\u00F6n:{imgFile:ks,text:"FR\xD6"},buske:{imgFile:Cs,text:"BUSKE"},stickling:{imgFile:bs,text:"STICKLING"},blomma:{imgFile:ws,text:"BLOMMA"}},$s=n(re)`
  background: #619463;
  position: absolute;
  top: 0;
 right: 0;
 margin-top: 25px;
 margin-right: 25px;
`,As=n.p`
  position: absolute;
  top: 5px;
  margin-left: 20px;
  color: white;
  font-size: 25px;
`,Is=n.div`
  max-height: 80vh;
  display: grid;
  grid-template-rows: 25vh 1fr;
`,Es=n.div`
      @media (min-width: 769px) {
    width: 75%;
    margin: 0 auto;
  }
`,Ts=n.div`
  height: 100%;
  width: 100%;
  position: relative;
`,Bs=n.img`
  width: 100%;
  height: 75%;
  object-fit: cover;
`;n.img`
  width: 92%;
  height: 75%;
  object-fit: cover;
  display: grid;
  align-items: center;
  margin: 0 auto;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  margin-top: 20px;

`;const Ds=n.div`
  width: 70%;
  margin: 0 auto;
  position: absolute;
  top: 60%;
  left: 15%;
`,Ls=n.div`
  padding: 0 10px;
  width: 100;
  margin: 1rem 0 1rem 0;
  @media (min-width: 769px) {
    width: 60%;
    margin: 0 auto;
  }
`,Ps=n(R)`
  display: grid;
  align-items: center;
  justify-items: center;
  background: #FFF;
  padding: 10px 15px 10px 15px;
  min-width: 60px;
  margin: 10px;
`,Ms=n(R)`
  background: #FFF;
  /* margin: 25px 5px 0 5px; */
`,js=n.p`
  text-transform: uppercase;
  margin: 7px 0 0 0;
  font-size: 13px;
`,$t=n.p`
  font-size: 20px;
  letter-spacing: 1.5px;
  margin: 0 0 0 1rem;
`,Os=n.p`
@media (min-width: 700px) {
  padding-top: 20px;
}

  font-size: 20px;
  letter-spacing: 1.5px;
  margin: 0 0 0 1rem;
`,zs=n.img`
  width: 25px;
`;n.p`
  position: absolute;
  margin-left: 25px;
  bottom: 150px;
`;const At=n(xn)`
  display: ${t=>t.gridignore?"block":"grid"};
  align-items: center;
  justify-items: center;
`,It=n(yn)`
  width: ${t=>t.width?`${t.width}`:"90%"};
  margin: 0 auto;
  border-radius: 0 0 3px 3px;
  display: grid;

  @media (min-width: 769px) {
    padding: 10px 1px 10px 10px;
  }
`,Ns=n.img`
  width: 90%;
  border-radius: 3px;
`,Fs=n.img`
  height: 100px;
  width: auto;
  border-radius: 0 0 3px 3px;
`,Rs=n.div`
  display: grid;
  align-items: center;
  justify-items: center;
  margin-bottom: 20px;
`,Ws=n.div`
  margin: 20px;
  display: grid;
  align-items: center;
  justify-items: center;
  margin-bottom: 80px;
`,Us=()=>{const t=j(),{searchText:s,clearFilter:r,setSelectedCategories:o,getAuctionsByOptions:i,auctions:l,setSelectedSortTime:c}=K(),{whoAmI:u}=O(),{allCategories:g}=We();a.exports.useEffect(()=>{m()},[]);const m=async()=>{c(le[0]),await i(0)},x=S=>{let $=kt[S.toLocaleLowerCase()];return $==null&&($=kt.stickling),$.imgFile},f=async S=>{await r(),await o([S]),await i(0,{categories:[S]}),t.push("/auctions")},p=S=>{r(),t.push("/auctions/"+S)},h=()=>e(Ls,{children:e(Te,{isRTL:!0,itemsToShow:3,outerSpacing:0,pagination:!1,initialFirstItem:3,children:g&&g.map(S=>d(Ps,{children:[e(zs,{src:x(S.name),onClick:()=>f(S)}),e(js,{children:S.name})]},S.name))})}),y=()=>e(Rs,{children:d(At,{children:[e(Ns,{src:"https://i2.wp.com/www.livingloving.net/wp-content/uploads/2017/01/living-loving-indoor-plants-3.jpg?resize=1769%2C1000&ssl=1",alt:"News picture",loading:"lazy"}),e(It,{title:"F\xF6r Hemmet",subtitle:"Flera typer av v\xE4xter"})]})}),b=()=>e(Ws,{children:e(Te,{isRTL:!0,itemsToShow:3,outerSpacing:0,pagination:!1,initialFirstItem:0,children:l&&l.map(S=>e(Ms,{onClick:()=>p(S.id),children:d(At,{gridignore:"true",children:[e(Fs,{src:S.images.length?S.images[0].path:"https://i.pinimg.com/564x/9e/8b/dc/9e8bdc74df3cb2f87fae194a18ba569a.jpg",alt:"Auction",loading:"lazy"}),e(It,{style:{textAlign:"left"},width:"100%",subtitle:S.title})]})},S.id))})}),{setHome:v,handleSelect:I}=V();return a.exports.useEffect(()=>{I(v)},[]),d(Is,{children:[d(Ts,{children:[e(Bs,{src:"https://i.pinimg.com/564x/63/5e/b1/635eb177eef29242e96352f1206298da.jpg",alt:""}),u&&d(As,{children:["Hej ",u.username]}),u&&e($s,{children:u.username.charAt(0).toUpperCase()}),e(Ds,{children:e(Ct,{searchWord:s})})]}),d(Es,{children:[e(Os,{children:"Kategorier"}),h(),e($t,{children:"Nyheter"}),y(),e($t,{children:"Snart avslutade auktioner"}),b()]})]})},Hs=n.div`
  font-family: var(--font-title);
  font-size: 20px;
  margin: 1rem;
`,_s=n.div`
  background-color: ${t=>t.isExpanded?"var(--background-color)":"24CAD6"};
`,Gs=n.div`
  background-color: ${t=>t.isExpanded?"var(--background-color)":"24CAD6"};
`,qs=n.div`
  background-color: ${t=>t.isExpanded?"var(--background-color)":"24CAD6"};
`,Et=n.div`
  font-size: 0.9rem;
  font-weight: 600;
  font-family: var(--font-title);
  line-height: 2px;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 1rem;
  cursor: pointer;
`,Vs=n.div`
  display: ${t=>t.grid&&"grid"};
  grid-template-columns: ${t=>t.gridColumns&&t.gridColumns};
  margin-bottom: 2rem;
  background-image: url("https://i.pinimg.com/564x/f8/2a/c0/f82ac0c390529f0a96d975c6b6f7c997.jpg");
  height: 8rem;
`,Ue=({children:t,grid:s,gridColumns:r})=>e(Vs,{grid:s&&s,gridColumns:r&&r,children:t}),Ks=n.div`
  width: 90%;
  margin: 1rem auto;
  display: grid;
`,Js=n(re)`
  background: var(--light-green);
  justify-self: end;
  margin: 1rem;
`;n(Sn)`
  color: var(--light-green);
`;n(bn)`
  color: var(--light-green);
`;n.div`
  display: grid;
  grid-gap: 1rem;
`;n.span`
  font-size: 1rem;
  font-weight: bold;
  `;const J=n.span`
  color: ${t=>t.color?t.color:"black"};
  font-size: ${t=>t.size?t.size:"1rem"};
  margin: ${t=>t.margin?t.margin:""};
  font-style: italic;
  letter-spacing: 2px;
  font-family: var(--font-title);
`;n.span`
  letter-spacing: 2px;
`;const Qs=n.div`
  margin: 1rem 0;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  cursor: pointer;
`,we=n.div`
  width: 11rem;
  height: 11rem;
  background-image: ${t=>t.background&&`url(${t.background})`};
  justify-self: ${t=>t.justify&&t.justify};
  display: grid;
  align-items: center;
  justify-items: center;
  opacity: ${t=>t.opacity?t.opacity:"none"};
`;n.div`
  display: grid;
  grid-template-columns: 2rem 1fr;
`;n.input`
  border: none;
  border-bottom: 1px solid gray;
  background: white;
  color: black;
  outline: none;
  font-size: 1rem;
  width: 50%;
`;const Ys=n.button`
  background: white;
  border: 1px solid var(--light-green);
  color: black;
  padding: 0.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: var(--font-text);
  border-radius: 0.4rem;
`,Xs=n.div`
  /* margin: auto 1rem 3rem 1rem; */
  padding: 0.5rem;
`,Zs=n.div`
  font-family: var(--font-text);
  font-size: smaller;
`,eo=n.div`
  font-family: var(--font-title);
  font-size: 20px;
`,Tt=n.div`
  font-family: var(--font-text);
  font-size: 15px;
`;function to({auction:t}){const s=j(),r=t.status=="SOLD"?"S\xE5ld":t.status=="OPEN"?"P\xE5g\xE5ende":"Inte s\xE5ld",o=t.status=="SOLD"?"var(--status-green)":t.status=="OPEN"?"var(--status-yellow)":"var(--status-red)";return e(Xs,{children:e(R,{children:d(C,{container:!0,onClick:()=>{s.push(`/auctions/${t.id}`)},style:{margin:"0.5rem"},children:[e(C,{item:!0,xs:8,md:10,children:e(eo,{children:t.title})}),e(C,{item:!0,xs:4,md:2,children:d(Zs,{children:[e(wn,{sx:{color:o},fontSize:"inherit"})," ",r]})}),e(C,{item:!0,xs:12,children:e(Tt,{children:t.bids.length>0?t.bids[t.bids.length-1].user.username:"Inga bud"})}),e(C,{item:!0,xs:12,children:e(Tt,{children:"SEK "+(t.bids.length>0?t.bids[t.bids.length-1].price:t.startPrice)})})]})})})}const no=n.div`
  letter-spacing: 0.9px;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1rem;
  user-select: none;
`;function ce(t){const s=(t==null?void 0:t.userAuctionsListByStatus)?t.userAuctionsListByStatus.length:0,r=De(o=>{const c=o,{expand:i}=c,l=Ae(c,["expand"]);return e(te,Y({},l))})(({theme:o,expand:i})=>({transform:i?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest})}));return d(T,{children:[d(Ie,{disableSpacing:!0,children:[e("p",{children:t.title}),e(no,{children:e(me,{label:`${s}`})}),e(r,{expand:t.expandState,children:e(Qe,{})})]}),e(xe,{in:t.expandState,timeout:"auto",unmountOnExit:!0,children:t.userAuctionsListByStatus&&t.userAuctionsListByStatus.map(o=>e(to,{auction:o},o.id))})]})}function ro(){const[t,s]=a.exports.useState(!1),[r,o]=a.exports.useState(!1),[i,l]=a.exports.useState(!1),{getUsersAuctions:c,usersAuctions:u}=Se(),g=j(),[m,x]=a.exports.useState(),[f,p]=a.exports.useState(),[h,y]=a.exports.useState();a.exports.useEffect(()=>{b()},[]),a.exports.useEffect(()=>{v()},[u]);const b=async()=>{await c()},v=()=>{const E=[],W=[],D=[];u&&u.map(k=>{k.status==="OPEN"?E.push(k):k.status==="SOLD"?W.push(k):k.status==="NOT_SOLD"&&D.push(k)}),x(E),p(W),y(D)};return d(T,{children:[e(Ue,{grid:!0,gridColumns:"1fr 1fr",children:e(J,{color:"white",size:"2rem",margin:"1rem",children:"Mina auktioner"})}),d(Hs,{children:[d(Et,{onClick:()=>g.push("/my-page"),children:[e(Le,{}),"Tillbaka"]}),d(C,{container:!0,spacing:2,children:[e(C,{item:!0,xs:12,children:e(R,{elevation:t?0:1,onClick:()=>{s(!t)},children:e(_s,{isExpanded:t,children:e(ce,{title:"P\xE5g\xE5ende auktioner",expandState:t,userAuctionsListByStatus:m})})})}),e(C,{item:!0,xs:12,children:e(R,{elevation:r?0:1,onClick:()=>{o(!r)},children:e(Gs,{isExpanded:r,children:e(ce,{title:"S\xE5lda auktioner",expandState:r,userAuctionsListByStatus:f})})})}),e(C,{item:!0,xs:12,children:e(R,{elevation:i?0:1,onClick:()=>{l(!i)},children:e(qs,{isExpanded:i,children:e(ce,{title:"Inte s\xE5lda auktioner",expandState:i,userAuctionsListByStatus:h})})})})]})]})]})}const so=n.div`
  font-family: var(--font-title);
  font-size: 20px;
  margin: 1rem;
`,oo=n.div`
  background-color: ${t=>t.isExpanded?"var(--background-color)":"24CAD6"};
`,io=n.div`
  background-color: ${t=>t.isExpanded?"var(--background-color)":"24CAD6"};
`;function ao(){const t=j(),{getWonAuctionsByUser:s,usersWonAuctions:r}=Se(),[o,i]=a.exports.useState(!1),[l,c]=a.exports.useState(!1),[u,g]=a.exports.useState(),[m,x]=a.exports.useState();a.exports.useEffect(()=>{f()},[]),a.exports.useEffect(()=>{g(r)},[r]);const f=async()=>{await s()};return d(T,{children:[e(Ue,{grid:!0,gridColumns:"1fr 1fr",children:e(J,{color:"white",size:"2rem",margin:"1rem",children:"Mina vunna auktioner"})}),d(so,{children:[d(Et,{onClick:()=>t.push("/my-page"),children:[e(Le,{}),"Tillbaka"]}),d(C,{container:!0,spacing:2,children:[e(C,{item:!0,xs:12,children:e(R,{elevation:o?0:1,onClick:()=>{i(!o)},children:e(oo,{isExpanded:o,children:e(ce,{title:"Obetalda auktioner",expandState:o,userAuctionsListByStatus:u})})})}),e(C,{item:!0,xs:12,children:e(R,{elevation:l?0:1,onClick:()=>{c(!l)},children:e(io,{isExpanded:l,children:e(ce,{title:"Betalda auktioner",expandState:l,userAuctionsListByStatus:m})})})})]})]})]})}const lo="https://i.pinimg.com/736x/0f/0f/99/0f0f99b410e810c32aa5fdb78b2710e0.jpg",co="https://i.pinimg.com/564x/b8/c7/fa/b8c7fa3df0b4566dd831759c73330cda.jpg",uo="https://i.pinimg.com/564x/a7/9c/fc/a79cfc5790afdc60f2e3275a47ee0bbe.jpg",go="https://i.pinimg.com/564x/28/74/5e/28745eb2b7e41daea56a003fba0c8d61.jpg",po=()=>{a.exports.useState(!1),a.exports.useState(!1),a.exports.useState("Email"),a.exports.useState("L\xF6senord");const{setProfile:t,handleSelect:s}=V(),r=j(),{logout:o,whoAmI:i}=O(),{addSnackbar:l}=Z(),{setShowChatRoom:c}=H();a.exports.useEffect(()=>{s(t)},[]);const u=d(Qs,{children:[e(we,{onClick:()=>r.push("/createAuction"),justify:"end",background:lo,opacity:"",children:e(J,{color:"white",children:"Skapa auktion"})}),e(we,{onClick:()=>r.push("/my-page/my-won-auctions"),justify:"start",background:co,opacity:"",children:e(J,{color:"white",children:"Vunna auktioner"})}),e(we,{onClick:()=>r.push("/my-page/my-auctions"),justify:"end",background:go,opacity:"",children:e(J,{color:"white",children:"Mina auktioner"})}),e(we,{justify:"end",background:uo,opacity:"0",children:e(J,{color:"white",children:"Kommer snart"})})]}),g=m=>{m.preventDefault(),c(!1),o(),r.push("/"),l("Utloggning lyckades!")};return d(T,{children:[i&&d(Ue,{grid:!0,gridColumns:"1fr 1fr",children:[d(J,{color:"white",size:"2rem",margin:"1rem",children:["Hej ",i.username]}),e(Js,{children:i.username.charAt(0).toUpperCase()})]}),d(Ks,{children:[u,e(Ys,{onClick:g,children:"Logga ut"})]})]})},ho=n.div`
  margin: 0 auto;
`,mo=n.p`
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
`,fo=n.form`
  width: 70%;
  margin: 0 auto;
  /* display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr; */

`,xo=n(X)`
  margin: 10px 0;
  background: var(--light-green);
  text-transform: uppercase;
  font-size:  "1rem";
  letter-spacing: 1px;
  &:hover {
    background: var(--light-green);
  }
  margin-bottom: 70px;
  width: 100%;
`,yo=n.p`
  margin: 0;
  color: darkgrey;
  font-family: var(--font-normal-text);
  font-size: 0.9rem;
`,So=n.img`
  max-width: 150px;
  max-height: 150px;
  margin: 0.3rem;
  cursor: pointer;
`;n.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--status-green);
  font-family: var(--font-normal-text);
  padding: 5px;
`;const bo=n.div`
  margin: 5px 0 10px 0;
`,wo=n(vn)`
  width: 100%;
  padding: 20px 0;
  outline: none;
  border: 1px solid lightgrey;
  border-radius: 4px;
  background: var(--background-color);
  cursor: pointer;
`,vo=n.div`
  z-index: 100;
  position: relative;
`;const Co=({endDate:t})=>{let s=new Date;s.setDate(s.getDate()+30);let r=new Date;r.setDate(r.getDate()+1);const[o,i]=a.exports.useState(r),l=c=>{i(c),t(c.getTime())};return e(vo,{children:e(wo,{selected:o,onChange:c=>l(c),maxDate:s,minDate:r,placeholderText:"V\xE4lj ett slutdatum"})})},ko=n(Pe)`
  width: 100%;
`;n(Xe)`
  width: 100%;
`;const $o=48,Ao=8,Io={PaperProps:{style:{maxHeight:$o*4.5+Ao,width:250}}},Eo=({setCategoriesToUse:t})=>{const{allCategories:s}=We(),[r,o]=a.exports.useState([]);return d(ko,{children:[e(Cn,{id:"demo-multiple-checkbox-label",children:"Kategori"}),e(Xe,{labelId:"demo-multiple-checkbox-label",id:"demo-multiple-checkbox",multiple:!0,value:r,onChange:l=>{const c=l.target.value;o(c),t(c)},input:e(kn,{label:"Kategori"}),renderValue:l=>l.map(c=>c.name+" "),MenuProps:Io,children:s&&s.map(l=>d($n,{value:l,children:[e(Ye,{checked:r.indexOf(l)>-1}),e(An,{primary:l.name})]},l.id))})]})},To=De("input")({display:"none"});function Bo({formDataPreview:t,setFormDataPreview:s,errorMsg:r,setErrorMsg:o}){const[i,l]=a.exports.useState([]),c=5;async function u(p){const h=p.target.files;let y=[],b=[];for(let S of h){const $=URL.createObjectURL(S);b.push(S),y.push({name:S.name,src:$})}const{previewArrCheck:v,formDataArrCheck:I}=g(y,b);m(v,I),o(!h.length),p.target.value="",y=[],b=[]}const g=(p,h)=>{for(let y=p.length-1;y>=0;y--)i.map(b=>{b&&b.name===p[y].name&&(p.splice(y,1),h.splice(y,1))});return{previewArrCheck:p,formDataArrCheck:h}},m=(p,h)=>{i.length<c?(i.length+p.length>c&&(p=p.slice(0,c-i.length),h=h.slice(0,c-i.length)),l([...i,...p]),s([...t,...h])):(l(p.slice(0,c+1)),s(h.slice(0,c+1)))},x=(p,h)=>{let y=Object.assign([],i),b=Object.assign([],t),v=y.indexOf(p);if(h.tagName==="IMG"){f(y,b,v);return}y.splice(v,1),b.splice(v,1),l([...y]),s([...b])},f=(p,h,y)=>{let b=p.splice(y,1),v=h.splice(y,1);p.unshift(b[0]),h.unshift(v[0]),l([...p]),s([...h])};return d(T,{children:[d("label",{htmlFor:"contained-button-file",children:[e(To,{accept:"image/*",onChange:u,id:"contained-button-file",multiple:!0,type:"file"}),d(X,{variant:"contained",component:"span",style:{width:"100%",marginTop:"10px"},children:["Ladda upp bilder (max ",c," st)"]}),r&&e("p",{style:{textAlign:"center"},children:"Du m\xE5ste v\xE4lja minst en bild"})]}),i.length>0&&e("p",{style:{textAlign:"center"},children:"Klicka p\xE5 den bild du vill ha som huvudvy"}),e(C,{container:!0,children:i.map((p,h)=>{const y=h==0;return e(C,{item:!0,xs:6,md:2,children:d(ye,{badgeContent:"-",color:"error",onClick:b=>x(p,b.target),children:[e(So,{src:p.src},p.src),y&&e(me,{label:"Huvudbild",style:{position:"absolute",margin:"5px"},color:"success"},p.name)]},h)},h+"a")})})]})}const de=new FormData,Do=()=>{const{createAuction:t}=Se(),s=j(),[r,o]=a.exports.useState([]),[i,l]=a.exports.useState(""),[c,u]=a.exports.useState(""),[g,m]=a.exports.useState(0),x=Date.now()+1e3*65*60*24,[f,p]=a.exports.useState(x),[h,y]=a.exports.useState([]),[b,v]=a.exports.useState(!1);return d(ho,{children:[e(mo,{children:"Skapa auktion"}),d(fo,{onSubmit:async S=>{S.preventDefault();for(let $ of r)de.append("files",$,$.name);if(v(!de.has("files")),de.has("files")){const $={title:i,description:c,startPrice:g,endDate:f};if($.title&&$.description&&$.startPrice){const E=await t($,h,de);l(""),u(""),m(0),p(x),y([]),v(!1),de.delete("files"),E.id&&s.push(`/auctions/${E.id}`)}}},children:[e(_,{required:!0,label:"Titel",value:i,updateState:l,inputProps:{maxLength:20}}),e(he,{margin:"dense",required:!0,label:"Beskrivning",multiline:!0,maxRows:5,value:c,onChange:S=>u(S.target.value),style:{width:"100%"}}),e(_,{margintop:5,required:!0,label:"Start pris",type:"number",value:g,updateState:m}),d(bo,{children:[e(yo,{children:"V\xE4lj ett slutdatum"}),e(Co,{endDate:p})]}),e(Eo,{setCategoriesToUse:y}),e(Bo,{formDataPreview:r,setFormDataPreview:o,errorMsg:b,setErrorMsg:v}),d(xo,{type:"submit",variant:"contained",children:[" ","Skapa auktion"," "]})]})]})},Lo=({children:t})=>d(In,{children:[t,d(En,{children:[e(q,{path:"/",exact:!0,component:Us}),e(q,{path:"/auctions",exact:!0,component:Ss}),e(q,{path:"/my-page",exact:!0,component:po}),e(q,{path:"/my-page/my-auctions",exact:!0,component:ro}),e(q,{path:"/my-page/my-won-auctions",exact:!0,component:ao}),e(q,{path:"/auctions/:id",exact:!0,component:jr}),e(q,{path:"/createAuction",exact:!0,component:Do})]})]}),Po=n(Tn)`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: var(--dark-green);
  max-height: 4rem;
  z-index: 100;
`,Mo=n.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  height: 3rem;
  align-items: center;
`,ue=n.div`
  margin-bottom: ${t=>t.selected&&"1.5rem"};
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 130%;
  background: ${t=>t.selected&&"var(--dark-green)"};
  border-radius: 100%;
`,jo=n(Bn)`
  color: ${t=>t.selected&&"var(--yellow)"};
  cursor: pointer;
`,Oo=n(Dn)`
  color: ${t=>t.selected&&"var(--yellow)"};
  cursor: pointer;
`,zo=n(Ln)`
  color: ${t=>t.selected&&"var(--yellow)"};
  cursor: pointer;
`,No=n(Pn)`
  color: ${t=>t.selected&&"var(--yellow)"};
  cursor: pointer;
`,Fo=n(Mn)`
  color: ${t=>t.selected&&"var(--yellow)"};
  cursor: pointer;
`,Bt=a.exports.createContext(null),ve=()=>a.exports.useContext(Bt),Ro=({children:t})=>{const[s,r]=a.exports.useState([]),l={notifications:s,getNotificationsByCurrentUser:async()=>{let c=await fetch("/api/notifications");if(c.ok&&c.status==200){let u=await c.json();r(u)}},clearNotifications:()=>{r([])}};return e(Bt.Provider,{value:l,children:t})},Wo=()=>{const t=j(),s=Ze(),{home:r,auction:o,notis:i,message:l,profile:c,handleSelect:u,setHome:g,setAuction:m,setProfile:x,setNotis:f,setMessage:p}=V(),{toggleLoginModal:h}=oe(),{whoAmI:y,hasReadMsg:b,setHasReadMsg:v}=O(),{showDrawer:I,setShowDrawer:S}=H(),{clearFilter:$}=K(),{getChatsByCurrentUser:E}=U(),{getNotificationsByCurrentUser:W}=ve(),D={"/":g,"/auctions":m,"/my-page":x};a.exports.useEffect(()=>{if(!I){let B=s.pathname;for(let P of Object.keys(D))P!="/"&&B.includes(P)&&(B=P);const A=D[B];A&&u(A)}},[I]);const k=(B,A)=>{y==null&&A=="/my-page"?h():(A&&t.push(A),u(B),$(),S(!1))},w=(B,A)=>{y!=null?(u(B),S(!1),A=="message"?(E(),S(!0)):A=="notis"&&(W(),S(!0))):h()};return e(G,{sx:{flexGrow:1},children:e(Po,{position:"static",children:(()=>d(Mo,{children:[e(ue,{selected:r,children:e(jo,{selected:r,onClick:()=>k(g,"/")})}),e(ue,{selected:o,children:e(Oo,{selected:o,onClick:()=>k(m,"/auctions")})}),e(ue,{selected:i,children:e(zo,{selected:i,onClick:()=>w(f,"notis")})}),e(ue,{selected:l,children:e(ye,{color:"error",variant:"dot",invisible:l?!0:b,children:e(No,{selected:l,onClick:()=>w(p,"message")})})}),e(ue,{selected:c,children:e(Fo,{selected:c,onClick:()=>k(x,"/my-page")})})]}))()})})},Uo=n.div`
  
`,Ho=n.form`
  width: 70%;
  margin: 0 auto;
`,_o=n.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 9% 1fr;
`;n.input`
  outline: none;
  border: none;
  border-bottom: 1px solid grey;
  font-size: 17px;
  margin-top: 20px;
  &:focus{
    border-bottom: 1px solid green;
  }
`;const Go=n.button`
  border: none;
  outline: none;
  padding: 10px;
  font-size: 15px;
  border-radius: 3px;
  background-color: #619463;
  color: white;
  width: 200px;
  margin: 15px 0 0 30px;
`,qo=n(et)`
  width: 20px;
  color: grey;
  margin-top: 15px;
`,Vo=n(tt)`
  width: 20px;
  color: grey;
  margin-top: 15px;
`,Ko=n(jn)`
  width: 20px;
  color: grey;
  margin-top: 15px;
`,Jo=n.p`
  text-align: center;
  font-size: 20px;
  letter-spacing: 1.5px;
`,Qo=n.p`
  color: red;
  text-align: center;
  margin: 0;
  padding-top: 10px;
  font-size: 16px;
`,Yo=n.div``,Xo=n.p`
  text-align: center;
  font-size: 20px;
  letter-spacing: 1.5px;
`,Zo=n.form`
  width: 230px;
  margin: 0 auto;
`,ei=n.div`
  display: grid;
  grid-template-columns: 12% 1fr;
`,ti=n.button`
  border: none;
  outline: none;
  border-radius: 3px;
  background-color: #619463;
  color: white;
  padding: 10px;
  width: 200px;
  margin: 15px 0 0 28px;
  font-size: 15px;
`,Dt=n.p`
  font-size: 1rem;
  letter-spacing: 2px;
  padding-top: 40px;
  text-align: center;
`,ni=n(et)`
  width: 20px;
  color: grey;
  margin-top: 15px;
`,ri=n(tt)`
  width: 20px;
  color: grey;
  margin-top: 25px;
`,Lt=n.span`
  color: #006fd0;
`,Pt=n(nt)`
  margin-top: 35px;
  min-width: 100%;
  position: absolute;
  left: 0;
`,si=({toggleRegister:t})=>{const{register:s,userExists:r}=O(),{addSnackbar:o}=Z(),[i,l]=a.exports.useState(""),[c,u]=a.exports.useState(""),[g,m]=a.exports.useState(""),x=async f=>{f.preventDefault(),await s({username:i,email:c,password:g})?(t(),o("Regristrering lyckades!")):o({message:"Inloggning misslyckad!",status:"error"})};return d(Uo,{children:[e(Jo,{children:"SKAPA KONTO"}),d(Ho,{onSubmit:f=>x(f),children:[d(_o,{children:[e(qo,{}),e(_,{value:i,label:"Anv\xE4ndarnamn",updateState:f=>l(f),required:!0}),e(Ko,{}),e(_,{value:c,type:"email",label:"Email",updateState:f=>u(f),required:!0}),e(Vo,{}),e(_,{value:g,type:"password",label:"L\xF6senord",updateState:f=>m(f),required:!0})]}),r&&e(Qo,{children:"The user already exists."}),e(Go,{children:"Skapa konto"}),e(Pt,{}),d(Dt,{children:["Har du redan ett konto?"," ",e(Lt,{onClick:()=>t(),children:"Logga in h\xE4r"})]})]})]})},oi={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",minWidth:330,minHeight:180,bgcolor:"background.paper",boxShadow:4,outline:"none",p:4};function ii({children:t,isOpen:s,handleClose:r}){return e("div",{children:e(On,{open:s,onClose:o=>r(o),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e(G,{sx:oi,children:t})})})}const Mt=a.exports.createContext(null),Ce=()=>a.exports.useContext(Mt),ai=({children:t})=>{const[s,r]=a.exports.useState([]),o=async c=>{let u=await fetch(`/api/messages/${c}`);if(u.status===200){let g=await u.json();return r(g),g}else return r([]),null},l={messages:s,getAllChatMsg:o,createMsg:async(c,u)=>{(await fetch(`/api/messages/${u}`,{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}})).status===200&&setTimeout(()=>{o(u)},150)}};return e(Mt.Provider,{value:l,children:t})},li=({toggleRegister:t})=>{const{login:s,wrongPassword:r,setHasReadMsg:o}=O(),[i,l]=a.exports.useState(""),[c,u]=a.exports.useState(""),{toggleLoginModal:g}=oe(),{addSnackbar:m}=Z();Ce();const{getChatsByCurrentUser:x,getUnreadMsg:f}=U(),p=async h=>{h.preventDefault(),await s({username:i,password:c})?(await f()===1&&o(!1),g(),m("Inloggning lyckades!")):m({message:"Inloggning misslyckad!",status:"error"})};return d(Yo,{children:[e(Xo,{children:"LOGGA IN"}),d(Zo,{onSubmit:h=>p(h),children:[d(ei,{children:[e(ni,{}),e(_,{label:"Anv\xE4ndarnamn",updateState:h=>l(h),value:i,required:!0}),e(ri,{}),e(_,{label:"L\xF6senord",margintop:10,type:"password",updateState:h=>u(h),value:c,required:!0})]}),r&&e("p",{children:"Wrong username/password"}),e(ti,{children:"Logga in"}),e(Pt,{}),d(Dt,{children:["Har du inte ett konto?"," ",e(Lt,{onClick:()=>t(),children:"Skapa ett h\xE4r"})]})]})]})},ci=()=>{const{setWrongPassword:t}=O(),{showLoginModal:s,toggleLoginModal:r}=oe(),[o,i]=a.exports.useState(!1),l=()=>i(!o);return e(ii,{isOpen:s,handleClose:u=>{r(),i(!1),t(!1)},children:o?e(si,{toggleRegister:l}):e(li,{toggleRegister:l})})},di=n(zn)`
  position: fixed;
  bottom: 3.8rem;
  right: 1rem;
  background: var(--light-green);
  z-index: 98;
`,ui=()=>{const t=j(),s=Ze(),[r,o]=a.exports.useState(!0);return a.exports.useEffect(()=>{s.pathname==="/createAuction"||s.pathname==="/my-page"?o(!1):o(!0)},[s]),e(T,{children:r&&e(di,{color:"primary","aria-label":"add",onClick:()=>t.push("/createAuction"),children:e(Nn,{})})})},jt=n.div`
  color: black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`,Ot=n(Fn)`
  align-self: center;
  justify-self: center;
  font-size: 2.2rem;
`,gi=n.div`
  display: grid;
  grid-template-columns: 1rem 1fr;
  margin-left: 0.5rem;
`,pi=n(Rn)`
  align-self: center;
  font-size: 1.5rem;
`,ee=n.p`
  font-size: 1.1rem;
  align-self: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 7rem;
  justify-self: ${t=>t.isright?"end":"start"};
  margin: 0;
  margin: ${t=>t.isright?"0 0.5rem 0 0":"0 0 0 0.5rem "};
`,zt=n.span`
  color: red;
`,hi=()=>{const{showChatRoom:t,setShowChatRoom:s,toggleDrawer:r}=H(),{chats:o,chatTitle:i}=U();return d(jt,{children:[t?d(gi,{onClick:()=>s(!1),children:[e(pi,{}),e(ee,{isright:!1,children:"Tillbaka"})]}):e(ee,{isright:!1,children:"Meddelanden"}),e(Ot,{onClick:()=>{r(),s(!1)}}),t?e(ee,{isright:!0,children:i}):d(ee,{isright:!0,children:["Antal: ",e(zt,{children:o.length})]})]})},mi=()=>{const{notifications:t}=ve(),{toggleDrawer:s}=H();return d(jt,{children:[e(ee,{isright:!1,children:"Notifikationer"}),e(Ot,{onClick:s}),d(ee,{isright:!0,children:["Antal: ",e(zt,{children:t.length})]})]})},fi=()=>{const{message:t}=V();return e(T,{children:t?e(hi,{}):e(mi,{})})},xi=n(xe)`
  position: fixed;
  bottom: 0;
  width: 100vw;
  background-color: pink;
  z-index: 99;
`,yi=n.div`
  height: 85vh;
  background-color: var(--background-color);
  display: grid;
  grid-template-rows: 30px 10px 1fr 50px;
`,Si=n.div`
  overflow: scroll;
  overflow-x: hidden;
`,bi=n.div`
  width: 92%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  background: white;
  box-shadow: 0 3px 10px var(--shadow-color);
  margin-bottom: 1rem;
  padding: 0.5rem;
  &:first-child {
    margin-top: 0.3rem;
  }
`,wi=n.div`
  display: grid;
`,vi=n.p`
  font-size: 1.5rem;
  margin: 0;
`,Ci=n.p`
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 20rem;
  margin: 0.5rem 0;
`,ki=n.span`
  font-weight: bolder;
`,$i=n(re)`
  background: var(--light-green);
`,Ai=n(ye)`
  color: var(--status-red);
  align-self: center;
  margin-right: 0.5rem;
`,Ii=n(rt)`
  height: auto;
`,Ei=n.div`
  background: rgba(169, 0, 11, 0.47);
  height: 56px;
  margin-top: 5px;
`,Ti=n(st)`
  color: white;
  margin: 0;
  margin-top: 0.5rem;
  margin-left: 1rem;
  width: 20px;
`,Bi=n.p`
  font-size: 0.85rem;
  color: white;
  margin: 0;
  margin-left: 0.5rem;
`;const Di=({chat:t})=>{const{setShowChatRoom:s}=H(),{setChatTitle:r,setChatId:o}=U(),{setHasReadMsg:i}=O();a.exports.useState(!0),a.exports.useEffect(()=>{i(!0)},[]);const l=()=>{o(t.id),s(!0),r(t.auction.title)},c=()=>e(it,{children:e(at,{destructive:!0,onClick:()=>console.info("swipe action triggered"),children:d(Ei,{children:[e(Ti,{}),e(Bi,{children:"Ta bort"})]})})}),u=d(wi,{children:[e(vi,{children:t.auction.title}),t.messages&&d(Ci,{children:[d(ki,{children:[t.messages[t.messages.length-1].writer.username,":"," "]}),t.messages[t.messages.length-1].message]})]}),g=e(Ai,{children:e($i,{children:t.receiver.username.charAt(0).toLocaleUpperCase()})});return e(Ii,{children:e(ot,{trailingActions:c(),children:d(bi,{onClick:l,children:[u,g]})})})},Li=n.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  background: white;
  margin-bottom: 0.1rem;
  padding: 1.5rem 1rem;
  box-shadow: 0 5px 20px var(--shadow-color);
  &:first-child {
    margin-top: 0.3rem;
  }
`,Pi=n.div`
  display: grid;
  grid-template-columns: 9fr 2fr;
`,Nt=n(Ee)`
  font-family: var(--font-small-text);
  font-size: small;
  padding-right: 3px;
`,Mi=n(C)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ji=n(Ee)`
  font-family: var(--font-small-text);
  font-size: small;
  font-weight: bold;
  color: var(--blue);
  text-decoration: underline;
`;n(ye)`
  color: var(--status-red);
  align-self: center;
  margin-right: 0.5rem;
`;const Oi=n(rt)`
  height: auto;
`,zi=n.div`
  background: rgba(169, 0, 11, 0.47);
  height: 78px;
  margin-top: 5px;
`,Ni=n(st)`
  color: white;
  margin: 0;
  margin-top: 1rem;
  margin-left: 1rem;
`,Fi=n.p`
  font-size: 1rem;
  color: white;
  margin: 0;
  margin-left: 0.5rem;
`,Ri=n(C)`
`,Wi=n.span`
  color: ${t=>t.color};
  font-weight: bold;
`,Ft={"ett h\xF6gre bud":[2,1],grattis:[2,1],"ett nytt bud":[1,2],avslutades:[1,2]},Rt={grattis:"var(--green)",avslutades:"var(--red)"},Ui=({message:t,auctionTitle:s,time:r,now:o})=>{const i=()=>{if(r){const x=new Date(r),f=o.getTime()-x.getTime(),p=Math.floor(f/yt);if(p>30)return`${Wn(x).format("DD/MM/YYYY")}`;if(p>0)return`${p} d sen`;const h=Math.floor(f/ae);if(h>0)return`${h} h sen`;const y=Math.floor(f/ie);return y>0?`${y} m sen`:`${Math.floor(f/be)} s sen`}return""},l=()=>{let x=[1,2];for(let f of Object.keys(Ft))if(t.toLocaleLowerCase().includes(f))return Ft[f];return x},c=()=>{for(let x of Object.keys(Rt))if(t.toLocaleLowerCase().includes(x))return t.trim().split(" ").shift();return""};let u=l();const g=c(),m=x=>" "+x.substr(x.trim().indexOf(" ")+1);return d(Pi,{children:[d(Ri,{container:!0,children:[e(Mi,{item:!0,order:u[0],xs:3,md:2,lg:1,children:s&&e(ji,{noWrap:!0,display:"inline",children:s})}),e(C,{item:!0,order:u[1],children:e(Nt,{noWrap:!1,display:"inline",children:g.length>0?d(T,{children:[e(Wi,{color:Rt[g.toLocaleLowerCase()],children:g}),m(t)]}):e(T,{children:t+" "})})})]}),e(Nt,{sx:{fontStyle:"italic"},noWrap:!0,display:"inline",align:"right",children:i()})]})},Hi=({notification:t,now:s})=>{const r=j(),{toggleDrawer:o}=H(),i=()=>{t.auction&&t.auction.id&&(r.push("/auctions/"+t.auction.id),o())};return e(Oi,{children:e(ot,{trailingActions:(()=>e(it,{children:e(at,{destructive:!0,onClick:()=>console.info("swipe action triggered"),children:d(zi,{children:[e(Ni,{}),e(Fi,{children:"Ta bort"})]})})}))(),children:e(Li,{onClick:i,children:e(Ui,{auctionTitle:t.auction.title,message:t.message,time:t.createdDate,now:s})})})})},_i=()=>{const{message:t,notis:s}=V(),{chats:r}=U(),{notifications:o}=ve(),i=new Date;return e(Si,{children:t&&r?r.map(l=>e(Di,{chat:l},`chat-item-${l.id}`)):s&&o&&o.length>0&&o.map(l=>e(Hi,{notification:l,now:i},`notification-item-${l.id}`))})},Gi=n.div`
  background: #f8f8f8;
  max-height: 70vh;
  overflow: scroll;
`,qi=n.div`
  display: grid;
  height: fit-content;
  &:last-child {
    
  }
`,Wt=n.div`
  background: ${t=>t.sender?"var(--dark-green)":"var(--light-green)"};
  width: fit-content;
  max-width: 70%;
  padding: 1rem;
  border-radius: 1.5rem;
  justify-self: ${t=>t.sender?"end":"start"};
  margin: ${t=>t.sender?"0 1rem 0 0":"0 0 0 1rem"};
  align-self: center;
`,Ut=n.p`
  color: white;
  margin: 0;
  padding: 0;
`,Ht=n.p`
  font-size: 0.7rem;
  color: black;
  font-style: italic;
  width: fit-content;
  height: 2rem;
  justify-self: ${t=>t.sender?"end":"start"};
  margin: ${t=>t.sender?"0 2rem 0 0":"0 0 0 5rem"};
`,Vi=n.div`
  display: grid;
  grid-template-columns: auto 1fr;
`,Ki=n.div`
  display: grid;
`,Ji=n(re)`
  background: var(--dark-green);
  align-self: center;
  margin-left: 0.7rem;
`;n(Un)`
  color: var(--light-green);
  font-size: 0.6rem;
  margin-right: 0.2rem;
`;const _t=document.getElementsByClassName("msgWrapper"),Gt=t=>{t[0].scrollTop=t[0].scrollHeight},Qi=()=>{const{messages:t,getAllChatMsg:s}=Ce(),{chatId:r}=U(),{whoAmI:o,setHasReadMsg:i}=O();a.exports.useEffect(()=>{s(r),Gt(_t),i(!0)},[]),a.exports.useEffect(()=>{Gt(_t),i(!0)},[t]);const l=m=>{const x=m.createdDate.substring(0,10),f=m.createdDate.substring(11,16);return`${x} ${f}`},c=(m,x)=>d(qi,{children:[m.writer.id!==o.id?u(m):e(Wt,{sender:m.writer.id===o.id,children:e(Ut,{children:m.message})}),x===t.length-1&&m.writer.id===o.id?g(m):e(Ht,{sender:m.writer.id===o.id,children:l(m)})]},m.id),u=m=>d(Vi,{children:[m.writer.id!==o.id&&e(Ji,{children:m.writer.username.charAt(0)}),e(Wt,{sender:m.writer.id===o.id,children:e(Ut,{children:m.message})})]}),g=m=>e(Ki,{children:e(Ht,{sender:m.writer.id===o.id,read:!0,children:l(m)})});return e(Gi,{className:"msgWrapper",children:t&&t.map((m,x)=>c(m,x))})},Yi=n.form`
  background: #f8f8f8;
  border-top: 1px solid lightgray;
  display: grid;
  grid-template-columns: 1fr 2rem;
  grid-gap: 5px;
`,Xi=n.input`
  background: white;
  border: none;
  height: 1.5rem;
  border-radius: 5px;
  padding: 0.3rem;
  color: black;
  outline: none;
  align-self: start;
  margin-left: 0.7rem;
  margin-top: 0.5rem;
  box-shadow: 0 3px 10px var(--shadow-color);
  @media (min-width: 768px) {
    margin-top: 2rem;
  }
`,Zi=n(Hn)`
  align-self: start;
  margin-top: 0.8rem;
  @media (min-width: 768px) {
    margin-top: 2.2rem;
  }
`,ea=n.button`
  border: none;
`,ta=()=>{const[t,s]=a.exports.useState(""),{createMsg:r}=Ce(),{chatId:o}=U(),i=async l=>{l.preventDefault(),await r({message:t},o),s("")};return e("div",{children:d(Yi,{onSubmit:l=>i(l),children:[e(Xi,{value:t,onChange:l=>s(l.target.value),placeholder:"Skriv ditt meddelande h\xE4r"}),e(ea,{children:e(Zi,{})})]})})},na=n.div`
display: grid;
grid-template-rows: 85% 15%;
`,ra=()=>d(na,{children:[e(Qi,{}),e(ta,{})]}),sa=()=>{const{showDrawer:t,showChatRoom:s}=H();return e(xi,{in:t,children:d(yi,{children:[e(fi,{}),e(nt,{style:{marginBottom:"1rem"}}),s?e(ra,{}):e(_i,{}),e("div",{})]})})};function oa(){const{whoAmI:t}=O();return d("div",{className:"App",children:[e(Lo,{children:d(T,{children:[e(Wo,{}),t&&e(ui,{}),e(sa,{})]})}),e(ci,{})]})}const ia="http://localhost:9092",z=_n(ia,{upgrade:!1,transports:["websocket"]}),aa=a.exports.createContext(null),la=({children:t})=>{const{getHighestBid:s}=Me(),{getAuctionsByOptions:r}=K(),{whoAmI:o,setHasReadMsg:i}=O(),{addSnackbar:l}=Z(),{getNotificationsByCurrentUser:c}=ve(),{getAllChatMsg:u}=Ce(),{chatId:g}=U();a.exports.useEffect(()=>{z.on("connect",async()=>{console.log("conneted to ws")})},[]),a.exports.useEffect(()=>{o&&z.emit("updateClientId",o.id)},[o]),a.exports.useEffect(()=>(z.on("notification",m),()=>{z.off("notification")}),[z,o]);const m=h=>{o&&h.user.id===o.id&&(l(h),c())};a.exports.useEffect(()=>(z.on("bid",x),()=>{z.off("bid")}),[z]);const x=async h=>{const y=window.location.href.includes(`auctions/${h.auction.id}`),b=window.location.href.includes("auctions");y?await s(h.auction.id):b&&await r()};a.exports.useEffect(()=>(z.on("message",h=>f(h)),()=>{z.off("message")}),[o,g,z]);const f=async h=>{if(h&&o){if(h.writer.id===o.id)return;g&&await u(g),h.isRead===!1?i(!1):i(!0)}},p={socket:z};return e(aa.Provider,{value:p,children:t})},ca=({children:t})=>e(T,{children:e(nr,{children:e(hs,{children:e(Qn,{children:e(Kn,{children:e(Tr,{children:e(Mr,{children:e(Xn,{children:e(Jn,{children:e(Ro,{children:e(Yn,{children:e(ai,{children:e(Xr,{children:e(la,{children:t})})})})})})})})})})})})})});Gn.render(e(ca,{children:e(qn.StrictMode,{children:e(oa,{})})}),document.getElementById("root"));
