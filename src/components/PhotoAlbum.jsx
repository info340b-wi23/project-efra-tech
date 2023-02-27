import React, { useState } from 'react';
import { Card } from './Cards';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function PhotoAlbum(props) {

  return (
    <main class='container-main'>
        <Card
          imageUrl="/images/all-images-cover.jpg"
          title="All Images"
          linkUrl="album-name.html"
        />
        <Card
          imageUrl="/images/kids-album-cover1.jpg"
          title="Kids Album"
          linkUrl="album-name.html"
        />
        <Card
          imageUrl="/images/vacation-album-cover.jpg"
          title="Vacation Album"
          linkUrl="album-name.html"
        />
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
            <label for="AlbumNameInput">Album Name:</label><br/>
            <input type="text" key="nameInput" className='form-control'/><br/>
            <div className="file-upload-wrapper">
              <label for="input-file-now">Upload Thumbnail Image:</label>
              <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
             </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
{/* <div>
      <button type="button" className="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#uploadModal" data-whatever="@mdo">
        + New
      </button>
      <div className="modal fade" id="uploadModal" tabindex="-1" role="dialog" aria-labelledby="Upload Album" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="uploadAlbumLabel">Create New Folder:</h2>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <label for="AlbumNameInput">Album Name</label><br/>
                <input type="text" key="nameInput" className='form-control'/><br/>
                <div className="file-upload-wrapper">
                  <label for="input-file-now">Upload Image:</label>
                  <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div> */}