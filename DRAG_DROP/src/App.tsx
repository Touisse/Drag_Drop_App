import "./App.css";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Column from './Components/Column.tsx';
import { ColumnType } from './Utils/enums.ts';

function App() {
  return (
    <>
      <Heading
        fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
        fontWeight="bold"
        textAlign="center"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        mt={4}
      >
        Welcome to Drag & Drop Application
      </Heading>
      <Container maxWidth="container.lg" px={4} py={10}>
        <SimpleGrid columns={{base:1,md: 4}} spacing={{base:16,md: 4}}>
          <Column column={ColumnType.TO_DO}/>
          <Column column={ColumnType.IN_PROGRESS}/>
          <Column column={ColumnType.BLOCKED}/>
          <Column column={ColumnType.COMPLETED}/>
        </SimpleGrid>
      </Container>
    </>
  );
}

export default App;
