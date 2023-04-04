import Head from "next/head";
import {
  Stack,
  Container,
  Heading,
  Box,
  Text,
  Divider,
} from "@chakra-ui/react";
import Hero from "@/components/Hero";
import { TypeAnimation } from "react-type-animation";
import NextLink from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Promptomize</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Container maxW="100%" backgroundColor="black">
        <Container maxW="100%" py="30px">
          <Box>
            <Text
              borderTop="2px"
              borderColor="#51da4c"
              fontSize="40px"
              textColor="#51da4c"
            >
              Supercharge Your Prompts{" "}
            </Text>
          </Box>

          <Stack direction="row" gap="10px" pt="100" pb="100px">
            <Box w="90%" border="2px" borderColor="green">
              <Box borderBottom="2px" mb="20px" borderColor="green" w="100%">
                <Heading
                  textColor="green"
                  fontSize="20px"
                  mb="25px"
                  pt="15px"
                  pl="15px"
                >
                  Regular Input
                </Heading>
                <Text
                  textColor="green"
                  mb="25px"
                  fontSize="16px"
                  pl="15px"
                  h="13vh"
                >
                  How can I write better content on Twitter?
                </Text>
              </Box>
              <Box>
                <Heading textColor="green" fontSize="20px" pl="15px">
                  {" "}
                  Output
                </Heading>
                <Box mt="20px" pl="15px">
                  <Text textColor="green" fontSize="16px">
                    <TypeAnimation
                      sequence={[
                        "Writing better content on Twitter requires a combination of writing skills, creativity, and knowledge of your target audience. Here are some tips that can help you improve your Twitter content...",
                        1000,
                      ]}
                      speed={70}
                      deletionSpeed={70}
                      wrapper="span"
                      repeat={Infinity}
                    />
                  </Text>
                </Box>{" "}
              </Box>
            </Box>

            <Box w="90%" border="2px" borderColor="#51da4c">
              <Box borderBottom="2px" mb="20px" borderColor="#51da4c">
                <Heading
                  textColor="#51da4c"
                  fontSize="20px"
                  mb="25px"
                  pl="15px"
                  pt="15px"
                >
                  Promptomized Input
                </Heading>
                <Text textColor="#51da4c" mb="25px" fontSize="16px" pl="15px">
                  In todays fast-paced digital world, its more important than
                  ever to create engaging and high-quality content on Twitter.
                  What are some effective strategies and best practices for
                  writing better content on Twitter? How can you utilize
                  different media formats, target the right audience, and
                  develop a consistent brand voice to improve your Twitter
                  content? Please provide specific examples and actionable tips
                  for creating top-notch tweets.{" "}
                </Text>
              </Box>
              <Box>
                <Heading textColor="#51da4c" fontSize="20px" pl="15px">
                  {" "}
                  Output
                </Heading>
                <Box mt="20px">
                  <Text textColor="#51da4c" fontSize="16px" pl="15px" pb="15px">
                    <TypeAnimation
                      sequence={[
                        "Creating engaging and high-quality content on Twitter can help you connect with your target audience, boost your brands visibility and improve your overall social media marketing strategy. Here are some effective strategies and best practices to follow for writing better content on Twitter...",
                        1000,
                      ]}
                      speed={70}
                      deletionSpeed={70}
                      wrapper="span"
                      repeat={Infinity}
                    />
                  </Text>
                </Box>{" "}
              </Box>
            </Box>
          </Stack>
        </Container>{" "}
      </Container>
    </>
  );
}
