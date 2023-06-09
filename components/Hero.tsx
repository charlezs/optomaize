import {
  Button,
  Container,
  Stack,
  Text,
  Box,
  Image,
  HStack,
  Link,
} from "@chakra-ui/react";
import { useRef } from "react";
import NextLink from "next/link";

export default function Hero() {
  const scrollToRef = useRef<HTMLDivElement>(null);

  function handleClick() {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
      <Container maxW="100%" backgroundColor="black" h="100vh">
        <Stack direction={{ base: "column", sm: "column", md: "row" }} pt="100">
          <Stack direction="column" m="0" w="90%">
            <Text mt="0" textColor="#51da4c" fontSize="60px">
              Lets face it.
              <br /> Your prompts suck.
            </Text>
            <Text fontSize="20px" textColor="#51da4c" pb="20px">
              Welcome to promptomize, your AI friend that helps you make super
              <br />
              charged prompts.
            </Text>
            <HStack gap="20px">
              <Link as={NextLink} href="/promptomize">
                <Button
                  bg="transparent"
                  color="#51da4c"
                  size="sm"
                  borderRadius="0"
                  border="2px"
                  fontWeight={400}
                  _hover={{
                    background: "#51da4c",
                    color: "black",
                  }}
                >
                  <Text> Promptomize</Text>
                </Button>
              </Link>
              <Text
                bg="transparent"
                color="#51da4c"
                size="sm"
                w="100%"
                fontWeight={400}
                _hover={{
                  textDecoration: "underline",
                }}
              >
                {" "}
                <a onClick={handleClick}>Learn More</a>
              </Text>
            </HStack>
          </Stack>

          <Box w="100%" h="100%">
            <Image src="./tesstimg.jpg" alt="test" />
          </Box>
        </Stack>
      </Container>
      <Container
        maxW="100%"
        backgroundColor="black"
        pt={{ base: "300px", sm: "200px", md: "60px" }}
        pb={{ base: "150px", sm: "100px", md: "60px" }}
      >
        <Container maxW="100%">
          <Text
            fontSize="40px"
            textColor="#51da4c"
            fontFamily="serif"
            fontWeight={520}
            borderTop="2px"
            borderColor="#51da4c"
            ref={scrollToRef}
          >
            Promp·to·mize helps you take your GPT prompts to the next level
            using specially engineered prompts. Leveling up your prompts allows
            for quicker work, and better outputs.
          </Text>
        </Container>
      </Container>
    </>
  );
}
