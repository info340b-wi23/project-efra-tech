import { React, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getStorage, ref } from "firebase/storage";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";


export default function RecipePage(props){

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