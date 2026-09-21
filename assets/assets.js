import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import laravel from './laravel.png';
import nodejs from './nodejs.png';
import reactjs from './reactjs.png';
import jiraa from './jiraa.png';
import web from './web.png';
import backend from './backend.png';
import testing from './testing.png';
import api from './api.png';
import linkedin_icon from './linkedin_icon.png';
import linkedin_dark from './linkedin_dark.png';
import github_icon from './github_icon.png';
import github_dark from './github_dark.png';
import postman from './postman.png';
import nextjs from './nextjs.png';

const basePath =
    process.env.NODE_ENV === 'production'
        ? '/portofolio-muhammad-adriena-mukti'
        : ''
        
const publicPath = (path) => `${basePath}${path}`

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    laravel,
    nodejs,
    reactjs,
    jiraa,
    web,
    api,
    testing,
    backend,
    linkedin_icon,
    linkedin_dark,
    github_icon,
    github_dark,
    postman,
    nextjs
};

export const workData = [

    // {
    //     title: 'Apps for my Her D',
    //     description: 'Web Application for D',
    //     bgImage: publicPath('/bucin-1.jpg'),

    //     category: 'Web Development',

    //     overview:
    //         'A web application developed to provide an accessible and user-friendly digital experience.',

    //     demoUrl: 'https://adrienamukti.github.io/gf-dini-apps/',

    //     technologies: [
            
    //     ],

    //     features: [
         
    //     ],

    //     images: [
            
    //     ]
    // },

    {
        slug: 'competency-assessment-system',
        title: 'Competency Assessment System',
        description: 'Laravel Web Application',
        bgImage: publicPath('/lsp-1.png'),

        category: 'Web Development',

        overview:
            'A web-based competency certification assessment management system developed during my internship at SMK Telkom Bandung. The system digitalizes the assessment process for students, assessors, and administrators.',

        technologies: [
            'PHP',
            'Laravel 11',
            'MySQL',
            'Tailwind CSS',
            'JavaScript',
            'WhatsApp API'
        ],

        features: [
            'Student account registration',
            'Assessment scheduling',
            'Assessee distribution',
            'Assessment document management',
            'WhatsApp notification integration',
            'Assessment workflow management'
        ],

        testing: [
            'Black-box testing',
            'Functional verification',
            'Debugging',
            'Feature retesting'
        ],

        images: [
            publicPath('/projects/lsp/lsp-1.png'),
            publicPath('/projects/lsp/lsp-2.png'),
            publicPath('/projects/lsp/lsp-3.png')
        ]
    },


    {
        title: 'House Price Prediction',
        description: 'Comparation Machine Learning Algorithm',
        bgImage: publicPath('/house-price-prediction.png'),

        category: 'Machine Learning',

        overview:
            'A machine learning project for predicting residential property prices using property characteristics, location information, and accessibility-related features.',

        technologies: [
            'Python',
            'Pandas',
            'Scikit-learn',
            'Random Forest',
            'XGBoost',
            'LightGBM',
            'Streamlit'
        ],

        features: [
            'Property data preprocessing',
            'Feature engineering',
            'Location encoding',
            'Model training and optimization',
            'Model performance comparison'
        ],

        images: [
            publicPath('/projects/house-prediction/house-pred-1.png'),
            publicPath('/projects/house-prediction/house-pred-2.png'),
            publicPath('/projects/house-prediction/house-pred-3.png')
        ]
    },


    {
        title: 'Mini Clinic Information System',
        description: 'Full-Stack Clinic Management Web Application',
        bgImage: publicPath('/work-3.png'),

        category: 'Web Development',

        overview:
            'A full-stack clinic management web application designed to manage patient data, registrations, queues, medical examinations, and prescriptions in an integrated workflow. The system implements JWT-based authentication and role-based access for Administrator, Doctor, and Registration Staff, supported by a RESTful API and MySQL database.',

        technologies: [
            'React.js',
            'Node.js',
            'Express.js',
            'MySQL',
            'JWT Authentication',
            'RESTful API',
            'Postman'
        ],

        features: [
            'JWT-based authentication and role-based authorization',
            'Patient data management with automatic medical record numbers',
            'Patient registration and visit management',
            'Automatic clinic queue numbering and queue status management',
            'Medical examination records using SOAP format',
            'Prescription and medication management',
            'Dashboard with clinic activity summary',
            'Search, pagination, validation, and error handling',
            'RESTful API testing and automated API testing using Postman Collection Runner'
        ],

        images: [
            publicPath('/projects/mini-clinic/clinic-1.png'),
            publicPath('/projects/mini-clinic/clinic-2.png'),
            publicPath('/projects/mini-clinic/clinic-3.png'),
            publicPath('/projects/mini-clinic/clinic-4.png')
        ]
    },

    {
        title: 'Sugar Sales Data Analysis',
        description: 'Data Analytics Project',
        bgImage: publicPath('/work-4.png'),

        category: 'Data Analytics',

        overview:
            'A data analytics project completed during the RevoU MSIB program bath 7 to analyze sales performance and identify opportunities for business improvement.',

        technologies: [
            'Python',
            'SQL',
            'Power BI'
        ],

        features: [
            'Sales performance analysis',
            'Customer analysis',
            'Regional sales analysis',
            'Shipping lead time analysis',
            'Interactive dashboard'
        ],

        images: [
            publicPath('/projects/candy-sales/candy-sales-1.png'),
            publicPath('/projects/candy-sales/candy-sales-2.png')
        ]
    },

]

export const serviceData = [
    {
        icon: assets.web,
        title: 'Web Development',
        description: 'Developing responsive web applications with a focus on functionality, clean implementation, and user requirements.',
        link: '#work'
    },
    {
        icon: assets.backend,
        title: 'Backend Development',
        description: 'Building backend functionality, business logic, database management, and application features using Laravel and MySQL.',
        link: '#work'
    },
    {
        icon: assets.testing,
        title: 'Software Testing',
        description: 'Performing manual, functional, and black-box testing to identify issues and verify that application features meet requirements.',
        link: '#work'
    },
    {
        icon: assets.api,
        title: 'API Integration',
        description: 'Integrating APIs into web applications to connect external services and automate application workflows.',
        link: '#work'
    }
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages & Frameworks', description: 'PHP, Laravel, Node.js, React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelor in Informatics Engineering from Universitas Langlangbuana ' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 4 projects' }
];

export const toolsData = [
    assets.laravel, assets.nodejs, assets.reactjs, assets.nextjs, assets.git, assets.postman, assets.jiraa
];