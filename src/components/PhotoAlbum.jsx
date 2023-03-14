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
      albumName: "all-images",
    },
    {
      id: 2,
      imageUrl: "/images/kids-album-cover1.jpg",
      title: "Kids Album",
      albumName: "kids-album",
    },
    {
      id: 3,
      imageUrl: "/images/vacation-album-cover.jpg",
      title: "Vacation Album",
      albumName: "vacation",
    }
  ];

  const filteredCards = cards.filter((card) => card.title.toLowerCase().startsWith(props.searchQuery.toLowerCase()));

  const [modalShow, setModalShow] = useState(false);
  const [newAlbum, setNewAlbum] = useState({name: '', color:'', imageUrls:[]})


  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  function handleNameEntry(evt){
    newAlbum.name = evt.target.value;
  }
  function handleColorEntry(evt){
    newAlbum.color = evt.target.value;
  }
  function handleImagesEntry(evt){
    console.log(evt.target.value);
  }
  function handleSubmit(evt){

    evt.preventDefault();
    handleModalClose();

    // const db = getDatabase();
    // const recipeListRef = ref(db, 'cookbook/recipeList');
    // firebasePush(recipeListRef, newRecipe);
  }
  console.log(newAlbum);

  // resets empty newAlbum state after modal has been submitted
  if(newAlbum.name !== ''){
    setNewAlbum({name: '', color: '', imageUrls:[]});
  }

  return (
    <div className='mt-4'>
      <div className='d-flex mb-5 mt-3'>
        <Button className="upload-btn my-2 my-sm-0 ml-2 p-3" onClick={handleModalShow}>Add an album</Button>
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

            <Form.Group className="mb-4" controlId="formColorPicker">
              <Form.Label>Pick the color for your album cover:</Form.Label>
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
      <main class='container d-flex justify-content-between'>
        {filteredCards.map((card) => (
          <Card key={card.id} title={card.title} imageUrl={card.imageUrl} albumName={card.albumName} />
        ))}
      </main>
    </div>
  );
}
