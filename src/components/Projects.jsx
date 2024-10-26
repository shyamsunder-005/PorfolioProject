// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import "../resources/css/projects.css";
// import cplus from "../resources/images/c++.png";
// import c from "../resources/images/c.png";
// import GitHubIcon from '@mui/icons-material/GitHub';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
//   transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
// }));

// // Custom styled card with hover scaling effect
// const AnimatedCard = styled(Card)({
//   maxWidth: 300,
//   backgroundColor: '#87CEEB',
//   transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
//   '&:hover': {
//     transform: 'scale(1.05)',
//     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
//   },
// });

// const items = [
//   {
//     title: "C++ Project",
//     subheader: "Using Object Oriented Programming!",
//     description: "Using C++, I built an application used for SFC.",
//     Gitlink: "https://github.com",
//     image: cplus,
//   },
//   {
//     title: "C Project",
//     subheader: "Using Functional Programming!",
//     description: "An application based on Huffman Tree.",
//     Gitlink: "https://github.com",
//     image: c,
//   },
// ];

// export default function RecipeReviewCards() {
//   const [expandedItems, setExpandedItems] = React.useState(Array(items.length).fill(false));
//   const [showGitIcon, setShowGitIcon] = React.useState(Array(items.length).fill(false));

//   const handleExpandClick = (index) => {
//     const newExpandedItems = [...expandedItems];
//     newExpandedItems[index] = !newExpandedItems[index];
//     setExpandedItems(newExpandedItems);
//   };

//   const handleSettingsClick = (index) => {
//     const newShowGitIcon = [...showGitIcon];
//     newShowGitIcon[index] = !newShowGitIcon[index];
//     setShowGitIcon(newShowGitIcon);
//   };

//   const handleGitRedirect = (url) => {
//     window.open(url, '_blank');
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'row', columnGap: '26px', justifyContent: 'center', marginTop: '100px', fontFamily: "Tangerine-Regular" }}>
//       {items.map((item, index) => (
//         <AnimatedCard key={index}>
//           <CardHeader
//             action={
//               <>
//                 <IconButton aria-label="settings" onClick={() => handleSettingsClick(index)} style={{ transition: 'transform 0.3s' }}>
//                   <MoreVertIcon />
//                 </IconButton>
//                 {showGitIcon[index] && (
//                   <IconButton aria-label="github" onClick={() => handleGitRedirect(item.Gitlink)}>
//                     <GitHubIcon />
//                   </IconButton>
//                 )}
//               </>
//             }
//             title={item.title}
//             subheader={item.subheader}
//           />
//           <CardMedia
//             component="img"
//             height="194"
//             image={item.image}
//           />
//           <CardActions disableSpacing>
//             <ExpandMore
//               expand={expandedItems[index]}
//               onClick={() => handleExpandClick(index)}
//               aria-expanded={expandedItems[index]}
//               aria-label="show more"
//             >
//               <ExpandMoreIcon />
//             </ExpandMore>
//           </CardActions>
//           <Collapse in={expandedItems[index]} timeout="auto" unmountOnExit>
//             <CardContent>
//               <Typography sx={{ marginBottom: 2 }}>
//                 {item.description}
//               </Typography>
//             </CardContent>
//           </Collapse>
//         </AnimatedCard>
//       ))}
//     </div>
//   );
// }

import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GitHubIcon from '@mui/icons-material/GitHub';
import axios from 'axios';
import "../resources/css/projects.css";
import cplus from "../resources/images/c++.png";
import c from "../resources/images/c.png";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
}));

const AnimatedCard = styled(Card)({
    maxWidth: 300,
    backgroundColor: '#87CEEB',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    },
});

const images = [
    { id: 1, image: cplus },
    { id: 2, image: c },
];

const Projects = () => {
    const [projectsData, setProjectsData] = useState([]);
    const [expandedItems, setExpandedItems] = useState([]);
    const [showGitIcon, setShowGitIcon] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:7000/api/users/projects');
                
                // Merging image data with backend data
                const combinedData = response.data.map((project, index) => ({
                    ...project,
                    image: images[index]?.image || null,
                }));

                setProjectsData(combinedData);
                setExpandedItems(Array(combinedData.length).fill(false));
                setShowGitIcon(Array(combinedData.length).fill(false));
            } catch (err) {
                setError(err.message);
            }
        };
        fetchProjects();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!projectsData.length) {
        return <div>Loading...</div>;
    }

    const handleExpandClick = (index) => {
        const newExpandedItems = [...expandedItems];
        newExpandedItems[index] = !newExpandedItems[index];
        setExpandedItems(newExpandedItems);
    };

    const handleSettingsClick = (index) => {
        const newShowGitIcon = [...showGitIcon];
        newShowGitIcon[index] = !newShowGitIcon[index];
        setShowGitIcon(newShowGitIcon);
    };

    const handleGitRedirect = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px',  justifyContent: 'center', marginTop: '100px', fontFamily: "Tangerine-Regular"}}>
            {projectsData.map((project, index) => (
                <AnimatedCard key={index}>
                    <CardHeader
                        action={
                            <>
                                <IconButton aria-label="settings" onClick={() => handleSettingsClick(index)} style={{ transition: 'transform 0.3s' }}>
                                    <MoreVertIcon />
                                </IconButton>
                                {showGitIcon[index] && (
                                    <IconButton aria-label="github" onClick={() => handleGitRedirect(project.Gitlink)}>
                                        <GitHubIcon />
                                    </IconButton>
                                )}
                            </>
                        }
                        title={project.title}
                        subheader={project.subheader}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={project.image}
                        alt={`${project.title} image`}
                    />
                    <CardActions disableSpacing>
                        <ExpandMore
                            expand={expandedItems[index]}
                            onClick={() => handleExpandClick(index)}
                            aria-expanded={expandedItems[index]}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expandedItems[index]} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography sx={{ marginBottom: 2 }}>
                                {project.description}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </AnimatedCard>
            ))}
        </div>
    );
};

export default Projects;
