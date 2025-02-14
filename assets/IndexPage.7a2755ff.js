import{Q as j}from"./QAvatar.adf3e01f.js";import{Q as F,a as q,b as L}from"./QPage.0a71686c.js";import{Q as R}from"./QSeparator.285bf0b5.js";import{_ as O,Q as M}from"./plugin-vue_export-helper.37ae1de7.js";import{Q as K,b as z}from"./QBtn.cdb4cd93.js";import{c as H,f as V,j as T,a as h,h as o,Y as U,C as G,g as W,G as Y,r as _,J as a,K as m,L as n,M as r,N as l,Z as g,_ as v,$ as y,O as f,a0 as w,a1 as P}from"./index.b051e803.js";import{b as Z,h as Q}from"./use-router-link.7689feef.js";import{Q as B,a as J,b as N}from"./QList.b576b710.js";import{a as X,u as ee}from"./use-dark.94ba7208.js";var A=H({name:"QTimelineEntry",props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:t=>["left","right"].includes(t)},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},setup(t,{slots:u}){const p=V(U,T);if(p===T)return console.error("QTimelineEntry needs to be child of QTimeline"),T;const s=h(()=>`q-timeline__entry q-timeline__entry--${t.side}`+(t.icon!==void 0||t.avatar!==void 0?" q-timeline__entry--icon":"")),S=h(()=>`q-timeline__dot text-${t.color||p.color}`),D=h(()=>p.layout==="comfortable"&&p.side==="left");return()=>{const x=Z(u.default,[]);if(t.body!==void 0&&x.unshift(t.body),t.heading===!0){const k=[o("div"),o("div"),o(t.tag,{class:"q-timeline__heading-title"},x)];return o("div",{class:"q-timeline__heading"},D.value===!0?k.reverse():k)}let b;t.icon!==void 0?b=[o(K,{class:"row items-center justify-center",name:t.icon})]:t.avatar!==void 0&&(b=[o("img",{class:"q-timeline__dot-img",src:t.avatar})]);const C=[o("div",{class:"q-timeline__subtitle"},[o("span",{},Q(u.subtitle,[t.subtitle]))]),o("div",{class:S.value},b),o("div",{class:"q-timeline__content"},[o("h6",{class:"q-timeline__title"},Q(u.title,[t.title]))].concat(x))];return o("li",{class:s.value},D.value===!0?C.reverse():C)}}}),$=H({name:"QTimeline",props:{...X,color:{type:String,default:"primary"},side:{type:String,default:"right",validator:t=>["left","right"].includes(t)},layout:{type:String,default:"dense",validator:t=>["dense","comfortable","loose"].includes(t)}},setup(t,{slots:u}){const p=W(),s=ee(t,p.proxy.$q);G(U,t);const S=h(()=>`q-timeline q-timeline--${t.layout} q-timeline--${t.layout}--${t.side}`+(s.value===!0?" q-timeline--dark":""));return()=>o("ul",{class:S.value},Q(u.default))}});const te={key:0,class:"text-weight-light text-center"},ie={key:0,class:"text-weight-light text-center"},ne=Y({__name:"IndexPage",setup(t){const u=_(!1),p=h(()=>u.value?b():b().slice(0,10)),s=_([]),S=h(()=>s.value.length===0?k.value:k.value.filter(d=>d.skills.some(e=>s.value.includes(e)))),D=h(()=>s.value.length===0?I.value:I.value.filter(d=>d.skills.some(e=>s.value.includes(e))));function x(d){s.value.includes(d)?s.value=s.value.filter(e=>e!==d):s.value=[...s.value,d]}function b(){const d=new Set;return k.value.forEach(e=>{e.skills.forEach(i=>d.add(i))}),I.value.forEach(e=>{e.skills.forEach(i=>d.add(i))}),Array.from(d).sort()}function C(){u.value=!u.value}const k=_([{id:4,title:"Software Engineer",company:"Build Test Solutions",description:["Development of azure cloud based C# backend, ensuring high performance and scalability","Design and development of Vue.js based frontend for Raspberry Pi based test equipment, providing a user-friendly interface for data visualization and control","Integration of Azure AI search to enhance data retrieval capabilities, improving the efficiency of search operations","Development of C++ based test equipment firmware, ensuring reliable and accurate data collection and processing","Collaboration with cross-functional teams to define project requirements and deliver solutions that meet business objectives","Continuous monitoring and optimization of system performance to meet evolving project needs"],skills:["C#",".NET","Azure","Vue.js","Javascript","Cosmos DB","Continuous Integration/Delivery","Software Architecture","Test-Driven Development (TDD)","Azure AI Search","C++","Ruby","Embedded Systems","Linux","Raspberry Pi"],period:"Sep 2023 - Present"},{id:5,title:"Senior Software Engineer",company:"Royal Society for the Protection of Birds (RSPB)",description:["Development of azure cloud angular website, ensuring high performance and scalability","Design and development of microservice C# backend, implementing RESTful APIs and integrations","Development and integration with Magnolia CMS, customizing templates and components to meet business requirements","Mentoring and support for junior developers, conducting code reviews, and providing guidance on best practices and design patterns"],skills:["C#",".NET","Azure","Angular","Javascript","Scrum","Test-Driven Development (TDD)","Software Architecture","Docker","Magnolia CMS"],period:"Sep 2021 - July 2023"},{id:6,title:"Software Engineer",company:"Immense Simulations",description:["Cloud based traffic simulation stack. Primarily focused on API integration and dataset processing","Implementation and maintenance of suite of automated tests"],skills:["Java","AWS","MongoDB","Scrum","REST API Design","Automated Testing","Test-Driven Development (TDD)"],period:"Feb 2021 - August 2021"},{id:7,title:"Software Developer",company:"Rightmove",description:["Design and development of micro-service and React / Angular based applications within the internal systems team to meet a variety of business requirements.","Integration of Sugar CRM with existing estate.","Design and implementation of real time data synchronisation service to keep half a million records up to date using Kafka queues.","Implementation of API gateway platform (Kong)"],skills:["Java","React","Angular","Javascript","Python","PHP","Continuous Integration/Delivery","Scrum","Oracle","Customer relationship management (CRM)","REST API Design","Microservices","Kafka","Test-Driven Development (TDD)"],period:"May 2017 - Feb 2021"},{id:8,title:"Senior Software Engineer",company:"Novacroft",description:["Development of Oyster card application processing software including customer facing website and internal administration tools as part of a Scrum team.","Maintenance of legacy software","Deployment of software to on premise production servers and liaison with clients to ensure successful delivery."],skills:["Java","Javascript","Oracle","Interface Design","Software Architecture","Scrum","Software Delivery"],period:"Dec 2015 - May 2017"},{id:9,title:"Software Engineer",company:"Lockheed Martin UK",description:["Developed software interfaces and integrated third-party sensor systems.","Collaborated with suppliers and multi-disciplinary team members to ensure timely and cost-effective project success from requirements gathering to completion.","Designed and implemented distributed task resilience management software as part of an agile team.","Developed and integrated embedded, real-time communication stack software using MISRA C++."],skills:["Embedded Systems","C++","UML Design","Real-Time Systems","Agile","Software Testing"],period:"November 2013 - December 2015"}]),I=_([{id:1,institution:"University of Hertfordshire, Hatfield",period:"Sep 2010 - May 2013",description:["Achieved outstanding 1st class honours. Awarded University Prize for outstanding achievement.","Further Object Oriented Design (OOP Design in Java, UML)","Real Time Systems (Small Embedded Systems, Concurrent Programming)","Programming Language Design and Implementation (Lexical Analyser/Parser Implementation, Type Systems, Language Design)","Computer Architecture (MIPS Instruction Set, Multiprocessor Architectures)"],skills:["Java","UML","Embedded Systems","Concurrent Programming","Lexical Analysis","Parser Implementation","Type Systems","Language Design","MIPS","Multiprocessor Architectures"]},{id:2,institution:"Denbigh School, Milton Keynes",period:"2004 - 2010",description:["A-Level: Computer Studies, Music Technology, Music.","GCSE: Mathematics, English Literature, English Language, Science (Double Award)"],skills:["Computer Studies","Music Technology","Music","Mathematics","English Literature","English Language","Science"]},{id:3,institution:"Langley Therapy and Training - Certificate in Counselling Skills",period:"Sep 2023 - Present",description:["Active listening skills","Feedback skills and techniques","Understanding and managing emotions","Building rapport and trust","Empathy, compassion, and ethical considerations in therapy"],skills:["Active Listening","Feedback","Emotional Intelligence","Communication","Conflict Resolution","Rapport Building","Empathy","Ethics"]}]);return(d,e)=>(a(),m(F,{class:"q-pa-md"},{default:n(()=>[r(L,{class:"q-pa-lg bg-grey-2: dark"},{default:n(()=>[r(q,{class:"text-center"},{default:n(()=>[r(j,{size:"160px"},{default:n(()=>e[1]||(e[1]=[l("img",{src:"me.jpg",style:{width:"160px",height:"160px"}},null,-1)])),_:1}),e[2]||(e[2]=l("div",{class:"text-h3 text-weight-thin"},"Martin Hawes",-1)),e[3]||(e[3]=l("a",{href:"mailto:hawesmartin@googlemail.com"},"hawesmartin@googlemail.com",-1))]),_:1}),r(q,{class:"q-pa-md text-weight-light text-justify"},{default:n(()=>e[4]||(e[4]=[l("p",null," A highly skilled and versatile software developer with over a decade of experience in the industry. ",-1),l("p",null," I excel in delivering robust and scalable solutions, with a strong ability to communicate effectively and adapt to various project requirements. ",-1),l("p",null," My extensive background includes requirements analysis, software and interface design, implementation, integration, and testing for complex systems. ",-1),l("p",null," I have successfully collaborated in multi-disciplinary teams, utilizing agile (Scrum) and waterfall methodologies to meet stringent design, implementation, and delivery standards across diverse technologies. ",-1),l("p",null," I hold a BSc in Computer Science from the University of Hertfordshire, where I graduated with first-class honors. ",-1),l("p",null," I am currently seeking contracting opportunities where I can leverage my expertise to deliver high-quality software solutions. ",-1)])),_:1})]),_:1}),e[12]||(e[12]=l("div",{class:"q-pa-md"},null,-1)),r(L,{class:"q-pa-lg bg-grey-2: dark",flat:""},{default:n(()=>[r(q,{class:"text-center"},{default:n(()=>[e[6]||(e[6]=l("div",{class:"text-h5 text-weight-bold"},"Skills",-1)),e[7]||(e[7]=l("div",{class:"text-weight-light"},"I have experience with the following skills and technologies: (select to filter my experience)",-1)),r(R,{spaced:""}),(a(!0),g(y,null,v(p.value,i=>(a(),m(M,{clickable:"",onClick:c=>x(i),key:i,size:"md",color:s.value.includes(i)?"accent":"grey-3","text-color":s.value.includes(i)?"white":"primary"},{default:n(()=>[f(w(i),1)]),_:2},1032,["onClick","color","text-color"]))),128)),r(z,{flat:"",rounded:"",size:"sm",color:"positive",onClick:C},{default:n(()=>[f(w(u.value?"Show Less":"Show All..."),1)]),_:1}),s.value.length>0?(a(),m(z,{key:0,flat:"",rounded:"",size:"sm",color:"negative",icon:"delete",onClick:e[0]||(e[0]=i=>s.value=[])},{default:n(()=>e[5]||(e[5]=[f(" Clear ")])),_:1})):P("",!0)]),_:1})]),_:1}),r($,{layout:"dense"},{default:n(()=>[r(A,{heading:""},{default:n(()=>e[8]||(e[8]=[f("Employment")])),_:1}),S.value.length===0?(a(),g("div",te,"No employment history found for selected skills")):P("",!0),(a(!0),g(y,null,v(S.value,i=>(a(),m(A,{icon:"work",key:i.id,color:"accent",title:i.company,subtitle:i.title+" - "+i.period,side:i.id%2===0?"right":"left"},{default:n(()=>[r(B,{dense:""},{default:n(()=>[(a(!0),g(y,null,v(i.description,(c,E)=>(a(),m(J,{key:E},{default:n(()=>[r(N,{class:"text-weight-light"},{default:n(()=>[f(w(c),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024),e[9]||(e[9]=l("div",{class:"text-bold"},"Skills:",-1)),(a(!0),g(y,null,v(i.skills,c=>(a(),m(M,{key:c,size:"md",color:"grey-3","text-color":"primary"},{default:n(()=>[f(w(c),1)]),_:2},1024))),128))]),_:2},1032,["title","subtitle","side"]))),128))]),_:1}),r(R,{spaced:""}),r($,{layout:"dense"},{default:n(()=>[r(A,{heading:""},{default:n(()=>e[10]||(e[10]=[f("Education")])),_:1}),D.value.length===0?(a(),g("div",ie,"No education history found for selected skills")):P("",!0),(a(!0),g(y,null,v(D.value,i=>(a(),m(A,{icon:"school",color:"secondary",key:i.id,title:i.institution,subtitle:i.period,side:"right"},{default:n(()=>[r(B,{dense:""},{default:n(()=>[(a(!0),g(y,null,v(i.description,(c,E)=>(a(),m(J,{key:E},{default:n(()=>[r(N,{class:"text-weight-light"},{default:n(()=>[f(w(c),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024),e[11]||(e[11]=l("div",{class:"text-bold"},"Skills:",-1)),(a(!0),g(y,null,v(i.skills,c=>(a(),m(M,{key:c,size:"md",color:"grey-3","text-color":"secondary"},{default:n(()=>[f(w(c),1)]),_:2},1024))),128))]),_:2},1032,["title","subtitle"]))),128))]),_:1})]),_:1}))}});var ge=O(ne,[["__scopeId","data-v-c5a21f42"]]);export{ge as default};
