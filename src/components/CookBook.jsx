import React, { useState, useEffect } from 'react';
import { Card } from './Cards';
import Form from 'react-bootstrap/Form';
import { filter } from 'lodash';

export default function CookBook(props) {
  // filter options: breakfast, lunch, dinner, dessert, snack, red meat, poultry, seafood, vegetarian, vegan
  const cards = [
    {
      id: 1,
      imageUrl: "/images/baked-fish.jpeg",
      title: "Baked Fish with Parmesan Breadcrums",
      linkUrl: "",
      filters: ['lunch', 'dinner', 'seafood']
    },
    {
      id: 2,
      imageUrl: "/images/pan-seared-tilapia.jpeg",
      title: "Pan Seared Tilapia",
      linkUrl: "",
      filters: ['lunch', 'dinner', 'seafood']
    }
  ];

  const filteredCards = cards.filter((card) => card.title.toLowerCase().startsWith(props.searchQuery.toLowerCase()));

  const [filters, setFilters] = useState([]);

  function handleCheckboxClick(evt) {
    if(!filters.includes(evt.target.name)){
      setFilters([...filters, evt.target.name]);
    } else {
      setFilters(
        filters.filter(filterStr => filterStr !== evt.target.name)
      );
    }
  }

  let recipesToRender = filteredCards;
  if(filters.length !== 0){
    recipesToRender = filteredCards.filter((recipeObj) => {
      for(const facet of recipeObj.filters){
        if(filters.includes(facet)){
          return recipeObj;
        }
      }
    });
  }

  return (
    <div>
      <FilterBar clickHandle={handleCheckboxClick} />
      <button type="button" className="upload-button my-2 my-sm-0" data-toggle="modal" data-target="#uploadModal" data-whatever="@mdo">Add a recipe</button>
      <div className='container-main'>
        {recipesToRender.map((card) => (
          <Card key={card.id} title={card.title} imageUrl={card.imageUrl} linkUrl="cook-book" filters={card.filters} />
        ))}
      </div>
    </div>
  );
}

function FilterBar(props){
  return (
    <div className='filter-bar'>
      <div>
        <Form>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="my-1">
              <Form.Check
                inline
                label="Breakfast"
                type={type}
                id={`inline-${type}-bre`}
                name='breakfast'
                onClick={props.clickHandle}
              />
              <Form.Check
                inline
                label="Lunch"
                type={type}
                name='lunch'
                id={`inline-${type}-lun`}
                onClick={props.clickHandle}
              />
              <Form.Check
                inline
                label="Dinner"
                type={type}
                name='dinner'
                id={`inline-${type}-din`}
                onClick={props.clickHandle}
              />
              <Form.Check
                inline
                label="Dessert"
                name='dessert'
                type={type}
                id={`inline-${type}-des`}
                onClick={props.clickHandle}
              />
              <Form.Check
                inline
                label="Snack"
                name='snack'
                type={type}
                id={`inline-${type}-sna`}
                onClick={props.clickHandle}
              />
            </div>
          ))}
        </Form>
      </div>
      <div>
        <Form>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="my-1">
              <Form.Check
                inline
                label="Red Meat"
                name='red meat'
                type={type}
                id={`inline-${type}-red`}
                onClick={props.clickHandle}
              />
              <Form.Check
                inline
                label="Poultry"
                name='poultry'
                type={type}
                id={`inline-${type}-pou`}
                onClick={props.clickHandle}
              />
              <Form.Check
                inline
                label="Seafood"
                name='seafood'
                type={type}
                id={`inline-${type}-sea`}
                onClick={props.clickHandle}
              />
              <Form.Check
                inline
                label="Vegetarian"
                name='vegetarian'
                type={type}
                id={`inline-${type}-veget`}
                onClick={props.clickHandle}
              />
              <Form.Check
                inline
                label="Vegan"
                name='vegan'
                type={type}
                id={`inline-${type}-vegan`}
                onClick={props.clickHandle}
              />
            </div>
          ))}
        </Form>
      </div>
    </div>
  )
}
