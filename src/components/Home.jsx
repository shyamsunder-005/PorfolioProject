import React from "react";
import "../resources/css/home.css";
import { Typography } from "@mui/material";
import dpImage from "../resources/images/unnamed.jpg";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import Typewriter from 'typewriter-effect';

const typewriterOptions = {
  strings: ['Sree Shyam Sunder,'],
  autoStart: true,
  loop: true,
  delay: 75,
};

function Home() {
  return (
      <div className="mainContainer-2">
          <div className="profile-section">
              <Space wrap size={16}>
              <Avatar
                      shape="square"
                      src={dpImage}
                      size={300}
                      icon={<UserOutlined />}
                      className="avatar-animated" // Adding the animation class here
                  />
              </Space>
          </div>
          <div className="text-section">
              <Typography variant="h5" sx={{ fontFamily:"satisfy-Regular"}} >I am</Typography>
              <div className="typewriter">
                  <Typewriter options={typewriterOptions}/>
              </div>
              <Typography variant="h5" sx={{ textAlign: 'left', margin: '50px 0 0 0',fontFamily:"satisfy-Regular" }} >
                  I am a dedicated Computer Science student with a strong passion for Data Science.
                  My journey in technology has equipped me with a solid foundation in programming.
                  Beyond my academic pursuits, I am an avid traveler and cultural enthusiast.
                  My experiences across diverse environments have enriched my understanding of the world
                  and inspired my curiosity in exploring innovative solutions to real-world problems.
              </Typography>
          </div>
      </div>
  );
}

export default Home;