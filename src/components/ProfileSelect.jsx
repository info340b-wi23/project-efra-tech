import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../index.css"


const ProfileSelect = ({setCurrentProfile}) => {
  const navigate = useNavigate();

  const handleLogin = (newUser) => {
    setCurrentProfile(newUser)
    navigate("/home/");
  }

  return (
    <>
      <div>
        <main className="profile-card-group container-main profile-container">
          <div className="card profile-card col-sm-4 col-md-2" onClick={(e) => handleLogin("CARL")}>
              <img src="../images/av1.png" className="card-img-top" alt="Profile 1"/>
              <div className="card-body">
                  <h1 className="card-title">Profile 1</h1>
              </div>
          </div>
          <div className="card profile-card col-sm-4 col-md-2" onClick={(e) => handleLogin("NAME1")}>
              <img src="../images/av2.png" className="card-img-top" alt="Profile 2"/>
              <div className="card-body">
                  <h1 className="card-title">Profile 2</h1>
              </div>
          </div>
          <div className="card profile-card col-sm-4 col-md-2" onClick={(e) => handleLogin("NAME2")}>
              <img src="../images/av3.png" className="card-img-top" alt="Profile 3"/>
              <div className="card-body">
                  <h1 className="card-title">Profile 3</h1>
              </div>
          </div>
          <div className="card profile-card col-sm-4 col-md-2" onClick={(e) => handleLogin("NAME3")}>
              <img src="../images/av4.png" className="card-img-top" alt="Profile 4"/>
              <div className="card-body">
                  <h1 className="card-title">Profile 4</h1>
              </div>
          </div>
        </main>
        {/* <button className="profile-editor-btn" type="button">Edit Profile</button> */}
      </div>
    </>
  );
}

export default ProfileSelect;