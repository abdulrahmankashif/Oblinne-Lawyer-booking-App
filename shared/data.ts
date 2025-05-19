// Legal service categories with descriptions
export const legalServices = [
  {
    id: "family",
    name: "Family Law",
    description: "Legal assistance for marriage, divorce, child custody, and inheritance matters under Pakistani law.",
    icon: "team"
  },
  {
    id: "corporate",
    name: "Corporate Law",
    description: "Expert guidance on business formation, contracts, and commercial disputes in Pakistan's legal framework.",
    icon: "building"
  },
  {
    id: "criminal",
    name: "Criminal Defense",
    description: "Strong representation for criminal cases with expertise in Pakistani penal code and procedure.",
    icon: "scales"
  },
  {
    id: "property",
    name: "Property Law",
    description: "Legal counsel on real estate transactions, disputes, and land acquisition matters in Pakistan.",
    icon: "home"
  },
  {
    id: "tax",
    name: "Tax Law",
    description: "Professional advice on tax compliance, planning, and dispute resolution with Pakistani tax authorities.",
    icon: "file-text"
  },
  {
    id: "immigration",
    name: "Immigration Law",
    description: "Expert assistance with visas, citizenship, and legal status matters within Pakistan's immigration system.",
    icon: "plane"
  }
];

// Featured lawyers for the home page
export const featuredLawyers = [
  {
    id: 1,
    name: "Ahmed Khan",
    title: "Corporate Law Specialist",
    location: "Lahore, Punjab",
    rating: 4.9,
    specialties: ["Business Law", "Contracts", "Mergers"],
    image: null // We won't use images in the prototype
  },
  {
    id: 2,
    name: "Farah Ahmed",
    title: "Family Law Expert",
    location: "Islamabad, Capital Territory",
    rating: 4.8,
    specialties: ["Divorce", "Child Custody", "Inheritance"],
    image: null
  },
  {
    id: 3,
    name: "Zafar Malik",
    title: "Criminal Defense Lawyer",
    location: "Karachi, Sindh",
    rating: 4.7,
    specialties: ["Criminal Law", "FIR Cases", "Bail"],
    image: null
  }
];

// Comprehensive lawyer data for listings and profiles
export const allLawyers = [
  {
    id: 1,
    name: "Ahmed Khan",
    title: "Corporate Law Specialist",
    bio: "Ahmed Khan is a seasoned corporate lawyer with extensive experience in business law, commercial transactions, and corporate governance. He has represented numerous Pakistani and international clients in complex legal matters.",
    gender: "male",
    city: "Lahore",
    province: "Punjab",
    court: "Lahore High Court",
    address: "123 Mall Road, Lahore",
    rating: 4.9,
    reviewCount: 98,
    yearsOfExperience: 12,
    consultationFee: 8000,
    successRate: 92,
    languages: ["English", "Urdu", "Punjabi"],
    specialties: ["Corporate Law", "Business Formation", "Contracts", "Mergers & Acquisitions", "Intellectual Property"],
    specializationIds: ["corporate"],
    background: "Ahmed Khan brings over 12 years of specialized experience in corporate and commercial law, with particular expertise in mergers and acquisitions, joint ventures, and corporate restructuring within the Pakistani legal framework.",
    additionalInfo: "As a member of the Lahore Bar Association and an advocate of the High Court, he has successfully represented clients in complex commercial disputes, regulatory investigations, and high-profile corporate transactions.",
    expertiseAreas: [
      "Corporate governance and compliance with Pakistani company laws",
      "Business formation and restructuring",
      "Commercial contracts and negotiations",
      "Mergers, acquisitions, and joint ventures",
      "Securities regulation and capital markets",
      "Intellectual property protection for businesses",
      "Foreign investment in Pakistan"
    ],
    philosophy: "Ahmed believes in providing practical, business-oriented legal solutions that protect his clients' interests while facilitating their commercial goals. He takes a proactive approach to legal issues, emphasizing risk management and strategic planning.",
    availability: {
      "Monday": true,
      "Tuesday": true,
      "Wednesday": true,
      "Thursday": true,
      "Friday": false,
      "Saturday": true,
      "Sunday": false
    },
    experience: [
      {
        position: "Senior Partner",
        company: "Khan & Associates",
        duration: "2015 - Present",
        description: "Lead corporate attorney handling high-value transactions and complex litigation for multinational corporations and local businesses."
      },
      {
        position: "Associate Lawyer",
        company: "Rahman & Co.",
        duration: "2010 - 2015",
        description: "Specialized in corporate law, handling contract negotiations, business formations, and representing clients in commercial disputes."
      },
      {
        position: "Legal Consultant",
        company: "Pakistan Business Council",
        duration: "2008 - 2010",
        description: "Provided legal advice to council members on regulatory compliance and business law matters."
      }
    ],
    education: [
      {
        degree: "LLM in Corporate Law",
        institution: "University of London",
        year: "2007"
      },
      {
        degree: "LLB",
        institution: "Punjab University Law College",
        year: "2005"
      }
    ],
    barAdmissions: [
      "Punjab Bar Council (2006)",
      "Lahore High Court Bar Association (2008)",
      "Supreme Court of Pakistan (2015)"
    ],
    reviews: [
      {
        name: "Tariq Abdullah",
        rating: 5,
        date: "May 15, 2023",
        comment: "Mr. Khan provided exceptional service for our company's merger. His expertise in corporate law made a complex process much smoother. Highly recommended!"
      },
      {
        name: "Sana Enterprises",
        rating: 5,
        date: "March 8, 2023",
        comment: "We've been working with Ahmed for our business legal matters for over 3 years. His advice is always practical and tailored to our specific needs."
      },
      {
        name: "Asif Mehmood",
        rating: 4,
        date: "February 22, 2023",
        comment: "Professional service and in-depth knowledge of Pakistani corporate regulations. Helped us navigate a complex intellectual property dispute."
      }
    ],
    faqs: [
      {
        question: "What types of business entities can you help establish in Pakistan?",
        answer: "I can assist with all types of business structures including Sole Proprietorships, Partnerships, Limited Liability Companies (LLCs), Private Limited Companies, Public Limited Companies, and Branch/Liaison offices of foreign companies."
      },
      {
        question: "How long does company registration typically take in Pakistan?",
        answer: "With all proper documentation in place, a private limited company can be registered in approximately 7-14 working days. However, this timeline can vary based on complexity and current SECP processing times."
      },
      {
        question: "Do you provide ongoing legal compliance services for businesses?",
        answer: "Yes, I offer comprehensive compliance packages to ensure your business remains in good standing with all relevant Pakistani regulatory bodies, including annual filings, tax compliance, and corporate governance matters."
      }
    ]
  },
  {
    id: 2,
    name: "Farah Ahmed",
    title: "Family Law Expert",
    bio: "Farah Ahmed specializes in family law matters with a compassionate approach to divorce, custody, and inheritance cases. She has helped numerous families navigate difficult legal situations with sensitivity and expertise.",
    gender: "female",
    city: "Islamabad",
    province: "Capital Territory",
    court: "Islamabad District Courts",
    address: "45 Blue Area, Islamabad",
    rating: 4.8,
    reviewCount: 84,
    yearsOfExperience: 8,
    consultationFee: 5000,
    successRate: 95,
    languages: ["English", "Urdu", "Punjabi"],
    specialties: ["Divorce", "Child Custody", "Inheritance Law", "Guardianship", "Marriage Laws"],
    specializationIds: ["family"],
    background: "Farah Ahmed has dedicated her career to family law and has established herself as one of Islamabad's leading attorneys in divorce, custody, and inheritance matters. Her practice focuses on achieving amicable resolutions when possible, while vigorously protecting her clients' interests when litigation is necessary.",
    additionalInfo: "As a certified mediator, Farah brings unique conflict resolution skills to her family law practice, often helping clients avoid lengthy court battles in favor of negotiated settlements that preserve family relationships.",
    expertiseAreas: [
      "Divorce and legal separation under Pakistani law",
      "Child custody and visitation rights",
      "Inheritance disputes and succession planning",
      "Guardianship and adoption",
      "Marriage contracts and prenuptial agreements",
      "Domestic violence protection orders",
      "Family property division"
    ],
    philosophy: "Farah believes that family law matters require not only legal expertise but also emotional intelligence and cultural sensitivity. She strives to minimize conflict while ensuring her clients' rights and interests are fully protected.",
    availability: {
      "Monday": true,
      "Tuesday": true,
      "Wednesday": true,
      "Thursday": true,
      "Friday": true,
      "Saturday": false,
      "Sunday": false
    },
    experience: [
      {
        position: "Principal Attorney",
        company: "Ahmed Family Law Practice",
        duration: "2018 - Present",
        description: "Founded and lead a specialized family law practice focusing on divorce, custody, and inheritance matters."
      },
      {
        position: "Senior Associate",
        company: "Malik & Partners",
        duration: "2015 - 2018",
        description: "Led the family law department, handling complex divorce and child custody cases."
      },
      {
        position: "Associate",
        company: "Islamabad Legal Aid Society",
        duration: "2012 - 2015",
        description: "Provided pro bono legal representation to underprivileged women in family law matters."
      }
    ],
    education: [
      {
        degree: "LLM in Family Law",
        institution: "Quaid-i-Azam University",
        year: "2011"
      },
      {
        degree: "LLB",
        institution: "International Islamic University, Islamabad",
        year: "2009"
      }
    ],
    barAdmissions: [
      "Islamabad Bar Council (2010)",
      "Islamabad High Court Bar Association (2013)"
    ],
    reviews: [
      {
        name: "Ayesha Khan",
        rating: 5,
        date: "April 23, 2023",
        comment: "Ms. Ahmed handled my divorce case with utmost professionalism and sensitivity. She made a difficult process much easier to bear. I appreciated her clear communication throughout."
      },
      {
        name: "Muhammad Ali",
        rating: 5,
        date: "January 17, 2023",
        comment: "Farah helped resolve a complex inheritance dispute in our family. Her mediation skills prevented what could have been a bitter court battle. Highly recommended."
      },
      {
        name: "Saima Jabeen",
        rating: 4,
        date: "November 5, 2022",
        comment: "Professional, knowledgeable and compassionate. Ms. Ahmed took the time to understand my child custody concerns and fought effectively for my parental rights."
      }
    ],
    faqs: [
      {
        question: "What documents do I need for filing for divorce in Pakistan?",
        answer: "You'll need your Nikah Nama (marriage certificate), CNIC copies of both spouses, photographs, and any evidence supporting your grounds for divorce. The specific requirements may vary based on whether you're filing for khula or talaq."
      },
      {
        question: "How is child custody typically determined in Pakistani courts?",
        answer: "Pakistani courts generally consider the child's welfare as paramount. For children under age 7, mothers are often granted physical custody (hizanat), while fathers maintain guardianship rights (wilayat). For older children, the court considers multiple factors including the child's preference, parents' character, and ability to provide care."
      },
      {
        question: "How are inheritance disputes resolved under Islamic law in Pakistan?",
        answer: "Inheritance under Islamic law follows specific shares prescribed in the Quran. I help clients navigate these prescribed shares, prepare proper documentation, and when disputes arise, pursue resolution through negotiation or court proceedings based on the applicable school of Islamic jurisprudence and Pakistani succession laws."
      }
    ]
  },
  {
    id: 3,
    name: "Zafar Malik",
    title: "Criminal Defense Attorney",
    bio: "Zafar Malik is a dedicated criminal defense lawyer with a reputation for aggressive advocacy and strategic defense planning. He has successfully defended clients in high-profile cases throughout Pakistan.",
    gender: "male",
    city: "Karachi",
    province: "Sindh",
    court: "Sindh High Court",
    address: "78 Clifton Road, Karachi",
    rating: 4.7,
    reviewCount: 105,
    yearsOfExperience: 15,
    consultationFee: 10000,
    successRate: 88,
    languages: ["English", "Urdu", "Sindhi"],
    specialties: ["Criminal Defense", "FIR Cases", "Bail Applications", "White Collar Crime", "Appeals"],
    specializationIds: ["criminal"],
    background: "With 15 years of experience in criminal law, Zafar Malik has established himself as one of Pakistan's premier criminal defense attorneys. He has successfully represented clients in cases ranging from minor offenses to serious felonies, including high-profile corruption and terrorism cases.",
    additionalInfo: "Zafar regularly appears before the Sessions Courts, High Courts, and the Supreme Court of Pakistan. His deep understanding of criminal procedure and evidence law has resulted in numerous acquittals and favorable plea bargains for his clients.",
    expertiseAreas: [
      "Criminal defense strategy and trial advocacy",
      "FIR registration and quashment",
      "Bail applications and appeals",
      "White-collar crime defense",
      "Cybercrime cases under PECA",
      "NAB investigations and prosecutions",
      "Criminal appeals and revisions"
    ],
    philosophy: "Zafar believes that every accused person deserves a robust defense regardless of the nature of allegations. He is committed to protecting his clients' constitutional rights while navigating the complexities of Pakistan's criminal justice system.",
    availability: {
      "Monday": true,
      "Tuesday": true,
      "Wednesday": true,
      "Thursday": false,
      "Friday": true,
      "Saturday": true,
      "Sunday": false
    },
    experience: [
      {
        position: "Founder & Lead Attorney",
        company: "Malik Criminal Law Chambers",
        duration: "2012 - Present",
        description: "Lead a specialized criminal defense practice handling high-profile cases across Pakistan."
      },
      {
        position: "Senior Criminal Advocate",
        company: "Jinnah Law Associates",
        duration: "2008 - 2012",
        description: "Specialized in defending complex criminal cases including white-collar crime and terrorism charges."
      },
      {
        position: "Public Prosecutor",
        company: "Sindh Prosecution Department",
        duration: "2003 - 2008",
        description: "Prosecuted criminal cases on behalf of the state, gaining valuable insights into criminal procedure and prosecution strategy."
      }
    ],
    education: [
      {
        degree: "LLM in Criminal Law",
        institution: "University of Karachi",
        year: "2002"
      },
      {
        degree: "LLB",
        institution: "Sindh Muslim Law College",
        year: "2000"
      }
    ],
    barAdmissions: [
      "Sindh Bar Council (2001)",
      "Sindh High Court Bar Association (2003)",
      "Supreme Court Bar Association (2010)"
    ],
    reviews: [
      {
        name: "Hassan Ahmed",
        rating: 5,
        date: "June 12, 2023",
        comment: "Mr. Malik's expertise in criminal defense is exceptional. He secured bail for my brother in a complex case when other lawyers said it would be impossible. His courtroom strategy was brilliant."
      },
      {
        name: "Samina Khan",
        rating: 4,
        date: "April 3, 2023",
        comment: "Professional and knowledgeable attorney who worked tirelessly on our family member's case. His experience with the Karachi courts was evident in how efficiently he handled all proceedings."
      },
      {
        name: "Fareed Shaikh",
        rating: 5,
        date: "February 18, 2023",
        comment: "Zafar took on my complicated cybercrime case and achieved a dismissal of all charges. His understanding of both technology and criminal law made all the difference."
      }
    ],
    faqs: [
      {
        question: "What should I do if an FIR has been filed against me?",
        answer: "If an FIR has been filed against you, it's crucial to (1) consult with a criminal defense attorney immediately, (2) avoid making any statements to police without your lawyer present, (3) apply for pre-arrest bail if appropriate, and (4) gather evidence and witnesses to support your defense. Early intervention can significantly impact the outcome of your case."
      },
      {
        question: "How does the bail process work in Pakistan?",
        answer: "Bail applications in Pakistan follow different procedures depending on whether you're seeking pre-arrest bail (302 Cr.P.C) or post-arrest bail (497 Cr.P.C). Bailable offenses entitle you to bail as a matter of right, while non-bailable offenses require demonstrating that reasonable grounds exist for believing you are not guilty, among other factors. The appropriate court level depends on the severity of the charges."
      },
      {
        question: "What penalties do cybercrime offenses carry in Pakistan?",
        answer: "Under the Prevention of Electronic Crimes Act (PECA) 2016, cybercrime penalties range from a few months imprisonment to 14 years, along with fines up to 50 million rupees, depending on the nature and severity of the offense. Crimes like unauthorized access, data damage, electronic forgery, online harassment, and cyber terrorism all carry different sentences under the law."
      }
    ]
  },
  {
    id: 4,
    name: "Ayesha Khan",
    title: "Property Law Specialist",
    bio: "Ayesha Khan specializes in property and real estate law across Pakistan. With her deep knowledge of land regulations and documentation requirements, she has successfully resolved numerous property disputes and facilitated complex transactions.",
    gender: "female",
    city: "Peshawar",
    province: "KPK",
    court: "Peshawar High Court",
    address: "25 University Road, Peshawar",
    rating: 4.6,
    reviewCount: 72,
    yearsOfExperience: 7,
    consultationFee: 6000,
    successRate: 90,
    languages: ["English", "Urdu", "Pashto"],
    specialties: ["Property Law", "Land Registration", "Tenancy Disputes", "Real Estate Transactions", "Construction Law"],
    specializationIds: ["property"],
    background: "Ayesha Khan has built her practice around helping clients navigate the often complex property laws and regulations in Pakistan. From individual homeowners to large developers, she provides expert guidance on all aspects of real estate law with particular expertise in KPK property regulations.",
    additionalInfo: "Ayesha frequently works with government authorities and development agencies on land acquisition and registration matters, giving her unique insights into regulatory processes across Pakistan.",
    expertiseAreas: [
      "Property purchase and sale agreements",
      "Land title verification and registration",
      "Construction and development permits",
      "Tenancy and lease agreements",
      "Property dispute resolution",
      "Agricultural land matters",
      "Joint property ownership issues"
    ],
    philosophy: "Ayesha believes that secure property rights are fundamental to economic development and personal security. She is committed to ensuring her clients' property interests are properly documented, legally protected, and fairly represented in disputes.",
    availability: {
      "Monday": true,
      "Tuesday": true,
      "Wednesday": false,
      "Thursday": true,
      "Friday": true,
      "Saturday": true,
      "Sunday": false
    },
    experience: [
      {
        position: "Managing Partner",
        company: "Khan Property Law Group",
        duration: "2019 - Present",
        description: "Lead a specialized practice focusing on all aspects of property law, from transactions to dispute resolution."
      },
      {
        position: "Property Law Specialist",
        company: "Frontier Law Associates",
        duration: "2016 - 2019",
        description: "Handled complex property disputes, transactions, and regulatory matters for individual and corporate clients."
      },
      {
        position: "Legal Consultant",
        company: "KP Housing Authority",
        duration: "2013 - 2016",
        description: "Advised on legal aspects of government housing projects, land acquisition, and development regulations."
      }
    ],
    education: [
      {
        degree: "LLM in Property Law",
        institution: "University of Peshawar",
        year: "2012"
      },
      {
        degree: "LLB",
        institution: "Khyber Law College",
        year: "2010"
      }
    ],
    barAdmissions: [
      "KPK Bar Council (2011)",
      "Peshawar High Court Bar Association (2013)"
    ],
    reviews: [
      {
        name: "Haroon Rashid",
        rating: 5,
        date: "May 28, 2023",
        comment: "Ms. Khan provided excellent legal services during our property purchase. Her thorough title verification process identified issues that could have caused serious problems later. Highly professional and detail-oriented."
      },
      {
        name: "Nadia Shah",
        rating: 4,
        date: "March 12, 2023",
        comment: "Ayesha helped resolve a complicated family property dispute that had been ongoing for years. Her knowledge of local property laws and mediation skills were invaluable."
      },
      {
        name: "Kamal Ahmad",
        rating: 5,
        date: "January 25, 2023",
        comment: "Our company relied on Ms. Khan for a complex commercial property transaction. Her expertise in navigating regulatory requirements made the process smooth and efficient."
      }
    ],
    faqs: [
      {
        question: "What documents are required for property transfer in Pakistan?",
        answer: "Property transfer in Pakistan typically requires: (1) Original title documents or registry, (2) Transfer deed/sale agreement, (3) Non-encumbrance certificate, (4) Up-to-date tax receipts, (5) CNIC copies of all parties, (6) Photographs, and (7) Documentation of any loans or encumbrances. Additional requirements may apply depending on your specific location and property type."
      },
      {
        question: "How can I verify that a property has a clear title before purchasing?",
        answer: "To verify clear title, you should: (1) Obtain a fard (revenue record) from the relevant patwar khana, (2) Check for any registered loans or encumbrances at the Sub-Registrar's office, (3) Verify tax payment history, (4) Obtain a non-encumbrance certificate, (5) Check for any pending litigation concerning the property, and (6) Examine the chain of ownership for at least 12 years. I can assist with this entire verification process."
      },
      {
        question: "What are the common property disputes in Pakistan and how can they be prevented?",
        answer: "Common property disputes in Pakistan include boundary conflicts, inheritance claims, fraudulent transactions, and unauthorized possession. These can be prevented through proper documentation (formal sale deeds, gift deeds, registered leases), clear boundary demarcation, regular payment of property taxes, timely mutation in revenue records, and conducting thorough title verification before any transaction. A well-drafted agreement addressing potential conflict points is essential."
      }
    ]
  },
  {
    id: 5,
    name: "Aamir Hussain",
    title: "Family Law Specialist",
    bio: "Aamir Hussain is a dedicated family lawyer with special expertise in divorce, child custody, and matrimonial property matters. His compassionate yet professional approach has helped countless families through difficult legal transitions.",
    gender: "male",
    city: "Karachi",
    province: "Sindh",
    court: "Sindh Family Courts",
    address: "92 Shahrah-e-Faisal, Karachi",
    rating: 4.8,
    reviewCount: 89,
    yearsOfExperience: 12,
    consultationFee: 5000,
    successRate: 93,
    languages: ["English", "Urdu", "Sindhi"],
    specialties: ["Divorce", "Child Custody", "Maintenance", "Family Disputes", "Marriage Registration"],
    specializationIds: ["family"],
    availability: {
      "Monday": true,
      "Tuesday": true,
      "Wednesday": true,
      "Thursday": true,
      "Friday": false,
      "Saturday": true,
      "Sunday": false
    },
    background: "Aamir Hussain has established himself as one of Karachi's most respected family law practitioners. He combines deep legal knowledge with cultural sensitivity to help clients navigate emotionally challenging family law matters.",
    additionalInfo: "In addition to his legal practice, Aamir regularly conducts workshops on family law rights and has contributed to several publications on matrimonial law in Pakistan.",
    expertiseAreas: [
      "Divorce proceedings (khula and talaq)",
      "Child custody and visitation arrangements",
      "Maintenance and alimony claims",
      "Marriage contracts and registration",
      "Family dispute resolution",
      "Guardianship matters",
      "Domestic violence protection"
    ],
    philosophy: "Aamir believes in resolving family matters with dignity and minimal conflict. He prioritizes the best interests of children while ensuring his adult clients' rights are protected throughout the legal process.",
    experience: [
      {
        position: "Senior Partner",
        company: "Hussain Family Law Center",
        duration: "2014 - Present",
        description: "Lead a specialized family law practice focusing on divorce, custody, and matrimonial disputes."
      },
      {
        position: "Family Court Advocate",
        company: "Legal Aid Society",
        duration: "2011 - 2014",
        description: "Provided legal representation to underprivileged clients in family court proceedings."
      },
      {
        position: "Associate",
        company: "Ahmed & Partners",
        duration: "2008 - 2011",
        description: "Specialized in family law matters including divorce, custody, and maintenance cases."
      }
    ],
    education: [
      {
        degree: "LLM in Family Law",
        institution: "University of Karachi",
        year: "2007"
      },
      {
        degree: "LLB",
        institution: "Sindh Muslim Law College",
        year: "2005"
      }
    ],
    barAdmissions: [
      "Sindh Bar Council (2006)",
      "Karachi Bar Association (2006)"
    ],
    reviews: [
      {
        name: "Fatima Shah",
        rating: 5,
        date: "June 10, 2023",
        comment: "Mr. Hussain handled my divorce case with utmost professionalism. He was supportive throughout the process and achieved a fair settlement for me."
      },
      {
        name: "Kamran Ahmed",
        rating: 5,
        date: "April 15, 2023",
        comment: "Aamir helped me secure custody of my children in a difficult case. His expertise in family law was evident in how he presented our case to the court."
      },
      {
        name: "Saira Malik",
        rating: 4,
        date: "March 7, 2023",
        comment: "Professional, compassionate, and effective. Mr. Hussain resolved our family property dispute through mediation, saving us from a lengthy court battle."
      }
    ],
    faqs: [
      {
        question: "How long does a divorce typically take in Pakistan?",
        answer: "The timeline for divorce in Pakistan varies based on the type and circumstances. A khula (wife-initiated divorce) can take 4-6 months if uncontested. A talaq (husband-initiated divorce) requires a 90-day iddat period after pronouncement. Contested divorces can take 1-2 years or more, especially if there are property or custody disputes involved."
      },
      {
        question: "What factors do courts consider when determining child custody?",
        answer: "Pakistani courts primarily consider the child's welfare when making custody decisions. Specific factors include the child's age (mother typically has custody until age 7), parents' character and ability to provide care, child's attachment to each parent, educational opportunities, and in some cases, the child's preference if they're old enough to express a reasonable opinion."
      },
      {
        question: "How is maintenance (nafaqah) determined for a wife or children?",
        answer: "Maintenance is determined based on the husband/father's financial capacity and the needs of the wife/children. Courts consider factors like the standard of living during marriage, educational requirements of children, medical needs, and housing costs. There's no fixed formula, but maintenance should be sufficient to maintain a reasonable standard of living appropriate to the family's circumstances."
      }
    ]
  },
  {
    id: 6,
    name: "Sana Malik",
    title: "Corporate Law Expert",
    bio: "Sana Malik is a skilled corporate attorney with extensive experience in business law, commercial transactions, and regulatory compliance. She represents both Pakistani companies and multinational corporations in complex legal matters.",
    gender: "female",
    city: "Lahore",
    province: "Punjab",
    court: "Lahore High Court",
    address: "56 Gulberg III, Lahore",
    rating: 4.9,
    reviewCount: 64,
    yearsOfExperience: 8,
    consultationFee: 8000,
    successRate: 95,
    languages: ["English", "Urdu", "Punjabi"],
    specialties: ["Business Law", "Contracts", "Intellectual Property", "Foreign Investment", "Mergers & Acquisitions"],
    specializationIds: ["corporate"],
    availability: {
      "Monday": true,
      "Tuesday": true,
      "Wednesday": true,
      "Thursday": true,
      "Friday": true,
      "Saturday": false,
      "Sunday": false
    },
    background: "Sana Malik has established herself as a leading corporate lawyer in Punjab, advising businesses of all sizes on legal matters from formation to complex transactions and dispute resolution.",
    additionalInfo: "With experience at international law firms before returning to Pakistan, Sana brings global perspectives to her corporate law practice while maintaining deep knowledge of local business regulations.",
    expertiseAreas: [
      "Company incorporation and structuring",
      "Commercial contracts and agreements",
      "Intellectual property protection",
      "Mergers, acquisitions, and joint ventures",
      "Foreign direct investment",
      "Corporate governance and compliance",
      "Commercial dispute resolution"
    ],
    philosophy: "Sana believes in providing practical, business-focused legal solutions that protect her clients while enabling commercial growth. She emphasizes preventative legal work to help businesses avoid disputes before they arise.",
    experience: [
      {
        position: "Partner",
        company: "Malik & Associates",
        duration: "2018 - Present",
        description: "Lead the corporate law practice, advising local and international clients on business transactions and regulatory matters."
      },
      {
        position: "Corporate Counsel",
        company: "Technology Ventures Ltd.",
        duration: "2015 - 2018",
        description: "Handled all legal affairs for a growing technology company, including contracts, IP protection, and compliance."
      },
      {
        position: "Associate",
        company: "Global Law Partners, Dubai",
        duration: "2012 - 2015",
        description: "Worked with multinational clients on cross-border transactions, foreign investment, and international commercial agreements."
      }
    ],
    education: [
      {
        degree: "LLM in Corporate Law",
        institution: "Harvard Law School",
        year: "2011"
      },
      {
        degree: "LLB",
        institution: "Lahore University of Management Sciences",
        year: "2009"
      }
    ],
    barAdmissions: [
      "Punjab Bar Council (2010)",
      "Lahore High Court Bar Association (2012)"
    ],
    reviews: [
      {
        name: "Tech Solutions Inc.",
        rating: 5,
        date: "May 20, 2023",
        comment: "Ms. Malik provided excellent guidance for our company's expansion into Pakistan. Her knowledge of both international and local regulations was invaluable."
      },
      {
        name: "Ahmed Textiles",
        rating: 5,
        date: "April 8, 2023",
        comment: "Sana helped structure our joint venture with a foreign company. Her attention to detail in drafting agreements protected our interests while facilitating the partnership."
      },
      {
        name: "Rashid Khan",
        rating: 4,
        date: "March 3, 2023",
        comment: "Professional, responsive and knowledgeable. Ms. Malik helped us resolve a complex IP dispute efficiently and effectively."
      }
    ],
    faqs: [
      {
        question: "What is the best business structure for a foreign company entering the Pakistani market?",
        answer: "The optimal structure depends on your business goals. Options include: (1) Branch Office - suitable for representing foreign companies and conducting activities in Pakistan, (2) Liaison Office - for promotional and coordination activities without commercial operations, (3) Subsidiary Company - a separate legal entity offering liability protection, and (4) Joint Venture with a local partner. Each has different registration requirements, tax implications, and operational limitations."
      },
      {
        question: "How are intellectual property rights protected in Pakistan?",
        answer: "Pakistan protects IP through: (1) Trademarks - registered with IPO-Pakistan for 10 years, renewable, (2) Patents - granted for 20 years through IPO-Pakistan, (3) Copyrights - protected for life plus 50 years, and (4) Industrial designs - protected for 10 years. Pakistan is a signatory to major international IP conventions including TRIPS. Enforcement involves civil remedies and criminal penalties for infringement. I can assist with registration and enforcement strategies."
      },
      {
        question: "What are the key regulatory approvals needed for mergers and acquisitions in Pakistan?",
        answer: "Key approvals may include: (1) Competition Commission of Pakistan approval for transactions exceeding certain thresholds, (2) Securities and Exchange Commission of Pakistan approvals, (3) State Bank of Pakistan approval for foreign exchange transactions, (4) Sector-specific regulatory approvals (e.g., PTA for telecom, NEPRA for energy), and (5) Court sanctions for schemes of arrangement. Due diligence and early regulatory engagement are essential for successful transactions."
      }
    ]
  },
  {
    id: 7,
    name: "Imran Sheikh",
    title: "Criminal Defense Attorney",
    bio: "Imran Sheikh is a formidable criminal defense lawyer with a strong track record in high-stakes cases. His strategic approach and deep understanding of Pakistan's criminal law have helped numerous clients achieve favorable outcomes.",
    gender: "male",
    city: "Islamabad",
    province: "Capital Territory",
    court: "Islamabad District Courts",
    address: "34 F-7 Markaz, Islamabad",
    rating: 4.7,
    reviewCount: 112,
    yearsOfExperience: 15,
    consultationFee: 10000,
    successRate: 87,
    languages: ["English", "Urdu"],
    specialties: ["Criminal Defense", "FIR Cases", "NAB Investigations", "Cybercrime", "Bail Applications"],
    specializationIds: ["criminal"],
    availability: {
      "Monday": true,
      "Tuesday": true,
      "Wednesday": false,
      "Thursday": true,
      "Friday": true,
      "Saturday": true,
      "Sunday": false
    },
    background: "With over 15 years of criminal defense experience, Imran Sheikh has built a reputation for his courtroom prowess and meticulous case preparation. His practice spans from misdemeanors to complex felonies and high-profile white-collar crime cases.",
    additionalInfo: "Imran is particularly known for his expertise in cybercrime cases under PECA and has successfully defended clients in several precedent-setting cases in this emerging area of law.",
    expertiseAreas: [
      "Complex criminal defense",
      "Cybercrime and digital evidence",
      "White-collar crime and financial offenses",
      "Narcotics cases",
      "NAB and anti-corruption proceedings",
      "Criminal appeals",
      "Bail applications and post-arrest relief"
    ],
    philosophy: "Imran believes in aggressive yet ethical defense representation. He is committed to protecting his clients' constitutional rights and ensuring they receive fair treatment within the criminal justice system.",
    experience: [
      {
        position: "Principal Attorney",
        company: "Sheikh Criminal Defense",
        duration: "2013 - Present",
        description: "Lead a specialized criminal defense practice handling high-profile and complex cases across Pakistan."
      },
      {
        position: "Senior Defense Counsel",
        company: "Capital Law Associates",
        duration: "2008 - 2013",
        description: "Specialized in criminal defense, with emphasis on financial crimes and high-stakes felony cases."
      },
      {
        position: "Associate",
        company: "Federal Defense Attorneys",
        duration: "2003 - 2008",
        description: "Handled criminal cases across all courts in Islamabad, gaining extensive trial experience."
      }
    ],
    education: [
      {
        degree: "LLM in Criminal Justice",
        institution: "London School of Economics",
        year: "2002"
      },
      {
        degree: "LLB",
        institution: "International Islamic University, Islamabad",
        year: "2000"
      }
    ],
    barAdmissions: [
      "Islamabad Bar Council (2001)",
      "Islamabad High Court Bar Association (2004)",
      "Supreme Court Bar Association (2009)"
    ],
    reviews: [
      {
        name: "Khalid Ahmed",
        rating: 5,
        date: "June 5, 2023",
        comment: "Mr. Sheikh provided exceptional representation in my cybercrime case. His knowledge of digital evidence law was crucial to achieving a favorable outcome."
      },
      {
        name: "Zara Ali",
        rating: 4,
        date: "April 22, 2023",
        comment: "Imran helped our family during a difficult time when our brother was wrongfully accused. His strategic approach to the case led to all charges being dropped."
      },
      {
        name: "Business Executive",
        rating: 5,
        date: "March 15, 2023",
        comment: "When I faced a NAB investigation, Mr. Sheikh's guidance was invaluable. His expertise in white-collar defense is unmatched in Islamabad."
      }
    ],
    faqs: [
      {
        question: "What should I do immediately after being arrested?",
        answer: "After arrest, you should: (1) Exercise your right to remain silent - do not give statements without your lawyer, (2) Ask to contact your lawyer immediately, (3) Do not sign any documents without legal advice, (4) Remember details of your arrest including time, location, and officer names, (5) Be respectful but firm about your rights, and (6) Have a family member contact a criminal defense attorney right away if you cannot."
      },
      {
        question: "How do cybercrime prosecutions work under Pakistani law?",
        answer: "Cybercrime cases under the Prevention of Electronic Crimes Act (PECA) 2016 begin with an FIR, typically after FIA Cybercrime Wing investigation. Digital evidence is central to these cases, requiring specialized forensic analysis. Prosecution must prove both the actus reus (criminal act) and mens rea (intent). Defenses often involve challenging evidence authenticity, procedural violations, lack of intent, or constitutional rights violations. Penalties range from fines to 14 years imprisonment depending on the offense."
      },
      {
        question: "What happens during a NAB investigation and how should I respond?",
        answer: "NAB investigations typically begin with a call-up notice requiring your appearance and document production. You should: (1) Consult a defense attorney immediately before responding, (2) Prepare thoroughly for questioning with your lawyer, (3) Gather all relevant documentation, (4) Answer questions truthfully but concisely, (5) Never provide false information or documents, and (6) Understand that statements to NAB can be used as evidence. NAB has broad powers including arrest, property seizure, and plea bargain authority, making early legal representation crucial."
      }
    ]
  }
];
