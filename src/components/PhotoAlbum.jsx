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

  return (
    <main class='container-main'>
      {filteredCards.map((card) => (
        <Card key={card.id} title={card.title} imageUrl={card.imageUrl} linkUrl={card.linkUrl} />
      ))}
    </main>
  );
}

// MODAL FOR UPLOADING NOT FUNCTIONING
//
export function AddAlbumButton(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <Button onClick={() => setModalShow(true)} className="btn btn-outline-success my-2 my-sm-0">+ New</Button>
      <Modal
        size="sm"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label for="AlbumNameInput">Album Name:</label><br />
            <input type="text" key="nameInput" className='form-control' /><br />
            <div className="file-upload-wrapper">
              <label for="input-file-now">Upload Thumbnail Image:</label>
              <input type="file" class="form-control-file" id="exampleFormControlFile1" />
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}