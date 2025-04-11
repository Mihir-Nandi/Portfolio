const data = {
  avatar: "images/avatar.jpg",
  name: "Mihir Nandi",
  titleString: "Mihir's Portfolio",
  about: `Focused and adaptable, I bring expertise in Android development (Flutter) and hardware, combined with strong problem-solving and communication skills, to contribute effectively in public sector roles.`,
  descriptors:
    "Aspiring Computer Engineer | Android Developer | Tech Enthusiast",
  email: "msnandi370122@kkwagh.edu.in",
  github: "github.com/Mihir-Nandi",
  linkedin: "https://www.linkedin.com/in/ishan-jawale-1a889a2b8/",
  resume: "Ishan_Resume.pdf",
  skills: [
    {
      category: "Programming Languages",
      skills: ["C++", "C", "Python", "SQL", "Java", "Flutter", "Dart", "Django"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Matplotlib", "Excel", "Vercel"],
    },
  ],
  projects: [
    {
      name: "Monitoring System for Classroom Session in Skill Training",
      description:
        "Designed an AI-driven image analysis for classroom monitoring and quality assessment in skill development training programs.",
      technologies: ["Python"],
      githubLink: "https://github.com/IshanJawale/daily-expense-calculator",
      images: [
      ],
    },
    {
      name: "Stock Analysis App",
      description:
        "Developed an app to suggest nearby plantation spots, track planted trees, and connect users with NGOs, promoting environmental action through real-time data and intuitive design.",
      technologies: ["Flutter", "Dart", "Django"],
      githubLink: "https://github.com/IshanJawale/daily-expense-calculator",
      images: [
      ],
    },
    {
      name: "Smart Home Automation",
      description:
        "This code implements an IoT-enabled smart home automation system using an ESP32 microcontroller, connected to the Blynk platform for remote monitoring and control. It manages entry and exit triggers through sensor inputs to count the number of people in a space, updating the count in real-time on the Blynk app. The system also controls a bulb based on occupancy, ensuring energy efficiency by turning the bulb on when people are present and off when the area is empty.",
      technologies: ["Python", "CSV Data", "Scikit-learn"],
      githubLink: "https://github.com/IshanJawale/smart-home-automation",
      images: [
        "images/projects/SmartHomeAutomation/img1.png",
        "images/projects/SmartHomeAutomation/img2.png",
      ],
    },
    {
      name: "Daily Expense Calculator | TKinter ",
      description:
        "Developed a Daily Expense Calculator using Tkinter, enabling users to effortlessly track and manage their daily expenditures, visualize spending patterns, and make informed financial decisions through a user-friendly graphical interface.",
      technologies: ["Python", "TKinter"],
      githubLink: "https://github.com/IshanJawale/daily-expense-calculator",
      images: [
        "images/projects/DailyExpenseCalculator/img1.png",
        "images/projects/DailyExpenseCalculator/img2.png",
        "images/projects/DailyExpenseCalculator/img3.png",
      ],
    },
    {
      name: "Sattv | Hospital Management System",
      description:
        "This production grade system employs OAuth for secure authentication, utilizes Google Sheets as a database for storing patient and appointment data, and relies on Google Drive for file storage, including medical records and reports. Built with Node.js, Express, and EJS for server-side rendering, this web-based hospital management system enables users to book appointments, view medical records, and manage patient information efficiently.",
      technologies: [
        "Node.js",
        "Express",
        "EJS",
        "OAuth",
        "Google Sheets",
        "Google Drive",
      ],
      githubLink: "https://github.com/IshanJawale/sattv-HMS",
      images: [
        "images/projects/Sattv/SattvDash.jpeg",
        "images/projects/Sattv/SattvList.jpeg",
        "images/projects/Sattv/SattvPatient.jpeg",
        "images/projects/Sattv/SattvRegister.jpeg",
        "images/projects/Sattv/SattvAppnt.jpeg",
      ],
    },
    
    {
      name: "Accident Detection and Alert System",
      description:
        "The Accident Detection System is a vehicle safety project designed to detect collisions using ESP, accelerometer, GPS, and GSM technologies. This system provides real-time alerts to emergency services and predefined contacts, enhancing road safety.",
      technologies: ["C++", "ESP32 / Arduino", "GPS", "GSM", "Accelerometer"],
      githubLink: "https://github.com/IshanJawale/accident-detection-system",
    },
    {
      name: "IOT Enabled Smart Irrigation System",
      description:
        "The Accident Detection System is a vehicle safety project designed to detect collisions using ESP, accelerometer, GPS, and GSM technologies. This system provides real-time alerts to emergency services and predefined contacts, enhancing road safety.",
      technologies: ["C++", "ESP32 / Arduino", "GPS", "GSM", "Accelerometer"],
      githubLink: "https://github.com/IshanJawale/IOT-enabled-smart-irrigation-system",
    },
    {
      name: "Bulb Tester",
      description:
        "The Bulb Testing Project is an Arduino-based system designed for efficient and user-friendly light bulb testing. This project incorporates a keypad and LCD display to provide an interactive interface, making bulb testing straightforward and accessible.",
      technologies: ["C++", "ESP32 / Arduino", "GPS", "GSM", "Accelerometer"],
      githubLink: "https://github.com/IshanJawale/bulb-tester",
      website: "https://wokwi.com/projects/365885552643451905",
    },
  ],
  education: {
    college: {
      degree: "Bachelor of Technology (B.Tech)",
      major: "Computer Engineering",
      school:
        "K.K Wagh Institute Of Engineering Education and Research, Nashik",
      year: "2022 - 2026",
      cgpa: "8.19",
      courseWork: `Data Structures and Algorithms, Web Development, Database Management Systems, Computer Networks,  Operating Systems, Software Engineering, Computer Architecture`,
    },
    std12th: {
      degree: "HSC",
      college: "St. Lawrence Jr. College, Nashik",
      year: "2020-2022",
      board: "Maharashtra State Board",
      cetPercentile: "83.65",
      courseWork: `English, Physics, Chemistry, Mathematics, Computer Science`,
    },
    school: {
      degree: "SSC",
      school: "Nashik Cambridge School",
      year: "2020",
      board: "Secondary School Certificate",
      percentage: "91",
      courseWork: `Mathematics, Science, Social Science, English, Hindi, Marathi`,
    },
  },
  certifications: [
    {
      logo: "images/logos/microsoft.png",
      name: "Microsoft Certified: Azure AI Fundamentals",
      organization: "Microsoft",
      year: "2023",
      preview: "images/certifications/Microsoft-Certificate.pdf",
    },
    {
      logo: "images/logos/microsoft.png",
      name: "Flutter and Dart - The Complete Guide",
      organization: "Udemy",
      year: "2025",
      preview: "images/certifications/Microsoft-Certificate.pdf",
    },
    {
      logo: "images/logos/Matlab_Logo.png",
      name: "Matlab Onramp Course",
      organization: "Matlab",
      year: "2023",
      preview: "images/certifications/MatLab_OnRamp_Certificate.pdf",
    },
    {
      logo: "images/logos/AICTE_Logo.png",
      name: "Exposure to Smart Manufacturing, Machines Tools",
      organization: "AICTE - Idea Lab",
      year: "2023",
      preview: "images/certifications/AICTE-Certificate.pdf",
      rank: "B+",
    },
  ],
  courses: [
    {
      name: "Microsoft Certified: Azure AI Fundamentals",
      description:
        "Azure, Computer Vision, Natural Language Processing, Fundamental Principles",
      technologies: [
        "Python",
        "Jupyter Notebook",
        "CV",
        "NLP",
        "Azure"
      ],
      tutor: "Microsoft",
      platform: "Microsoft",
      year: "2023",
      preview:
        "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/?practice-assessment-type=certification",
    },
    {
      name: "Full Stack Web Development With MERN STACK & GenAI 2025",
      description:
        "MERN Stack, GenAI Integration, Full Stack Development, React.js, Node.js, AI-powered Web Apps",
      technologies: [
        "MongoDB", "Express.js", "React.js", "Node.js", "OpenAI/Gemini API", "Git/GitHub"
      ],
      tutor: "Udemy",
      platform: "Udemy",
      year: "2023",
      preview:
        ".",
    },
    {
      name: "Python Tutorial - Python Full Course for Beginners",
      tutor: "Programming with Mosh",
      technologies: [
        "Python",
        "Python Basics",
        "Object Oriented Programming",
        "Automation with Python",
        "Machine Learning with Python",
        "Django",
      ],
      platform: "YouTube",
      year: "2024",
      preview:
        "https://www.youtube.com/watch?v=_uQrJ0TkZlc&t=109s",
    },

  ],
  competitions: [
    {
      name: "Peripheraton 1.0 2023 - Hackathon",
      date: "May 2023",
      organization: "S.P.I.T., Mumbai",
      achievement: "Finalist",
      projectSummary:
        "Prototyped and Developed an AI-powered and IOT enabled Smart Irrigation System that optimizes water usage by automatically adjusting irrigation based on real-time data from soil, weather, and plant conditions.",
      repoLink:
        "https://github.com/IshanJawale/IOT-enabled-smart-irrigation-system",
      certificate: "images/competitions/SPIT-Certificate.pdf",
    },
    {
      name: "Smart India Hackathon - Software Edition 2024",
      date: "December 2024",
      organization: "Govt. of India",
      achievement: "WINNER",
      projectSummary:
        "Designed an AI-driven image analysis for classroom monitoring and quality assessment in skill development training programs.",
      certificate: "images/competitions/Campus-to-Corporate.pdf",
    },
    {
      name: "Ideathon 2023 - Ideation Contest",
      date: "Apr 2023",
      organization: "K.K Wagh Institute Of Engineering Education and Research",
      achievement: "Participant",
      projectSummary:
        "Proposed an innovative idea for a mobile app designed to assist individuals with disabilities by tracking the accessibility of public services such as transportation, restrooms, hotels, and restaurants. This innovative app would provide users with up-to-date information on whether these services are accessible, ensuring a more inclusive and convenient experience for everyone..",
      certificate: "images/competitions/Ideathon.pdf",
    },
    {
      name: "AICTE Idea Lab: Project Competition",
      date: "Apr 2023",
      organization: "K.K Wagh Institute Of Engineering Education and Research",
      achievement: "Participant",
      projectSummary:
        "Developed a line-following robot as part of my first-year project, serving as an introduction to IoT concepts by integrating sensors and microcontrollers to enable real-time path detection and automated navigation.",
      certificate: "images/competitions/Idea-Lab-Event.pdf",
    },
  
  ],
  extracurricular: [
    {
      title: "",
      role: "",
      year: "",
      description:
        "",
      certificate: ""
    },
  ],
};

export default data;
