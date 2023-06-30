import Work1 from "../../assets/work1.png";
import Work2 from "../../assets/work2.png";

export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: "New Tech Ecommerce Web Design",
        description: "A simple web design using HTML, CSS and JAVASCRIPT. This project only have front-end & back-end is not programmed yet.",
        class: "work__button",
        github: "https://github.com/MethmikaPerera/newtech-ecommerce-web-design",
        demo: "https://methmikaperera.github.io/newtech-ecommerce-web-design/",
        category: "web",
    },
    {
        id: 2,
        image: Work2,
        title: "Obado Agana Song Lyrics Video",
        description: "The Official Lyrics Video for the Obado Agana Song of Pasindu Supasan.",
        class: "d-none work__button",
        github: "",
        demo: "https://www.youtube.com/watch?v=Zvz2PZQjcMk",
        category: "edits",
    },
];

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'web',
    },
    {
        name: 'edits',
    },
];