import Image1 from '../../assets/kpproject1.png'
import Image2 from '../../assets/kpproject2.jpg'
import Image3 from '../../assets/project3.png'


const projects = [
    {
        id: 1,
        category: 'Academic',
        image: Image1,
        title: "Point Of Sale (Aug 2022 - Dec 2022)",
        desc: "A full-stack project done using Django and MySql by my group for Database Management class. Responsibility included: user authentication, managing sessions, implementing CRUD, and deployment using git/github. DEMO NOT AVAILABLE",
        
        github: 'https://github.com/kundanpaudel/Point-Of-Sale'
    },
    {
        id: 2,
        category: 'Personal',
        image: Image2,
        title: "Personal Portfolio (Aug 2023 - Current)",
        desc: "A portfolio website to display my recent projects. Implemented frontend and design aspects of the website using React, HTML and CSS.",
        
        github: 'https://github.com/kundanpaudel/Portfolio'
    },
    {
        id: 3,
        category: 'Personal',
        image: Image3,
        title: "Interview Assistant (Sep 2023 - Oct 2023)",
        desc: "A OpenAI powered interview assisstant that helps with behavioral questions asked in interviews. Implemented using FastAPI, HTML, Bootstrap, and deployed on AWS.",
        demo: 'https://tsy6pdgvp2cqzvswkhe2zig6cy0sfprr.lambda-url.us-east-2.on.aws/',
        github: '#'
    }
]


export default projects