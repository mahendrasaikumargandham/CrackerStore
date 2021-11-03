import React from 'react'
import "./About.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="about">
            <div className="about_container">
                <div className="about_title">
                    <h2>Hey there! This is Mahendra Gandham.</h2>
                </div>
                <div className="content_box">
                    <h3>Mahendra Sai Kumar Gandham</h3>
                    <p className="about_pOne">(Software Developer) </p>
                    <p className="about_pTwo">A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>
                    
                </div>
                <div className="about_social">
                        <span><a href="https://github.com/mahendrasaikumargandham"><GitHubIcon /></a></span>
                        <span><a href="https://www.youtube.com/channel/UCIf7QLKvNYQIFCRxCe-j8dQ"><YouTubeIcon /></a></span>
                        <span><a href="https://www.linkedin.com/in/mahendra-gandham-7066b51b9/"><LinkedInIcon /></a></span>
                        <span><a href="https://www.instagram.com/mahendra_4919/"><InstagramIcon /></a></span>
                        <span><a href="https://www.facebook.com/mahendra.gandham.3/"><FacebookIcon /></a></span>
                        <span><a href="https://twitter.com/mahendra_4919"><TwitterIcon /></a></span>
                    </div>
            </div>
        </div>
    )
}

export default About
