import { React, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getStorage, ref } from "firebase/storage";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";


export default function RecipePage(props){
  const recipeParam = useParams().recipeName; //REPLACE THIS WITH CORRECT VALUE

  let renderedRecipe = 'No recipe found';

  useEffect(() => {
    fetchRecipe();
  }, []);

  async function fetchRecipe() {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "recipes"));
    const fetchedRecipe = querySnapshot.docs.filter(doc => {doc.name === 'Baked Fish with Parmesan Breadcrumbs'});
    renderedRecipe = fetchedRecipe;
  }

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