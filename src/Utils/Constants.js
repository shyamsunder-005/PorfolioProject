// import defaultImage from "../resources/images/defaultImage.jpg"
// import { CodeRounded, ContactPageRounded, FacebookRounded, HomeRounded, SchoolRounded } from "@mui/icons-material";

// export const userProfileDefaultData={
//     "Name"      :"Shyam",
//     "UserName"  :"syam_005",
//     "DOB"       :"08-06-2004",
//     "Address"   :"Bangalore",
//     "EmailID"   :"shyam@gmail.com",
//     "PhoneNo"   :"897465412",
//     "Description":"student",
//     "Photo"     : defaultImage
// }

// export const IconTitleMap={
//     "Home": <HomeRounded className="icon"/>,
//     "Academics": <SchoolRounded className="icon"/>,
//     "Projects": <CodeRounded className="icon"/>,
//     "Social Profiles": <FacebookRounded className="icon"/>,
//     "Resume": <ContactPageRounded className="icon"/>
// }

// export const DEFAULT_SIDE_MENU=[
//     {
//         "title": "Home",
//         "icon":  IconTitleMap.Home,
//         "link": "/home"
//     },
//     {
//         "title": "Academics",
//         "icon": IconTitleMap.Academics,
//         "link": "/academics"
//     },
//     {
//         "title": "Projects",
//         "icon": IconTitleMap.Projects,
//         "link": "/projects"
//     },
//     {
//         "title": "Social Profiles",
//         "icon": IconTitleMap["Social Profiles"],
//         "link": "/social-profile"
//     },
//     {
//         "title": "Resume",
//         "icon": IconTitleMap.Resume,
//         "link": "/resume"
//     }
// ]


// export const DEFAULT_DRAWER_FLAG= true;
// export const DEFAULT_ACTIVE_PAGE= DEFAULT_SIDE_MENU[0].title

// export const drawerWidth = 300;


// export const DarkTheme              = "dark"
// export const LightTheme             = "light"
import defaultImage from "../resources/images/dpImage.jpg";
import {
  CodeRounded,
  DraftsRounded,
  HomeRounded,
  SchoolRounded,
  ThumbUpAlt,
  ContactPageRounded,
} from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import ErrorIcon from "@mui/icons-material/Error";
import DeleteIcon from "@mui/icons-material/Delete";
import CallIcon from "@mui/icons-material/Call";
export const userProfileDefaultData = {
  Name: "Shyam",
  UserName: "Shyam_Sunder",
  DOB: "08-06-2004",
  Address: " Bangalore",
  EmailID: "shyam@gmail.com",
  PhoneNo: "987665432",
  Description: "Sairam",
  Photo: defaultImage,
};

export const IconTitleMap = {
  Home: <HomeRounded className="icon" />,
  Academics: <SchoolRounded className="icon" />,
  Projects: <CodeRounded className="icon" />,
  "Social Profiles": <DraftsRounded className="icon" />,
  Resume: <ContactPageRounded className="icon" />,
  "Contact Us": <CallIcon className="icon" />,
  "All Mail": <MailIcon className="icon" />,
  Trash: <DeleteIcon className="icon" />,
  Spam: <ErrorIcon className="icon" />,
  Subscribers: <ThumbUpAlt className="icon" />,
};

export const DEFAULT_SIDE_MENU = [
  {
    title: "Home",
    icon: IconTitleMap.Home,
    "link": "/home"
  },
  {
      "title": "Academics",
      "icon": IconTitleMap.Academics,
      "link": "/academics"
  },
  {
      "title": "Projects",
      "icon": IconTitleMap.Projects,
      "link": "/projects"
  },
  {
      "title": "Social Profiles",
      "icon": IconTitleMap["Social Profiles"],
      "link": "/social-profile"
  },
  {
      "title": "Resume",
      "icon": IconTitleMap.Resume,
      "link": "/resume"
  }
];
const socialprofils = {
  github: "https://github.com",
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  reddit: "https://www.reddit.com",
};

export const drawerWidth = 300;
export const DEFAULT_DRAWER_FLAG = true;
export const DEFAULT_ACTIVE_PAGE = DEFAULT_SIDE_MENU[0].title;
export  {socialprofils};
export const DarkTheme              = "dark"
export const LightTheme             = "light"