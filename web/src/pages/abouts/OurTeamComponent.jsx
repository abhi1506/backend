import React from 'react';
import ReactStars from "react-rating-stars-component";
import { BiLogoInstagram } from "react-icons/bi";
import { LiaFacebook } from "react-icons/lia";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import BusinessSolution2 from '../../images/BusinessSolution2.jpeg'

const OurTeam = ({ name, role, contactInfo, rating, avatar, socialMedia }) => {
    // console.log(avatar?.url);
    const imgUrl = avatar?.url || BusinessSolution2;
    return (
        <div className="team-card-scale-update">
            <div className='profile-img-container'>
                <img src={imgUrl} alt={`${name}'s profile`} className="profileImg" />
            </div>

            <h3 className="team-name-update">{name}</h3>
            <p className='team-roll-update'>{role}</p>
            <div className="social-media">
                {socialMedia.instagram && (
                    <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <BiLogoInstagram size={23} className="social-media-team" />
                    </a>
                )}
                {socialMedia.facebook && (
                    <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <LiaFacebook size={23} className="social-media-team" />
                    </a>
                )}
                {socialMedia.twitter && (
                    <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <TiSocialTwitterCircular size={23} className="social-media-team" />
                    </a>
                )}
                {socialMedia.linkedin && (
                    <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <TiSocialLinkedinCircular size={23} className="social-media-team" />
                    </a>
                )}
            </div>
        </div>
    );
};

export default OurTeam;
