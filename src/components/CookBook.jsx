import React, { useState, useEffect } from 'react';
import { Card } from './Cards';
import { FilterBar } from './CookbookFilter';

import Form from 'react-bootstrap/Form';
import { filter } from 'lodash';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { getDatabase, ref, set as firebaseSet } from 'firebase/database';

// filter options: breakfast, lunch, dinner, dessert, snack, red meat, poultry, seafood, vegetarian, vegan

export default function CookBook(props) {

  const cards = [
    {
      imageUrl: "/images/baked-fish.jpeg",
      title: "Baked Fish with Parmesan Breadcrumbs",
      linkUrl: "",
      filters: 'LunchDinnerSeafood'
    },
    {
      imageUrl: "/images/pan-seared-tilapia.jpeg",
      title: "Pan Seared Tilapia",
      linkUrl: "",
      filters: 'LunchDinnerSeafood'
    }
  ];

  // adds hard-coded cards into firebase -> maybe create a delete option for these?
  const db = getDatabase();
  const recipeListRef = ref(db, 'cookbook/recipeList');
  firebaseSet(recipeListRef, cards);

  const filteredCards = cards.filter((card) => card.title.toLowerCase().startsWith(props.searchQuery.toLowerCase()));

  const [filters, setFilters] = useState('');
  const [modalShow, setModalShow] = useState(false);

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  function handleCheckboxClick(evt) {
    if(!filters.includes(evt.target.name)){
      setFilters(filters + evt.target.name);
    } else {
      setFilters(
        filters.replace(evt.target.name, '')
      );
    }
  }

  let recipesToRender = filteredCards;
  if(filters.length !== 0){
    recipesToRender = filteredCards.filter((recipeObj) => {
      const recipesArrOfFilterTags = recipeObj.filters.split(/(?=[A-Z])/);
      for(const facet of recipesArrOfFilterTags){
        if(filters.includes(facet.toLowerCase())){
          return recipeObj;
        }
      }
    });
  }

  return (
    <div>
      <FilterBar clickHandle={handleCheckboxClick} />

      <Button className="upload-button my-2 my-sm-0" onClick={handleModalShow}>Add a recipe</Button>
        <Modal
          show={modalShow}
          onHide={handleModalClose}
          size='xl'
          centered
        >
        <Modal.Header closeButton>
          <Modal.Title>Add a new page to your family's cookbook</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group mb-4">
              <label for="recipeName">Name your recipe</label>
              <textarea className="form-control px-5" key="recipeName" rows="1"></textarea>
            </div>
            <div className="form-group mb-4">
              <label for="recipeHeadnote">Where did this recipe come from?</label>
              <textarea className="form-control px-5" key="recipeHeadnote" rows="2"></textarea>
            </div>
            <div className="form-group mb-4">
              <label for="recipeIngredientList">List the ingredients</label>
              <textarea className="form-control px-5" key="recipeIngredientList" rows="4"></textarea>
            </div>
            <div className="form-group mb-4">
              <label for="recipeSteps">List the steps</label>
              <textarea className="form-control px-5" key="recipeSteps" rows="4"></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className='container-main'>
        {recipesToRender.map((card) => (
          <Card key={card.id} title={card.title} imageUrl={card.imageUrl} linkUrl="cook-book" filters={card.filters} />
        ))}
      </div>
    </div>
  );
}

