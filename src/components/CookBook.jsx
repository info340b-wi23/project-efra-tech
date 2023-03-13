import React, { useState, useEffect } from 'react';
import { Card } from './Cards';
import { FilterBar } from './CookbookFilter';

import Form from 'react-bootstrap/Form';
import { filter } from 'lodash';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { getDatabase, ref, set as firebaseSet, push as firebasePush } from 'firebase/database';

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

  // // adds hard-coded cards into firebase -> maybe create a delete option for these?
  // const db = getDatabase();
  // const recipeListRef = ref(db, 'cookbook/recipeList');
  // firebaseSet(recipeListRef, cards);

  const filteredCards = cards.filter((card) => card.title.toLowerCase().startsWith(props.searchQuery.toLowerCase()));

  const [filters, setFilters] = useState('');

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

  // Modal + Form Handling
  const [modalShow, setModalShow] = useState(false);
  const [newRecipe, setNewRecipe] = useState({name: '', headnote: '', ingredients: '', steps: '', filters: '', linkUrl:''})
  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  function handleNameEntry(evt){
    newRecipe.name = evt.target.value;
  }
  function handleHeadnoteEntry(evt){
    newRecipe.headnote = evt.target.value;
  }
  function handleIngredientEntry(evt){
    newRecipe.ingredients = evt.target.value;
  }
  function handleStepsEntry(evt){
    newRecipe.steps = evt.target.value;
  }
  function handleAddingFilters(evt){
    if(newRecipe.filters === ''){
      newRecipe.filters = evt.target.name;
    } else {
      newRecipe.filters = newRecipe.filters + evt.target.name;
    }
  }
  function handleSubmit(evt){
    evt.preventDefault();
    handleModalClose();

    const db = getDatabase();
    const recipeListRef = ref(db, 'cookbook/recipeList');
    firebasePush(recipeListRef, newRecipe);
  }

  // resets empty newRecipe state after modal has been submitted
  if(newRecipe.name !== ''){
    setNewRecipe({name: '', headnote: '', ingredients: '', steps: '', filters: '', linkUrl:''});
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

        <Form>
          <Form.Group className="mb-4" controlId="formRecipeName">
            <Form.Label>What's the dish?</Form.Label>
            <Form.Control placeholder="Roasted Paprika-Coated Chicken with Honey-Glazed Potatoes..." onChange={handleNameEntry}/>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formHeadnote">
            <Form.Label>Where'd this recipe come from?</Form.Label>
            <Form.Control placeholder="Inspired by dad spilling too much paprika and mom loving it..." onChange={handleHeadnoteEntry}/>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formIngredients">
            <Form.Label>List the ingredients</Form.Label>
            <Form.Control placeholder="- Goggles to block onion fumes"  onChange={handleIngredientEntry}/>
            <Form.Text>For now, separate each of your items with a ';'</Form.Text>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formSteps">
            <Form.Label>List the steps</Form.Label>
            <Form.Control placeholder="First, play Zou bisou bisou..." onChange={handleStepsEntry}/>
            <Form.Text>For now, separate each of your steps with a ';'</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Pick its categories</Form.Label>
            <div className="mb-3 d-flex justify-content-between border border-black">
              {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack', 'Red Meat', 'Poultry', 'Seafood', 'Vegetarian', 'Vegan'].map((filterStr) => {
                return <MakeFormCheck for={filterStr} handleFilters={handleAddingFilters} />
              })}
            </div>
          </Form.Group>
        </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} type='submit'>
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

function MakeFormCheck(props){
  return(
    <Form.Check
      type="checkbox"
      id={props.for + 'Id'}
      label={props.for}
      name={props.for}
      onClick={props.handleFilters}
    />
  );
}