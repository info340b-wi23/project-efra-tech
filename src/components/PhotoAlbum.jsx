import React, { useState } from 'react';
import { Card } from './Cards';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { getDatabase, ref, set as firebaseSet, push as firebasePush } from 'firebase/database';


export default function PhotoAlbum(props) {

  const cards = [
    {
      imageUrl: "/images/all-images-cover.jpg",
      title: "All Images",
      linkUrl: "photo-gallery",
    },
    {
      id: 2,
      imageUrl: "/images/kids-album-cover1.jpg",
      title: "Kids Album",
      linkUrl: "photo-gallery",
    },
    {
      id: 3,
      imageUrl: "/images/vacation-album-cover.jpg",
      title: "Vacation Album",
      linkUrl: "photo-gallery",
    }
  ];

  const filteredCards = cards.filter((card) => card.title.toLowerCase().startsWith(props.searchQuery.toLowerCase()));

  const [sortButton, setSortButton] = useState('A-Z');
  const [modalShow, setModalShow] = useState(false);
  const [newAlbum, setNewAlbum] = useState({name: '', color:''})

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  function handleBtnClick(){
    if(sortButton === 'A-Z'){
      setSortButton('Z-A');
    } else {
      setSortButton('A-Z');
    }
  }

  function handleNameEntry(evt){
    newAlbum.name = evt.target.value;
  }
  function handleColorEntry(evt){
    newAlbum.color = evt.target.value;
  }
  function handleImagesEntry(evt){
    console.log(evt.target.value)
  }
  function handleSubmit(evt){
    evt.preventDefault();
    handleModalClose();

    // const db = getDatabase();
    // const recipeListRef = ref(db, 'cookbook/recipeList');
    // firebasePush(recipeListRef, newRecipe);
  }
  console.log(newAlbum);

  return (
    <div className='mt-4'>
      <div className='d-flex mb-5 mt-3'>
        <button type="button" className="my-sm-0 sort-btn" onClick={handleBtnClick}>{ sortButton }</button>
        <Button className="upload-button my-2 my-sm-0" onClick={handleModalShow}>Add an album</Button>
        <Modal
          show={modalShow}
          onHide={handleModalClose}
          size='lg'
          centered
        >
        <Modal.Header closeButton>
          <Modal.Title>Add another chapter to your memories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-4" controlId="formAlbumName">
              <Form.Label>Name your album</Form.Label>
              <Form.Control placeholder="Christmas at Auntie Jane's" onChange={handleNameEntry}/>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formGallery">
              <Form.Label>Where'd this recipe come from?</Form.Label>
              <Form.Control data-mdb-file-upload="file-upload" className='form-control file-upload-input'
                type="file" multiple onChange={handleImagesEntry}/>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formColorPicker">
              <Form.Label>Pick the color for your album cover!</Form.Label>
              <Form.Control data-mdb-file-upload="file-upload" className='form-control-lg form-control-color'
                value="#b0c9c8" type="color" onChange={handleColorEntry}/>
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
      </div>
      <main class='container-main'>
        {filteredCards.map((card) => (
          <Card key={card.id} title={card.title} imageUrl={card.imageUrl} linkUrl={card.linkUrl} />
        ))}
      </main>
    </div>
  );
}
