import React, {useEffect,useState} from 'react'
import apiservice from '../services/api-service'
import { Button, HStack, Image, List, ListItem } from '@chakra-ui/react'

const Genrelist = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    apiservice.get('/genres')
    .then(res => {
      setGenres(res.data.results)
    })
    .catch(err => console.log(err))
  },[])


  return (
    <>
    <List>
        {
          genres.map((genre) => (
            <ListItem key={genre.id} paddingY="7px">
              <HStack>
                <Image boxSize="32px" borderRadius={8} src={genre.image_background} />
                <Button 
                fontSize="lg" variant="link">
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))
        }
    </List>
    </>
  )
}

export default Genrelist