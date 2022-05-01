import React from 'react'
import inte from '../../image/inte.jpeg'
import saketh from '../../image/saketh.PNG'
import fr from '../../image/fr.jpeg'
import dp from '../../image/dp.jpeg'
import ms from '../../image/ms.jpeg'
import '../../styles/about.css'

const About = () => {
  return (
    <div className="ourteam_page">
      <div className="about_conatiner">
        <div className="about_box">
          <div className="box_one">
            <h1 className='about_heading'>About Resume Maker Application</h1>
            <p className="content">This is very easy and simple web application and also mobile application for resume maker and carrier builder.
              <br />
              In this application a user can create his/her own resume without any coast <br />
              before creating a resume a user must have to signup and login after signup and login user will be redirect to resume-dashboard page
              <br />
              Thre will be a three button which is create-resume, edit-resume and download resume, so first of all user must have to make his/her own  resume in this application,
              <br />
              After creatiing /making resume user can download and print his resume without any critical situation.
              <br />
              In This WebApplication there is a lot's of functionality/ features so user can intract <br />
              it is a Dynamic web application.
            </p>
          </div>
          <div className="box_two">
            <h1 className="job_heading">About Job Section</h1>
            <p className="content_2">This Web Application contain one job section on the top of the right side.
            <br />And the job section has a lot's functionality / features which represents how a student or profesional people can take help in this application.
            <br />This Web Application will helps every Students and user which are running about his/her features </p>
          </div>
          <div className="box_three">one</div>
        </div>
      </div>

      <div className="team_member">
        {/* Intezar component */}
        <div className="intezar">
          <div className="intezar_name">
            <div className='heading'>Md Intezar Alam</div>
            <div className='same'>Computer Science Engineer</div>
          </div>
          <div className="intezar_images">
            <img src={inte} alt="" className='imgs' />
          </div>
        </div>

        {/* Saketh component */}
        <div className="Saketh">
          <div className="Saketh_name">
            <div className='heading'>Rama Saketh</div>
            <div className='same'>Computer Science Engineer</div>
          </div>
          <div className="Saketh_images">
            <img src={saketh} alt="" className='imgs' />
          </div>
        </div>
        {/* Frhaan component */}
        <div className="frhan">
          <div className="farhaan_name">
            <div className='heading'>Farhaan Ali</div>
            <div className='same'>Computer Science Engineer</div>
          </div>
          <div className="farhaan_images">
            <img src={fr} alt="" className='imgs' />
          </div>
        </div>

        {/* deepak component */}
        <div className="deepak">
          <div className="deepak_name">
            <div className='heading'>Deepak </div>
            <div className='same'>Computer Science Engineer</div>
          </div>
          <div className="deepak_images">
            <img src={dp} alt="" className='imgs' />
          </div>
        </div>

        {/* mushab component */}
        <div className="mushab">
          <div className="mushab_name">
            <div className='heading'>Mushab Siddique</div>
            <div className='same'>Computer Science Engineer</div>
          </div>
          <div className="mushab_images">
            <img src={ms} alt="" className='imgs' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default About;