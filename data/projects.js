const projects = [
    {
        name: "ULinks.io",
        description:
            "ULinks.io is a platform for students to browse & upload academic group chats to stay connected during online school",
        pic: "/ulinks.PNG",
        tech: ["React", "GraphQL", "Node.js"],
        links: [
            {
                label: "Github",
                icon: "github",
                url: "https://github.com/jcserv/ulinks",
            },
        ],
    },
    {
        name: "UTM TA Application System",
        description:
            "UTAP is the official platform for all MCS TA postings @ UTM enabling students and instructors to apply for postings and manage applications.",
        pic: "/utap.png",
        tech: ["React", "Node.js"],
        links: [
            {
                label: "Website",
                icon: "link",
                url: "https://utap.utm.utoronto.ca/utap/",
            },
        ],
    },
    {
        name: "PostureAI",
        description:
            "PostureAI is an AI powered posture improvement web app, used by 200 monthly active users, that helps you maintain healthy posture while working.",
        subtitle: "1st Place in Best Use of GCP",
        pic: "/postureai.png",
        tech: ["React", "TypeScript"],
        links: [
            {
                label: "Website",
                icon: "link",
                url: "https://postureai.tech/",
            },
            {
                label: "Github",
                icon: "github",
                url: "https://github.com/jcserv/PostureAI",
            },
            {
                label: "Demo",
                icon: "youtube",
                url: "https://www.youtube.com/watch?v=SqUmP6npKYM",
            },
            {
                label: "Devpost",
                icon: "devpost",
                url: "https://devpost.com/software/placeholder-9gjdst",
            },
        ],
    },
];

export const extraProjects = [
    {
        name: "Golang Kafka Email Notification System",
        type: "Personal",
        tags: ["golang", "kafka", "docker"],
        description:
            "This project demonstrates a robust and scalable email notification system using Apache Kafka for message brokering and Golang for both the producer and consumer applications. The system is designed to send emails via SMTP, featuring retry mechanisms to ensure reliability and fault tolerance.",
        tech: ["Golang", "Kafka", "SMTP Mail", "Docker"],
        links: [
            {
                label: "Github",
                icon: "github",
                url: "https://github.com/SyaibanAhmadRamadhan/go-pub-sub-kafka",
            },
        ],
    },
    {
        name: "Go Simple TCP",
        type: "Personal",
        tags: ["golang", "tcp"],
        description:
            "implemented a customized simple TCP protocol using golang.",
        tech: ["Golang"],
        links: [
            {
                label: "Github",
                icon: "github",
                url: "https://github.com/SyaibanAhmadRamadhan/go-custom-tcp",
            },
        ],
    },
    {
        name: "GoCatch",
        type: "Personal",
        tags: ["golang", "library"],
        description:
            "GOCATCH is a collection library created by me. Go based project\n" +
            "designed to perform various migration operations and databases.\n" +
            "This project uses various Go libraries, such as goose for\n" +
            "managing migration databases, pgx as PostgreSQL driver and toolkit,\n" +
            "as well as godotenv to load environment variables.\n" +
            "The project structure is divided into several directories, each with\n" +
            "its own function. For example, the gcommon directory contains common utility functions,\n" +
            "gcrypto for cryptographic functions, gdb for database related functions, gdir\n" +
            "for path and module handling, and genv for managing variables\n" +
            ".env, glog for canonical logging paths, and others.\n" +
            "GOCATCH is a comprehensive and powerful Go project designed\n" +
            "to improve the efficiency and performance of your software development. But now I no longer maintain this library.",
        tech: ["Golang"],
        links: [
            {
                label: "Github",
                icon: "github",
                url: "https://github.com/SyaibanAhmadRamadhan/gocatch",
            },
        ],
    },
    {
        name: "Golang Dice Game",
        type: "Personal",
        tags: ["golang", "game"],
        description:
            "dice game using Golang, the game will stop if only one player has the dice. If the player rolls the dice and gets a score of 6 then the number of the player's dice will be deducted, and if the player rolls the dice and gets a score of 1 then the player will get +1 point. Players will not be able to roll the dice if their dice total is 0. The player with the most points wins.",
        tech: ["Golang"],
        links: [
            {
                label: "Github",
                icon: "github",
                url: "https://github.com/SyaibanAhmadRamadhan/go-game-dadu",
            },
        ],
    },
    {
        name: "Golang Web Scraping With Flag Pagination",
        type: "Personal",
        tags: ["golang", "web scraping"],
        description:
            "fetching data from websites that use pagination for their data using Golang, and providing tags to determine which pages to fetch, as well as downloading images.",
        tech: ["Golang"],
        links: [
            {
                label: "Github",
                icon: "github",
                url: "https://github.com/SyaibanAhmadRamadhan/go-web-scrapping-with-flag-pagination",
            },
            {
                label: "Link Demo",
                icon: "link",
                url: "https://github.com/SyaibanAhmadRamadhan/go-web-scrapping-with-flag-pagination/blob/main/docs/video-hasil-keseluruhan.mp4",
            },
        ],
    },
    {
        name: "Python Web Scraping",
        type: "Personal",
        tags: ["python", "web scraping"],
        description:
            "fetching data from websites that use python with beautiful soup and insert to mysql.",
        tech: ["Python"],
        links: [
            {
                label: "Github",
                icon: "github",
                url: "https://github.com/SyaibanAhmadRamadhan/python-webscrapping",
            },
            {
                label: "Link Demo",
                icon: "link",
                url: "https://github.com/SyaibanAhmadRamadhan/python-webscrapping/blob/main/video-scraping.mp4",
            },
        ],
    },
    {
        name: "Python Image Recognition Classification",
        type: "Personal",
        tags: ["python", "ai", "image classification"],
        description:
            "create a custom image recognition dataset using python. and testing the results of the data set.",
        tech: ["Python", "Image AI Classification"],
        links: [
            {
                label: "Github",
                icon: "github",
                url: "https://github.com/SyaibanAhmadRamadhan/image-recognition-classification",
            },
        ],
    },
    {
        name: "DueIt",
        type: "Work",
        tags: ["golang", "microservice", "postgresql", "redis", "grafana", "docker", "api gateway", "fcm", "kafka"],
        description:
            "I participated as a backend and DevOps developer in the project\n" +
            "making website and mobile applications Dueit, an application\n" +
            "financial management that allows users to manage\n" +
            "and record their finances for the period they wish.\n" +
            "My tasks on this project have been completed, including development\n" +
            "backend, server management, and implementation of key features. However,\n" +
            "Currently, the front end application is still being developed by another team\n" +
            "It is in the work stage, so there is no direct application link yet\n" +
            "can be given. Officially the project was canceled and the backend code was discontinued\n" +
            "published.",
        tech: ["Golang", "PostgreSQL", "Kafka", "Redis", "Nginx", "Grafana", "GraphQL", "RESTFul Api", "Docker", "FCM", "Kong Api Gateway"],
        links: [
            {
                label: "Github",
                icon: "github",
                url: "https://github.com/DueIt-Jasanya-Aturuang",
            },
        ],
    },
    {
        name: "Nutri Counter",
        type: "Work",
        tags: ["laravel", "python", "mysql"],
        description:
            "As a backend developer, I played a role in development\n" +
            "Nutricounter website project. This website is designed to help\n" +
            "users calculate their body's nutritional needs in a way that\n" +
            "informative. This website has several key features, including lists\n" +
            "food from the two countries and cultures of Indonesia and Korea, as well\n" +
            "supports three languages: English, Korean, and Indonesian. me, too\n" +
            "plays a role in scraping food data from CSV and inserting it\n" +
            "or entered into the MySQL database using Python.",
        tech: ["Laravel", "MySQL", "Python"],
        links: [
            {
                label: "Website",
                icon: "link",
                url: "https://nutricounterinfo.com/",
            },
        ],
    },
    // {
    //   name: "ResumeWords",
    //   type: "Personal",
    //   description:
    //     "A tool that identifies keywords in job postings using ML that will improve your chances of getting a job.",
    //   tech: ["React", "TypeScript", "Docker"],
    //   links: [
    //     {
    //       label: "Website",
    //       icon: "link",
    //       url: "https://resume-words.com/",
    //     },
    //   ],
    // },
    // {
    //   name: "AnonBot",
    //   type: "Personal",
    //   description: "Discord bot for anonymous messaging, with 2100 messages sent",
    //   tech: ["Node.js"],
    //   links: [
    //     {
    //       label: "Github",
    //       icon: "github",
    //       url: "https://github.com/white-van/WVAnonBot",
    //     },
    //   ],
    // },
    // {
    //   name: "Citrade",
    //   type: "Work",
    //   description:
    //     "Citrade is a proof-of-concept for a retail investment brokerage, equipped with an easy-to-use UI and detailed analytics.",
    //   tech: ["React", "AWS"],
    //   links: [
    //     {
    //       label: "Github",
    //       icon: "github",
    //       url: "https://github.com/jcserv/citrade-frontend",
    //     },
    //     {
    //       label: "Website",
    //       icon: "link",
    //       url: "https://main.d2mbmzkt6yj28g.amplifyapp.com/",
    //     },
    //   ],
    // },
    // {
    //   name: "UTM CSSC Website",
    //   type: "Work",
    //   description:
    //     "The CSSC Website is an open space for UTM CS students to ask questions, use academic tools, and get connected within the CS community.",
    //   tech: ["Vue"],
    //   links: [
    //     {
    //       label: "Github",
    //       icon: "github",
    //       url: "https://github.com/utm-cssc/website",
    //     },
    //     {
    //       label: "Website",
    //       icon: "link",
    //       url: "https://cssc.utm.utoronto.ca/",
    //     },
    //   ],
    // },
    // {
    //   name: "CollabCloud",
    //   type: "School",
    //   description:
    //     "Social networking platform allowing users to find collaborators for software projects.",
    //   tech: ["React", "Node.js", "PostgreSQL"],
    //   links: [
    //     {
    //       label: "Github",
    //       icon: "github",
    //       url: "https://github.com/collabcloud/project-collabcloud",
    //     },
    //     {
    //       label: "Demo",
    //       icon: "youtube",
    //       url: "https://youtu.be/bPAOhb8r5Co",
    //     },
    //   ],
    // },
    // {
    //   name: "freeflo.io",
    //   type: "Hackathon",
    //   description:
    //     "Full stack web application enabling collaborative & open source journalism",
    //   tech: ["React", "Redux", "Next.js"],
    //   links: [
    //     {
    //       label: "Github",
    //       icon: "github",
    //       url: "https://github.com/white-van/freeflo.io",
    //     },
    //     {
    //       label: "Demo",
    //       icon: "youtube",
    //       url: "https://www.youtube.com/watch?v=pXDF2kgQGtk",
    //     },
    //   ],
    // },
    // {
    //   name: "Portfolio V1",
    //   type: "Personal",
    //   description: "My old personal portfolio, deployed with Heroku",
    //   tech: ["React", "Express", "MongoDB"],
    //   links: [
    //     {
    //       label: "Github",
    //       icon: "github",
    //       url: "https://github.com/jcserv/portfoliov1",
    //     },
    //     {
    //       label: "Website",
    //       icon: "link",
    //       url: "https://infinite-inlet-11529.herokuapp.com/",
    //     },
    //   ],
    // },
    // {
    //   name: "HarMoney",
    //   type: "Hackathon",
    //   description: "Mobile application enabling users to split transactions",
    //   tech: ["React Native", "Node.js"],
    //   links: [
    //     {
    //       label: "Github",
    //       icon: "github",
    //       url: "https://github.com/matthuynh/harmoney",
    //     },
    //     {
    //       label: "Demo",
    //       icon: "youtube",
    //       url: "https://youtu.be/s13y0c__6u4",
    //     },
    //     {
    //       label: "Devpost",
    //       icon: "devpost",
    //       url: "https://devpost.com/software/harmoney-ci42yp",
    //     },
    //   ],
    // },
    // {
    //   name: "InsurApp",
    //   type: "Hackathon",
    //   description: "Micro insurance mobile app using image recognition",
    //   tech: ["Android Studio", "Flask", "AWS"],
    //   links: [
    //     {
    //       label: "Github",
    //       icon: "github",
    //       url: "https://github.com/jcserv/InsurApp",
    //     },
    //   ],
    // },
    // {
    //   name: "VapeSafe",
    //   type: "Hackathon",
    //   description:
    //     "Mobile + hardware solution allowing users to quit vaping, won 3rd Place",
    //   tech: ["Android Studio", "Arduino"],
    //   links: [
    //     {
    //       label: "Github",
    //       icon: "github",
    //       url: "https://github.com/leviaviv28/VapeSafe-EngHack2019",
    //     },
    //     {
    //       label: "Devpost",
    //       icon: "devpost",
    //       url: "https://devpost.com/software/vapesafe/",
    //     },
    //   ],
    // },
    // {
    //   name: "ETH-Aion Atomic Swap",
    //   type: "Hackathon",
    //   description:
    //     "Atomic swap protocol for ETH & Aion cryptocurrencies, earning Top 6",
    //   tech: ["Java"],
    //   links: [
    //     {
    //       label: "Github",
    //       icon: "github",
    //       url: "https://github.com/jcserv/AtomicSwap",
    //     },
    //   ],
    // },
];

export default projects;
