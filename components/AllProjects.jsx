const allProjects = [
  {
    title: "Sign Up/Login UI",
    image: require('../public/assets/projects/signuplogin.png'),
    projectUrl: "/signuplogin",
    sourceCode: `${process.env.NEXT_PUBLIC_GITHUB}Login_and_Signup_Form`,
    tech: "HTML, CSS",
    category: "Web App",
    description: "This app was built using HTML, CSS and is hosted on Firebase. It is a simple Signup and login UI created with several HTML elements including HTML5 form controls with validation and styled using CSS external style sheet. Users are able to signup using their Full Name, Email, and a Password of their choice which must be atleast 6 characters long. They can also login using Email and Password.",
  },
  {
    title: "Apple - Landing Page",
    image: require('../public/assets/projects/apple.png'),
    projectUrl: "/apple",
    sourceCode: `${process.env.NEXT_PUBLIC_GITHUB}Apple.com_Home_Page`,
    tech: "HTML, CSS",
    category: "Web App",
    description: "",
  },

  {
    title: "Pokemon App",
    image: require('../public/assets/projects/pokemon.png'),
    projectUrl: "/pokemon",
    sourceCode: `${process.env.NEXT_PUBLIC_GITHUB}Pokemon.com_Home_Page`,
    tech: "HTML, CSS",
    category: "Web App",
    description: "",
  },

  {
    title: "Upwork",
    image: require('../public/assets/projects/upwork.png'),
    projectUrl: "/upwork",
    sourceCode: `${process.env.NEXT_PUBLIC_GITHUB}Upwork.com_Home_Page`,
    tech: "HTML, CSS",
    category: "Web App",
    description: "",
  },

  {
    title: "DOM Manipulation",
    image: require('../public/assets/projects/dommanipulation.png'),
    projectUrl: "/dommanipulation",
    sourceCode: `${process.env.NEXT_PUBLIC_GITHUB}DOM_Manipulation`,
    tech: "HTML, CSS, JS",
    category: "Web App",
    description: "",
  },

  {
    title: "To-do App",
    image: require('../public/assets/projects/todo1.png'),
    projectUrl: "/todo1",
    sourceCode: `${process.env.NEXT_PUBLIC_GITHUB}To_Do_App_with_Firebase_Database`,
    tech: "HTML, CSS, JS",
    category: "Web App",
    description: "",
  },

  {
    title: "Calculator",
    image: require('../public/assets/projects/calculator.png'),
    projectUrl: "/calculator",
    sourceCode: `${process.env.NEXT_PUBLIC_GITHUB}Calculator_App`,
    tech: "HTML, CSS, JS",
    category: "Web App",
    description: "",
  },

  {
    title: "Madlibs App",
    image: require('../public/assets/projects/madlibs.png'),
    projectUrl: "/madlibs",
    sourceCode: `${process.env.NEXT_PUBLIC_GITHUB}Mad_Libs_App`,
    tech: "HTML, CSS, JS",
    category: "Web App",
    description: "",
  },

  {
    title: "Stopwatch",
    image: require('../public/assets/projects/stopwatch.png'),
    projectUrl: "/stopwatch",
    sourceCode: `${process.env.NEXT_PUBLIC_GITHUB}Stopwatch`,
    tech: "HTML, CSS, JS",
    category: "Web App",
    description: "",
  },

  {
    title: "Quiz App",
    image: require('../public/assets/projects/quiz1.png'),
    projectUrl: "/quiz",
    sourceCode: `${process.env.NEXT_PUBLIC_GITHUB}Quiz_App`,
    tech: "HTML, CSS, JS",
    category: "Web App",
    description: "",
  },

  {
    title: "Masco",
    image: require('../public/assets/projects/masco.png'),
    projectUrl: "/masco",
    sourceCode: `${process.env.NEXT_PUBLIC_GITHUB}FMP_Masco`,
    tech: "HTML, CSS, JS",
    category: "Web App",
    description: "",
  },

  {
    title: "Site Search",
    image: require('../public/assets/projects/searching.png'),
    projectUrl: "/searching",
    sourceCode: `${process.env.NEXT_PUBLIC_GITHUB}Site_Search`,
    tech: "HTML, CSS, JS-ES2105",
    category: "Web App",
    description: "",
  },

  {
    title: "React To-do App",
    image: require('../public/assets/projects/todo2.png'),
    projectUrl: "/todo2",
    sourceCode: `${process.env.NEXT_PUBLIC_GITHUB}React_To_Do_App`,
    tech: "ReactJS",
    category: "Web App",
    description: "",
  },

  {
    title: "Site Search/Filter",
    image: require('../public/assets/projects/search-filter.png'),
    projectUrl: "/searchFilter",
    sourceCode: `${process.env.NEXT_PUBLIC_GITHUB}React_Site_with_Searching_Filtering`,
    tech: "ReactJS",
    category: "Web App",
    description: "",
  },

  {
    title: "Quiz App",
    image: require('../public/assets/projects/quiz2.png'),
    projectUrl: "/quiz2",
    sourceCode: `${process.env.NEXT_PUBLIC_GITHUB}React_Quiz_App`,
    tech: "ReactJS",
    category: "Web App",
    description: "",
  },

  {
    title: "Mc Donalds",
    image: require('../public/assets/projects/mcdonalds.png'),
    projectUrl: "/mcdonalds",
    sourceCode: `${process.env.NEXT_PUBLIC_GITHUB}Mcdonalds.com`,
    tech: "ReactJS",
    category: "Web App",
    description: "",
  },

  {
    title: "API Integration",
    image: require('../public/assets/projects/apiintegration.png'),
    projectUrl: "/apiintegration",
    sourceCode: `${process.env.NEXT_PUBLIC_GITHUB}Newsapi.org`,
    tech: "ReactJS",
    category: "Web App",
    description: "",
  },

  {
    title: "LMS",
    image: require('../public/assets/projects/lms.png'),
    projectUrl: "/lms",
    sourceCode: `${process.env.NEXT_PUBLIC_GITHUB}Learning_Management_System`,
    tech: "ReactJS",
    category: "Web App",
    description: "",
  },
  
  {
    title: "Login Screens",
    image: require('../public/assets/projects/loginui.png'),
    projectUrl: "/reactnativeloginscreens",
    sourceCode: `${process.env.NEXT_PUBLIC_GITHUB}React_Native_Login_Screens`,
    tech: "React Native",
    category: "Mobile App",
    description: "These 5 different Login Screens(UI) were built using React Native and styled with customized internal stylesheet.",
  },
  
  {
    title: "To-do App",
    image: require('../public/assets/projects/r-n-todo2.png'),
    projectUrl: "/reactnativetodo",
    sourceCode: `${process.env.NEXT_PUBLIC_GITHUB}React_Native_To_Do_App`,
    tech: "React Native",
    category: "Mobile App",
    description: "This application was built in React Native. User can perform all the CRUD operations by adding, reading, updating or deleting their to-dos.",
  },

  {
    title: "API Integration",
    image: require('../public/assets/projects/r-n-apiintegration.png'),
    projectUrl: "/reactnativeapiintegration",
    sourceCode: `${process.env.NEXT_PUBLIC_GITHUB}React_Native_Api_Integration`,
    tech: "React Native, React Navigation, Axios",
    category: "Mobile App",
    description: "I built this application in React Native, React Navigation integrated with Axios by using fakestore API. User can login/signup and then they will be directed towards the home page where all items of the store are available they can select each item and see item details.",
  },

  {
    title: "Maps & Geo Location",
    image: require('../public/assets/projects/r-n-maps.png'),
    projectUrl: "/reactnativegeolocation",
    sourceCode: `${process.env.NEXT_PUBLIC_GITHUB}Geo_Location`,
    tech: "React Native, React Navigation, Maps, Geo Location, Firebase Authentication, Firebase Database",
    category: "Mobile App",
    description: "I built this application in React Native, React Navigation integrated with Firebase app, React Native Maps and Geo location. User can signup and get their current location.",
  },

  {
    title: "Pizza App",
    image: require('../public/assets/projects/pizza-app.png'),
    projectUrl: "/reactnativepizzaapp",
    sourceCode: `${process.env.NEXT_PUBLIC_GITHUB}Pizza_App`,
    tech: "React Native, React Navigation, Maps, Geo Location, Firebase Authentication, Firebase Database",
    category: "Mobile App",
    description: "This app was built by using React Native. This app features user authentication with firebase as well as the realtime database. User can login/signup through firebase and can see the menu, search through input or select from the categories being provided, after selecting an item user will be directed to the item details page and can book the order by filling the book order form. user can also track their current order. Admin can add items to the menu and see all the orders.",
  },
];

export default allProjects;