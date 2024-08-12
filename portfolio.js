const portfolio = {
    // Basic Info
    personalInfo: {
        name: "John Doe",
        title: "Full Stack Developer",
        contact: {
            email: "john.doe@example.com",
            phone: "+1234567890",
            location: "New York, USA",
            website: "https://johndoe.dev",
            linkedin: "https://linkedin.com/in/johndoe",
            github: "https://github.com/johndoe",
        },
        about: "I am a passionate full-stack developer with 5 years of experience in building web applications using modern technologies like React, Node.js, and MongoDB.",
    },
    
    // Skills Section
    skills: [
        {
            category: "Frontend",
            technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
        },
        {
            category: "Backend",
            technologies: ["Node.js", "Express", "MongoDB", "MySQL"]
        },
        {
            category: "Tools & Others",
            technologies: ["Git", "Docker", "AWS", "Jenkins"]
        }
    ],

    // Projects Section
    projects: [
        {
            title: "E-commerce Platform",
            description: "A full-featured e-commerce platform with user authentication, product listings, and a shopping cart.",
            technologies: ["React", "Node.js", "MongoDB"],
            github: "https://github.com/johndoe/ecommerce-platform",
            liveDemo: "https://ecommerce.johndoe.dev"
        },
        {
            title: "Portfolio Website",
            description: "A personal portfolio website showcasing my skills, projects, and contact information.",
            technologies: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/johndoe/portfolio-website",
            liveDemo: "https://portfolio.johndoe.dev"
        },
        // Add more projects as needed
    ],

    // Experience Section
    experience: [
        {
            company: "Tech Company Inc.",
            role: "Full Stack Developer",
            duration: "Jan 2020 - Present",
            responsibilities: [
                "Developed and maintained web applications using React and Node.js.",
                "Collaborated with cross-functional teams to deliver high-quality software.",
                "Led the development of a microservices architecture for a large-scale application."
            ]
        },
        {
            company: "Startup XYZ",
            role: "Frontend Developer",
            duration: "Jun 2017 - Dec 2019",
            responsibilities: [
                "Built responsive UI components using React and Bootstrap.",
                "Optimized web performance and accessibility.",
                "Worked closely with backend developers to integrate APIs."
            ]
        },
        // Add more experiences as needed
    ],

    // Education Section
    education: [
        {
            institution: "University of Technology",
            degree: "Bachelor of Science in Computer Science",
            duration: "2013 - 2017",
            description: "Graduated with honors, with a focus on software engineering and web development."
        }
        // Add more education as needed
    ],

    // Testimonials Section
    testimonials: [
        {
            name: "Jane Smith",
            relationship: "Project Manager at Tech Company Inc.",
            feedback: "John is a highly skilled and dedicated developer. He consistently delivers high-quality work and is a pleasure to work with."
        },
        {
            name: "Mike Johnson",
            relationship: "CTO at Startup XYZ",
            feedback: "John's expertise in frontend development helped our startup build a user-friendly and visually appealing application. Highly recommend!"
        }
    ],

    // Contact Section
    contactForm: {
       
        fields: [
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "message", type: "textarea", placeholder: "Your Message", required: true }
        ]
    }
};

function personalClick() {
    const { personalInfo } = portfolio; // Get personalInfo from portfolio
    localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
    window.location.href = 'personal.html'; // Redirect to personal.html
}

function educationClick(){
    window.location.href='education.html';
}

function testimonialsClick(){
    window.location.href='testimonials.html';
}

function contactClick(){
    window.location.href='contactForm.html';
}


function experianClick(){
    window.location.href='experian.html';
}

function skillClick(){
    window.location.href='skill.html';
}

function contactClick(){
    window.location.href='contactForm.html'
}



//project click 

 const{projects}=portfolio;

 const title1= projects[0].title;
 const newArray =[title1]
 

function projectClick(){
    localStorage.setItem('title',JSON.stringify(newArray));
    window.location.href='project.html';
}





