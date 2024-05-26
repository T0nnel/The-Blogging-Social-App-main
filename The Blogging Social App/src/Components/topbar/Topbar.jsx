import React from 'react'
import "./Topbar.css"
import { Search, Person, Chat, Notifications } from '@mui/icons-material'
import SearchBar from '../search'
import { Link } from 'react-router-dom'

export default function Topbar() {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className='logo'>Snapgram</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                  <Search />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                    <li><Link to ={"/profile"}> <Person /></Link></li>
                    </div>
                    {/* <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge"></span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge"></span>
                    </div> */}
                </div>
              <li><Link to ={"/login"}><img src='../src/images/person/1.jpeg' alt='an image of a girl' className='topbarImg'/></Link></li>
            </div>
        </div>
    )
}