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
import { useEffect, useState } from 'react';
import axios from 'axios';
import university from '../resources/images/university.jpg';
import school from '../resources/images/school.png';
import inter from '../resources/images/inter.png';

const images = [
  { id: 1, image: university },
  { id: 2, image: inter },
  { id: 3, image: school },
  // Add more items as needed
];

export default function NestedList() {
  const [openItems, setOpenItems] = useState({});
  const [academicsData, setAcademicsData] = useState([]); // Default to empty array
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:7000/api/users/academics');
        console.log('Response data:', response.data); // Log data to check response

        // Combine fetched data with local images based on `id`
        const combinedData = response.data.map((item) => {
          const image = images.find(img => img.id === item.id)?.image || null;
          return { ...item, image };
        });
        setAcademicsData(combinedData);
      } catch (err) {
        console.error('Error fetching data:', err.message);
        setError(err.message);
      }
    };
    fetchUserData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!academicsData || !academicsData.length) {
    return <div>Loading...</div>;
  }

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
          width: 500,
          bgcolor: '#87CEEB',
          margin: '0 auto',
          borderRadius: 2,
          boxShadow: 3,
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" sx={{ color: 'blue' }}>
            Academics
          </ListSubheader>
        }
      >
        {academicsData.map((item) => (
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
                  sx={{ height: 300, width: 500 }}
                  image={item.image} // Using the image specific to each item
                  title={`${item.title} Image`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
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
