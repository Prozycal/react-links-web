// src/components/Page.js
import React from 'react';
import Link from './Link';
import './Page.css';
import profile from '../assets/profile.jpg';

const LinkTree = () => {
  const links = [
    { title: 'Personal Site', url: 'https://frl.blue' },
    { title: 'Blog', url: 'https://frl.blue' },
    { title: 'Resume', url: 'https://frl.blue' },
  ];

  const socialLinks = [
    { icon: 'fab fa-instagram-square', url: 'https://www.instagram.com/frrlverse/' },
    { icon: 'fab fa-spotify', url: 'https://open.spotify.com/user/njtm9uwpuxk0iupk6ezpytyen' },
    { icon: 'fas fa-donate', url: 'https://saweria.co/Prozycal' },
    { icon: 'fab fa-github', url: 'https://github.com/Prozycal' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/frrlverse/' },
  ];

  return (
    <div className="linktree">
      <div className="container">
        <img src={profile} alt="Profile" className="profile-img" />
        <h1>Muhammad Farrel Rabbani</h1>
        <p className='text-sm'>Frontend Developer & Graphic Designer</p>
        <div className="links font-medium">
          {links.map((link, index) => (
            <Link key={index} title={link.title} url={link.url} />
          ))}
        </div>
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
        <p className="smalltext">Created with <i className="fab fa-react"></i> <i className="fab fa-js-square"></i></p>
        <br></br>
        <hr></hr>
        <footer className='text-xs'>&copy; 2024 frrlverse. All Rights Reserved.</footer>
      </div>
    </div>
  );
};

export default LinkTree;
