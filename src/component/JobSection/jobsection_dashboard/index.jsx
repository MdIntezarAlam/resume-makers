import React from 'react'
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WorkIcon from '@material-ui/icons/Work';
import jb from '../../../image/jb.jpg'
import sp from '../../../image/sp.PNG'
import '../../../styles/jobsectiondashboard.css'

const Jobsection_Dashboard = () => {
    return (
        <>
            <div className='jobsection_dashboard'>
                <div className="dashboard_container">
                    <div className="placement">
                        <div className="pre_icon"><WorkIcon className='aptt_btn' />
                        <button className='pre_btn'>Placements</button>
                        </div>
                    </div>
                    <div className="previous">
                        <div className="pre_icon"><YouTubeIcon className='youtube_btn' />
                            <button className='pre_btn'>YouTube</button>
                        </div>
                    </div>
                    <div className="previous">
                        <div className="pre_icon"><img src={jb} className='inter_btn' />
                            <button className='pre_btn'>Interview Tip</button>
                        </div>
                    </div>
                </div>
                <div className="dashboard_container">
                    <div className="previous">
                        <div className="pre_icon"><img src={sp} className='spoken_btn' />
                            <button className='pre_btn'>Spoken Eng</button>
                        </div>
                    </div>
                    <div className="previous">
                        <div className="pre_icon"><DesktopMacIcon className='aptt_btn' />
                            <button className='pre_btn'>Mock Test</button>
                        </div>
                    </div>
                    <div className="previous">
                        <div className="pre_icon"><DesktopMacIcon className='aptt_btn' />
                            <button className='pre_btn'>Free Courses</button>
                        </div>
                    </div>
                </div>
                <div className="dashboard_container_three">
                    <div className="previous">
                        <div className="pre_icon"><DesktopMacIcon className='aptt_btn' />
                            <button className='pre_btn'>Previous QN</button>
                        </div>
                    </div>
                    <div className="aptitude">
                        <div className="dsk_icon"><DesktopMacIcon className='aptt_btn' />
                            <button className='apt_btn'>Aptitude</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Jobsection_Dashboard