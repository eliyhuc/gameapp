import React, {useState} from 'react'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Gamelist from './components/Gamelist'
import Genrelist from './components/Genrelist'


const App = () => {

  const [selectedGenre, setSelectedGenre] = useState('');

  console.log(selectedGenre);

  return (
    <Grid templateAreas={{base: `"nav" "main"`, lg: `"nav nav" "aside main"`}}>
      <GridItem area='nav'>
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <Genrelist selectedGenre={selectedGenre} onSelectGenre={(selectedGenre) => setSelectedGenre(selectedGenre)} />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <Gamelist selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
