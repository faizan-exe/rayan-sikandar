import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const translateRef = useRef('translateY(0)');
  let prevScrollPos = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const curScrollPos = window.scrollY;
      const isScrollingDown = curScrollPos > prevScrollPos;

      //scrolling down
      if (isScrollingDown){
        translateRef.current.style.transform = 'translateY(-200px)'
      }
      //scrolling up
      else {  
        translateRef.current.style.transform = 'translateY(0)'
      }

      prevScrollPos = curScrollPos;
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box
      ref={translateRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform='translateY(0)'
      transitionProperty="transform"
      transitionDuration=".6s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack
              justifyContent="space-between"
              alignItems="center"
              spacing='30px'
            >
              { socials.map((social) => {
                return (
                <a key={social.url} href={social.url} target="_blank">
                  <FontAwesomeIcon icon={social.icon} size="2x"/>
                </a>)
              })}
            </HStack>
            
          </nav>
          <nav>
            <HStack spacing={8}>
               <a href='/#projects' onClick={handleClick('projects')}>Projects</a>
              <a href='/#contactme' onClick={handleClick('contactme')}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
