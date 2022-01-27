/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Snehansh Chaturvedi",
  title: "Hi all, I'm Snehansh",
  subTitle: emoji(
    "A passionate Software Developer 🚀 an enthusiast of building Web applications with JavaScript / Reactjs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SCJnr",
  linkedin: "https://www.linkedin.com/in/snehansh-c-b04279143/",
  gmail: "csnehansh06@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for web applications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "System Engineer",
      company: "Tata Consultancy Services",
      companylogo:
        "data:image/jpeg;base64,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",
      //companylogo: require("https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Ftcs&psig=AOvVaw0Cpuw6gSpBzcGchXY-nlv0&ust=1643387824569000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjdqO6u0vUCFQAAAAAdAAAAABAD"),
      date: "August 2020 – Present"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Reach me out at!",
  email_address: "csnehansh06@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
