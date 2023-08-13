import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
    alignItems='flex-start'
    borderRadius='16px'
    color='black'
    bg='white'
    cursor="pointer"
    >
      <Image src={imageSrc} borderRadius='16px' alt='title'/>
      <VStack
        alignItems='flex-start'
        padding='16px'
      >
        <Heading size='md'>{title}</Heading>
        <Text color='gray.600'>{description}</Text>
        <HStack>
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size='1x'/>
        </HStack>
      </VStack>
    </VStack>
  )
};

export default Card;
