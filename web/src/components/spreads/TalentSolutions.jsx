import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "./TalentSolutions.css";

const TalentSolutions = ({talentData}) => {
  return (
    <div className="talent-sections" id="TalentSolutions">
      <h3 className="talent-titles">Talent Solutions</h3>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[EffectCoverflow, Autoplay]}
        className="talent-swiper"
      >
        {talentData.map((item, index) => (
          <SwiperSlide key={index} className="talent-sections-card">
            <h2 className="talent-headers">
              {item.text} <span className="spread-texts">{item.subText}</span>
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TalentSolutions
