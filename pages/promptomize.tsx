import Head from "next/head";
import {
  VStack,
  Center,
  Text,
  Heading,
  Button,
  Input,
  FormControl,
  Box,
  Container,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const [isLoading, setIsLoading] = useState(false);
  const [learn, setLearn] = useState("");
  const [data, setData] = useState("");

  const handleInputFormChange = (event: any) => {
    setLearn(event.target.value);
  };

  const gptPostClient = axios.create({
    baseURL: "https://api.openai.com/v1/chat/completions",
  });

  const returnResults = async () => {
    setIsLoading(true);
    const prompt =
      ". When the debate is over say, this brings an end to the debate, thank you for listening! Lastly make sure that your responses to each side are creative and not repetitive.";
    gptPostClient
      .post(
        "",
        {
          model: "text-davinci-003",
          prompt: prompt,
          max_tokens: 1000,
          temperature: 0,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      )
      .then((resp) => {
        setData(resp.data.choices[0].text.trim());
      });
    setTimeout(() => {
      setIsLoading(false);
    }, 7000);
  };

  return (
    <>
      <Head>
        <title>Promptomize</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="100%" bg="black">
        <Center>
          <VStack w="5xl" h="100vh" gap="50px">
            <Heading fontSize="50px" mt="10" color="#51da4c">
              It's time to super charge your prompt!
            </Heading>
            <HStack w="100%">
              <FormControl id="prompt" fontSize={"2xl"}>
                <Box>
                  <Input
                    bg="transparent"
                    color="#51da4c"
                    borderRadius="0"
                    border="2px"
                    p="9px"
                    placeholder="How do I write better content on Twitter?"
                    size="lg"
                    variant="unstyled"
                    autoComplete="off"
                    onChange={handleInputFormChange}
                    value={learn}
                  />
                </Box>
              </FormControl>
              <Button
                bg="transparent"
                color="#51da4c"
                size="lg"
                w="30%"
                borderRadius="0"
                border="2px"
                p="20px"
                onClick={returnResults}
                isLoading={isLoading}
                _hover={{
                  background: "#51da4c",
                  color: "black",
                }}
              >
                {" "}
                Promptimize
              </Button>
            </HStack>
            <Box padding="6" bg="transparent" borderRadius="lg">
              <Text fontSize="20px" whiteSpace="pre-wrap">
                {data}
              </Text>
            </Box>
          </VStack>
        </Center>
      </Container>
    </>
  );
}
