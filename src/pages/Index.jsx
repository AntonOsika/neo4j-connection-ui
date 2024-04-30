import { useState } from 'react';
import { Flex, Heading } from '@chakra-ui/react';

const Index = () => {
  const [dbUrl, setDbUrl] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [connectionResult, setConnectionResult] = useState('');

  const handleConnect = async () => {
    // Placeholder for database connection logic
    setConnectionResult('Connected successfully. Found 10 nodes and 5 edges.');
  };

  return (
    <Flex direction="column" w="100%" p={4} bg="blue.800" color="white">
      <Heading mb={4}>GPT Engineer</Heading>
      <Flex direction="column" w="100%" p={4} bg="blue.800" color="white">
        <Heading mb={4}>GPT Engineer</Heading>
        <VStack spacing={4} align="stretch" p={5}>
          <Box p={8} shadow="md" borderWidth="1px">
            <FormControl isRequired>
              <FormLabel htmlFor="db-url">Database URL</FormLabel>
              <Input id="db-url" placeholder="Enter Neo4j Database URL" onChange={(e) => setDbUrl(e.target.value)} />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input id="username" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Button mt={4} colorScheme="teal" onClick={handleConnect}>Connect</Button>
          </Box>
          {connectionResult && (
            <Box p={8} mt={4} shadow="md" borderWidth="1px">
              <Text>{connectionResult}</Text>
            </Box>
          )}
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Index;