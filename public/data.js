// Lawyer Data
const lawyers = [
    {
        id: "1",
        name: "Ahmed Khan",
        title: "Senior Advocate",
        specializations: ["Family Law", "Civil Litigation"],
        experience: 15,
        location: "Karachi",
        rating: 4.8,
        reviewCount: 156,
        consultationFee: 5000,
        barCouncil: "Sindh Bar Council",
        languages: ["English", "Urdu"],
        education: "LLB from Karachi University, LLM from Oxford",
        about: "Experienced legal professional specializing in family law and civil litigation. Known for compassionate approach and strong advocacy.",
        achievements: [
            "Successfully handled 500+ family law cases",
            "Member of Sindh Bar Council since 2008",
            "Recognized as Top Family Lawyer in Karachi 2023"
        ]
    },
    {
        id: "2",
        name: "Fatima Malik",
        title: "Corporate Law Expert",
        specializations: ["Corporate Law", "Tax Law"],
        experience: 12,
        location: "Lahore",
        rating: 4.9,
        reviewCount: 203,
        consultationFee: 6000,
        barCouncil: "Punjab Bar Council",
        languages: ["English", "Urdu", "Punjabi"],
        education: "LLB from Punjab University, MBA from LUMS",
        about: "Corporate law specialist with expertise in business formation, mergers, and tax compliance. Trusted advisor to many Pakistani businesses.",
        achievements: [
            "Advised 100+ corporate clients",
            "Expert in Pakistani tax law",
            "Featured speaker at business law conferences"
        ]
    },
    {
        id: "3",
        name: "Hassan Ali",
        title: "Criminal Defense Attorney",
        specializations: ["Criminal Law", "Constitutional Law"],
        experience: 20,
        location: "Islamabad",
        rating: 4.7,
        reviewCount: 189,
        consultationFee: 7000,
        barCouncil: "Islamabad Bar Council",
        languages: ["English", "Urdu"],
        education: "LLB from Quaid-i-Azam University, LLM from London School of Economics",
        about: "Highly experienced criminal defense lawyer with a track record of successful cases in Pakistani courts.",
        achievements: [
            "20 years of criminal defense experience",
            "Successfully defended high-profile cases",
            "Guest lecturer at law schools"
        ]
    },
    {
        id: "4",
        name: "Ayesha Siddiqui",
        title: "Property Law Specialist",
        specializations: ["Property Law", "Real Estate"],
        experience: 10,
        location: "Karachi",
        rating: 4.6,
        reviewCount: 142,
        consultationFee: 4500,
        barCouncil: "Sindh Bar Council",
        languages: ["English", "Urdu"],
        education: "LLB from NED University, Diploma in Real Estate Law",
        about: "Property law expert helping clients with land disputes, transfers, and real estate transactions.",
        achievements: [
            "Resolved 300+ property disputes",
            "Expert in Karachi land records",
            "Published articles on property law"
        ]
    },
    {
        id: "5",
        name: "Bilal Hussain",
        title: "Civil Litigation Expert",
        specializations: ["Civil Litigation", "Contract Law"],
        experience: 8,
        location: "Lahore",
        rating: 4.5,
        reviewCount: 98,
        consultationFee: 4000,
        barCouncil: "Punjab Bar Council",
        languages: ["English", "Urdu", "Punjabi"],
        education: "LLB from University of the Punjab",
        about: "Civil litigation lawyer with focus on contract disputes and commercial litigation.",
        achievements: [
            "Won 85% of civil cases",
            "Specialist in contract law",
            "Rising star in legal profession"
        ]
    },
    {
        id: "6",
        name: "Sara Noor",
        title: "Family Law Advocate",
        specializations: ["Family Law", "Women's Rights"],
        experience: 7,
        location: "Islamabad",
        rating: 4.9,
        reviewCount: 167,
        consultationFee: 4500,
        barCouncil: "Islamabad Bar Council",
        languages: ["English", "Urdu"],
        education: "LLB from International Islamic University, Gender Studies Certificate",
        about: "Dedicated family law practitioner with special focus on women's rights and custody matters.",
        achievements: [
            "Advocate for women's legal rights",
            "Handled 200+ family law cases",
            "Volunteer legal aid provider"
        ]
    },
    {
        id: "7",
        name: "Imran Sheikh",
        title: "Corporate Counsel",
        specializations: ["Corporate Law", "Intellectual Property"],
        experience: 14,
        location: "Karachi",
        rating: 4.7,
        reviewCount: 134,
        consultationFee: 6500,
        barCouncil: "Sindh Bar Council",
        languages: ["English", "Urdu"],
        education: "LLB from Karachi University, IP Law Certificate from WIPO",
        about: "Corporate law and intellectual property specialist serving Pakistani businesses and startups.",
        achievements: [
            "Registered 150+ trademarks",
            "Expert in Pakistani IP law",
            "Startup legal advisor"
        ]
    },
    {
        id: "8",
        name: "Zainab Raza",
        title: "Tax Law Consultant",
        specializations: ["Tax Law", "Corporate Law"],
        experience: 11,
        location: "Lahore",
        rating: 4.8,
        reviewCount: 156,
        consultationFee: 5500,
        barCouncil: "Punjab Bar Council",
        languages: ["English", "Urdu"],
        education: "LLB from LUMS, Chartered Accountant",
        about: "Tax law expert helping businesses navigate Pakistani tax regulations and compliance.",
        achievements: [
            "Dual qualification: Lawyer & CA",
            "Tax planning specialist",
            "Saved clients millions in tax disputes"
        ]
    }
];

const legalServices = [
    {
        id: "family",
        name: "Family Law",
        description: "Expert guidance on marriage, divorce, custody, and inheritance matters under Pakistani law.",
        icon: "team"
    },
    {
        id: "corporate",
        name: "Corporate Law",
        description: "Business formation, contracts, compliance, and corporate governance for Pakistani businesses.",
        icon: "building"
    },
    {
        id: "criminal",
        name: "Criminal Law",
        description: "Defense representation and legal counsel for criminal cases in Pakistani courts.",
        icon: "scales"
    },
    {
        id: "property",
        name: "Property Law",
        description: "Land disputes, property transfers, and real estate transactions.",
        icon: "building"
    },
    {
        id: "civil",
        name: "Civil Litigation",
        description: "Contract disputes, torts, and general civil matters in Pakistani courts.",
        icon: "scales"
    },
    {
        id: "tax",
        name: "Tax Law",
        description: "Tax planning, compliance, and dispute resolution with Pakistani tax authorities.",
        icon: "team"
    }
];
