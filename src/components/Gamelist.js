import React, {useEffect,useState} from 'react'
import apiservice from '../services/api-service'
import { SimpleGrid } from '@chakra-ui/react'
import GameCard from './GameCard';

const Gamelist = (props) => {

  const [games, setGames] = useState([]);

  useEffect(() => {
    apiservice.get('/games',{
      params: {
        genres: props.selectedGenre.id
      }})
    .then(res => {
      setGames(res.data.results)
    })
    .catch(err => console.log(err))
  },[games])


  return (
    <>
      <SimpleGrid spacing={10} columns={{sm:1, md:2, lg:3, xl:4}}>
        {
          games.map((game) => (
            <GameCard game={game} />
          ))
        }
      </SimpleGrid>
    </>
  )
}

export default Gamelist