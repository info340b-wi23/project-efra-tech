import React, { useState } from 'react';
import { Card } from './Cards';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  function handleBtnClick(){
    if(sortButton === 'A-Z'){
      setSortButton('Z-A');
    } else {
      setSortButton('A-Z');
    }
  }

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
          <label for="nameInput">Album Name: </label><br/>
          <input type="text" id="albumNameInput"/><br/>
          <label for="input-file-now">Import Images:</label>
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
      </div>
      <main class='container-main'>
        {filteredCards.map((card) => (
          <Card key={card.id} title={card.title} imageUrl={card.imageUrl} linkUrl={card.linkUrl} />
        ))}
      </main>
    </div>
  );
}
