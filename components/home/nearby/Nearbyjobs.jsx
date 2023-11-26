import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './nearbyjobs.style'
import { COLORS } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/useFetch';

const Nearbyjobs = () => {
    const router = useRouter();
    const isLoading = false;
    const error = false;
    // const { data, isLoading, error } = useFetch(
    //     'search', {
    //     query: 'React developer',
    //     num_pages: 1,
    // }
    // )

    // console.log(data);
const data=[
    {
        employer_name: "Dice",
        employer_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0",
        employer_website: null,
        employer_company_type: "Information",
        job_publisher: "LinkedIn",
        job_id: "8yv3oA_2-UYAAAAAAAAAAA==",
        job_employment_type: "CONTRACTOR",
        job_title: "Web Developer - 6-month Contract - Houston Hybrid",
        job_apply_link: "https://www.linkedin.com/jobs/view/web-developer-6-month-contract-houston-hybrid-at-dice-3624857671",
        job_apply_is_direct: false,
        job_apply_quality_score: 0.5805,
        job_description: "An established energy client of mine is looking for an experienced Web Developer to join their team on an initial 6-month contract. Starting 6/5, you will be working in an agile team to help develop a new set of web applications for their own system and sub vendors. This role is hybrid and you will be required to go in to the office 3 days p/w. Full-Stack Web Developer 6-month contract (likely extension) Houston - Hybrid working W2 - $70 - $75 p/h C2C - $80 - $90 p/h Starting 06/05 Technical requirements; JavaScript, (React OR Angular OR Vue), Node, HTML, CSSS, API (NO EMPLOYERS OR RECRUTIERS) Oscar Associates Limited (US) is acting as an Employment Business in relation to this vacancy. Web Developer - 6-month Contract - Houston Hybrid",
        job_is_remote: true,
        job_posted_at_timestamp: 1685653019,
        job_posted_at_datetime_utc: "2023-06-01T20:56:59.000Z",
        job_city: "Houston",
        job_state: "TX",
        job_country: "US",
        job_latitude: 29.760427,
        job_longitude: -95.369804,
        job_benefits: null,
        job_google_link: "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=8yv3oA_2-UYAAAAAAAAAAA%3D%3D",
        job_offer_expiration_datetime_utc: "2023-07-01T20:56:59.000Z",
        job_offer_expiration_timestamp: 1688245019,
        job_required_skills: null,
        job_required_education: '',
        job_experience_in_place_of_education: false,
        job_min_salary: null,
        job_max_salary: null,
        job_salary_currency: null,
        job_salary_period: null,
        job_highlights: '',
        job_job_title: null,
        job_posting_language: "en",
        job_onet_soc: "15113400",
        job_onet_job_zone: "3",
        job_naics_code: "519130",
        job_naics_name: "Internet Publishing and Broadcasting and Web Search Portals"
    },

    {
        employer_name: "Charles Schwab",
        employer_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Charles_Schwab_Corporation_logo.svg/1200px-Charles_Schwab_Corporation_logo.svg.png",
        employer_website: "http://www.schwab.com",
        employer_company_type: "Finance",
        job_publisher: "Schwab Jobs",
        job_id: "G6qYxpAYyVsAAAAAAAAAAA==",
        job_employment_type: "FULLTIME",
        job_title: "Software Web Developer",
        job_apply_link: "https://www.schwabjobs.com/job/austin/software-web-developer/33727/48110146896",
        job_apply_is_direct: false,
        job_apply_quality_score: 0.8104,
        job_description: "Your Opportunity We help our clients plan for their future and they are passionate about the tools and experiences we provide. We collaborate with user experience and design, business and technology partners across the enterprise to build software experiences our users’ are passionate about. What you are good at Website and Electronic Communications (Email, Push, SMS, etc) Templates designing, building, or maintaining. Using scripting or authoring languages, management tools, content creation tools, applications and digital media. Conferring with teams in resolving conflicts, prioritizing needs, developing content criteria, or choosing solutions. Directing or performing Website/Electronic Communications updates. Developing or validating test routines and schedules in ensuring that test cases mimic external interfaces and address all browser and device types. Editing, writing, or designing Website content, and directing team members who produce content. Maintaining an understanding of the latest Web applications and programming practices through education, studying, and participating in conferences, workshops, and groups. Identifying problems uncovered by customer feedback and testing and correcting or referring problems to appropriate personnel for correction. Evaluating code in ensuring that it meets industry standards, is valid, is properly structured, and is compatible with browsers, devices, or operating systems; and Determining user needs by analyzing technical requirements. What you have Job Requirements: Bachelor’s degree or foreign degree equivalent in Computer Science, Engineering or related field and five (5) years of experience in the job offered or related role. Skills: Experience and/or education must include: Experience in programming applications using HTML, JavaScript, CSS, Angular/React Js, XML and Json.; SQL/No-SQL databases; Experience working with the continuous integration and continuous deployment (CI/CD) pipelines; Experience in programming applications using Java/J2EE; Understanding of software quality assurance principles; Experience working in Agile teams. Charles Schwab & Company, Inc. seeks Software Web Developer in Austin, TX.",
        job_is_remote: false,
        job_posted_at_timestamp: 1682726400,
        job_posted_at_datetime_utc: "2023-04-29T00:00:00.000Z",
        job_city: "Austin",
        job_state: "TX",
        job_country: "US",
        job_latitude: 30.267153,
        job_longitude: -97.74306,
        job_benefits: null,
        job_google_link: "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=G6qYxpAYyVsAAAAAAAAAAA%3D%3D",
        job_offer_expiration_datetime_utc: null,
        job_offer_expiration_timestamp: null,
        job_required_experience: '',
        job_required_skills: null,
        job_required_education: '',
        job_experience_in_place_of_education: false,
        job_min_salary: null,
        job_max_salary: null,
        job_salary_currency: null,
        job_salary_period: null,
        job_highlights: '',
        job_job_title: null,
        job_posting_language: "en",
        job_onet_soc: "15113400",
        job_onet_job_zone: "3",
        job_naics_code: "523920",
        job_naics_name: "Portfolio Management",
    },
    {
        employer_name: "Crescens",
        employer_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8i49TxmypL921gwSrXCigLk762K1u2Qu9yW0x&s=0",
        employer_website: null,
        employer_company_type: null,
        job_publisher: "Recruit.net",
        job_id: "tZ_zrHS5wN8AAAAAAAAAAA==",
        job_employment_type: "CONTRACTOR",
        job_title: "Web Developer",
        job_apply_link: "https://www.recruit.net/job/web-developer-jobs/A8362DD6B42FD034",
        job_apply_is_direct: false,
        job_apply_quality_score: 0.427,
        job_description: "Job Description Job title : Web Developer Location : Remote Duration : 5 months Type: contract Job Description : Minimum of 7 years overall IT experience: including 5 years of web UI development and integration experience Responsible for detailed UI design, development/unit testing and integration of web and applications Responsible for Angular application development using web app development tools and frameworks Produce scalable and flexible, high-quality code that satisfies both the functional and non-functional requirements Identify technical issues & coordinate the resolution of these issues with extended team members from other applications Uses secure development best practices and design patterns Create or update design and systems documentation for developed or modified software component or application Create process and data flow diagrams for data movement capture Cross train team members for full knowledge coverage on team Analyze and translate business requirements to technical design Collaborate/communicate with project team and business users as required Support functional testing and performance testing Works with technical delivery lead on project activities Ensure assigned work is implemented within project schedules Strong Automotive OEM experience Solid understanding of various enterprise services and micro-service concepts Solid understanding of MicroService concepts and 12 Factor App design principles Experience with DevOps in a cloud environment a plus Experienced with waterfall, iterative, and agile methodologies. Required Skills: Demonstrated experience using UX design tools for facilitating the UI requrirement gathering and wire frame design Experience in desiging and developing modern web applications, particualry Single Page Applicaiton design. Professional working experience in Angular development with Typescript (minimum 3 years experience) Strong HTML5, CSS3 and Javascripts skills (minimum 5 years experience) Working experience in bootstrap and jquery Professional working experience with integrating REST services with Angular front-end. Working experience with version control tools like Git, SVN Deep knowledge of Angular practices and commonly used modules based on past work experience Extensive knowledge of javascript based frameworks to provide better yet faster UI experience for end users Experience in design and creating responsive web applications Experience in developing hybrid mobile applications using IONIC (Angular/Cordova) framework Proficient with UML models, and use them for communicating and documenting application designs Knowledge of core J2EE patterns Experience with continuous integration tools (e.g. SVN/git, Jira, Jenkins, Maven, etc.) Experience implementing authentication, authorization, Single Sign On, SAML, OAuth Experience in working with various web application servers (Websphere, Tomcat etc.) Strong analytical and debugging skills. Unique skills: Creating e2e test suites for angular components and running them with Web Testing Framework like Protractor, Cucumber or Other alternatives Open to learning new Technologies as required to meet business requirements Experience with application redesign and Angular framework upgrading from version 4.x to the later one Preferred: Experience in developing iOS and Android native mobile app Knowledge and experience with IBM Mobile First product Knowledge and experience with IBM Redhat Openshift product.",
        job_is_remote: true,
        job_posted_at_timestamp: 1685577600,
        job_posted_at_datetime_utc: "2023-06-01T00:00:00.000Z",
        job_city: "Texas City",
        job_state: "TX",
        job_country: "US",
        job_latitude: 29.383844,
        job_longitude: -94.9027,
        job_benefits: null,
        job_google_link: "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=tZ_zrHS5wN8AAAAAAAAAAA%3D%3D",
        job_offer_expiration_datetime_utc: "2023-07-01T00:00:00.000Z",
        job_offer_expiration_timestamp: 1688169600,
        job_required_experience: '',
        job_required_skills: null,
        job_required_education: '',
        job_experience_in_place_of_education: false,
        job_min_salary: null,
        job_max_salary: null,
        job_salary_currency: null,
        job_salary_period: null,
        job_highlights: '',
        job_job_title: null,
        job_posting_language: "en",
        job_onet_soc: "15113400",
        job_onet_job_zone: "3",
    },
    {
        employer_name: "Spurs Sports & Entertainment",
        employer_logo: "https://firstteeaustin.org/wp-content/uploads/sites/64/2016/11/spurs-sports-and-entertainment-LOGO.jpg",
        employer_website: "http://www.spurs.com",
        employer_company_type: "Consulting",
        job_publisher: "LinkedIn",
        job_id: "UzcMt4Nb4qkAAAAAAAAAAA==",
        job_employment_type: "FULLTIME",
        job_title: "Senior Web Developer",
        job_apply_link: "https://www.linkedin.com/jobs/view/senior-web-developer-at-spurs-sports-entertainment-3617222882",
        job_apply_is_direct: false,
        job_apply_quality_score: 0.5699,
        job_description: "Overview We are looking for Senior Web Developer to join our family! At Spurs Sports & Entertainment (SS&E), we work in service of something bigger than ourselves, it’s so much more than the game or concert itself. It takes all members of our Spurs Family to harness the power of sports and entertainment to build moments that endure, memories that excite, and connections that strengthen our community. This position will support and manage both app and website development across the Spurs Sports & Entertainment portfolio. You will develop user-focused products, develop meaningful metrics and tracking them over time to establish a program of continuous innovation and improvement. In addition to the above, this position will also be responsible for the development and maintenance of all websites in SS&E’s portfolio. Candidates should be flexible to modern development practices, embrace emerging standards and technology while advocating for the best methodologies. Overview -NOTE: This position is not responsible for social media administration. This position focuses on front end web and mobile app development and requires coding/programming skills necessary to build and solve assets both from scratch and from within multiple CMS environments. Does this sound like a fit? If so, we want to hear from you! In every position, each employee is expected to: Demonstrate Alignment with SS&E’s Core Values and Mission, Collaborate with Internal/External Family Members and Demonstrate Ongoing Development. Responsibilities • Write clean, reusable, and accessible client-side component code for web applications. • Understand product requirement documentation/functional specifications and develop application based upon specifications • Collaborate with project partners to ensure all requirements are met • Interact regularly with users to capture feedback, listen to their issues and concerns, recommend solutions. • Apply knowledge of modern web development to build and maintain responsive web pages • Be responsible for quality assurance testing for all digital platforms • Provide technical and developmental mentorship to junior developers • Other duties as assigned Qualifications • 2-4 years’ experience developing responsive, web-based applications • 2+ years’ experience using version control - Git, GitHub, etc. • Experience with front-end development languages and markups (JavaScript, CSS, HTML, etc.) • Experience with UI CSS and/or JavaScript frameworks (Bootstrap, Materialize, Vue.JS, React, jQuery, etc.) • Familiarity and knowledge of API, JSON, XML, and other common data frameworks. • Experience working in content management systems • Ability to creatively problem solve, work independently and coordinate multiple tasks • Strong teamwork and interpersonal skills to handle acute and confidential situations and information Preferred Qualifications • Javascript framework experience a plus (Node.js, React.js, Next.js) • Previous experience in sports or event industries • Understanding of UX / UI / SEO principles EEO Statement • SS&E is an Equal Opportunity Employer* Nothing contained in this job description is intended to be a contract of employment, nor does any information contained herein represent a guarantee of employment for a specific duration. Your employment with SS&E is “at will”, which means that either you or SS&E may terminate the relationship at any time. We will ensure that individuals with disabilities are provided reasonable accommodation to participate in the job application or interview process, to perform essential job functions, and to receive other benefits and privileges of employment. Please contact us to request accommodation.",
        job_is_remote: false,
        job_posted_at_timestamp: 1685525977,
        job_posted_at_datetime_utc: "2023-05-31T09:39:37.000Z",
        job_city: "San Antonio",
        job_state: "TX",
        job_country: "US",
        job_latitude: 29.42519,
        job_longitude: -98.49459,
        job_benefits: null,
        job_google_link: "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=UzcMt4Nb4qkAAAAAAAAAAA%3D%3D",
        job_offer_expiration_datetime_utc: "2023-06-30T09:39:37.000Z",
        job_offer_expiration_timestamp: 1688117977,
        job_required_experience: '',
        job_required_skills: null,
        job_required_education: '',
        job_experience_in_place_of_education: false,
        job_min_salary: null,
        job_max_salary: null,
        job_salary_currency: null,
        job_salary_period: null,
        job_highlights: '',
        job_job_title: "Senior",
        job_posting_language: "en",
        job_onet_soc: "15113400",
        job_onet_job_zone: "3",
        job_naics_code: "541613",
        job_naics_name: "Marketing Consulting Services",
    },
    {
        employer_name: "Xerox",
        employer_logo: "https://www.xerox.com/assets/images/logos/xerox.svg",
        employer_website: "http://www.xerox.com",
        employer_company_type: "Manufacturing",
        job_publisher: "Learn4Good",
        job_id: "9gZFCv-muG4AAAAAAAAAAA==",
        job_employment_type: "FULLTIME",
        job_title: "Junior Full Stack Web Developer",
        job_apply_link: "https://www.learn4good.com/jobs/san-antonio/texas/info_technology/2356869602/e/",
        job_apply_is_direct: false,
        job_apply_quality_score: 0.4071,
        job_description: "Junior Full Stack Web Developer General Information Press space or enter keys to toggle section visibility City San Antonio State/Province Texas Country United States Department Sales Support Date Tuesday, March 7, 2023 Working time Full-time # 20022261 Job Level Individual Contributor Job Type Experienced Job Field Sales Support Seniority Level Associate Description & Requirement Press space or enter keys to toggle section visibility About Xerox Holdings Corporation For more than 100 years, Xerox has continually redefined the workplace experience. Harnessing our leadership position in office and production print technology, we’ve expanded into software and services to sustainably power today’s workforce. From the office to industrial environments, our differentiated business solutions and financial services are designed to make every day work better for clients — no matter where that work is being done. Today, Xerox scientists and engineers are continuing our legacy of innovation with disruptive technologies in digital transformation, augmented reality, robotic process automation, additive manufacturing, Industrial Internet of Things and cleantech. Learn more at and explore our commitment to diversity and inclusion. () Dahill Office Technology Corp., A Xerox Company, and part of Xerox Business Solutions Southwest (XBSSW) Team is a leading provider of business process automation solutions. We are seeking a successful Junior Full Stack Web Developer looking to take the next step in their career. What you will do: • Develop and support in-house sales tools using C#, .NET Core, Vue.js, Kendo.js, CSS, and No SQL technologies / libraries to support the entire workflow automation for sales processing and product delivery. • Develop and support integration to existing systems (Salesforce and e-Automate) through API interface. • Develop and support web application interfaces, mobile apps, MS SQL database table manipulation scripts, data retrieval for reporting and database trigger implementations as needed. • Provide back-end support for the suite of in-house systems developed by the XBSSW team. • Support sales teams to help manage their sales pipeline of 30+ opportunities and enter all details into CRM. How you will do this: • By having entry level experience implementing and maintaining web applications. • By having entry level experience with full stack development that includes Applications, Databases and website infrastructure. • Work in a Agile development methodology environment within a team setting. • To be relative proficient in the technologies mentioned and show a strong software development. Preferred Qualifications: • Bachelor’s degree in related business or technology field. • Minimum of 3 years of proven success in full stack development is preferred. • Ability to work independently. What We Offer: • Competitive compensation. • Comprehensive benefits offerings (including medical, dental, vision and life insurance). • Retirement Plan. • Paid holidays, personal choice days and paid time off. • A culture that offers flexibility and a healthy work-life balance. #LI-AA1 Xerox is an Equal Opportunity Employer and considers applicants for all positions without regard to race, color, creed, religion, ancestry, national origin, age, gender identity, sex, marital status, sexual orientation, physical or mental disability, use of a guide dog or service animal, military/veteran status, citizenship status, basis of genetic information, or any other group protected by law. Learn more atwww.xerox.comand explore our commitment to diversity and inclusion: with disabilities who need a reasonable accommodation to apply or compete for employment with Xerox may request such accommodation(s) by sending an e-mail to Xerox Be sure to include your name, the job you are interested in, and the accommodation you are seeking.",
        job_is_remote: false,
        job_posted_at_timestamp: 1685404800,
        job_posted_at_datetime_utc: "2023-05-30T00:00:00.000Z",
        job_city: "San Antonio",
        job_state: "TX",
        job_country: "US",
        job_latitude: 29.42519,
        job_longitude: -98.49459,
        job_benefits: '',
        job_google_link: "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=9gZFCv-muG4AAAAAAAAAAA%3D%3D",
        job_offer_expiration_datetime_utc: "2023-11-29T00:00:00.000Z",
        job_offer_expiration_timestamp: 1701216000,
        job_required_experience: '',
        job_required_skills: null,
        job_required_education: '',
        job_experience_in_place_of_education: false,
        job_min_salary: null,
        job_max_salary: null,
        job_salary_currency: null,
        job_salary_period: null,
        job_highlights: '',
        job_job_title: null,
        job_posting_language: "en",
        job_onet_soc: "15113300",
        job_onet_job_zone: "4",
        job_occupational_categories: '',
        job_naics_code: "334111",
        job_naics_name: "Electronic Computer Manufacturing",
    },
];


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Nearby jobs</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show all</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {isLoading ? (<ActivityIndicator size='large' colors={COLORS.primary} />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    data?.map((job) => (
                        <NearbyJobCard 
                        job={job}
                        key={`nearby-job-${job?.job_id}`}
                        handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
                        />
                    ))
                )}
            </View>
        </View>
    )
}

export default Nearbyjobs;