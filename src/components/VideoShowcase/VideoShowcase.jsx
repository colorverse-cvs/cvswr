import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./VideoShowcase.css";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const bigVideos = [
  {
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Sketchable Plus",
    description: "Streamlined controls & workflow",
    buttonText: "Get",
  },
  {
    src: "https://www.youtube.com/embed/5NV6Rdv1a3I",
    title: "Sketchable Pro",
    description: "More brushes & layers",
    buttonText: "Upgrade",
  },
  // Add more big videos here...
];

const rightVideos = {
  topRight: {
    src: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    title: "Microsoft 365",
    buttonText: "Get",
  },
  bottomLeft: {
    src: "https://www.youtube.com/embed/L_jWHffIx5E",
    text: "Futurama - New season",
  },
  bottomRight: {
    src: "https://www.youtube.com/embed/9bZkp7q19f0",
    text: "You can now view Snaps on your computer",
  },
};

const VideoShowcase = () => {
  return (
    <div className="video-showcase container">
      <div className="row g-4 align-items-start mt-5">
        {/* Left Big Video Carousel */}
        <div className="col-lg-7">
<Swiper
  modules={[Pagination, Autoplay, Navigation]}
  spaceBetween={30}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }} // <-- important
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  loop={true}
  className="big-swiper"
>


            {bigVideos.map((video, i) => (
              <SwiperSlide key={i}>
                <div className="banner-card big-card position-relative overflow-hidden">
                  <iframe
                    src={video.src + "?autoplay=1&mute=1"}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded video-iframe w-100 h-100"
                  />
                  <div className="banner-overlay d-flex flex-column justify-content-end p-4">
                    <h2 className="text-white mb-2">{video.title}</h2>
                    <p className="text-white-50 mb-3">{video.description}</p>
                    <button className="btn btn-light btn-sm shadow-sm">
                      {video.buttonText}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Small Videos */}
        <div className="col-lg-5 d-flex flex-column ">
          <div className="banner-card small-card position-relative overflow-hidden">
            <iframe
              src={rightVideos.topRight.src + "?autoplay=1&mute=1"}
              title={rightVideos.topRight.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded video-iframe w-100 h-100"
            />
            <div className="banner-overlay p-3 d-flex flex-column justify-content-end">
              <h5 className="text-white mb-2">{rightVideos.topRight.title}</h5>
              <button className="btn btn-light btn-sm shadow-sm">
                {rightVideos.topRight.buttonText}
              </button>
            </div>
          </div>

          <div className="row g-3 mt-3">
            <div className="col-md-6">
              <div className="banner-card small-card position-relative overflow-hidden">
                <iframe
                  src={rightVideos.bottomLeft.src + "?autoplay=1&mute=1"}
                  title="Bottom Left Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded video-iframe w-100 h-100"
                />
                <div className="banner-overlay p-2 d-flex align-items-end">
                  <small className="text-white">{rightVideos.bottomLeft.text}</small>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="banner-card small-card position-relative overflow-hidden">
                <iframe
                  src={rightVideos.bottomRight.src + "?autoplay=1&mute=1"}
                  title="Bottom Right Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded video-iframe w-100 h-100"
                />
                <div className="banner-overlay p-2 d-flex align-items-end">
                  <small className="text-white">{rightVideos.bottomRight.text}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoShowcase;
