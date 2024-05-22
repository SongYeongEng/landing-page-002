import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from "./Logo.svg";
import linkedin from "./whiteLinkedIn.png";
import github from "./whiteGitHub.svg";
import './Navbar.css';
import './fonts.css';

const Section = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  background-color: ${props => props.scrolled ? '#333' : 'transparent'};
  transition: background-color 0.3s ease;
  position: sticky;
  top: 0;
  z-index: 999;
  margin-top: -170px;
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

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  list-style: none;
  font-family: 'MonoRegular', sans-serif;
  font-size: 15px;
  color: black;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const LogoImage = styled.img`
  display: block;
  width: 85%;
  height: auto;
  background-color: #6E80A2;
  border-radius: 10px;
  padding: 15px;
  min-width: 150px;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
`;

const LogoContainer = styled.div`
  width: 50%;

  &:hover {
    ${LogoImage} {
      background-color: #6786c2;
      transform: scale(1.3) translateX(3px) translateY(-3px);
      animation: glitch 0.1s infinite alternate;
    }
  }

  &:hover {
    ${LogoImage} {
      background-color: #6786c2;
      transform: scale(1.3);
      animation: bounce 0.5s ease-in-out;
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: scale(1.3) translateY(0);
    }
    50% {
      transform: scale(1.3) translateY(-10px);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const ListItem = styled.li`
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(235, 235, 235, 0.3);

  &:hover {
    background-color: rgba(235, 235, 235, 0.7);
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

const StyledImage = styled.img``;

const LinkedInIcon = styled.img`
  width: 15px;
  padding-top: 2px;
  transform: scale(1.3);
`;

const GithubIcon = styled.img`
  width: 15px;
  height: 100%;
  transform: scale(2.5);
`;

const LinkedInLink = styled.a`
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(235, 235, 235, 0.3);

  &:hover {
    background-color: rgba(235, 235, 235, 0.7);
    transition: background-color 0.3s ease;
  }

  @media (min-width: 769px) {
    padding: 10px 20px;
  }
`;

const GithubLink = styled.a`
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(235, 235, 235, 0.3);

  &:hover {
    background-color: rgba(235, 235, 235, 0.7);
    transition: background-color 0.3s ease;
  }

  @media (min-width: 769px) {
    padding: 10px 20px;
  }
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

  const handleProjectClick = () => {
    const secondPageElement = document.getElementById('secondPage');

    if (secondPageElement) {
      secondPageElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section scrolled={scrolled}>
      <Container>
        <Links>
          <LogoContainer>
            <LogoImage as={StyledImage} src={logo} alt="Logo" />
          </LogoContainer>
        </Links>
        <List>
          <ListItem>Home</ListItem>
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
