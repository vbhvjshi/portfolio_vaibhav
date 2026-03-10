/* ==================================
PORTFOLIO DATA
Edit everything from here
================================== */

const DATA = {

name:"Vaibhav Joshi",

role:"Sr iOS Engineer | Flutter | 7.5+ Years",

summary:"Senior iOS developer and tech lead delivering enterprise mobile solutions, leading teams, and building scalable iOS applications using modern architectures.",

about:"I am a Senior iOS Developer with 7.5+ years experience building scalable mobile apps using Swift, Objective-C and Flutter. I have led teams, delivered enterprise apps, and worked closely with stakeholders to transform business ideas into high-quality mobile products.",

links:[
{
title:"LinkedIn",
url:"https://www.linkedin.com/in/vaibhav-joshi-83000813b/"
},
{
title:"GitHub",
url:"https://github.com"
}
],

experience:[

{
company:"Cubastion Consulting",
role:"Tech Lead",
period:"Dec 2022 — Present",
bullets:[
"Led mobile and CRM teams",
"Mentored 10+ developers",
"Managed production releases"
]
},

{
company:"Sysmind Tech",
role:"iOS Developer",
period:"May 2022 — Dec 2022",
bullets:[
"Implemented MVVM architecture",
"Improved UI performance"
]
}

],

projects:[

{
name:"Golf Been",
tech:"Swift, iOS",
link:"https://apps.apple.com/us/app/golf-been/id1573239854"
},

{
name:"VCare Blue Voltas",
tech:"Swift, Flutter",
link:"https://apps.apple.com/in/app/vcare-blue-voltas/id1473801658"
}

],

skills:[
"Swift",
"Objective-C",
"Flutter",
"MVVM",
"Firebase",
"REST APIs",
"CoreData",
"Realm",
"Stripe",
"Git"
],

blogs:[

{
title:"Creating a Simple Loader in Swift",
link:"https://medium.com/@vbhvjshi/creating-a-simple-loader-in-swift-for-your-ios-app-d49855c18894"
},

{
title:"Mastering Async Await in Swift",
link:"https://medium.com/@vbhvjshi/mastering-async-await-in-swift-a-game-changer-for-ios-development-031bbebd41f4"
}

]

}



/* ==================================
RENDERING
================================== */


document.getElementById("navName").innerText=DATA.name
document.getElementById("heroName").innerText=DATA.name
document.getElementById("heroRole").innerText=DATA.role
document.getElementById("heroSummary").innerText=DATA.summary
document.getElementById("aboutText").innerText=DATA.about



/* EXPERIENCE */

DATA.experience.forEach(job=>{

document.getElementById("experienceList").innerHTML+=`

<div class="job">

<h3>${job.company}</h3>

<p>${job.role} | ${job.period}</p>

<ul>

${job.bullets.map(b=>`<li>${b}</li>`).join("")}

</ul>

</div>

`

})



/* PROJECTS */

DATA.projects.forEach(p=>{

document.getElementById("projectsList").innerHTML+=`

<div class="project-card">

<h3>${p.name}</h3>

<p>${p.tech}</p>

<a href="${p.link}" target="_blank">View App</a>

</div>

`

})



/* SKILLS */

DATA.skills.forEach(s=>{

document.getElementById("skillsList").innerHTML+=`

<div class="skill">${s}</div>

`

})



/* BLOGS */

DATA.blogs.forEach(b=>{

document.getElementById("blogList").innerHTML+=`

<li>

<a href="${b.link}" target="_blank">${b.title}</a>

</li>

`

})



/* CONTACT */

DATA.links.forEach(l=>{

document.getElementById("contactList").innerHTML+=`

<a href="${l.url}" target="_blank">${l.title}</a><br>

`

})