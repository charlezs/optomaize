import { Button, Container, Stack, Text, Box, Image } from "@chakra-ui/react";

export default function Hero() {
  return (
    <>
      <Container maxW="100%" backgroundColor="#51da4c" h="100vh">
        <Stack direction="row" gap="100px" pt="100">
          <Stack direction="column" m="0">
            <Text mt="0" textColor="black" fontSize="60px">
              Lets face it. Your prompts suck.
            </Text>
            <Text fontSize="16px" textColor="black" pb="20px">
              Welcome to promptomize, your AI friend that helps YOU make good
              prompts.
            </Text>
            <Button
              bg="transparent"
              color="black"
              size="lg"
              borderRadius="0"
              border="2px"
              fontWeight={400}
              _hover={{
                background: "black",
                color: "#51da4c",
              }}
            >
              {" "}
              Promptomize
            </Button>
          </Stack>

          <Box w="50%">
            <Image w="100%" h="80%" src="./testimg.jpg" alt="test" />
          </Box>
        </Stack>
      </Container>
      <Container maxW="100%" backgroundColor="#51da4c" pb="60px">
        <Text
          fontSize="40px"
          textColor="black"
          fontFamily="serif"
          fontWeight={520}
          borderTop="2px"
          borderColor="black"
        >
          Promp·to·mize helps you take your GPT prompts to the next level using
          specially engineered prompts. <br /> Leveling up your prompts allows
          for quicker work, and better outputs.
        </Text>
      </Container>
    </>
  );
}
