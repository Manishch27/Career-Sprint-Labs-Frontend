import { University } from '@/types/university'
import jainLogo from '../public/universities-logo/jain.webp'

export const universities: University[] = [
  // JAIN UNIVERSITY
  {
    id: 'jain-university',
    name: 'Jain University Online',
    logo: '/universities-logo/jain.webp?height=80&width=80',
    image: '/universities-thumbs/Jain.webp',
    mode: 'Online',
    accreditation: {
      grade: 'A++',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 40000,
        brochure: "link-to-mba-brochure",
      },
      {
        program: "MCA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 37500,
        brochure: "link-to-mca-brochure",
      },
      {
        program: "MCOM",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 26250,
        brochure: "link-to-mcom-brochure",
      },
      {
        program: "MA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 22500,
        brochure: "link-to-ma-brochure",
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 27500,
        brochure: "link-to-bba-brochure",
      },
      {
        program: "BCOM",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 21250,
        brochure: "link-to-bcom-brochure",
      },
      {
        program: "BCA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 21250, // Adjust fees if necessary
        brochure: "link-to-bca-brochure",
      }
    ],

    location: {
      city: 'Bengaluru',
      state: 'Karnataka'
    },

    approvals: [
      { name: 'UGC', image: '/approvals-logo/ugc.webp', description: 'University Grants Commission' },
      { name: 'AICTE', image: '/approvals-logo/aicte.webp', description: 'All India Council for Technical Education' },
      { name: 'AIU', image: '/approvals-logo/aiu.webp', description: 'Association of Indian Universities' },
      { name: 'NIRF', image: '/approvals-logo/nirf.webp', description: 'National Institutional Ranking Framework' },
      { name: 'WES', image: '/approvals-logo/wes.webp', description: 'World Education Services' },
      { name: 'NAAC A++', image: '/approvals-logo/naac-A++.webp', description: 'National Assessment and Accreditation Council' },
      { name: 'QS World University', image: '/approvals-logo/qs.webp', description: 'QS World University Rankings' },
      { name: 'AUAP', image: '/approvals-logo/auap.webp', description: 'Association of Universities of Asia and the Pacific' }
    ],

    about: 'Jain Online is the dedicated e-learning platform of the renowned Jain Deemed-to-be University, based in Bengaluru. Backed by over three decades of excellence, the Jain Group has established a strong reputation for delivering quality education that blends academic rigor with practical insights. Recognized as a leader in higher education, Jain University goes beyond academics by fostering innovation, research, and entrepreneurship.With a rich legacy of nurturing talent, the institution has consistently adapted to modern learning needs, offering a wide range of programs designed to empower students for global opportunities. Its online platform reflects this commitment by providing flexible, accessible, and industry-relevant education to learners worldwide.',

    keyHighlights: [
      "UGC-DEB approved online programs",
      "Industry-aligned curriculum",
      "70+ electives available",
      "20K+ courses on LinkedIn Learning",
      "Global professional partnerships",
      "Flexible learning schedule"
    ],


    emiOptions: "Flexible EMI options available. Contact our admissions team for personalized plans.",
    whyChoose: [
      "Industry-relevant curriculum",
      "Expert faculty",
      "Flexible study options",
      "Career support and placement assistance",
      "Global recognition"
    ],
    benefitsOfStudying: [
      "Learn at your own pace",
      "Access to digital library resources",
      "Interactive online sessions",
      "Networking opportunities",
      "Recognized degree with global acceptance"
    ],
    examConduct: "Exams are conducted through a secure online proctoring system. Students can take exams from the comfort of their homes while ensuring academic integrity.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A++', 'AIU', 'AICTE'],
    academicApproach: "Our academic approach focuses on blending theoretical knowledge with practical skills. We employ innovative teaching methodologies, case studies, and project-based learning to ensure students are well-prepared for their future careers.",
    quantitativeMetrics: {
      placementRate: "95%",
      corporateTieups: "500+",
      students: "50,000+",
      experience: "30+ years"
    },
    placements: {
      sectors: [
        "IT & Software",
        "Finance & Banking",
        "Marketing & Sales",
        "Healthcare",
        "E-commerce",
        "Consulting"
      ],

      images: [
        "/companies-logo/kelloggs.webp",
        "/companies-logo/infosys.webp",
        "/companies-logo/honeywell.webp",
        "/companies-logo/icici-bank.webp",
        "/companies-logo/johnson-controls.webp",
        "/companies-logo/pwc.webp",
        "/companies-logo/standard-chartered.webp",
        "/companies-logo/kpmg.webp"
      ]
    },
    moreThanDegree: {
      description: "At Jain University Online, we offer more than just a degree. Our programs are designed to provide industry-relevant skills, soft skills development, internship opportunities, networking events, and career counseling.",
      sampleDegree: {
        name: "MBA",
        description: "Our MBA program offers a comprehensive curriculum covering core subjects, specializations, and practical projects to ensure you're industry-ready upon graduation.",
        image: '/sample-degrees/JAIN.webp'
      }
    },

    admissionProcess: [
      "Visit the official website",
      "Select your desired program",
      "Complete the application form",
      "Upload necessary documents",
      "Pay the application fee",
      "Receive admission confirmation",
      "Start your online journey"
    ],

    faqs: [
      {
        question: "Is the degree recognized?",
        answer: "Yes, our degrees are recognized by UGC-DEB and NAAC A++ and are accepted globally."
      },
      {
        question: "How are classes conducted?",
        answer: "Classes are conducted through our state-of-the-art online learning platform, featuring live sessions, recorded lectures, and interactive study materials."
      },
      {
        question: "What are the admission requirements?",
        answer: "Admission requirements vary by program. Generally, you'll need to have completed your 10+2 for undergraduate programs and a bachelor's degree for postgraduate programs."
      },
      {
        question: "Is placement assistance provided?",
        answer: "Yes, we offer comprehensive placement assistance including resume building, interview preparation, and connections with our industry partners."
      }
    ],

    UniBrochure: {
      file: "https://distanceeducationschool.com/wp-content/uploads/202",
    }
  },
  
  // GLA UNIVERSITY
  {
    id: 'gla-university',
    name: 'GLA University Online',
    logo: '/universities-logo/GLA.webp?height=80&width=80',
    image: '/universities-thumbs/gla.jpeg',
    mode: 'Online',
    accreditation: {
      grade: 'A+',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 42500,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "MCA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 39500,
        brochure: "link-to-mca-brochure"
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 22500,
        brochure: "link-to-bba-brochure"
      },
      {
        program: "BCA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 20500,
        brochure: "link-to-bca-brochure"
      },
      {
        program: "BCOM",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 18500,
        brochure: "link-to-bcom-brochure"
      }
    ],

    location: {
      city: 'Mathura',
      state: 'Uttar Pradesh'
    },

    approvals: [
      { name: 'UGC', image: '/approvals-logo/ugc.webp?height=100&width=100', description: 'University Grants Commission' },
      { name: 'AICTE', image: '/approvals-logo/aicte.webp?height=100&width=100', description: 'All India Council for Technical Education' },
      { name: 'NAAC A+', image: '/approvals-logo/naac-A+.webp?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'NIRF', image: '/approvals-logo/nirf.webp?height=100&width=100', description: 'National Institutional Ranking Framework' }
    ],

    about: "GLA University Online provides students with a flexible and accessible learning platform for higher education. With a focus on quality education and holistic development, GLA University empowers students to achieve their academic and career goals through innovative online programs.",

    keyHighlights: [
      "UGC-DEB approved online programs",
      "NAAC A+ accreditation",
      "Comprehensive curriculum",
      "Experienced faculty",
      "State-of-the-art learning management system"
    ],

    emiOptions: "Flexible EMI options available for all programs. Contact the admissions team for more details.",
    whyChoose: [
      "Accredited and recognized programs",
      "Affordable tuition fees",
      "Interactive and engaging online classes",
      "Placement assistance and career counseling",
      "Student-focused support services"
    ],
    benefitsOfStudying: [
      "Flexible learning schedule",
      "Access to digital library resources",
      "Industry-relevant curriculum",
      "Global networking opportunities",
      "Recognized degrees with high acceptance"
    ],
    examConduct: "Exams are conducted securely online, ensuring a smooth and stress-free experience for students.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A+', 'AICTE'],
    academicApproach: "GLA University employs a balanced mix of theoretical knowledge and practical application. With a focus on case studies, real-world projects, and innovative teaching methods, students gain an industry-aligned education.",
    quantitativeMetrics: {
      placementRate: "93%",
      corporateTieups: "300+",
      students: "25,000+",
      experience: "22+ years"
    },
    placements: {
      sectors: [
        "IT & Software",
        "Banking & Finance",
        "E-commerce",
        "Consulting",
        "Education & Training"
      ],
      images: [
        "/companies-logo/samsung.webp",
        "/companies-logo/tech-mahindra.webp",
        "/companies-logo/hdfc-bank.webp",
        "/companies-logo/amazon.webp",
        "/companies-logo/jindal-steel-and-power.webp",
        "/companies-logo/ntt-data.webp"

      ]
    },
    moreThanDegree: {
      description: "At GLA University Online, students receive more than just a degree. Our programs include skill development, live projects, mentorship opportunities, and career-focused workshops.",
      sampleDegree: {
        name: "MBA",
        description: "The MBA program provides students with essential business knowledge and leadership skills to succeed in today's competitive market.",
        image: '/sample-degrees/gla.webp'
      }
    },
    admissionProcess: [
      "Visit the official website",
      "Select your desired program",
      "Complete the application form",
      "Upload necessary documents",
      "Pay the application fee",
      "Receive admission confirmation",
      "Start your online journey"
    ],
    faqs: [
      {
        question: "Are the degrees recognized?",
        answer: "Yes, our programs are UGC-DEB approved and NAAC A+ accredited."
      },
      {
        question: "How are classes delivered?",
        answer: "Classes are conducted online through live lectures, recorded sessions, and interactive course materials."
      },
      {
        question: "What is the eligibility criteria?",
        answer: "Eligibility varies by program. Generally, 10+2 is required for undergraduate programs and a bachelor's degree for postgraduate programs."
      },
      {
        question: "Is there placement assistance?",
        answer: "Yes, students receive placement support including resume building, interview training, and connections with recruiters."
      }
    ],
    UniBrochure: {
      file: "file.pdf"
    }
  },
  
  // AMITY UNIVERSITY
  {
    id: 'amity-university',
    name: 'Amity University Online',
    logo: '/universities-logo/amity.webp?height=80&width=80',
    image: 'https://amity.edu/images/university.jpg',
    mode: 'Online',
    accreditation: {
      grade: 'A+',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 50000,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "MCA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 40000,
        brochure: "link-to-mca-brochure"
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 30000,
        brochure: "link-to-bba-brochure"
      },
      {
        program: "BCA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 25000,
        brochure: "link-to-bca-brochure"
      },
      {
        program: "BAJMC",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 29000,
        brochure: "link-to-bajmc-brochure"
      },
      {
        program: "MAJMC",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 42500,
        brochure: "link-to-majmc-brochure"
      },
      {
        program: "BCOM",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 16500,
        brochure: "link-to-bcom-brochure"
      },

      {
        program: "BA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 16500,
        brochure: "link-to-ba-brochure"
      },

      {
        program: "MA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 32500,
        brochure: "link-to-ma-brochure"
      },

      {
        program: "MCOM",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 30000,
        brochure: "link-to-mcom-brochure"
      },
    ],

    location: {
      city: 'Noida',
      state: 'Uttar Pradesh'
    },

    approvals: [
      { name: 'UGC', image: '/approvals-logo/ugc.webp?height=100&width=100', description: 'University Grants Commission' },
      { name: 'AICTE', image: '/approvals-logo/aicte.webp?height=100&width=100', description: 'All India Council for Technical Education' },
      { name: 'NAAC A+', image: '/approvals-logo/naac-A+.webp?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'NIRF', image: '/approvals-logo/nirf.webp?height=100&width=100', description: 'National Institutional Ranking Framework' },
      { name: 'WASC', image: '/approvals-logo/wasc.webp?height=100&width=100', description: 'Western Association of Schools and Colleges' },
      { name: 'THE Impact Rankings', image: '/approvals-logo/impact-rankings.webp?height=100&width=100', description: 'Times Higher Education' },
      { name: 'QS World University', image: '/approvals-logo/qs.webp?height=100&width=100', description: 'QS World University Rankings' },
      { name: 'WES', image: '/approvals-logo/wes.webp?height=100&width=100', description: 'World Education Services Accredited' }
    ],

    about: "Amity University Online is a leading institution in providing high-quality education through online platforms. With over two decades of experience in academia, Amity has established itself as a pioneer in distance learning. The university offers a wide range of UGC-recognized online programs designed to cater to the diverse needs of working professionals, students, and lifelong learners. Amity emphasizes the importance of practical knowledge alongside theoretical learning, ensuring students are job-ready upon graduation. The university's robust online infrastructure includes live virtual classes, discussion forums, e-learning modules, and personalized mentorship. Dedicated to fostering global standards of education, Amity has collaborations with numerous international universities and organizations. Its state-of-the-art learning management system and access to expert faculty make Amity Online an ideal choice for those seeking to enhance their careers without disrupting their professional or personal lives.",

    keyHighlights: [
      "Globally recognized online degrees",
      "NAAC A+ accreditation",
      "Collaborations with international universities",
      "24/7 access to course material",
      "Dedicated placement support"
    ],

    emiOptions: "Affordable EMI options are available for all programs. Contact the admissions team for more details.",
    whyChoose: [
      "Globally recognized programs",
      "Affordable and flexible fee structure",
      "Dynamic and industry-relevant curriculum",
      "Access to global alumni network",
      "Comprehensive placement support"
    ],
    benefitsOfStudying: [
      "Flexible learning hours",
      "Live interaction with industry experts",
      "Global exposure through international partnerships",
      "Skill enhancement through workshops and webinars",
      "Accredited degrees with industry relevance"
    ],
    examConduct: "All exams are conducted online using secure proctoring methods, ensuring integrity and flexibility for students.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A+', 'AICTE', 'WES'],
    academicApproach: "Amity Online integrates theoretical knowledge with hands-on projects, live sessions with industry leaders, and international case studies to ensure an industry-ready education.",
    quantitativeMetrics: {
      placementRate: "95%",
      corporateTieups: "500+",
      students: "150,000+",
      experience: "20+ years"
    },
    placements: {
      sectors: [
        "IT & Technology",
        "Banking & Finance",
        "Consulting",
        "Healthcare",
        "Media & Entertainment"
      ],
      images: [
        "/companies-logo/microsoft.webp",
        "/companies-logo/samsung.webp",
        "/companies-logo/google.webp",
        "/companies-logo/deloitte.webp",
        "/companies-logo/ibm.webp",
        "/companies-logo/mckinsey-and-company.webp",
        "/companies-logo/MetLife.webp",
        "/companies-logo/genpact.webp",
        "/companies-logo/Nokia.webp",
        "/companies-logo/Spicejet.webp",

      ]
    },
    moreThanDegree: {
      description: "Amity Online goes beyond academics to provide skill-based learning, leadership training, and hands-on experience through live projects and workshops. Students graduate with not just a degree, but also the confidence to excel in their careers.",
      sampleDegree: {
        name: "MBA",
        description: "The MBA program at Amity Online equips students with leadership, analytical, and strategic skills needed to thrive in competitive industries.",
        image: '/sample-degrees/amity.webp'
      }
    },
    admissionProcess: [
      "Visit the official Amity Online website",
      "Choose your preferred program",
      "Fill out the online application form",
      "Upload required documents",
      "Submit application fee",
      "Receive confirmation of admission",
      "Begin your academic journey"
    ],
    faqs: [
      {
        question: "Are the degrees valid internationally?",
        answer: "Yes, Amity Online degrees are WES accredited and recognized globally."
      },
      {
        question: "What is the mode of delivery?",
        answer: "All programs are delivered online through a robust learning management system."
      },
      {
        question: "What is the eligibility for postgraduate courses?",
        answer: "Applicants must hold a recognized bachelor's degree in any discipline."
      },
      {
        question: "Does Amity Online offer placement assistance?",
        answer: "Yes, students receive extensive placement support, including resume building, mock interviews, and recruiter connections."
      }
    ],
    UniBrochure: {
      file: "file.pdf"
    }
  },
  
    // LOVELY PROFESSIONAL UNIVERSITY
  {
    id: 'lovely-professional-university',
    name: 'Lovely Professional University Online',
    logo: '/universities-logo/lpu.webp?height=80&width=80',
    image: '/universities-thumbs/lpu.webp',
    mode: 'Online',
    accreditation: {
      grade: 'A++',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 43000,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "MCA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 33000,
        brochure: "link-to-mca-brochure"
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 32000,
        brochure: "link-to-bba-brochure"
      },
      {
        program: "BCA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 30000,
        brochure: "link-to-bca-brochure"
      },
      {
        program: "BCOM",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 28000,
        brochure: "link-to-bcom-brochure"
      },

      {
        program: "BA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 18000,
        brochure: "link-to-ba-brochure"
      },

      {
        program: "MA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 18000,
        brochure: "link-to-ma-brochure"
      },

      {
        program: "MSC",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 18000,
        brochure: "link-to-msc-brochure"
      },
      {
        program: "MCOM",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 23000,
        brochure: "link-to-mcom-brochure"
      }
    ],

    location: {
      city: 'Phagwara',
      state: 'Punjab'
    },

    approvals: [
      { name: 'UGC-DEB', image: '/approvals-logo/ugc-deb.webp?height=100&width=100', description: 'University Grants Commission for Distance Education' },
      { name: 'NAAC A++', image: '/approvals-logo/naac-A++.webp?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'NIRF', image: '/approvals-logo/nirf.webp?height=100&width=100', description: 'National Institutional Ranking Framework' },
      { name: 'WES', image: '/approvals-logo/wes.webp?height=100&width=100?height=100&width=100', description: 'World Education Services' }
    ],

    about: "Lovely Professional University Online is a distinguished institution recognized for delivering flexible and affordable online education to students across the globe. Founded on the principles of innovation and inclusivity, LPU is among India’s largest private universities. It has consistently set benchmarks in quality education through its state-of-the-art curriculum, cutting-edge technology, and industry-relevant programs. LPU Online ensures that learners are not just educated but also empowered to excel in the global job market. Through live lectures, recorded sessions, mentorship programs, and practical projects, students gain hands-on experience in their chosen fields. The university prides itself on its holistic approach, offering extensive placement support, personalized career counseling, and opportunities for global exposure. LPU Online is a pioneer in integrating education with technology, utilizing AI-driven learning tools and virtual labs. Its steadfast commitment to academic excellence, coupled with a student-centric approach, makes it the ideal destination for learners aspiring to achieve greatness in their professional journeys.",

    keyHighlights: [
      "Global rankings for quality education",
      "NAAC A++ accreditation, ensuring academic excellence",
      "Affordable, flexible fee structures",
      "Advanced virtual learning environment with AI-driven tools",
      "Strong industry tie-ups for career advancement"
    ],

    emiOptions: "Flexible EMI options are available to make education accessible for everyone.",
    whyChoose: [
      "Top-tier accreditation and recognition",
      "A robust curriculum designed for real-world challenges",
      "Global network of alumni and industry partnerships",
      "Comprehensive student support services",
      "Placement assistance with leading companies"
    ],
    benefitsOfStudying: [
      "Interactive live classes and recorded sessions",
      "Networking opportunities through global peer interactions",
      "Focus on skill development and employability",
      "Access to virtual labs and simulation tools",
      "24/7 access to learning materials and mentorship"
    ],
    examConduct: "Exams are conducted online with secure and proctored systems, ensuring fairness and flexibility.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A++', 'AIU', 'WES'],
    academicApproach: "LPU Online combines academic rigor with experiential learning, focusing on practical skills, global case studies, and interactive assessments to prepare students for the demands of modern industries.",
    quantitativeMetrics: {
      placementRate: "98%",
      corporateTieups: "700+",
      students: "200,000+",
      experience: "15+ years"
    },
    placements: {
      sectors: [
        "E-commerce",
        "Finance",
        "Technology",
        "Education",
        "Healthcare"
      ],
      images: [
        "/companies-logo/amazon.webp",
        "/companies-logo/accenture.webp",
        "/companies-logo/hcl.webp",
        "/companies-logo/hdfc-bank.webp",
        "/companies-logo/ibm.webp",
        "/companies-logo/cognizant.webp",
        "/companies-logo/bosch.webp",
        "/companies-logo/tcs.webp",
        "/companies-logo/tech-mahindra.webp",
        "/companies-logo/wipro.webp",
      ]
    },
    moreThanDegree: {
      description: "At LPU Online, education goes beyond the classroom. Students gain access to real-world applications, certifications, and leadership training that prepare them to excel in competitive industries. LPU empowers learners to transform their careers through its dynamic, globally recognized programs.",
      sampleDegree: {
        name: "MBA",
        description: "LPU's online MBA program focuses on fostering strategic thinking, leadership abilities, and practical problem-solving skills.",
        image: '/sample-degrees/lpu.webp'
      }
    },
    admissionProcess: [
      "Visit the LPU Online official website",
      "Choose your desired program",
      "Complete the online application form",
      "Upload necessary documents",
      "Pay the application fee",
      "Receive confirmation and begin your studies"
    ],
    faqs: [
      {
        question: "Are the online degrees recognized internationally?",
        answer: "Yes, LPU Online degrees are WES accredited and globally recognized."
      },
      {
        question: "What types of support are available for students?",
        answer: "LPU Online offers 24/7 academic and technical support, as well as career counseling and placement services."
      },
      {
        question: "What is the eligibility criteria for undergraduate courses?",
        answer: "Applicants must have completed 10+2 or equivalent from a recognized board."
      },
      {
        question: "Are scholarships available?",
        answer: "Yes, LPU Online provides scholarships based on merit and specific eligibility criteria."
      }
    ],
    UniBrochure: {
      file: "file.pdf"
    }
  },
  
   // CHANDIGARH UNIVERSITY
  {
    id: 'chandigarh-university',
    name: 'Chandigarh University Online',
    logo: '/universities-logo/cu.png?height=80&width=80',
    image: '/universities-thumbs/cu.webp',
    mode: 'Online',
    accreditation: {
      grade: 'A+',
      body: 'NAAC'
    },

    courses: [
      {
        program: "BAJMC",
        degree: "Bachelor",
        duration: "3 Years",
        feesPerSemester: 22500,
        brochure: "Brochure link"
      },
      {
        program: "BCA",
        degree: "Bachelor",
        duration: "3 Years",
        feesPerSemester: 27500,
        brochure: "Brochure link"
      },
      {
        program: "BBA",
        degree: "Bachelor",
        duration: "3 Years",
        feesPerSemester: 26000,
        brochure: "Brochure link"
      },
      {
        program: "MA (English)",
        degree: "Master",
        duration: "2 Years",
        feesPerSemester: 25000,
        brochure: "Brochure link"
      },
      {
        program: "MA (Economics)",
        degree: "Master",
        duration: "2 Years",
        feesPerSemester: 25000,
        brochure: "Brochure link"
      },
      {
        program: "MBA",
        degree: "Master",
        duration: "2 Years",
        feesPerSemester: 50000,
        brochure: "Brochure link"
      },
      {
        program: "MCA",
        degree: "Master",
        duration: "2 Years",
        feesPerSemester: 30000,
        brochure: "Brochure link"
      },
      {
        program: "MAJMC",
        degree: "Master",
        duration: "2 Years",
        feesPerSemester: 25000,
        brochure: "Brochure link"
      },
      {
        program: "MSC (Data Science)",
        degree: "Master",
        duration: "2 Years",
        feesPerSemester: 30000,
        brochure: "Brochure link"
      },
      {
        program: "MSC (Mathematics)",
        degree: "Master",
        duration: "2 Years",
        feesPerSemester: 25000,
        brochure: "Download link",
      }
    ],

    location: {
      city: 'Chandigarh',
      state: 'Punjab'
    },

    approvals: [
      { name: 'UGC-DEB', image: '/approvals-logo/ugc-deb.webp?height=100&width=100', description: 'University Grants Commission for Distance Education' },
      { name: 'NAAC A+', image: '/approvals-logo/naac-A+.webp?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'NIRF', image: '/approvals-logo/nirf.webp?height=100&width=100', description: 'National Institutional Ranking Framework ' },
      { name: 'WES', image: '/approvals-logo/wes.webp?height=100&width=100', description: 'World Education Services' },
      { name: 'Harvard Business Publishing Education', image: '/approvals-logo/harvard-business-publishing-education.webp?height=100&width=100', description: 'Harvard Business Publishing Education' },
    ],

    about: "Chandigarh University Online is a prestigious institution dedicated to providing world-class education through a flexible and accessible digital platform. With its strong academic foundation, state-of-the-art technology, and innovative learning tools, the university offers programs that cater to diverse learner needs. Chandigarh University has established itself as a leader in online education by integrating interactive live classes, recorded sessions, and virtual labs with a robust support system for students. The institution prides itself on a comprehensive curriculum designed to meet global standards and industry expectations, ensuring that students are well-prepared for their professional journeys. The university fosters a culture of excellence, emphasizing skill development, entrepreneurship, and employability. With a commitment to personalized attention, career counseling, and placement support, Chandigarh University Online continues to empower learners worldwide to achieve their goals and transform their futures.",

    keyHighlights: [
      "Recognized among India’s top private universities",
      "Accredited with NAAC A+ for excellence in academics",
      "Industry-aligned curriculum for real-world applications",
      "Affordable fee structure with flexible payment options",
      "State-of-the-art virtual learning environment"
    ],

    emiOptions: "EMI options available for all programs to make education accessible to everyone.",
    whyChoose: [
      "Top-ranked university for online education",
      "Curriculum tailored for practical and professional skills",
      "Extensive student support services",
      "Global networking opportunities",
      "Comprehensive placement assistance"
    ],
    benefitsOfStudying: [
      "Interactive live classes with industry experts",
      "Recorded sessions for self-paced learning",
      "Virtual labs and hands-on project work",
      "Access to online libraries and resources",
      "Dedicated academic and career mentorship"
    ],
    examConduct: "Exams are conducted through secure, AI-proctored online systems to ensure credibility and convenience.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A+', 'AIU', 'WES'],
    academicApproach: "Chandigarh University Online combines theoretical knowledge with practical applications, leveraging modern technology to provide a rich learning experience for students in diverse fields.",
    quantitativeMetrics: {
      placementRate: "96%",
      corporateTieups: "600+",
      students: "150,000+",
      experience: "10+ years"
    },
    placements: {
      sectors: [
        "IT & Software",
        "Finance",
        "Healthcare",
        "Education",
        "Manufacturing"
      ],
      images: [
        "/companies-logo/capgemini.webp",
        "/companies-logo/amazon.webp",
        "/companies-logo/isro.webp",
        "/companies-logo/hitachi.webp",
        "/companies-logo/cognizant.webp",
        "/companies-logo/adidas.webp",
        "/companies-logo/vistara.webp",
        "/companies-logo/indigo.webp",
        "/companies-logo/flipkart.webp",
        "/companies-logo/practo.webp",
        "/companies-logo/watchguard.webp",

      ]
    },
    moreThanDegree: {
      description: "Chandigarh University Online goes beyond academics, offering students exposure to certifications, real-world projects, and networking opportunities. The programs are designed to help learners acquire leadership qualities, entrepreneurial skills, and global perspectives.",
      sampleDegree: {
        name: "MBA",
        description: "The online MBA program equips students with strategic thinking and leadership capabilities for thriving in the global business environment.",
        image: '/sample-degrees/cu.webp'
      }
    },
    admissionProcess: [
      "Visit the Chandigarh University Online website",
      "Select the desired program",
      "Fill out the online application form",
      "Upload necessary documents",
      "Pay the admission fee",
      "Receive confirmation and begin learning"
    ],
    faqs: [
      {
        question: "Are Chandigarh University Online degrees globally recognized?",
        answer: "Yes, the degrees are WES accredited and recognized internationally."
      },
      {
        question: "What types of support are available for students?",
        answer: "The university offers academic mentoring, career counseling, and technical assistance 24/7."
      },
      {
        question: "What is the eligibility criteria for postgraduate courses?",
        answer: "Applicants must hold a recognized bachelor’s degree in the relevant field."
      },
      {
        question: "Are scholarships available for online programs?",
        answer: "Yes, Chandigarh University Online provides scholarships based on merit and specific criteria."
      }
    ],
    UniBrochure: {
      file: "file.pdf"
    }
  },
  
  // MANGALAYATAN UNIVERSITY
  {
    id: 'mangalayatan-university',
    name: 'Mangalayatan University Online',
    logo: '/universities-logo/mangalayatan.webp?height=80&width=80',
    image: '/universities-thumbs/mangalayatan.webp',
    mode: 'Online',
    accreditation: {
      grade: 'A+',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 40000,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "MCA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 38000,
        brochure: "link-to-mca-brochure"
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 15500,
        brochure: "link-to-bba-brochure"
      },
      {
        program: "BCA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 15500,
        brochure: "link-to-bca-brochure"
      },
      {
        program: "BA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 4000,
        brochure: "link-to-ba-brochure"
      },
      {
        program: "MCOM",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 9000,
        brochure: "link-to-mcom-brochure"
      },
      {
        program: "MSC",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 12000,
        brochure: "link-to-msc-brochure"
      },
      {
        program: "MA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 8000,
        brochure: "link-to-ma-brochure"
      }
    ],

    location: {
      city: 'Aligarh',
      state: 'Uttar Pradesh'
    },

    approvals: [
      { name: 'UGC-DEB', image: '/approvals-logo/ugc-deb.webp?height=100&width=100', description: 'University Grants Commission for Distance Education' },
      { name: 'NAAC A+', image: '/approvals-logo/naac-A+.webp?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'AIU', image: '/approvals-logo/aiu.webp?height=100&width=100', description: 'Association of Indian Universities' },
    ],

    about: "Mangalayatan University Online is committed to delivering high-quality education to students across the globe. Known for its innovative teaching methodologies and strong academic framework, the university offers a range of programs designed to meet the dynamic needs of students and professionals. Mangalayatan University leverages advanced technology to provide a seamless and engaging learning experience through live classes, recorded lectures, and interactive study materials. Its focus on holistic development and skill enhancement ensures that students are well-equipped to meet global challenges. The institution emphasizes experiential learning, real-world projects, and extensive support services, including career guidance and placement assistance, making it a trusted choice for online learners. With a vision to inspire and empower learners, Mangalayatan University Online continues to set benchmarks in quality education and academic excellence.",

    keyHighlights: [
      "Dynamic curriculum tailored to meet industry demands",
      "Comprehensive online education tools for flexibility",
      "Affordable fee structure and scholarship options",
      "Global recognition and strong alumni network",
      "Interactive virtual classrooms with expert faculty"
    ],

    emiOptions: "Affordable EMI options available to ease financial constraints for students.",
    whyChoose: [
      "Recognized for academic excellence and innovation",
      "Programs aligned with professional and personal growth",
      "Flexible learning schedule for working professionals",
      "Strong placement network with leading companies",
      "Dedicated student support and mentorship"
    ],
    benefitsOfStudying: [
      "Access to world-class faculty and resources",
      "Interactive live and recorded sessions",
      "Career-oriented certifications and internships",
      "Flexible learning environment to balance work and study",
      "Regular assessments and feedback for continuous improvement"
    ],
    examConduct: "Examinations are conducted online using secure, AI-proctored systems ensuring integrity and convenience.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A+', 'AIU'],
    academicApproach: "Mangalayatan University Online integrates theoretical foundations with practical applications to nurture critical thinking, creativity, and problem-solving abilities.",
    quantitativeMetrics: {
      placementRate: "95%",
      corporateTieups: "500+",
      students: "75,000+",
      experience: "15+ years"
    },
    placements: {
      sectors: [
        "Information Technology",
        "Banking & Finance",
        "Marketing & Sales",
        "Education & Research",
        "Healthcare & Wellness"
      ],
      images: [
        "/companies-logo/icici-bank.webp",
        "/companies-logo/amazon.webp",
        "/companies-logo/infosys.webp",
        "/companies-logo/genpact.webp",
        "/companies-logo/dainik-jagran.webp",
        "/companies-logo/radisson.webp",
        "/companies-logo/capgemini.webp",
        "/companies-logo/policybazaar.webp",
      ]
    },
    moreThanDegree: {
      description: "Mangalayatan University Online ensures a comprehensive learning experience, offering additional certifications, hands-on projects, and networking opportunities to help students excel beyond academics.",
      sampleDegree: {
        name: "MBA",
        description: "The MBA program focuses on developing leadership, strategic thinking, and managerial skills for modern business challenges.",
        image: '/sample-degrees/mangalayatan.webp'
      }
    },
    admissionProcess: [
      "Visit the Mangalayatan University Online website",
      "Explore available programs and select the desired one",
      "Complete the online application form",
      "Submit necessary documents for verification",
      "Pay the admission fee",
      "Receive enrollment confirmation and start learning"
    ],
    faqs: [
      {
        question: "Is Mangalayatan University Online recognized internationally?",
        answer: "Yes, it holds accreditations such as AIU, making its degrees globally valid."
      },
      {
        question: "What support is provided for online learners?",
        answer: "Students receive personalized mentorship, technical assistance, and career counseling throughout the course."
      },
      {
        question: "What is the eligibility criteria for undergraduate programs?",
        answer: "Candidates must have completed 10+2 or equivalent from a recognized board."
      },
      {
        question: "Does Mangalayatan University offer scholarships?",
        answer: "Yes, the university provides merit-based scholarships for eligible students."
      }
    ],
    UniBrochure: {
      file: "file.pdf"
    }
  },
  
  // MANIPAL UNIVERSITY JAIPUR
  {
    id: 'manipal-university-jaipur',
    name: 'Manipal University Jaipur Online (MUJ)',
    logo: '/universities-logo/manipal.webp?height=80&width=80',
    image: '/universities-thumbs/manipal.webp?q=tbn:ANd9GcQI4icYBJgcfkoYrum2aefZaud5-0qjAlhe08TIuIFy8LhmQFD1NAM7hXatrFb_i8Kl_zQ&usqp=CAU',
    mode: 'Online',
    accreditation: {
      grade: 'A+',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 60000,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "MCA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 55000,
        brochure: "link-to-mca-brochure"
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 40000,
        brochure: "link-to-bba-brochure"
      },
      {
        program: "BCA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 38000,
        brochure: "link-to-bca-brochure"
      },
      {
        program: "BA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 35000,
        brochure: "link-to-ba-brochure"
      }
    ],

    location: {
      city: 'Jaipur',
      state: 'Rajasthan'
    },

    approvals: [
      { name: 'UGC', image: '/approvals-logo/ugc.webp?height=100&width=100', description: 'University Grants Commission' },
      { name: 'AICTE', image: '/approvals-logo/aicte.webp?height=100&width=100', description: 'All India Council for Technical Education' },
      { name: 'NAAC A+', image: '/approvals-logo/naac-A+.webp?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'NIRF', image: '/approvals-logo/nirf.webp?height=100&width=100', description: 'National Institutional Ranking Framework' },
      { name: 'QS World University', image: '/approvals-logo/qs.webp?height=100&width=100', description: 'QS World University Rankings' },
      { name: 'WES', image: '/approvals-logo/wes.webp?height=100&width=100', description: 'World Education Services Accredited' }

    ],

    about: "Manipal University Jaipur (MUJ) Online is a prestigious institution offering high-quality online programs that combine academic rigor with innovative teaching methodologies. As part of the globally recognized Manipal Education Group, MUJ emphasizes accessibility, flexibility, and relevance in its online learning programs. The university caters to both fresh graduates and working professionals, offering a robust platform to achieve academic excellence and professional growth. With state-of-the-art technology, an experienced faculty, and a learner-centric approach, MUJ Online ensures a seamless and engaging educational experience. The institution's vision is to empower students with knowledge, skills, and values to excel in the modern world. Through comprehensive curriculums, career-oriented programs, and extensive support services, MUJ Online is committed to shaping future leaders and innovators.",

    keyHighlights: [
      "Globally recognized Manipal Education Group legacy",
      "Interactive learning with live classes and recorded sessions",
      "Affordable and flexible fee structure",
      "AI-enabled learning platform for seamless education",
      "100% placement assistance for professional programs"
    ],

    emiOptions: "Flexible EMI options available to make quality education affordable for all students.",
    whyChoose: [
      "Strong emphasis on skill development and employability",
      "Programs designed to meet industry requirements",
      "Recognized faculty with a wealth of experience",
      "Robust alumni network and global reach",
      "Dedicated career guidance and mentorship services"
    ],
    benefitsOfStudying: [
      "Personalized learning paths tailored to individual needs",
      "Access to cutting-edge technology and learning tools",
      "Global networking opportunities with peers and professionals",
      "Real-world case studies and projects",
      "Certification from a NAAC A+ accredited institution"
    ],
    examConduct: "Examinations are conducted online with strict AI-proctoring to ensure a fair and secure assessment process.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A+', 'AICTE'],
    academicApproach: "MUJ Online integrates a multi-disciplinary approach with practical applications to create a holistic and enriching learning environment.",
    quantitativeMetrics: {
      placementRate: "97%",
      corporateTieups: "600+",
      students: "80,000+",
      experience: "20+ years"
    },
    placements: {
      sectors: [
        "Information Technology",
        "Finance & Banking",
        "Marketing & Advertising",
        "Healthcare Management",
        "Engineering & Manufacturing"
      ],
      images: [
        "/companies-logo/samsung.webp",
        "/companies-logo/google.webp",
        "/companies-logo/deloitte.webp",
        "/companies-logo/ibm.webp",
        "/companies-logo/genpact.webp",
        "/companies-logo/Nokia.webp",
        "/companies-logo/ey.webp",
        "/companies-logo/kpmg.webp"
      ]
    },
    moreThanDegree: {
      description: "MUJ Online provides students with opportunities for additional certifications, industry exposure, and soft skills development, ensuring an all-round growth experience.",
      sampleDegree: {
        name: "MBA",
        description: "The MBA program emphasizes strategic thinking, leadership, and entrepreneurship to prepare students for the dynamic global business environment.",
        image: '/sample-degrees/manipal-jaipur.webp'
      }
    },
    admissionProcess: [
      "Visit the MUJ Online website",
      "Choose the desired program and check eligibility",
      "Complete the online application form",
      "Upload necessary documents for verification",
      "Pay the admission fee and complete enrollment",
      "Receive confirmation and access course materials"
    ],
    faqs: [
      {
        question: "Is the degree from MUJ Online valid internationally?",
        answer: "Yes, MUJ Online degrees are recognized globally and hold NAAC A+ accreditation."
      },
      {
        question: "Are scholarships available for online courses?",
        answer: "Yes, MUJ Online provides merit-based scholarships for eligible candidates."
      },
      {
        question: "Can working professionals enroll in these programs?",
        answer: "Yes, the courses are designed to accommodate the needs of working professionals with flexible schedules."
      },
      {
        question: "Does MUJ Online offer placement support?",
        answer: "Yes, the university has a dedicated placement cell to assist students with career opportunities."
      }
    ],
    UniBrochure: {
      file: "file"
    }
  },
  
  // SIKKIM MANIPAL UNIVERSITY
  {
    id: 'sikkim-manipal-university',
    name: 'Sikkim Manipal University Online (SMU)',
    logo: '/universities-logo/sikkim-manipal.webp?height=80&width=80',
    image: '/universities-thumbs/sikkim-manipal.webp?q=tbn:ANd9GcSzy3WAwfW1omMflWYqbn-FLXvimLSm2ujDzIofmtYoW7arLJo8tCIlRbcXJH7Slv-6b0c&usqp=CAU',
    mode: 'Online',
    accreditation: {
      grade: 'A+',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 27500,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "MCA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 24500,
        brochure: "link-to-mca-brochure"
      },
      {
        program: "BA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 12500,
        brochure: "link-to-bca-brochure"
      },
      {
        program: "B.Com",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 12500,
        brochure: "link-to-bcom-brochure"
      },
      {
        program: "MCOM",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 22500,
        brochure: "link-to-mcom-brochure"
      },
      {
        program: "MA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 18750,
        brochure: "link-to-ma-brochure"
      }
    ],

    location: {
      city: 'Gangtok',
      state: 'Sikkim'
    },

    approvals: [
      { name: 'UGC', image: '/approvals-logo/ugc.webp?height=100&width=100', description: 'University Grants Commission' },
      { name: 'AICTE', image: '/approvals-logo/aicte.webp?height=100&width=100', description: 'All India Council for Technical Education' },
      { name: 'NAAC A+', image: '/approvals-logo/naac-A+.webp?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'NIRF', image: '/approvals-logo/nirf.webp?height=100&width=100', description: 'National Institutional Ranking Framework' },
      
    ],

    about: "Sikkim Manipal University (SMU) Online is one of India's premier institutions offering quality online education for students and professionals alike. As a part of the prestigious Manipal Group, SMU combines its legacy of academic excellence with cutting-edge online learning technologies. The university is dedicated to empowering students through flexible and accessible education, ensuring they can learn from anywhere, at any time. SMU Online courses are designed to foster critical thinking, innovation, and problem-solving skills, preparing students for the challenges of the global workforce. With a commitment to providing top-notch education, SMU boasts a distinguished faculty, industry-aligned curricula, and comprehensive student support services. Its vision is to bridge the gap between traditional and modern education, creating opportunities for learners worldwide.",

    keyHighlights: [
      "Legacy of the prestigious Manipal Education Group",
      "Seamless online education with advanced learning platforms",
      "Industry-relevant courses and skill-building programs",
      "Affordable and accessible to students across the globe",
      "Strong alumni network and placement support"
    ],

    emiOptions: "Flexible EMI options available for all programs, making education affordable and stress-free.",
    whyChoose: [
      "Recognized by UGC-DEB for online and distance education",
      "Courses designed for skill enhancement and career growth",
      "Highly qualified and experienced faculty members",
      "Comprehensive learning materials and e-library access",
      "Global recognition of degrees with NAAC accreditation"
    ],
    benefitsOfStudying: [
      "Opportunity to learn from industry experts",
      "Flexibility to study at your own pace",
      "Online assessments with robust proctoring",
      "Career counseling and mentorship programs",
      "High-quality interactive course content"
    ],
    examConduct: "Examinations are conducted online with AI and manual proctoring to ensure integrity and fairness.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A+', 'AICTE'],
    academicApproach: "SMU Online focuses on a learner-centered approach, integrating technology and pedagogy to create an immersive educational experience.",
    quantitativeMetrics: {
      placementRate: "95%",
      corporateTieups: "500+",
      students: "1,00,000+",
      experience: "20+ years"
    },
    placements: {
      sectors: [
        "Banking & Financial Services",
        "Information Technology",
        "Healthcare & Pharma",
        "E-commerce & Retail",
        "Engineering & Manufacturing"
      ],
      images: [
        "/companies-logo/amazon.webp",
        "/companies-logo/deloitte.webp",
        "/companies-logo/ibm.webp",
        "/companies-logo/genpact.webp",
        "/companies-logo/jsw.webp",
        "/companies-logo/target.webp",
        "/companies-logo/ey.webp",
        "/companies-logo/kpmg.webp"
      ]
    },
    moreThanDegree: {
      description: "Sikkim Manipal University Online provides a holistic educational experience that goes beyond degrees, offering certification programs, industry projects, and career development services to ensure comprehensive growth.",
      sampleDegree: {
        name: "MBA",
        description: "The MBA program emphasizes leadership, strategic thinking, and global business practices to prepare students for managerial roles.",
        image: '/sample-degrees/sikkim-manipal.webp'
      }
    },
    admissionProcess: [
      "Visit the official SMU Online website",
      "Select your desired program and review the details",
      "Complete the online registration form",
      "Upload required documents for eligibility verification",
      "Pay the admission fees through the secure portal",
      "Receive confirmation and access learning resources"
    ],
    faqs: [
      {
        question: "Are SMU Online degrees recognized globally?",
        answer: "Yes, SMU Online degrees are globally recognized and accredited by UGC-DEB and NAAC A+."
      },
      {
        question: "What support is available for working professionals?",
        answer: "SMU Online offers flexible schedules and mentorship programs tailored for working professionals."
      },
      {
        question: "Does SMU provide placement assistance?",
        answer: "Yes, SMU Online has a dedicated placement cell to assist students in securing job opportunities."
      },
      {
        question: "Are there any scholarships for online students?",
        answer: "Merit-based scholarships are available for eligible students."
      }
    ],
    UniBrochure: {
      file: "file.pdf"
    }
  },
  
  // Sharda University

  {
    id: "sharda-university",
    name: "Sharda University Online",
    logo: "/universities-logo/sharda.webp?height=80&width=80",
    image: "/universities-thumbs/sharda.webp",
    mode: "Online",
    accreditation: {
      grade: "A+",
      body: "NAAC"
    },
    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 25000,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "MCA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 25000,
        brochure: "link-to-mca-brochure"
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 17500,
        brochure: "link-to-bba-brochure"
      },
      {
        program: "BCA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 17500,
        brochure: "link-to-bca-brochure"
      },
      {
        program: "BA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 17500,
        brochure: "link-to-ba-brochure"
      }
    ],
    location: {
      city: "Greater Noida",
      state: "Uttar Pradesh"
    },
    approvals: [
      {
        name: "UGC-DEB",
        image: "/approvals-logo/ugc-deb.webp?height=100&width=100",
        description: "University Grants Commission for Distance Education"
      },
      {
        name: "NAAC A+",
        image: "/approvals-logo/naac-A+.webp?height=100&width=100",
        description: "National Assessment and Accreditation Council"
      },
      { name: 'NIRF', image: '/approvals-logo/nirf.webp?height=100&width=100', description: 'National Institutional Ranking Framework' },

      { name: 'NBA', image: '/approvals-logo/NBA.webp?height=100&width=100', description: 'National Board Of Accreditation' },

      { name: 'INC', image: '/approvals-logo/inc.webp?height=100&width=100', description: 'International Nursing Council' },
    ],
    about: "Sharda University Online provides quality online education across multiple disciplines. It is known for its industry-relevant curriculum, global recognition, and learner-centric approach, making education accessible worldwide.",
    keyHighlights: [
      "Accredited by NAAC with an A+ grade",
      "Flexible learning with advanced technology platforms",
      "Affordable education with EMI options",
      "Global recognition and strong alumni network",
      "Dedicated placement support"
    ],
    emiOptions: "Flexible EMI options available for all programs, making education accessible and stress-free.",
    whyChoose: [
      "Recognized by UGC-DEB for online and distance education",
      "Courses tailored for skill development and career growth",
      "Comprehensive learning resources and e-library access",
      "Expert faculty with industry experience",
      "Wide array of specializations in undergraduate and postgraduate programs"
    ],
    benefitsOfStudying: [
      "Learn at your own pace with a flexible schedule",
      "Access to virtual labs and industry projects",
      "Online assessments with AI-proctoring for fairness",
      "Career counseling and placement assistance",
      "Interactive and engaging course content"
    ],
    examConduct: "Examinations are conducted online with AI and manual proctoring to ensure academic integrity.",
    accreditationsApprovals: ["UGC-DEB", "NAAC A+"],
    academicApproach: "Sharda Online integrates technology and pedagogy to create a learner-centric environment.",
    quantitativeMetrics: {
      placementRate: "90%",
      corporateTieups: "400+",
      students: "50,000+",
      experience: "28+ years"
    },
    placements: {
      sectors: [
        "IT & Software",
        "Banking & Finance",
        "Healthcare",
        "E-commerce",
        "Media & Entertainment"
      ],
      images: [
        "/companies-logo/microsoft.webp",
        "/companies-logo/samsung.webp",
        "/companies-logo/google.webp",
        "/companies-logo/deloitte.webp",
        "/companies-logo/cognizant.webp",
        "/companies-logo/paytm.webp",
        "/companies-logo/infosys.webp",
        "/companies-logo/genpact.webp",
        "/companies-logo/kpmg.webp",
        "/companies-logo/h&m.webp",
        "/companies-logo/tata-motors.webp",
      ]
    },
    moreThanDegree: {
      description: "Sharda University Online offers holistic education with certifications, industry projects, and career services.",
      sampleDegree: {
        name: "MBA",
        description: "Focused on leadership, strategy, and global business practices.",
        image: "/sample-degrees/sharda.webp"
      }
    },
    admissionProcess: [
      "Visit the official Sharda University Online website",
      "Select your desired program and review the details",
      "Complete the online application form",
      "Upload necessary documents",
      "Pay the admission fees through the secure portal",
      "Receive confirmation and access learning materials"
    ],
    faqs: [
      {
        question: "Are Sharda Online degrees globally recognized?",
        answer: "Yes, they are UGC-DEB and NAAC-accredited, ensuring global recognition."
      },
      {
        question: "What support is available for working professionals?",
        answer: "Sharda Online offers flexible schedules and dedicated mentorship."
      },
      {
        question: "Does Sharda provide placement assistance?",
        answer: "Yes, a dedicated placement cell supports students with job opportunities."
      },
      {
        question: "Are there scholarships available?",
        answer: "Yes, merit-based scholarships are offered to eligible students."
      }
    ],
    UniBrochure: {
      file: "file.pdf"
    }
  },
  
  // Uttaranchal University 
  {
    id: 'uttaranchal-university',
    name: 'Uttaranchal University Online',
    logo: "/universities-logo/uttaranchal.webp?height=80&width=80",
    image: "/universities-thumbs/uttaranchal.webp",
    mode: 'Online',
    accreditation: {
      grade: 'A+',
      body: 'NAAC',
    },
    courses: [
      {
        program: 'BBA',
        degree: 'Bachelor Degree',
        duration: '3 Years',
        feesPerSemester: 14500,
        brochure: 'link-to-bba-brochure',
      },
      {
        program: 'BCA',
        degree: 'Bachelor Degree',
        duration: '3 Years',
        feesPerSemester: 14500,
        brochure: 'link-to-bca-brochure',
      },
      {
        program: 'BA',
        degree: 'Bachelor Degree',
        duration: '3 Years',
        feesPerSemester: 9500,
        brochure: 'link-to-ba-brochure',
      },
      {
        program: 'MBA',
        degree: 'Master Degree',
        duration: '2 Years',
        feesPerSemester: 20500,
        brochure: 'link-to-mba-brochure',
      },
      {
        program: 'MCA',
        degree: 'Master Degree',
        duration: '2 Years',
        feesPerSemester: 20500,
        brochure: 'link-to-mca-brochure',
      },
    ],
    location: {
      city: 'Dehradun',
      state: 'Uttarakhand',
    },
    approvals: [
      { name: 'UGC', image: '/approvals-logo/ugc.webp?height=100&width=100', description: 'University Grants Commission' },
      { name: 'AICTE', image: '/approvals-logo/aicte.webp?height=100&width=100', description: 'All India Council for Technical Education' },
      { name: 'NAAC A+', image: '/approvals-logo/naac-A+.webp?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'AIU', image: '/approvals-logo/aiu.webp?height=100&width=100', description: 'Association of Indian Universities' },
      { name: 'ISO', image: '/approvals-logo/iso.webp?height=100&width=100', description: 'International Organization for Standardization' },
      { name: 'WURI', image: '/approvals-logo/wuri.webp?height=100&width=100', description: 'WURI Ranking' },
      { name: 'PCI', image: '/approvals-logo/pci.webp?height=100&width=100', description: 'Pharmacy Council Of India' },

    ],
    about: "Uttaranchal University is a renowned institution offering quality online education. It combines academic excellence with digital innovation to provide flexible, accessible learning options. Its courses focus on developing industry-relevant skills to meet the needs of a global workforce.",
    keyHighlights: [
      'NAAC-accredited institution with an A+ grade',
      'Seamless online education via advanced platforms',
      'Industry-relevant programs designed for career growth',
      'Flexible schedules for working professionals',
      'Dedicated placement support with industry tie-ups',
    ],
    emiOptions: "Flexible EMI options available for all programs, making education affordable.",
    whyChoose: [
      'Recognized by UGC-DEB for online and distance education',
      'Courses tailored for career advancement',
      'Comprehensive learning resources and e-library',
      'Highly qualified faculty with industry experience',
    ],
    benefitsOfStudying: [
      'Flexibility to study at your own pace',
      'AI-driven online assessments for fairness',
      'Career counseling and placement support',
      'Interactive, high-quality learning materials',
    ],
    examConduct: 'Examinations are conducted online with AI-based and manual proctoring.',
    accreditationsApprovals: ['UGC-DEB', 'NAAC A+'],
    academicApproach: 'Focused on learner-centric pedagogy integrating technology with education.',
    quantitativeMetrics: {
      placementRate: '92%',
      corporateTieups: '300+',
      students: '50,000+',
      experience: '15+ years',
    },
    placements: {
      sectors: [
        'Banking & Financial Services',
        'Information Technology',
        'E-commerce & Retail',
        'Healthcare',
        'Engineering',
      ],
      images: [
        "/companies-logo/samsung.webp",
        "/companies-logo/flipkart.webp",
        "/companies-logo/microsoft.webp",
        "/companies-logo/deloitte.webp",
        "/companies-logo/kpmg.webp",
        "/companies-logo/capgemini.webp",
        "/companies-logo/wipro.webp",
        "/companies-logo/genpact.webp",
        "/companies-logo/tata.webp",
        "/companies-logo/hindustan-unilever-limited.webp",
        "/companies-logo/reliance.webp",
      ],
    },

    moreThanDegree: {
      description: "Amity Online goes beyond academics to provide skill-based learning, leadership training, and hands-on experience through live projects and workshops. Students graduate with not just a degree, but also the confidence to excel in their careers.",
      sampleDegree: {
        name: "MBA",
        description: "The MBA program at Amity Online equips students with leadership, analytical, and strategic skills needed to thrive in competitive industries.",
        image: '/sample-degrees/uttaranchal.webp'
      }
    },

    admissionProcess: [
      'Visit the official Uttaranchal University website.',
      'Select your program and review the details.',
      'Complete the online registration form.',
      'Upload required documents for eligibility verification.',
      'Pay admission fees through the secure portal.',
      'Receive confirmation and access learning resources.',
    ],
    faqs: [
      {
        question: 'Are Uttaranchal University online degrees recognized globally?',
        answer: 'Yes, they are globally recognized and accredited by UGC-DEB and NAAC A+.',
      },
      {
        question: 'Does Uttaranchal University offer placement assistance?',
        answer: 'Yes, the university has tie-ups with top companies to support student placements.',
      },
      {
        question: 'Are scholarships available for online students?',
        answer: 'Merit-based scholarships are offered to eligible students.',
      },
    ],
    UniBrochure: {
      file: 'file.pdf',
    },
  },

  // SHOOLINI UNIVERSITY
  {
    id: 'shoolini-university',
    name: 'Shoolini University Online',
    logo: '/universities-logo/shoolini.webp?height=80&width=80',
    image: '/universities-thumbs/shoolini.webp',
    mode: 'Online',
    accreditation: {
      grade: 'A+',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 20000,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "MA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 10000,
        brochure: "link-to-ma-brochure"
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 8950,
        brochure: "link-to-bba-brochure"
      },
      {
        program: "BCA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 8950,
        brochure: "link-to-bca-brochure"
      },
      {
        program: "BJMC",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 10000,
        brochure: "link-to-bjmc-brochure"
      },
    ],

    location: {
      city: 'Solan',
      state: 'Himachal Pradesh'
    },

    approvals: [
      { name: 'UGC', image: '/approvals-logo/ugc.webp?height=100&width=100', description: 'University Grants Commission for Distance Education' },
      { name: 'NAAC', image: '/approvals-logo/naac.webp?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'NIRF', image: '/approvals-logo/nirf.webp?height=100&width=100', description: 'National Institutional Ranking Framework ' },
      { name: 'QS World University', image: '/approvals-logo/qs.webp?height=100&width=100', description: 'QS World University Rankings' },

    ],

    about: "Shoolini University Online is a trailblazer in higher education, combining academic excellence with an innovative online platform to cater to students worldwide. Known for its research-driven approach, Shoolini University provides a nurturing environment for learners, with state-of-the-art digital resources and an emphasis on practical skills. With a mission to transform education, the university delivers high-quality online programs that align with industry demands, fostering a generation of leaders and professionals. Students benefit from a rich learning experience, supported by a highly qualified faculty, personalized mentorship, and collaborative projects. The institution takes pride in its robust placement track record, ensuring students are equipped to excel in their careers. Shoolini University is committed to creating global citizens through holistic and accessible online education.",

    keyHighlights: [
      "First Indian university with a QS 5-star rating in research",
      "Award-winning online learning platforms",
      "Strong focus on innovation and entrepreneurship",
      "Highly affordable yet globally recognized degrees",
      "Exceptional student support and mentorship programs"
    ],

    emiOptions: "Shoolini University provides easy EMI payment plans to support students financially.",
    whyChoose: [
      "Recognized by NAAC with an A++ grade",
      "Leading-edge online learning methodologies",
      "Industry-integrated curriculum for real-world readiness",
      "Strong placement support with leading companies",
      "Research opportunities even for online learners"
    ],
    benefitsOfStudying: [
      "Practical learning with a research focus",
      "24/7 access to a world-class e-library and learning resources",
      "Flexible and interactive virtual classrooms",
      "Networking opportunities with peers and alumni",
      "Global recognition and career enhancement"
    ],
    examConduct: "Exams are conducted online with secure AI-enabled proctoring to ensure fairness and credibility.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A', 'AICTE'],
    academicApproach: "The university's approach blends theoretical concepts with experiential learning, utilizing advanced online tools to create a collaborative environment.",
    quantitativeMetrics: {
      placementRate: "98%",
      corporateTieups: "600+",
      students: "50,000+",
      experience: "15+ years"
    },
    placements: {
      sectors: [
        "Banking & Financial Services",
        "Technology & Consulting",
        "Healthcare & Life Sciences",
        "Retail & E-commerce",
        "Education & Research"
      ],
      images: [
        "/companies-logo/lt.webp",
        "/companies-logo/lg.webp",
        "/companies-logo/zydus.webp",
        "/companies-logo/genpact.webp",
        "/companies-logo/ericsson.webp",
        "/companies-logo/nestle.webp",
        "/companies-logo/hindustan-unilever-limited.webp",
      ]
    },
    moreThanDegree: {
      description: "Beyond degrees, Shoolini University provides avenues for research, professional certifications, and skill development, creating a well-rounded academic journey.",
      sampleDegree: {
        name: "BBA",
        description: "This BBA program focuses on entrepreneurial skills, global business practices, and leadership development.",
        image: '/sample-degrees/shoolini.webp'
      }
    },
    admissionProcess: [
      "Visit the official Shoolini University Online website",
      "Select your program and go through the details",
      "Fill out the registration form with personal and academic information",
      "Submit the required documents for verification",
      "Make the admission fee payment securely online",
      "Receive confirmation and access to the student dashboard"
    ],
    faqs: [
      {
        question: "How is the online experience at Shoolini University different from others?",
        answer: "Shoolini University integrates research-based learning with cutting-edge online tools, offering students a unique and engaging experience."
      },
      {
        question: "What types of students benefit most from Shoolini's programs?",
        answer: "Shoolini's programs cater to working professionals, students seeking flexibility, and anyone aspiring for a global standard of education."
      },
      {
        question: "Does Shoolini provide any guidance for research projects?",
        answer: "Yes, students are mentored by experienced faculty members and have access to research facilities for various projects."
      },
      {
        question: "Are the programs suitable for international students?",
        answer: "Absolutely. The programs are globally recognized and designed to accommodate international learners."
      },
      {
        question: "What kind of technical support is available for online learners?",
        answer: "A dedicated technical support team is available 24/7 to assist students with any platform or course-related issues."
      }
    ],
    UniBrochure: {
      file: "file.pdf"
    }
  },

  // UPES UNIVERSITY
  {
    id: 'upes-university',
    name: 'UPES Online',
    logo: '/universities-logo/upes.webp?height=80&width=80',
    image: '/universities-thumbs/upes.webp',
    mode: 'Online',
    accreditation: {
      grade: 'A',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 43750,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 25000,
        brochure: "link-to-bba-brochure"
      },
      {
        program: "BCA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 25000,
        brochure: "link-to-bca-brochure"
      },
      {
        program: "PGP in Power Management",
        degree: "PGP",
        duration: "10 Months",
        feesPerSemester: 75000,
        brochure: "link-to-Pgp-power-mgmt-brochure"
      },
      {
        program: "PGP in Gas Management",
        degree: "PGP",
        duration: "10 Months",
        feesPerSemester: 75000,
        brochure: "link-to-pgp-gas-mgmt-brochure"
      },
      {
        program: "PGP in Renewable Energy",
        degree: "PGP",
        duration: "10 Months",
        feesPerSemester: 75000,
        brochure: "link-to-pgp-Renewable-Energy-brochure"
      },
      {
        program: "PGP in Industrial Safety",
        degree: "PGP",
        duration: "10 Months",
        feesPerSemester: 75000,
        brochure: "link-to-pgp-Industrial-Safety-brochure"
      },
      {
        program: "PGP in Logistics and Supply Chain Management",
        degree: "PGP",
        duration: "10 Months",
        feesPerSemester: 75000,
        brochure: "link-to-pgp-logistic-brochure"
      },
    ],

    location: {
      city: 'Dehradun',
      state: 'Uttarakhand'
    },

    approvals: [
      { name: 'UGC-DEB', image: '/approvals-logo/ugc-deb.webp?height=100&width=100', description: 'University Grants Commission for Distance Education' },
      { name: 'NAAC A', image: '/approvals-logo/naac-A.webp?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'NIRF', image: '/approvals-logo/nirf.webp?height=100&width=100', description: 'National Institutional Ranking Framework ' },
      { name: 'QS World University', image: '/approvals-logo/qs.webp?height=100&width=100', description: 'QS World University Rankings' },

    ],

    about: "UPES Online is an innovative initiative by the University of Petroleum and Energy Studies, offering high-quality education in a flexible online format. With a focus on catering to industry demands, UPES Online provides specialized programs in energy, business, and digital domains. Leveraging advanced technology and experienced faculty, the university aims to empower students with practical skills and knowledge for career advancement. UPES Online is ideal for working professionals and students who seek academic excellence combined with the convenience of online learning.",

    keyHighlights: [
      "Recognized as a leader in specialized education",
      "Flexible online programs tailored for working professionals",
      "Experienced faculty with strong industry expertise",
      "Interactive learning with access to premium digital resources",
      "Placement support and career guidance"
    ],

    emiOptions: "UPES Online offers EMI options to ease the financial burden of education.",
    whyChoose: [
      "Programs designed to meet industry-specific requirements",
      "Globally recognized curriculum and degrees",
      "Opportunities to interact with industry experts",
      "Support for career growth and placements",
      "Accredited by UGC-DEB and NAAC with an ‘A’ grade"
    ],
    benefitsOfStudying: [
      "Industry-aligned curriculum",
      "Flexible schedules for online learning",
      "Access to a vast digital library",
      "Collaborative projects and case studies",
      "Placement opportunities with reputed firms"
    ],
    examConduct: "Online examinations with secure proctoring systems.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A', 'AICTE'],
    academicApproach: "UPES Online emphasizes practical learning combined with academic excellence to prepare students for global challenges.",
    quantitativeMetrics: {
      placementRate: "96%",
      corporateTieups: "500+",
      students: "15,000+",
      experience: "20+ years"
    },
    placements: {
      sectors: [
        "Energy and Environment",
        "Digital Marketing",
        "Banking and Insurance",
        "International Business"
      ],
      images: [
        "/companies-logo/microsoft.webp",
        "/companies-logo/flipkart.webp",
        "/companies-logo/deloitte.webp",
        "/companies-logo/cognizant.webp",
        "/companies-logo/accenture.webp",
        "/companies-logo/capgemini.webp",
        "/companies-logo/tcs.webp",
      ]
    },
    moreThanDegree: {
      description: "UPES Online offers more than just degrees by integrating certifications, real-world projects, and industry-relevant training.",
      sampleDegree: {
        name: "MBA (Energy Management)",
        description: "A focused MBA program tailored to prepare professionals for leadership roles in the energy sector.",
        image: '/sample-degrees/upes.webp'
      }
    },
    admissionProcess: [
      "Visit the UPES Online website",
      "Explore the online programs and choose the right one for you",
      "Complete the application form online",
      "Upload the required documents",
      "Pay the registration fee online",
      "Receive your admission confirmation and login credentials"
    ],
    faqs: [
      {
        question: "Are UPES Online programs industry-recognized?",
        answer: "Yes, UPES Online programs are designed to meet industry standards and are globally recognized."
      },
      {
        question: "Can I manage UPES Online studies with a full-time job?",
        answer: "Yes, the programs are flexible, allowing working professionals to balance work and studies."
      },
      {
        question: "What resources are available for online students?",
        answer: "UPES Online provides access to a comprehensive e-library, live sessions, and recorded lectures."
      },
      {
        question: "How does UPES Online ensure quality education?",
        answer: "With experienced faculty, industry-aligned courses, and interactive learning tools, UPES Online ensures top-notch education."
      },
      {
        question: "Is there any support for career development?",
        answer: "Yes, students receive placement assistance, mentorship, and career guidance to enhance their prospects."
      }
    ],
    UniBrochure: {
      file: "file.pdf"
    }
  },

  // VIVEKANAND GLOBAL UNIVERSITY
  {
    id: 'vivekanand-global-university',
    name: 'Vivekanand Global University Online',
    logo: '/universities-logo/vgu.webp?height=80&width=80',
    image: '/universities-thumbs/vivekanand.webp',
    mode: 'Online',
    accreditation: {
      grade: 'A+',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 32500,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "MCA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 32500,
        brochure: "link-to-mca-brochure"
      },
      {
        program: "MSC",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 16500,
        brochure: "link-to-msc-brochure"
      },

      {
        program: "MA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 16500,
        brochure: "link-to-ma-brochure"
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 19000,
        brochure: "link-to-bba-brochure"
      },
      {
        program: "BCA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 19000,
        brochure: "link-to-bca-brochure"
      },
      {
        program: "BA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 10000,
        brochure: "link-to-ba-brochure"
      }
    ],

    location: {
      city: 'Jaipur',
      state: 'Rajasthan'
    },

    approvals: [
      { name: 'UGC', image: '/approvals-logo/ugc.webp?height=100&width=100', description: 'University Grants Commission' },
      { name: 'AICTE', image: '/approvals-logo/aicte.webp?height=100&width=100', description: 'All India Council for Technical Education' },
      { name: 'NAAC A+', image: '/approvals-logo/naac-A+.webp?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'AIU', image: '/approvals-logo/aiu.webp?height=100&width=100', description: 'Association Of Inidian Universities' },
    ],

    about: "Vivekanand Global University Online (VGU) is a pioneering institution dedicated to delivering quality education through flexible online programs. Based in Jaipur, Rajasthan, VGU emphasizes skill-oriented learning to meet the dynamic demands of the global workforce. Through cutting-edge technology, experienced faculty, and industry-focused curricula, VGU Online ensures that students gain practical skills, knowledge, and certifications that align with their career aspirations. The online programs are designed for students and professionals seeking excellence in education without compromising their personal or professional commitments.",

    keyHighlights: [
      "Skill-based, industry-relevant programs",
      "Flexibility for working professionals",
      "Experienced faculty and practical learning modules",
      "Digital-first approach to education",
      "Dedicated career and placement support"
    ],

    emiOptions: "VGU Online provides affordable EMI options to make education accessible.",
    whyChoose: [
      "Skill-focused, industry-aligned curriculum",
      "Recognized by NAAC and UGC-DEB",
      "Flexible online programs suitable for all learners",
      "Placement assistance with top recruiters",
      "Global exposure through virtual platforms"
    ],
    benefitsOfStudying: [
      "Practical and project-based learning",
      "Industry certifications included in programs",
      "Flexible schedules and personalized support",
      "Interactive online learning with recorded sessions",
      "Internship and placement support for career growth"
    ],
    examConduct: "Secure online exams with proctored systems for fairness and transparency.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A'],
    academicApproach: "VGU Online focuses on a learner-centric, application-driven educational approach for global readiness.",
    quantitativeMetrics: {
      placementRate: "95%",
      corporateTieups: "200+",
      students: "10,000+",
      experience: "15+ years"
    },
    placements: {
      sectors: [
        "Data Science and Analytics",
        "Business Management",
        "Hospital Administration",
        "Finance and Banking"
      ],
      images: [
        "/companies-logo/tata-motors.webp",
        "/companies-logo/apple.webp",
        "/companies-logo/infosys.webp",
        "/companies-logo/kpmg.webp",
        "/companies-logo/ibm.webp",
        "/companies-logo/genpact.webp",
        "/companies-logo/deloitte.webp",
        "/companies-logo/ey.webp",
      ]
    },
    moreThanDegree: {
      description: "VGU Online ensures a holistic learning experience by integrating additional certifications, practical projects, and skill-based training within the curriculum.",
      sampleDegree: {
        name: "MBA (Business Analytics)",
        description: "A comprehensive program designed to build analytical and strategic management expertise.",
        image: '/sample-degrees/vivekananda.webp'
      }
    },
    admissionProcess: [
      "Explore VGU Online's website for available programs",
      "Choose a program and fill out the application form online",
      "Upload required documents for verification",
      "Pay the registration fee through the online portal",
      "Receive confirmation and start your academic journey"
    ],
    faqs: [
      {
        question: "What makes VGU Online programs unique?",
        answer: "VGU Online focuses on practical and industry-driven education to prepare students for global opportunities."
      },
      {
        question: "How flexible are the online programs?",
        answer: "The programs are designed to allow learners to manage studies alongside professional commitments."
      },
      {
        question: "Do students receive placement support?",
        answer: "Yes, students have access to placement assistance and career mentoring services."
      },
      {
        question: "What resources are available for online students?",
        answer: "Students get access to e-books, recorded lectures, live sessions, and project resources."
      },
      {
        question: "Can international students apply to VGU Online programs?",
        answer: "Yes, VGU Online welcomes international students to its flexible programs."
      }
    ],
    UniBrochure: {
      file: "file.pdf"
    }
  },


  // VIGNAN UNIVERSITY
  {
    id: 'vignan-university',
    name: "Vignan University",
    logo: '/universities-logo/vignan.webp?height=80&width=80',
    image: '/universities-thumbs/vignan.webp',
    mode: 'Online',
    accreditation: {
      grade: 'A',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 27500,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "MCA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 27500,
        brochure: "link-to-mca-brochure"
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 22500,
        brochure: "link-to-bba-brochure"
      },
      {
        program: "BCA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 22500,
        brochure: "link-to-bca-brochure"
      },
    ],

    location: {
      city: 'Guntur',
      state: 'Andhra Pradesh'
    },

    approvals: [
      { name: 'UGC', image: '/approvals-logo/ugc.webp?height=100&width=100', description: 'University Grants Commission' },
      { name: 'AICTE', image: '/approvals-logo/aicte.webp?height=100&width=100', description: 'All India Council for Technical Education' },
      { name: 'NAAC A+', image: '/approvals-logo/naac-A+.webp?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'NIRF', image: '/approvals-logo/nirf.webp?height=100&width=100', description: 'National Institutional Ranking Framework' },
      { name: 'ISO', image: '/approvals-logo/iso.webp?height=100&width=100', description: 'International Organization for Standardization' },
    ],

    about: "Vignan University Online provides innovative and flexible learning opportunities for students and working professionals. Known for its emphasis on research and quality education, the university designs its online programs to deliver industry-relevant knowledge and skills. It offers a robust learning management system with access to comprehensive resources, ensuring an enriching academic experience. With a focus on holistic development, Vignan University aims to create future-ready professionals equipped to excel in competitive environments.",

    keyHighlights: [
      "NAAC 'A' accredited university",
      "Specialized online programs for professionals",
      "Experienced faculty and personalized mentorship",
      "Seamless digital learning experience",
      "Placement assistance and career support"
    ],

    emiOptions: "Flexible EMI plans are available to make education accessible for all learners.",
    whyChoose: [
      "Accredited university with a strong reputation",
      "Programs designed with industry collaboration",
      "Interactive and engaging virtual learning",
      "Focus on both academic and practical skill-building",
      "Career-oriented education with placement support"
    ],
    benefitsOfStudying: [
      "Learn from experienced industry-oriented faculty",
      "Flexible schedules for working professionals",
      "Access to recorded lectures and study materials",
      "Opportunity to network with peers and experts",
      "Certification from a reputed institution"
    ],
    examConduct: "Vignan University conducts online exams using secure proctoring technology to maintain assessment integrity.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A'],
    academicApproach: "The university integrates practical learning with academic concepts, emphasizing innovation and problem-solving skills.",
    quantitativeMetrics: {
      placementRate: "90%",
      corporateTieups: "100+",
      students: "10,000+",
      experience: "15+ years"
    },
    placements: {
      sectors: [
        "Business Management",
        "Entrepreneurship",
        "Finance",
        "Operations and Supply Chain"
      ],
      images: [
        "/companies-logo/ey.webp",
        "/companies-logo/google.webp",
        "/companies-logo/amazon.webp",
        "/companies-logo/wipro.webp",
        "/companies-logo/deloitte.webp",
        "/companies-logo/icici-bank.webp",
        "/companies-logo/kpmg.webp",
        "/companies-logo/hdfc-bank.webp",
        "/companies-logo/flipkart.webp",
        "/companies-logo/honeywell.webp",
      ]
    },
    moreThanDegree: {
      description: "Vignan University's online programs offer skill-building courses, practical projects, and career development initiatives that go beyond traditional education.",
      sampleDegree: {
        name: "MBA (General Management)",
        description: "A comprehensive program tailored for aspiring business leaders, focusing on strategic management and leadership skills.",
        image: '/sample-degrees/vignan-university.webp'
      }
    },
    admissionProcess: [
      "Visit the official Vignan University Online website",
      "Choose the desired program and complete the application form",
      "Upload necessary documents for eligibility verification",
      "Pay the registration fee through the secure portal",
      "Start learning after admission confirmation"
    ],
    faqs: [
      {
        question: "What makes Vignan University's online programs unique?",
        answer: "The programs are designed to combine theoretical knowledge with practical skills, catering to the needs of modern industries."
      },
      {
        question: "Are placement services offered for online courses?",
        answer: "Yes, students receive placement support and career guidance to enhance their employment opportunities."
      },
      {
        question: "How are online classes conducted?",
        answer: "Classes are delivered through an advanced learning management system with live and recorded lectures."
      },
      {
        question: "Can international students enroll in these programs?",
        answer: "Yes, the programs are open to international students, providing them with flexible learning options."
      },
      {
        question: "Is financial assistance available?",
        answer: "Yes, EMI options are available to make the courses more affordable for students."
      }
    ],
    UniBrochure: {
      file: "file.pdf"
    }
  },


  // KURUKSHETRA UNIVERSITY
  {
    id: 'kurukshetra-university',
    name: "Kurukshetra University Online",
    logo: '/universities-logo/kurukshetra.webp?height=80&width=80',
    image: '/universities-thumbs/kurukshetra.webp',
    mode: 'Online',
    accreditation: {
      grade: 'A+',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 10000,
        brochure: "link-to-ma-english-brochure"
      },
      {
        program: "BA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 6000,
        brochure: "link-to-ba-general-brochure"
      }
    ],

    location: {
      city: 'Kurukshetra',
      state: 'Haryana'
    },

    approvals: [
      { name: 'UGC', image: '/approvals-logo/ugc.webp?height=100&width=100', description: 'University Grants Commission' },
      { name: 'AICTE', image: '/approvals-logo/aicte.webp?height=100&width=100', description: 'All India Council for Technical Education' },
      { name: 'NAAC A+', image: '/approvals-logo/naac-A+.webp?height=100&width=100', description: 'National Assessment and Accreditation Council' },
    ],

    about: "Kurukshetra University is a prestigious institution with a legacy of academic excellence. The university's online programs are designed to offer accessible and high-quality education to students worldwide. Leveraging cutting-edge technology, Kurukshetra University ensures an engaging and interactive learning experience. The curriculum is industry-aligned and focuses on holistic development to prepare students for competitive professional environments.",

    keyHighlights: [
      "NAAC 'A+' accredited university",
      "Renowned for its academic heritage",
      "Affordable and flexible online programs",
      "Comprehensive learning resources",
      "Placement support and guidance"
    ],

    emiOptions: "Easy EMI options are available for all eligible students.",
    whyChoose: [
      "Recognized university with decades of academic excellence",
      "Cost-effective online education",
      "Accessible learning from any location",
      "Expert faculty with practical insights",
      "Supportive learning environment"
    ],
    benefitsOfStudying: [
      "Learn from a university with a rich legacy",
      "Flexible scheduling for working professionals",
      "Access to online resources and recorded lectures",
      "Focused on both theoretical and practical knowledge",
      "Globally recognized degree credentials"
    ],
    examConduct: "Examinations are conducted online with strict proctoring to ensure integrity and transparency.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A+'],
    academicApproach: "Kurukshetra University emphasizes academic rigor combined with practical learning methodologies to create a balanced and enriching educational experience.",
    quantitativeMetrics: {
      placementRate: "85%",
      corporateTieups: "50+",
      students: "20,000+",
      experience: "65+ years"
    },
    placements: {
      sectors: [
        "Education",
        "Public Administration",
        "Creative Writing",
        "Content Development"
      ],
      images: [
        "/companies-logo/accenture.webp",
        "/companies-logo/h&m.webp",
        "/companies-logo/byjus.webp",
        "/companies-logo/axis-bank.webp",
        "/companies-logo/deloitte.webp",
      ]
    },
    moreThanDegree: {
      description: "Kurukshetra University's online courses provide opportunities to build employability skills, practical knowledge, and a solid academic foundation for lifelong learning.",
      sampleDegree: {
        name: "Master of Arts (English)",
        description: "A program designed to deepen understanding of English literature and enhance critical thinking, writing, and analytical skills.",
        image: '/sample-degrees/kurukshetra-university.webp'
      }
    },
    admissionProcess: [
      "Visit the Kurukshetra University Online portal",
      "Select your preferred program and register",
      "Upload all required academic documents",
      "Submit the application fee online",
      "Receive admission confirmation and start learning"
    ],
    faqs: [
      {
        question: "What are the benefits of Kurukshetra University's online programs?",
        answer: "The programs are designed for flexibility, affordability, and accessibility, catering to students from diverse backgrounds."
      },
      {
        question: "Is placement support available?",
        answer: "Yes, Kurukshetra University provides career guidance and placement support for its online program students."
      },
      {
        question: "How are the online classes conducted?",
        answer: "Classes are delivered through an interactive online platform with live sessions, recorded lectures, and resources."
      },
      {
        question: "Are the degrees recognized globally?",
        answer: "Yes, the degrees offered by Kurukshetra University are recognized and hold significant value."
      },
      {
        question: "What financial assistance options are available?",
        answer: "EMI options and scholarships may be available for eligible students."
      }
    ],
    UniBrochure: {
      file: "file.pdf"
    }
  },

  // DY PATIL UNIVERSITY
  {
    id: 'dy-patil-university',
    name: 'DY Patil University Online',
    logo: '/universities-logo/dy-patil.webp?height=80&width=80',
    image: '/universities-thumbs/dy-patil.webp',
    mode: 'Online',
    accreditation: {
      grade: 'A++',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 45000,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 25000,
        brochure: "link-to-bba-brochure"
      },
    ],

    location: {
      city: 'Navi Mumbai',
      state: 'Maharashtra'
    },

    approvals: [
      { name: 'UGC-DEB', image: '/approvals-logo/ugc-deb.webp?height=100&width=100', description: 'University Grants Commission for Distance Education' },
      { name: 'NAAC A++', image: '/approvals-logo/naac-A++.webp?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'NIRF', image: '/approvals-logo/nirf.webp?height=100&width=100', description: 'National Institutional Ranking Framework' },
      { name: 'AICTE', image: '/approvals-logo/aicte.webp?height=100&width=100', description: 'National Institutional Ranking Framework' },
      { name: 'AIU', image: '/approvals-logo/aiu.webp?height=100&width=100', description: 'Association of indian universities' },
      { name: 'WES', image: '/approvals-logo/wes.webp?height=100&width=100', description: 'World Education Services' },
      { name: 'ISO', image: '/approvals-logo/iso.webp?height=100&width=100?height=100&width=100', description: 'International Organization for Standardization' },
    ],

    about: "DY Patil University Online is a top-tier institution in India, offering flexible and high-quality online programs designed to cater to diverse academic and professional needs. With a focus on innovation, global exposure, and industry relevance, DY Patil University aims to provide a world-class education to students across the globe. Its online programs are crafted to equip learners with practical knowledge and skills essential for today's dynamic job market. The university is known for its strong emphasis on academic excellence, cutting-edge research, and holistic development, ensuring students thrive in their careers.",

    keyHighlights: [
      "State-of-the-art virtual learning platform",
      "Experienced faculty with industry expertise",
      "NAAC A++ accreditation ensures academic excellence",
      "Flexible schedules for working professionals",
      "Comprehensive career support and placement assistance"
    ],

    emiOptions: "Affordable EMI options are available to make online programs accessible for all students.",
    whyChoose: [
      "Globally recognized, NAAC A++ accredited university",
      "Innovative, industry-aligned curriculum",
      "Flexible learning tailored for working professionals",
      "Placement support with top recruiters across various sectors",
      "Robust student support services"
    ],
    benefitsOfStudying: [
      "Hands-on projects and practical learning",
      "Interactive and engaging online classes",
      "Global networking opportunities",
      "Access to recorded lectures and study materials",
      "Career-oriented certifications and mentorship programs"
    ],
    examConduct: "DY Patil University conducts secure online examinations using AI-based proctoring to ensure integrity and fairness.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A++'],
    academicApproach: "The university adopts a learner-centric, application-focused pedagogy to create industry-ready professionals.",
    quantitativeMetrics: {
      placementRate: "97%",
      corporateTieups: "250+",
      students: "20,000+",
      experience: "20+ years"
    },
    placements: {
      sectors: [
        "Marketing and Sales",
        "Human Resources",
        "Finance and Banking",
        "Hospitality and Tourism"
      ],
      images: [
        "/companies-logo/microsoft.webp",
        "/companies-logo/abb.webp",
        "/companies-logo/cognizant.webp",
        "/companies-logo/apollo.webp",
        "/companies-logo/tcs.webp",
        "/companies-logo/pwc.webp",
        "/companies-logo/ey.webp",
        "/companies-logo/genpact.webp",
        "/companies-logo/paytm.webp",
        "/companies-logo/nestle.webp"
      ]
    },
    moreThanDegree: {
      description: "DY Patil Online goes beyond traditional education by integrating certifications, real-world projects, and skill-building exercises into its programs.",
      sampleDegree: {
        name: "MBA (Marketing Management)",
        description: "An advanced program designed to build strategic marketing and managerial expertise.",
        image: '/sample-degrees/dy-patil.webp'
      }
    },
    admissionProcess: [
      "Visit the official DY Patil University Online website",
      "Select a program and fill out the online application form",
      "Upload the necessary documents for eligibility verification",
      "Pay the application fee through the secure portal",
      "Receive admission confirmation and begin the course"
    ],
    faqs: [
      {
        question: "What are the benefits of choosing DY Patil Online programs?",
        answer: "DY Patil Online provides flexible, industry-relevant programs that align with career aspirations, ensuring students excel in the professional world."
      },
      {
        question: "How are online classes conducted?",
        answer: "Classes are conducted on an advanced digital platform with live sessions, recorded lectures, and interactive modules."
      },
      {
        question: "Are placement services available for online students?",
        answer: "Yes, dedicated placement support is provided to help students secure jobs in leading companies."
      },
      {
        question: "What is the mode of assessment for online programs?",
        answer: "Assessments include assignments, projects, and proctored online exams."
      },
      {
        question: "Is there an option for international students to enroll?",
        answer: "Yes, international students are welcome to apply and benefit from the flexible online programs."
      }
    ],
    UniBrochure: {
      file: "file.pdf"
    }
  },

  // AMRITA UNIVERSITY
  {
    id: 'amrita-university',
    name: "Amrita Vishwa Vidyapeetham Online",
    logo: '/universities-logo/amrita.webp',
    image: '/universities-thumbs/amrita.webp',
    mode: 'Online',
    accreditation: {
      grade: 'A++',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 42500,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "MCOM",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 22500,
        brochure: "link-to-mcom-brochure"
      },
      {
        program: "MCA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 38000,
        brochure: "link-to-mca-brochure"
      },
      {
        program: "BCOM",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 20000,
        brochure: "link-to-bcom-brochure"
      },
      {
        program: "BCA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 25000,
        brochure: "link-to-bca-brochure"
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 25000,
        brochure: "link-to-bba-brochure"
      }
    ],

    location: {
      city: 'Coimbatore',
      state: 'Tamil Nadu'
    },

    approvals: [
      { name: 'UGC', image: '/approvals-logo/ugc.webp?height=100&width=100', description: 'University Grants Commission' },
      { name: 'NAAC A++', image: '/approvals-logo/naac-A++.webp?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'AICTE', image: '/approvals-logo/aicte.webp?height=100&width=100', description: 'All India Council for Technical Education' },
      { name: 'NIRF', image: '/approvals-logo/nirf.webp?height=100&width=100', description: 'National Institutional Ranking Framework' },
      { name: 'WES', image: '/approvals-logo/wes.webp?height=100&width=100', description: 'World Education Services' },
    ],

    about: "Amrita Vishwa Vidyapeetham is a globally recognized institution offering high-quality online education. With a mission to impart value-based education, the university's online programs are meticulously designed to balance theoretical knowledge and practical skills. Amrita University leverages advanced digital platforms to provide a seamless and engaging learning experience, making education accessible to students across the world.",

    keyHighlights: [
      "NAAC 'A++' accredited university",
      "Global recognition for academic excellence",
      "Interactive online learning modules",
      "Industry-aligned curriculum",
      "Dedicated placement support"
    ],

    emiOptions: "Flexible EMI options are available for all eligible students.",
    whyChoose: [
      "Ranked among the top universities in India",
      "Highly experienced faculty and mentors",
      "Blended learning approach with online tools",
      "Affordable fee structure with global recognition",
      "Comprehensive placement assistance"
    ],
    benefitsOfStudying: [
      "Flexibility for working professionals and students",
      "Innovative learning methodologies",
      "Access to a wide range of resources and mentors",
      "Opportunities to engage with global academic communities",
      "Recognized degrees with a focus on employability"
    ],
    examConduct: "Examinations are conducted online through a secure and proctored system.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A++', 'NIRF Top Ranked'],
    academicApproach: "Amrita focuses on combining technology-driven education with traditional academic values to deliver an enriched learning experience.",
    quantitativeMetrics: {
      placementRate: "90%",
      corporateTieups: "70+",
      students: "25,000+",
      experience: "20+ years"
    },
    placements: {
      sectors: [
        "Banking and Finance",
        "IT Services",
        "Management Consulting",
        "E-commerce"
      ],
      images: [
        "/companies-logo/mckinsey-and-company.webp",
        "/companies-logo/amazon.webp",
        "/companies-logo/deloitte.webp",
        "/companies-logo/mphasis.webp",
        "/companies-logo/wipro.webp",
        "/companies-logo/tcs.webp",
        "/companies-logo/cognizant.webp",
        "/companies-logo/honeywell.webp",
        "/companies-logo/hdfc-bank.webp"
      ]
    },
    moreThanDegree: {
      description: "Amrita University emphasizes holistic learning that extends beyond academics, ensuring students are equipped with essential skills for personal and professional growth.",
      sampleDegree: {
        name: "Master of Business Administration (MBA)",
        description: "An industry-oriented program designed to enhance leadership, managerial, and analytical skills, preparing students for the dynamic business environment.",
        image: '/sample-degrees/amrita-online.webp'
      }
    },
    admissionProcess: [
      "Visit the Amrita Online Programs portal",
      "Choose your desired course and sign up",
      "Upload necessary academic and personal documents",
      "Pay the application fee online",
      "Receive confirmation of admission and begin your journey"
    ],
    faqs: [
      {
        question: "What makes Amrita University's online programs unique?",
        answer: "Amrita focuses on value-based education, blending traditional knowledge with modern technology to deliver an exceptional learning experience."
      },
      {
        question: "Are there scholarships available?",
        answer: "Yes, Amrita offers merit-based scholarships for eligible students."
      },
      {
        question: "Can working professionals join these programs?",
        answer: "Absolutely, the online programs are designed to accommodate the schedules of working professionals."
      },
      {
        question: "What support is provided for placements?",
        answer: "The university provides extensive placement support, including career counseling and interview preparation."
      },
      {
        question: "What is the mode of class delivery?",
        answer: "Classes are conducted online with live sessions, pre-recorded lectures, and access to learning resources."
      }
    ],
    UniBrochure: {
      file: "file.pdf"
    }
  },

  // ANDHRA UNIVERSITY
  {
    id: 'andhra-university',
    name: "Andhra University Online",
    logo: '/universities-logo/andhra.webp?height=80&width=80',
    image: '/universities-thumbs/andhra.webp',
    mode: 'Online',
    accreditation: {
      grade: 'A',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MCA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 35000,
        brochure: "link-to-mca-brochure"
      },
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 40000,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "MA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 15000,
        brochure: "link-to-ma-english-brochure"
      }
    ],

    location: {
      city: 'Visakhapatnam',
      state: 'Andhra Pradesh'
    },

    approvals: [
      { name: 'UGC', image: '/approvals-logo/ugc.webp?height=100&width=100', description: 'University Grants Commission for Distance Education' },
      { name: 'NAAC A', image: '/approvals-logo/naac-A.webp?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'NIRF', image: '/approvals-logo/nirf.webp?height=100&width=100', description: 'National Institutional Ranking Framework' },
    ],

    about: "Andhra University, established in 1926, is one of India's oldest and most prestigious universities. The university offers a range of online programs tailored to meet the educational needs of students and working professionals. With a focus on delivering accessible and flexible education, Andhra University ensures quality learning through its cutting-edge digital platforms and robust academic resources.",

    keyHighlights: [
      "NAAC 'A' accredited university",
      "Wide array of industry-oriented programs",
      "Highly interactive and engaging online classes",
      "Strong emphasis on academic excellence and career development",
      "Affordable fee structure with installment options"
    ],

    emiOptions: "Flexible payment options, including EMIs, are available for all programs.",
    whyChoose: [
      "Renowned for academic heritage and quality",
      "Innovative curriculum designed for career advancement",
      "Experienced faculty with real-world expertise",
      "Digital tools to enhance learning outcomes",
      "Accessible programs for students across India and abroad"
    ],
    benefitsOfStudying: [
      "Opportunity to learn from a top-ranked university",
      "Flexibility to balance education with other commitments",
      "Access to extensive academic and career support resources",
      "Recognition from employers for accredited degrees",
      "Networking opportunities with peers and alumni"
    ],
    examConduct: "Online proctored exams are conducted to maintain transparency and academic integrity.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A'],
    academicApproach: "Andhra University emphasizes a learner-centric approach, combining theoretical foundations with practical applications for comprehensive education.",
    quantitativeMetrics: {
      placementRate: "88%",
      corporateTieups: "50+",
      students: "20,000+",
      experience: "95+ years"
    },
    placements: {
      sectors: [
        "Education and Research",
        "Corporate Management",
        "Public Administration",
        "Media and Communication"
      ],
      images: [
        "/companies-logo/apple.webp",
        "/companies-logo/infosys.webp",
        "/companies-logo/ibm.webp",
        "/companies-logo/genpact.webp",
        "/companies-logo/deloitte.webp",
        "/companies-logo/ey.webp",
      ]
    },
    moreThanDegree: {
      description: "Andhra University provides holistic education that equips students with critical skills and a strong foundation for lifelong learning.",
      sampleDegree: {
        name: "Master of Business Administration (MBA)",
        description: "Designed to foster leadership and strategic thinking skills, the program prepares students for diverse roles in the business sector.",
        image: '/sample-degrees/andhra.jpg'
      }
    },
    admissionProcess: [
      "Visit Andhra University's online program portal",
      "Choose a course and fill in the application form",
      "Submit academic and personal documents",
      "Pay the registration fee",
      "Receive confirmation and access to the learning platform"
    ],
    faqs: [
      {
        question: "What programs are offered online by Andhra University?",
        answer: "Currently, MBA and M.A. English are offered in the online mode."
      },
      {
        question: "Are the online degrees recognized?",
        answer: "Yes, all online degrees are approved by UGC-DEB and NAAC."
      },
      {
        question: "How are exams conducted?",
        answer: "Examinations are conducted online under strict proctoring to ensure integrity."
      },
      {
        question: "Can I pursue online education while working full-time?",
        answer: "Yes, the programs are designed to provide flexibility for working professionals."
      },
      {
        question: "What kind of support will I receive during the course?",
        answer: "Students receive access to study materials, live sessions, and mentoring from experienced faculty."
      }
    ],
    UniBrochure: {
      file: "file.pdf"
    }
  },



  // Distance learning universities
      
      // Mangalaytan university

  {
    id: 'mangalayatan-university',
    name: 'Mangalayatan University Distance',
    logo: '/universities-logo/mangalayatan.webp?height=80&width=80',
    image: '/universities-thumbs/mangalayatan.webp',
    mode: 'Distance',
    accreditation: {
      grade: 'A+',
      body: 'NAAC'
    },

    courses: [
      {
        program: "MBA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 40000,
        brochure: "link-to-mba-brochure"
      },
      {
        program: "MCA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 38000,
        brochure: "link-to-mca-brochure"
      },
      {
        program: "BBA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 15500,
        brochure: "link-to-bba-brochure"
      },
      {
        program: "BCA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 15500,
        brochure: "link-to-bca-brochure"
      },
      {
        program: "BA",
        degree: "Bachelor Degree",
        duration: "3 Years",
        feesPerSemester: 4000,
        brochure: "link-to-ba-brochure"
      },
      {
        program: "MCOM",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 9000,
        brochure: "link-to-mcom-brochure"
      },
      {
        program: "MSC",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 12000,
        brochure: "link-to-msc-brochure"
      },
      {
        program: "MA",
        degree: "Master Degree",
        duration: "2 Years",
        feesPerSemester: 8000,
        brochure: "link-to-ma-brochure"
      }
    ],

    location: {
      city: 'Aligarh',
      state: 'Uttar Pradesh'
    },

    approvals: [
      { name: 'UGC-DEB', image: '/approvals-logo/ugc-deb.webp?height=100&width=100', description: 'University Grants Commission for Distance Education' },
      { name: 'NAAC A+', image: '/approvals-logo/naac-A+.webp?height=100&width=100', description: 'National Assessment and Accreditation Council' },
      { name: 'AIU', image: '/approvals-logo/aiu.webp?height=100&width=100', description: 'Association of Indian Universities' },
    ],

    about: "Mangalayatan University Online is committed to delivering high-quality education to students across the globe. Known for its innovative teaching methodologies and strong academic framework, the university offers a range of programs designed to meet the dynamic needs of students and professionals. Mangalayatan University leverages advanced technology to provide a seamless and engaging learning experience through live classes, recorded lectures, and interactive study materials. Its focus on holistic development and skill enhancement ensures that students are well-equipped to meet global challenges. The institution emphasizes experiential learning, real-world projects, and extensive support services, including career guidance and placement assistance, making it a trusted choice for online learners. With a vision to inspire and empower learners, Mangalayatan University Online continues to set benchmarks in quality education and academic excellence.",

    keyHighlights: [
      "Dynamic curriculum tailored to meet industry demands",
      "Comprehensive online education tools for flexibility",
      "Affordable fee structure and scholarship options",
      "Global recognition and strong alumni network",
      "Interactive virtual classrooms with expert faculty"
    ],

    emiOptions: "Affordable EMI options available to ease financial constraints for students.",
    whyChoose: [
      "Recognized for academic excellence and innovation",
      "Programs aligned with professional and personal growth",
      "Flexible learning schedule for working professionals",
      "Strong placement network with leading companies",
      "Dedicated student support and mentorship"
    ],
    benefitsOfStudying: [
      "Access to world-class faculty and resources",
      "Interactive live and recorded sessions",
      "Career-oriented certifications and internships",
      "Flexible learning environment to balance work and study",
      "Regular assessments and feedback for continuous improvement"
    ],
    examConduct: "Examinations are conducted online using secure, AI-proctored systems ensuring integrity and convenience.",
    accreditationsApprovals: ['UGC-DEB', 'NAAC A+', 'AIU'],
    academicApproach: "Mangalayatan University Online integrates theoretical foundations with practical applications to nurture critical thinking, creativity, and problem-solving abilities.",
    quantitativeMetrics: {
      placementRate: "95%",
      corporateTieups: "500+",
      students: "75,000+",
      experience: "15+ years"
    },
    placements: {
      sectors: [
        "Information Technology",
        "Banking & Finance",
        "Marketing & Sales",
        "Education & Research",
        "Healthcare & Wellness"
      ],
      images: [
        "/companies-logo/icici-bank.webp",
        "/companies-logo/amazon.webp",
        "/companies-logo/infosys.webp",
        "/companies-logo/genpact.webp",
        "/companies-logo/dainik-jagran.webp",
        "/companies-logo/radisson.webp",
        "/companies-logo/capgemini.webp",
        "/companies-logo/policybazaar.webp",
      ]
    },
    moreThanDegree: {
      description: "Mangalayatan University Online ensures a comprehensive learning experience, offering additional certifications, hands-on projects, and networking opportunities to help students excel beyond academics.",
      sampleDegree: {
        name: "MBA",
        description: "The MBA program focuses on developing leadership, strategic thinking, and managerial skills for modern business challenges.",
        image: '/sample-degrees/mangalayatan.webp'
      }
    },
    admissionProcess: [
      "Visit the Mangalayatan University Online website",
      "Explore available programs and select the desired one",
      "Complete the online application form",
      "Submit necessary documents for verification",
      "Pay the admission fee",
      "Receive enrollment confirmation and start learning"
    ],
    faqs: [
      {
        question: "Is Mangalayatan University Online recognized internationally?",
        answer: "Yes, it holds accreditations such as AIU, making its degrees globally valid."
      },
      {
        question: "What support is provided for online learners?",
        answer: "Students receive personalized mentorship, technical assistance, and career counseling throughout the course."
      },
      {
        question: "What is the eligibility criteria for undergraduate programs?",
        answer: "Candidates must have completed 10+2 or equivalent from a recognized board."
      },
      {
        question: "Does Mangalayatan University offer scholarships?",
        answer: "Yes, the university provides merit-based scholarships for eligible students."
      }
    ],
    UniBrochure: {
      file: "file.pdf"
    }
  },
  
  ]