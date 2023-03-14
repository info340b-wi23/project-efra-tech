import React from 'react';
import { useParams } from 'react-router-dom';
import { getStorage, ref } from "firebase/storage";

export default function RecipePage(props){
  const storage = getStorage();
  const recipeRef = ref(storage, 'cookbook');
  const album = useParams().recipeName; //REPLACE THIS WITH CORRECT VALUE
  return(
    <div className='container-main'>
      <div>
        <h1>{props.name}</h1>
        <p>hh</p>
      </div>
      <div>
        <p>{props.headnote}</p>
      </div>
      <div>
        <p>{props.ingredients}</p>
      </div>
      <div>
        <p>{props.steps}</p>
      </div>
    </div>
  );
}