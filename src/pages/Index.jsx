import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Text, VStack } from '@chakra-ui/react';

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
    <VStack spacing={4} align="stretch">
      <Box p={5} shadow="md" borderWidth="1px">
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
        <Button mt={4} colorScheme="blue" onClick={handleConnect}>Connect</Button>
      </Box>
      {connectionResult && (
        <Box p={5} mt={4} shadow="md" borderWidth="1px">
          <Text>{connectionResult}</Text>
        </Box>
      )}
    </VStack>
  );
};

export default Index;