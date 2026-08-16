/* ==========================================================================
   PORTFOLIO DATA — this is the ONLY file you need to edit day to day.
   ---------------------------------------------------------------------
   - Every section on the site pulls its content from this file.
   - For any "link" field: paste a Google Drive link, YouTube link,
     LinkedIn post link, or any URL. Leave as "#" if you don't have one yet
     (the button will still show but won't go anywhere useful).
   - For any "image" field: paste a direct image URL (Google Drive: set
     sharing to "Anyone with the link", then use a direct-view link format,
     or use imgur / any image host). Leave as "" to show a placeholder.
   - Do not delete the commas between entries. Copy an existing block
     to add a new item of the same type.
   ========================================================================== */

const portfolioData = {

  // ------------------------- SITE / HERO -------------------------
  site: {
    name: "Kishore K I",
    role: "Robotics & Automation Engineer",
    tagline: "Building the machines that build the future — one node, one motor, one line of code at a time.",
    heroQuote: "“In robotics, precision isn't a feature — it's the whole point.”",
    email: "kishorekiofficial@gmail.com",
    phone: "+91 7395852890",
    linkedin: "https://www.linkedin.com/in/kishoreki",
    github: "https://github.com/KISHORE-K-I",
    resumeFile: "assets/KISHORE_RESUME_updated.pdf"
  },

  // ------------------------- ABOUT -------------------------
  about: {
    paragraphs: [
      "I'm a Robotics and Automation Engineering student at Sri Ramakrishna Engineering College, Coimbatore, with a strong interest in turning engineering concepts into working robotic systems. My hands-on experience spans autonomous systems, embedded electronics, robotic simulation, and automation — from integrating encoders and motor drivers to developing ROS2 nodes and working with sensors such as IMUs and LiDAR.",
      "My technical interests sit at the intersection of embedded systems, industrial automation, and robotics. I've worked with ROS2, PLC programming, Fusion 360, robotic simulation, and embedded systems, applying these tools across academic projects, internships, and hands-on builds. So far, I've developed major hardware-based robotic projects and gained industry exposure through internships in ROS development and embedded IoT.",
      "I'm driven by the process of designing, building, testing, debugging, and improving robotic systems — and I'm always looking for the next engineering problem to solve."
    ]
  },

  // ------------------------- EDUCATION -------------------------
  education: [
    {
      level: "Higher Secondary Education (12th Grade)",
      institution: "Government Higher Secondary School",
      location: "Kanjikovil, Erode, Tamil Nadu, India",
      period: "2023",
      detail: "Score: 541 / 600 (90.16%)",
      badge: "School First Mark",
      certificateLink: "https://drive.google.com/file/d/1f1j65sF2kswh3rvHh_GYQUS2fsljwR7q/view?usp=sharing"
    },
    {
      level: "Bachelor of Engineering — Robotics & Automation",
      institution: "Sri Ramakrishna Engineering College",
      location: "Coimbatore, Tamil Nadu, India",
      period: "Expected Graduation: 2027",
      detail: "CGPA: 8.66",
      badge: "GPA : 9.00",
      certificateLink: "https://drive.google.com/file/d/1IENKCphSlGTaXtuZyYCjyyHbu3jovWN0/view?usp=sharing"
    }
  ],

  // ------------------------- SKILLS -------------------------
  // icon options already built: robot, ros, python, c, plc, hmi, scada,
  // autocad, fusion360, solidworks, cad, iot
  skillCategories: [
    {
      category: "Robotics",
      icon: "robot",
      skills: [
        { name: "Robot Programming (RoboDK)", level: "Intermediate" },
        { name: "ROS 2", level: "Basic" },
        { name: "Gazebo Simulation", level: "Intermediate" }
      ]
    },
    {
      category: "Programming",
      icon: "code",
      skills: [
        { name: "Python", level: "Intermediate" },
        { name: "C", level: "Basic" }
      ]
    },
    {
      category: "Automation",
      icon: "plc",
      skills: [
        { name: "PLC Programming (Siemens, Delta)", level: "Intermediate" },
        { name: "HMI Development", level: "Intermediate" },
        { name: "SCADA", level: "Basic" }
      ]
    },
    {
      category: "CAD & Design",
      icon: "cad",
      skills: [
        { name: "AutoCAD", level: "Intermediate" },
        { name: "Fusion 360", level: "Intermediate" },
        { name: "SolidWorks", level: "Basic" }
      ]
    },
    {
      category: "Systems & Concepts",
      icon: "iot",
      skills: [
        { name: "IIoT", level: "Basic" },
        { name: "Sensor Integration", level: "Intermediate" },
        { name: "Industrial Automation", level: "Basic" }
      ]
    }
  ],

  // ------------------------- INTERNSHIPS -------------------------
  internships: [
    {
      company: "Karthikesh Robotics Private Limited (KKR Pvt. Ltd.)",
      logo: "assets/logos/karthikesh_robotics_logo.jpg",
      role: "ROS Development Intern",
      date: "June 2025 – August 2025",
      location: "Coimbatore, Tamil Nadu, India",
      summary: "Built and validated custom URDF robot models with integrated sensors, implementing navigation behaviours in ROS2 and Gazebo.",
      details: [
        "Developed custom URDF robot models with integrated sensors and implemented robot navigation in ROS2 and Gazebo.",
        "Monitored robot trajectory, validated system performance, and debugged simulation using RViz and ROS2 visualization tools."
      ],
      certificateLink: "https://www.linkedin.com/posts/kishoreki_internship-certificate-activity-7369572964113043456-3hcA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ",
      photosLink: "https://www.linkedin.com/posts/kishoreki_100daysros2-ros2-xacro-activity-7355639674352078850-50DD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ",
      worksLink: "https://www.linkedin.com/posts/kishoreki_ros2-robotics-opencv-ugcPost-7360013393312788481-KyyO/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ",
      worksLabel: "Line-following four-wheeled robot with camera simulation in ROS2"
    },
    {
      company: "NxtGen Instruments",
      logo: "assets/logos/Nxtgen.png",
      role: "Embedded Systems & Robotics Intern",
      date: "1 June 2026 – 30 June 2026",
      location: "India",
      summary: "Engineered an ESP32-based IoT smart agriculture robot with real-time environmental monitoring and precision irrigation.",
      details: [
        "Developed an ESP32-based IoT Smart Agriculture Robot by integrating environmental sensors for real-time monitoring and precision irrigation.",
        "Implemented remote robot control using the Blynk platform and interfaced motors, relay modules, and LCD for embedded automation."
      ],
      certificateLink: "https://www.linkedin.com/posts/kishoreki_internshipcompleted-nxtgeninstruments-robotics-activity-7486700515767218176-6P7y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ",
      photosLink: "https://www.linkedin.com/posts/kishoreki_internshipcompleted-nxtgeninstruments-robotics-activity-7486700515767218176-6P7y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ",
      worksLink: "https://www.linkedin.com/posts/kishoreki_internshipcompleted-nxtgeninstruments-robotics-activity-7486700515767218176-6P7y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ",
      worksLabel: "ESP32-based IoT smart agriculture robot"
    }
  ],

  // ------------------------- PROJECTS -------------------------
  projects: [
    {
      title: "ROS2-Based Autonomous Delivery Robot",
      subtitle: "Autonomous Delivery Robot",
      date: "June 2025 – May 2026",
      award: "🏆 1st Prize — ROBOKRYON'26 (National Level)",
      image: "assets/achievements/amr_project.jpeg",
      summary: "An autonomous food-delivery robot built on ROS2 middleware with distributed nodes, real-time publisher–subscriber communication, and a live web ordering interface.",
      details: [
        "Developed an autonomous food delivery robot using ROS2 middleware with distributed node architecture and real-time publisher–subscriber communication.",
        "Designed and integrated a web-based interface for order management, task allocation, and real-time monitoring.",
        "Built and validated a functional prototype enabling efficient, contactless delivery in structured environments.",
        "Implemented closed-loop motion control and obstacle-aware navigation for safe indoor operation."
      ],
      learnt: "Deepened my understanding of ROS2 node architecture, sensor fusion (IMU + encoder odometry), SLAM Toolbox mapping, and building reliable bridges between ROS2 and web front-ends via rosbridge and Firebase.",
      videoLink: "https://www.linkedin.com/posts/kishoreki_autonomousdeliveryrobot-robotics-automation-activity-7469014867794923520-_Kag?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ",
      photosLink: "https://www.linkedin.com/posts/robotics-and-automation-srec_robokryon26-projectexpo-firstprize-activity-7444269438717165568-zrK_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQassets/achievements/robokryon-award.jpg",
      certificateLink: "https://drive.google.com/file/d/1IENKCphSlGTaXtuZyYCjyyHbu3jovWN0/view?usp=sharing"
    },
    {
      title: "Multi-Purpose Agriculture Robot",
      subtitle: "AgriBot",
      date: "Sept 2024 – May 2025",
      award: "🏅 Best Mini Project Award — College",
      image: "assets/achievements/Best_mini_project.jpg",
      summary: "A Bluetooth-controlled multi-functional agricultural robot capable of ploughing, seed sowing, fertilizing, grass cutting, and weeding.",
      details: [
        "Designed and developed a Bluetooth-controlled multi-functional agricultural robot capable of ploughing, seed sowing, fertilizing, grass cutting, and weeding operations.",
        "Implemented differential drive locomotion using dual L298N motor drivers and engineered servo-based seed dispensing with a relay-controlled high-current pump and cutting mechanism.",
        "Developed a custom mobile control application using MIT App Inventor for wireless robot operation and real-time command execution."
      ],
      learnt: "Learned to balance multiple actuator subsystems on a single control board, manage high-current relay switching safely, and design a mobile control app from scratch for real-time operation.",
      videoLink: "https://www.linkedin.com/posts/kishoreki_agritech-innovation-farmingtechnology-activity-7289279831358234624-8tqu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ",
      photosLink: "https://www.linkedin.com/posts/kishoreki_agribot-robotics-miniproject-activity-7372496488792420352-kzOl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ",
      certificateLink: "https://www.linkedin.com/posts/sriraam-hm-5baa64277_icires2025-conferenceproceedings-robotics-ugcPost-7377045520394956801-N2Rx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ"
    }
  ],

  // ------------------------- CERTIFICATES -------------------------
  // Add / remove blocks freely — the grid resizes automatically.
  certificates: [
    {
      title: "NPTEL Local Chapter Certificate of Appreciation – Top 5%",
      issuer: "Sri Ramakrishna Engineering College (NPTEL Local Chapter) / SWAYAM-NPTEL",
      date: "Academic Year 2025–2026",
      description: "Recognized among the Top 5% of learners with an Elite + Gold achievement in a SWAYAM-NPTEL online course. This recognition reflects strong academic performance and consistent engagement in structured online learning.",
      image: "assets/certificates/NPTEL_Topper_Achievement_1.jpeg",
      link: "https://www.linkedin.com/posts/kishoreki_nptel-swayam-npteltopper-ugcPost-7494344465059573760-ssbx/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ"
    },
    {
      title: "Computer Integrated Manufacturing - Top 5%",
      issuer: "IIT Kanpur (NPTEL / SWAYAM)",
      date: "Jan – Apr 2026",
      description: "Elite Certification with a 90% score, placing in the Top 5% of learners. Gained knowledge of Computer Integrated Manufacturing principles, including manufacturing automation, CAD/CAM integration, and CIM concepts.",
      image: "assets/certificates/NPTEL - CIM - 1.jpg",
      link: "https://www.linkedin.com/posts/kishoreki_nptel-cim-certificate-activity-7468657934466486273-kr8t?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ"
    },
    {
      title: "Employability Skills: Job Ready (With AI)",
      issuer: "Wadhwani Foundation",
      date: "July 09, 2026",
      description: "Successfully completed the Advanced-level Employability Skills: Job Ready (With AI) program with 75 hours of training. The program focused on building job-readiness, employability skills, and practical application through in-class activities.",
      image: "assets/certificates/Wadhwani Advance completion - 3.jpg",
      link: "https://www.linkedin.com/posts/kishoreki_employability-skills-advanced-completion-activity-7494334629941010432-y5MM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ"
    },
    { title: "Introduction to Industry 4.0 and Industrial Internet of Things", 
      issuer: "IIT Kharagpur (NPTEL / SWAYAM)", 
      date: "Jul – Oct 2025", 
      description: "Achieved Elite Certification with a 75% score. Developed an understanding of Industrial Internet of Things (IIoT) architecture, cyber-physical systems, and smart manufacturing concepts.", 
      image: "assets/certificates/NPTEL - IiOT - 2.jpg", 
      link: "https://www.linkedin.com/posts/kishoreki_nptel-completion-certificate-activity-7401832427804852225-uRsM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ" 
    },
      {
      title: "Design Thinking Workshop – Design Horizon Experience",
      issuer: "Sri Ramakrishna Engineering College / School of Design Thinking, Chennai",
      date: "August 12, 2025",
      description: "Participated in the Design Thinking Workshop on 'Design Horizon Experience'. The workshop was jointly organized by the Centre for Continuing Education at SREC and the School of Design Thinking, Chennai.",
      image: "assets/certificates/Design thinking - 5.jpg",
      link: "https://www.linkedin.com/posts/kishoreki_designthinking-innovation-creativemindset-activity-7403271492186046464-HWOm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ"
    },
    {
      title: "Paper Presentation – ICIRES 2K25",
      issuer: "Christ the King Engineering College",
      date: "April 23, 2025",
      description: "Presented a research paper at the Second International Conference on Innovative Research in Engineering Sciences (ICIRES-2K25). The presentation was conducted at Christ the King Engineering College as part of the international conference.",
      image: "assets/certificates/paper presentation - 6.jpg",
      link: "https://www.linkedin.com/posts/sriraam-hm-5baa64277_icires2025-conferenceproceedings-robotics-ugcPost-7377045520394956801-N2Rx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ"
    },
    {
      title: "Python 3.4.3 Training",
      issuer: "Spoken Tutorial Project, IIT Bombay",
      date: "March 19, 2025",
      description: "Successfully completed Python 3.4.3 training offered through the Spoken Tutorial Project, IIT Bombay. The certification was awarded after completing the required online assessment, with 4 credits and a score of 70%.",
      image: "assets/certificates/IIT - Python Training - 8.jpg",
      link: "https://www.linkedin.com/posts/kishoreki_certificate-by-iit-bombay-activity-7373187682144792576-TzoA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ"
    },
    {
      title: "HTML – Beginners",
      issuer: "Infosys / Springboard",
      date: "October 30, 2024",
      description: "Successfully completed the HTML – Beginners course through Infosys Springboard. The certification demonstrates foundational knowledge of HTML and basic concepts involved in creating and structuring web pages.",
      image: "assets/certificates/Infosys HTML - 9.jpg",
      link: "https://www.linkedin.com/posts/kishoreki_html-webdevelopment-infosysspringboard-activity-7262380159238856704-lsiZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ"
    },
    {
      title: "Analysis of Electro-technical Circuit Design",
      issuer: "Automation Studio™",
      date: "October 18, 2024",
      description: "Successfully completed the Automation Studio™ webinar on Analysis of Electro-technical Circuit Design. The session provided exposure to the analysis and design concepts associated with electro-technical circuits.",
      image: "assets/certificates/Automation studio - 10.jpg",
      link: "https://www.linkedin.com/posts/kishoreki_circuitdesign-plccontrol-electricalengineering-activity-7255578941548089344-7fpr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ"
    },
    {
      title: "LabVIEW-Driven Automation in Robotics",
      issuer: "Sri Ramakrishna Engineering College – Department of Robotics and Automation",
      date: "September 09, 2024",
      description: "Actively participated in a one-day workshop on LabVIEW-Driven Automation in Robotics, organized by the Department of Robotics and Automation under the Robotics Society – Student Chapter. Gained exposure to the application of LabVIEW in robotics and automation.",
      image: "assets/certificates/LabView - 11.jpg",
      link: "https://www.linkedin.com/posts/kishoreki_robotics-automation-labview-activity-7248541017858097153-URYq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ"
    }, 
    {
      title: "C Programming Course (Hands-On)",
      issuer: "Skill Rack",
      date: "April 09, 2024",
      description: "Successfully completed a hands-on C Programming course focused on building foundational programming skills. The certification also includes a verification URL for validating the course completion.",
      image: "assets/certificates/Skill rack - 12.jpg",
      link: "https://www.linkedin.com/posts/kishoreki_skilldevelopment-programmingskills-codingjourney-activity-7245110423031582721-csQU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ" 
    }, 
        {
      title: "Integrated Industrial Automation",
      issuer: "Kumaraguru College of Technology, Coimbatore",
      date: "March 20–22, 2025",
      description: "Participated in a three-day hands-on training program on Integrated Industrial Automation. The training was organized by the Department of Electronics & Instrumentation Engineering at Kumaraguru College of Technology.",
      image: "assets/certificates/PLC Workshop - KCT - 7.jpg",
      link: "https://www.linkedin.com/posts/kishoreki_workshop-completion-certificate-activity-7346150493343121408-TtII?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ"
    },
    {
      title: "ROS2 Development Internship",
      issuer: "Karthikesh Robotics Private Limited",
      date: "June 24 – August 11, 2025",
      description: "Completed an online internship in ROS2 Development, gaining practical exposure to robotics development and simulation. Contributed to robotic system development while working on technical challenges and exploring practical ROS-based solutions.",
      image: "assets/certificates/KKR - Intern completion - 4.jpg",
      link: "https://www.linkedin.com/posts/kishoreki_internship-certificate-activity-7369572964113043456-3hcA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ"
    },
    
  ],

  // ------------------------- ACHIEVEMENTS -------------------------
  achievements: [
    {
      title: "School First Rank — 12th Grade",
      org: "Government Higher Secondary School, Kanjikovil",
      date: "2023",
      description: "Secured the first rank in school in Higher Secondary Education with a score of 541/600 (90.16%), earning academic recognition for overall performance.",
      image: "assets/achievements/Frist_rank.webp",
      link: "https://drive.google.com/file/d/1f1j65sF2kswh3rvHh_GYQUS2fsljwR7q/view?usp=sharing"
    },

    {
      title: "National Level 1st Prize — Project Expo",
      org: "ROBOKRYON'26, Erode Sengunthar Engineering College",
      date: "March 2026",
      description: "Secured 1st Prize with a cash award at ROBOKRYON'26, a national-level robotics and innovation competition. The award was received for developing an Autonomous Delivery Robot designed to operate across multiple platforms.",
      image: "assets/achievements/robokryon.jpeg",
      link: "https://www.linkedin.com/posts/robotics-and-automation-srec_robokryon26-projectexpo-firstprize-activity-7444269438717165568-zrK_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQassets/achievements/robokryon-award.jpg"
    },

    {
      title: "NPTEL Elite — Top 5% (CIM)",
      org: "IIT Kanpur (SWAYAM)",
      date: "2026",
      description: "Earned an Elite Certification with a score of 90%, ranking among the Top 5% of certified learners. The course covered Computer Integrated Manufacturing, manufacturing automation, CAD/CAM, and CIM concepts.",
      image: "assets/achievements/NPTEL_Topper.jpg",
      link: "https://www.linkedin.com/posts/kishoreki_nptel-swayam-npteltopper-ugcPost-7494344465059573760-ssbx/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ"
    },

    {
      title: "Best Mini Project Award",
      org: "Sri Ramakrishna Engineering College",
      date: "2024 - 2025",
      description: "Received the Best Mini Project Award for the Multi-Purpose Agriculture Robot, recognising the development of a multifunctional robotic platform for agricultural applications.",
      image: "assets/achievements/Best_mini_project.jpg",
      link: "https://www.linkedin.com/posts/kishoreki_agribot-robotics-miniproject-activity-7372496488792420352-kzOl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ"
    },

    {
      title: "Joint Secretary — Branding & Marketing Team",
      org: "Yi-Yuva",
      date: "2024 - 2025",
      description: "Served as Joint Secretary of the Branding & Marketing Team, contributing to promotional activities, visual communication, and initiatives that improved event outreach and visibility.",
      image: "assets/achievements/Yuva_member.jpg",
      link: "https://www.linkedin.com/posts/kishoreki_leadership-yuva-branding-activity-7241366705065648129-vCYU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ"
    },

        {
      title: "Quiz Round Host — ArduinoTix'25",
      org: "Robo Club",
      date: "February 2025",
      description: "Hosted the opening quiz round of ArduinoTix'25, a three-round competition focused on Arduino and robotics. Facilitated the round, engaged participating teams, and evaluated their technical knowledge while contributing to the overall coordination and successful execution of the event as a Member and Social Media Team Head.",
      image: "assets/achievements/Robo_club_host.jpg",
      link: "https://www.linkedin.com/posts/kishoreki_arduinotix25-roboclub-arduino-activity-7312472128941965314-zGEm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ#"
    },
    {
      title: "ROBO-RACE Volunteer — ROBOFIESTA 2025",
      org: "Department of Robotics and Automation",
      date: "March 2025",
      description: "Volunteered for ROBO-RACE during ROBOFIESTA 2025, a technical symposium that brought together students from multiple colleges. Supported the coordination and execution of the robotics event while interacting with participants and observing their technical approaches and problem-solving skills.",
      image: "assets/achievements/Robo_festa.jpg",
      link: "https://www.linkedin.com/posts/kishoreki_robofiesta2025-symposium-robotics-activity-7314520075863044096-MPyN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ"
    },

    {
      title: "Social Media Team Head",
      org: "Robo Club",
      date: "2024 - 2026",
      description: "Led the Social Media Team, managing digital outreach, event promotion, and content activities to improve the club's visibility and engagement.",
      image: "assets/achievements/Robo_club.jpg",
      link: "https://www.linkedin.com/posts/kishoreki_leadership-robotics-innovation-activity-7261221713303011328-7fcg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ"
    },

    {
      title: "Executive Member",
      org: "RAA",
      date: "2024 - 2025",
      description: "Served as an Executive Member, contributing to organisational activities, technical initiatives, and student engagement within the association.",
      image: "assets/achievements/RAA_club.jpg",
      link: "https://www.linkedin.com/posts/kishoreki_leadership-robotics-automation-activity-7242780685638221826-93rH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0J4s0B7xQIfYz2ZVIRL1Tz4smJkyByztQ"
    }

  ]
};
