import {
  Button,
  Container,
  Stack,
  Text,
  Box,
  Image,
  HStack,
  Center,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <>
      <Container maxW="100%" backgroundColor="#51da4c" h="100vh">
        <Center>
          <Stack direction="row" justifyContent="space-between" pt="100">
            <Stack direction="column" m="0" w="50%">
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

            <Box h="100%">
              <Image height="700px" src="./testimg.jpg" alt="test" />
            </Box>
          </Stack>
        </Center>
      </Container>
      <Container maxW="100%" backgroundColor="#51da4c" py="60px">
        <Text
          fontSize="40px"
          textColor="black"
          fontFamily="serif"
          fontWeight={520}
          borderTop="2px"
          borderColor="black"
        >
          Promp·to·mize helps you take your GPT prompts to the next level using
          specially engineered prompts. Leveling up your prompts allows for
          quicker work, and better outputs.
        </Text>
      </Container>
    </>
  );
}
