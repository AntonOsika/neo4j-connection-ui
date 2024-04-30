import neo4j from 'neo4j-driver';
import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Text, VStack } from '@chakra-ui/react';

const Index = () => {
  const [dbUrl, setDbUrl] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [connectionResult, setConnectionResult] = useState('');

  const handleConnect = async () => {
    try {
      const driver = neo4j.driver(dbUrl, neo4j.auth.basic(username, password));
      const session = driver.session();
      const result = await session.run('MATCH (n) RETURN n LIMIT 10');
      const nodes = result.records.map(record => record.get('n'));
      const edgesCount = await session.run('MATCH ()-[r]->() RETURN count(r) as count');
      const edges = edgesCount.records[0].get('count').toInt();
      setConnectionResult(`Connected successfully. Found ${nodes.length} nodes and ${edges} edges.`);
      session.close();
      driver.close();
    } catch (error) {
      setConnectionResult(`Failed to connect: ${error.message}`);
    }
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