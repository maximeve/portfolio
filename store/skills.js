export const state = () => ({
    skills: [
        {
            title: "Spotify Clone",
            id: 1,
            image: 'https://cdn2.creativeskills.be/2b61a7c2-4028-40eb-a0c7-25604b9dddbd/-/resize/1140x/',
            text: "Spotify clone created with Tailwind CSS. Originally created to get a hang of Tailwind CSS but expanded with a search option (Spotify API) handled with Axios",
            field: "Web",
            link:"https://github.com/maximeve/spotify/tree/main/src",
            tags: [
                "VueJS",
                "TailwindCSS",
                "Axios",
                "HTML5",
                "CSS3"
            ]
        },
        {
            title: "Portfolio App",
            id: 2,
            image: 'https://cdn2.creativeskills.be/662c53c0-3bbd-4b95-8bed-440e01d54a31/-/resize/1140x/',
            text: "Web app created with NuxtJS to showcase my experiences as a developer and designer. Designed in Adobe XD and built with HTML, CSS, NuxtJS",
            field: "Web",
            tags: [
                "NuxtJS",
                "HTML5",
                "TailwindCSS",
                "CSS3",
                "Photoshop",
                "Adobe XD"
            ]
        },
        {
            title: "Flyers Keymusic",
            id: 4,
            image: 'https://cdn.creativeskills.be/users/images/project_BUZX4RAM_icon_360x232.jpg',
            text: "Flyer created in Illustrator and Photoshop",
            field: "Design",
            link: "https://www.creativeskills.be/user/maximeve/keymusic/",
            tags: [
                "Illustrator",
                "Photoshop",
            ]
        },
        {
            title: "Wireframe Website",
            id: 5,
            image: 'https://cdn2.creativeskills.be/546fc988-de2a-4197-82fd-c1de9f2dfb3f/-/resize/1140x/',
            text: "Web app created with NuxtJS to showcase my experiences as a developer and designer. Built with plain HTML and CSS.",
            field: "Design",
            link: 'https://www.creativeskills.be/user/maximeve/wireframe/',
            tags: [
                "Photoshop",
            ]
        },
        {
            title: "Illustrations",
            id: 6,
            image: 'https://cdn.creativeskills.be/users/images/maximeve_8KZWUSRY_slot_1140x713.jpg',
            text: "Illustrations created in Illustrator and Photoshop",
            field: "Design",
            link: "https://www.creativeskills.be/user/maximeve/isometric/",
            tags: [
                "Illustrator",
                "Photoshop",
            ]
        },
        {
            title: "Newsletter Juttu",
            id: 7,
            image: 'https://cdn2.creativeskills.be/0dba9e34-3456-498f-aaf5-671c5a72e57c/-/resize/1140x/',
            text: "Mail designed in Photoshop and composed in HTML5 and CSS. Sent to clients using Adobe Campaign",
            field: "Mail",
            link: 'https://github.com/maximeve/juttumail/tree/main/juttu',
            tags: [
                "HTML5",
                "CSS3",
                "Adobe Campaign",
                "Photoshop"
            ]
        },
        {
            title: "Newsletter AS Adventure",
            id: 8,
            image: 'https://cdn2.creativeskills.be/179f3113-2d26-4ef9-8a0a-8061f256ac83/-/resize/1140x/',
            text: "Mail designed in Photoshop and composed in HTML5 and CSS. Sent to clients using Adobe Campaign",
            field: "Mail",
            link: 'https://github.com/maximeve/ASAdventure/tree/main/asa',
            tags: [
                "HTML5",
                "CSS3",
                "Adobe Campaign",
                "Photoshop"
            ]
        },
        {
            title: "Newsletter The North Face",
            id: 9,
            image: 'https://cdn2.creativeskills.be/75ecbb27-12ba-4b7e-bf26-c982cb2f5fa5/-/resize/1140x/',
            text: "Mail designed in Photoshop and composed in HTML5 and CSS. Sent to clients using Adobe Campaign",
            field: "Mail",
            link : 'https://github.com/maximeve/TNF/tree/main/tnf',
            tags: [
                "HTML5",
                "CSS3",
                "Adobe Campaign",
                "Photoshop"
            ]
        },
        {
            title: "Fitness App",
            id: 3,
            image: 'https://cdn2.creativeskills.be/4643f564-19aa-42e8-a828-c7b6be9ff1f6/-/resize/1140x/',
            text: "Fitness App designed to calculate your daily caloric intake along with meal plans to meet your fitness goals.",
            field: "Web",
            link : 'https://awesome-joliot-c7c74c.netlify.app/',
            tags: [
                "HTML5",
                "CSS3",
                "NuxtJS",
                "TailwindCSS",
                "Photoshop"
            ]
        }
    ],
    experiences :[{
        id: '1',
        title :'Marketing Employee (AS Adventure, Hoboken)',
        period :'jan 2018 - present',
        desc: 'Mails designed in Photoshop and converted to HTML & CSS. Designed homepages and in-store commercials.(Adobe Campaign, HTML, CSS, Photoshop, After Effects)'
    },
    {
        id: '2',
        title :'Intern (Umbrace, Berchem)',
        period :'September 2017 - November 2017',
        desc: 'Intern as a Front-End Developer at Umbrace (HTML,CSS,JS & ANGULAR2).'
    },
    {
        id: '3',
        title :'Course Front-end Developer (Beta, Hoboken)',
        period :'April 2017 - September 2017',
        desc: 'Course Front-end Developer at Beta vzw. (JavaScript HTML CSS MongoDB SQL NodeJS Drupal)'
    },
    {
        id: '4',
        title :'Graphic Designer (Themis, Antwerpen)',
        company: 'Themis, Antwerpen',
        period :'December 2015 - Februari 2016',
        desc: 'Designing infographics and characters to be used in international campaigns. (Illustrator, Photoshop)'
    },
    {
        id: '5',
        title :'Brand Identity Watcher (Thomson Reuters, Antwerpen)',
        company: 'March 2014 - april 2017',
        period :'December 2015 - Februari 2016',
        desc: 'Watching national/international copyright infringements. Report and support claims.'
    },
]
})

export const mutations = {

}

export const actions = {

}

export const getters = {
getSkills(state){
    return state.skills
},
getExperience(state){
    return state.experiences
}
}