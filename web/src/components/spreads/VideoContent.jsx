import React from 'react';
import { LiaChevronRightSolid } from "react-icons/lia";
import { BiSolidRightArrow } from "react-icons/bi";
import spreadVideo from "../../assets/content/sprjob.mp4";
import "./VideoContent.css"
import { CgChevronDoubleRight } from "react-icons/cg";
const content = [
    "Targeted Content & Ads",
    "Seamless Job Posting & Hiring",
    "Enhanced User Engagement",
    "mprove rankings and maximize reach"
];

const VideoContent = () => {
  return (
    <section>
        <div className="v-content-wrapper">
            <div className="v-content-left">
                <div className="v-content-video-bg"></div>
                <div className="v-content-video">
                    <video src={spreadVideo} autoPlay loop muted></video>
                </div>
            </div>
            <div className="v-content-right">
                <div className="v-content-title">
                    <h1>The Ultimate Social Media & Job Portal</h1>
                    <p>Empowering Businesses with Smarter Connections & Engagement</p>
                    <h3 className='erp-btn'>Spreads for Growth </h3>
                </div>
                <div className="v-content-map">
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}><BiSolidRightArrow /> {item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
}

export default VideoContent;
