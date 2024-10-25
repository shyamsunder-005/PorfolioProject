import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import university from '../resources/images/university.jpg';
import school from  '../resources/images/school.png';
import inter from  '../resources/images/inter.png';
const items = [
  { id: 1, title: "University", details: "Sri Sathya Sai Institute Of Higher Learning.", image: university },
  { id: 2, title: "Intermediate", details: "Sri Chatinaya junior college (11-12).", image: inter },
  { id: 3, title: "School", details: "P.N.M High School (1-10).", image: school },
  // Add more items as needed
];

export default function NestedList() {
  const [openItems, setOpenItems] = React.useState({});

  const handleClick = (id) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [id]: !prevOpenItems[id],
    }));
  };

  return (
    <div>
      <List
        sx={{
          width: 500, // Set a maximum width
          bgcolor: '#87CEEB', // Custom background color (light orange)
          margin: '0 auto', // Center the list horizontally
          borderRadius: 2, // Add some border radius for aesthetics
          boxShadow: 3, // Add slight shadow for depth
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" sx={{ color: 'blue' }}>
            Academics
          </ListSubheader>
        }
      >
        {items.map((item) => (
          <div key={item.id}>
            <ListItemButton
              onClick={() => handleClick(item.id)}
              sx={{
                color: 'blue',
                bgcolor: '#87CEEB',
                '&:hover': {
                  bgcolor: '#6CA6CD',
                },
                borderRadius: 1,
                marginY: 0.5,
              }}
            >
              <ListItemText
                primary={item.title}
                sx={{
                  color: 'white',
                }}
              />
              {openItems[item.id] ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color: 'white' }} />}
            </ListItemButton>
            <Collapse in={openItems[item.id]} timeout="auto" unmountOnExit>
              <Card sx={{ margin: 1, bgcolor: '#87CEEB' }}>
                <CardMedia
                  sx={{ height: 300 ,width:500,}}
                  image={item.image} // Using the image specific to each item
                  title={`${item.title} Image`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color:'text.secondary' }}>
                    {item.details}
                  </Typography>
                </CardContent>
              </Card>
            </Collapse>
          </div>
        ))}
      </List>
    </div>
  );
}