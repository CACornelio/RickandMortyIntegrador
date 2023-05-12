import Card from '../Card/Card';
import {CardsContainer} from "./styledComponents";


export default function Cards({characters, onClose}) {

   return (<CardsContainer>
{characters.map(({id, name, status, species,gender, origin,image,  }) => {
   return(
      <Card
      key={id}
      id={id}
      name = {name}
      status = {status}
      species = {species}
      gender = {gender}
      origin = {origin.name}
      image = {image}
      onClose={onClose}
      />
   
   )
})}
   </CardsContainer>
   )
}
