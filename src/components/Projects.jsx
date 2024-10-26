import * as React from 'react';
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
import "../resources/css/projects.css";
import cplus from "../resources/images/c++.png";
import c from "../resources/images/c.png";
import GitHubIcon from '@mui/icons-material/GitHub';

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

// Custom styled card with hover scaling effect
const AnimatedCard = styled(Card)({
  maxWidth: 300,
  backgroundColor: '#87CEEB',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  },
});

const items = [
  {
    title: "C++ Project",
    subheader: "Using Object Oriented Programming!",
    description: "Using C++, I built an application used for SFC.",
    Gitlink: "https://github.com",
    image: cplus,
  },
  {
    title: "C Project",
    subheader: "Using Functional Programming!",
    description: "An application based on Huffman Tree.",
    Gitlink: "https://github.com",
    image: c,
  },
];

export default function RecipeReviewCards() {
  const [expandedItems, setExpandedItems] = React.useState(Array(items.length).fill(false));
  const [showGitIcon, setShowGitIcon] = React.useState(Array(items.length).fill(false));

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
    <div style={{ display: 'flex', flexDirection: 'row', columnGap: '26px', justifyContent: 'center', marginTop: '100px', fontFamily: "Tangerine-Regular" }}>
      {items.map((item, index) => (
        <AnimatedCard key={index}>
          <CardHeader
            action={
              <>
                <IconButton aria-label="settings" onClick={() => handleSettingsClick(index)} style={{ transition: 'transform 0.3s' }}>
                  <MoreVertIcon />
                </IconButton>
                {showGitIcon[index] && (
                  <IconButton aria-label="github" onClick={() => handleGitRedirect(item.Gitlink)}>
                    <GitHubIcon />
                  </IconButton>
                )}
              </>
            }
            title={item.title}
            subheader={item.subheader}
          />
          <CardMedia
            component="img"
            height="194"
            image={item.image}
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
                {item.description}
              </Typography>
            </CardContent>
          </Collapse>
        </AnimatedCard>
      ))}
    </div>
  );
}

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// const Projects = () => {
//     const [Projects, setProjects] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//        const fetchproject =  async () => {

//        try {
//         const response = await axios.get('http://localhost:7000/api/users/projects') // Updated URL to match the new endpoint
//         setProjects(response.data); 
//       } catch (err) {
//         setError(err.message); 
//       }
//        };
//       fetchproject();
//     }, []);

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     if (!Projects.length) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
//             {Projects.map((Project, index) => (
//                 <Card key={index} sx={{ maxWidth: 300 }}>
//                     <CardHeader
//                         title={Project.title}  // Use Project.title here
//                         subheader={Project.subheader}
//                     />
//                     <CardMedia
//                         component="img"
//                         height="194"
//                         image={Project.image}
//                         alt={Project.title}
//                     />
//                     <CardContent>
//                         <Typography>
//                             {Project.description}
//                         </Typography>
//                     </CardContent>
//                 </Card>
//             ))}
//         </div>
//     );
// };

// export default Projects;
