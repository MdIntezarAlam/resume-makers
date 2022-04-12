import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../../styles/dashboard.css'
import { auth } from '../../Service/firebase';


const Dashboard = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      }
      else setUserName("");
    });
  }, []);

  return (
    <div className="create_resume_page">

      <div className="create_resume_page_container">
        <div className="login_success_and_dashboard">

          <h2 className='login_success'>Welcome Dear {userName}</h2>
        </div>
        <div className="Crete_resume">
          <Link to="/create_resume">
            <button className='create_resume_btn'>Create Resume</button>
          </Link>
        </div>
        <div className="download_resume">
          <Link to="/body">
            <button className='download_resume_btn'>Download Resume</button>
          </Link>
        </div>
        <div className="edit_resume">
          <Link to="/body">
            <button className='edit_resume_btn'>Edit Resume</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard