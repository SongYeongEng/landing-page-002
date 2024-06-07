import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import linkedin from "./whiteLinkedIn.png";
import github from "./whiteGitHub.svg";
import './Navbar.css';
import './fonts.css';

const Section = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  background-color: ${props => props.scrolled ? '#333' : 'transparent'};
  color: ${props => props.scrolled ? 'white' : 'black'};
  transition: background-color 0.3s ease;
  position: sticky;
  top: 0;
  z-index: 999;
  margin-top: -170px;
  @media screen and (max-width: 768px) {
    margin-top: 0; /* Remove top margin for mobile devices */
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  list-style: none;
  font-size: 50px;
  @media (max-width: 769px) {
    flex-direction: row;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;
  font-family: 'MonoRegular', sans-serif;
  font-size: 15px;
  /* Initially hide the list items */
  @media (min-width: 769px) {
    flex-direction: row;
  }
  @media (max-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;



const ListItem = styled.li`
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(237, 234, 222, 0.5);
  cursor:pointer;
  &:hover {
    background-color: rgba(235, 235, 235, 0.8);
    transition: background-color 0.3s ease;
  }

  

  ${(props) =>
    props.hire &&
    `
    background-color:#BB5A5A;
    &:hover {
      background-color: #EA6868;
    }
  `}

  @media (min-width: 769px) {
    padding: 10px 20px;
  }
`;


const LinkedInIcon = styled.img`
  width: 15px;
  height: auto;
  padding-top: 2px;
  transform: scale(1.3);
`;

const GithubIcon = styled.img`
  width: 25px;
  height: auto;
  height: 100%;
  transform: scale(2);
`;

const LinkedInLink = styled.a`
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(237, 234, 222, 0.5);

  &:hover {
    background-color: rgba(235, 235, 235, 0.8);
    transition: background-color 0.3s ease;
  }

  @media (min-width: 769px) {
    padding: 10px 20px;
  }
`;

const GithubLink = styled.a`
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(237, 234, 222, 0.5);

  &:hover {
    background-color: rgba(235, 235, 235, 0.8);
    transition: background-color 0.3s ease;
  }

  @media (min-width: 769px) {
    padding: 10px 20px;
  }
`;

const LogoItem = styled.li`
cursor: pointer;
`;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 750) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHireClick = () => {
    window.location.href = 'mailto:esy.minmax@gmail.com';
  };

  const handleHomeClick = () => {
    const firstPageElement = document.getElementById('Home');

    if (firstPageElement) {
      firstPageElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  const handleAboutMeClick = () => {
    const secondPageElement = document.getElementById('AboutMe');

    if (secondPageElement) {
      secondPageElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  const handleProjectClick = () => {
    const thirdPageElement = document.getElementById('ShowCase');

    if (thirdPageElement) {
      thirdPageElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section scrolled={scrolled}>
      <Container>
        <Links className="Logo">
          <LogoItem onClick={handleHomeClick}>Yeong</LogoItem>
        </Links>
        <List>
          <ListItem onClick={handleHomeClick}>Home</ListItem>
          <ListItem onClick={handleAboutMeClick}>AboutMe</ListItem>
          <ListItem onClick={handleProjectClick}>Projects</ListItem>
          <GithubLink href="https://github.com/SongYeongEng">
            <GithubIcon src={github} alt="Github" />
          </GithubLink>
          <LinkedInLink href="https://www.linkedin.com/in/engsongyeong/">
            <LinkedInIcon src={linkedin} alt="LinkedIn" />
          </LinkedInLink>
          <ListItem hire onClick={handleHireClick}>
            Hire
          </ListItem>
        </List>
      </Container>
    </Section>
  );
}

export default Navbar;
