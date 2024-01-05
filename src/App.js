import React from 'react'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Gamelist from './components/Gamelist'
import Genrelist from './components/Genrelist'


const App = () => {

  return (
    <Grid templateAreas={{base: `"nav" "main"`, lg: `"nav nav" "aside main"`}}>
      <GridItem area='nav'>
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <Genrelist />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <Gamelist />
      </GridItem>
    </Grid>
  )
}

export default App
