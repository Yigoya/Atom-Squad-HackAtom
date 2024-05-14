import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import slide_image_2 from "./assets/Images/nuclear.jpg";
import slide_image_3 from "./assets/Images/solar.jpg";
import slide_image_4 from "./assets/Images/wind.jpg";
import slide_image_5 from "./assets/Images/thermo.jpg";
import slide_image_6 from "./assets/Images/hydrolic.jpg";
import "./swiper.css";
function Compare() {
  const images = [slide_image_3, slide_image_4, slide_image_5, slide_image_6];

  const nuclear = {
    title: "Nuclear power plant",
    sub: {
      title: "Efficiency: ",
      desc: "High (over 90% capacity factors).",
      title2: "Environmental Impact:",
      desc2:
        "No air pollution during operation, major concerns include radioactive waste and catastrophic failure risks.",
      title3: "Cost",
      desc3:
        "High capital costs, low operational costs, significant decommissioning costs.",
      title4: "Reliability and Energy Security: ",
      desc4:
        "Highly reliable, provides consistent power, good for base load generation.",
      title5: "Scalability and Deployment: ",
      desc5: "Significant regulatory hurdles, long construction lead times.",
    },
  };
  const data = [
    {
      title: "Solar-power engineering",
      sub: {
        title: "Efficiency: ",
        desc: "High (over 90% capacity factors).",
        title2: "Environmental Impact:",
        desc2:
          "No air pollution during operation, major concerns include radioactive waste and catastrophic failure risks.",
        title3: "Cost",
        desc3:
          "High capital costs, low operational costs, significant decommissioning costs.",
        title4: "Reliability and Energy Security: ",
        desc4:
          "Highly reliable, provides consistent power, good for base load generation.",
        title5: "Scalability and Deployment: ",
        desc5: "Significant regulatory hurdles, long construction lead times.",
      },
    },

    {
      title: "Wind-power engineering",
      sub: {
        title: "Efficiency: ",
        desc: "Lower capacity factors (20-40%).",
        title2: "Environmental Impact:",
        desc2:
          "Very low emissions; concerns include wildlife impacts and noise for local communities.",
        title3: "Cost",
        desc3: "Decreasing capital costs, competitive operational costs.",
        title4: "Reliability: ",
        desc4:
          "Less reliable for constant power supply without energy storage.",
        title5: "Scalability: ",
        desc5:
          "Highly scalable, suitable for both small-scale residential to large-scale commercial deployments.",
      },
    },
    {
      title: "Thermal power plant",
      sub: {
        title: "Efficiency: ",
        desc: "High capacity factors, typically 80-90%.",
        title2: "Environmental Impact:",
        desc2:
          "High emissions of CO2 and other pollutants. Significant contributor to air pollution and climate change.",
        title3: "Cost",
        desc3:
          "Lower capital costs compared to nuclear, higher operational costs due to fuel and environmental compliance.",
        title4: "Reliability and Energy Security: ",
        desc4:
          "Very reliable, can quickly adjust output to meet demand fluctuations.",
        title5: "Scalability: ",
        desc5:
          "Relatively easy to scale and adapt, though increasingly subject to stringent environmental regulations.",
      },
    },
    {
      title: "Hydroelectric power station",
      sub: {
        title: "Efficiency: ",
        desc: "Varies widely (30-90%), dependent on water availability.",
        title2: "Environmental Impact:",
        desc2:
          "Low emissions, but significant ecological and environmental impacts from dam construction and operation.",
        title3: "Cost",
        desc3:
          "High initial capital costs, very low operational and maintenance costs.",
        title4: "Reliability: ",
        desc4:
          "Reliable if water availability is consistent; problematic in drought conditions.",
        title5: "Scalability: ",
        desc5:
          "Geographically limited; suitable only in locations with adequate water flow.",
      },
    },
  ];
  const card = (image, info) => {
    {
      return (
        <SwiperSlide className="swiper-slide2">
          <div className="swiper_div2">
            <img src={image} alt="slide_image2" />
            <div className="slide_text2">
              <h4>{info.title}</h4>
              <br />
              <b className="text-xl">{info.sub.title}</b>{" "}
              <em className="text-xl">{info.sub.desc} </em> <br />
              <b className="text-xl">{info.sub.title2}</b>{" "}
              <em className="text-xl">{info.sub.desc2}</em> <br />
              <b className="text-xl">{info.sub.title3}</b>{" "}
              <em className="text-xl">{info.sub.desc3}</em> <br />
              <b className="text-xl">{info.sub.title4}</b>{" "}
              <em className="text-xl">{info.sub.desc4}</em> <br />
              <b className="text-xl">{info.sub.title5}</b>{" "}
              <em className="text-xl">{info.sub.desc5}</em> <br />
            </div>
          </div>
        </SwiperSlide>
      );
    }
  };

  return (
    <div className="container">
      <div className="-mt-16 mb-24">
        <p className=" text-4xl font-serif text-center">Comparison Between Nuclear and Other Energy Resources</p>
      </div>
      <div className="swipe_div">
        <Swiper
          direction="vertical"
          effect={"coverflow"}
          loop={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          autoplay={{
            delay: 3500, // Auto slide delay of 2.5 seconds
            disableOnInteraction: false, // Continue auto sliding after user interaction
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container2"
          speed={1000}
        >
          {images.map((image, index) => card(image, data[index]))}

          {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
        </Swiper>
        {card(slide_image_2, nuclear)}
      </div>
    </div>
  );
}

export default Compare;
