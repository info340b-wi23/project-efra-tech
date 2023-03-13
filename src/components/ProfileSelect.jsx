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
        <div className={"profile-container d-flex"}>
          <main className="profile-card-group d-flex">
            <div className="profile-card" onClick={(e) => handleLogin("CARL")}>
                <img src="../images/person_one.jpeg" className="card-img-top" alt="Profile 1"/>
                <div className="card-body">
                    <h1 className="card-title">Profile 1</h1>
                </div>
            </div>
            <div className="profile-card" onClick={(e) => handleLogin("NAME1")}>
                <img src="../images/person_two.jpeg" className="card-img-top" alt="Profile 2"/>
                <div className="card-body">
                    <h1 className="card-title">Profile 2</h1>
                </div>
            </div>
            <div className="profile-card" onClick={(e) => handleLogin("NAME2")}>
                <img src="../images/person_one.jpeg" className="card-img-top" alt="Profile 3"/>
                <div className="card-body">
                    <h1 className="card-title">Profile 3</h1>
                </div>
            </div>
            <div className="profile-card" onClick={(e) => handleLogin("NAME3")}>
                <img src="../images/person_four.jpeg" className="card-img-top" alt="Profile 4"/>
                <div className="card-body">
                    <h1 className="card-title">Profile 4</h1>
                </div>
            </div>
            <div className="container d-flex">
                <div className="align-self-center">
                    <button className="profile-editor" type="button" style={{"background-color": "#BFB4C7"}}>Edit Profile</button>
                </div>
            </div>
          </main>
        </div>
      </div>
      <div style={{width: "100%", height: "200px"}}></div>
    </>
  );
}

export default ProfileSelect;