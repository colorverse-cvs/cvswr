import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import video from "../../assets/motion-g.mp4";
import posterImage from "../../assets/poster.png";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './VideoGraphic.css';

const demoVideos = [
  {
    videoUrl: video,
    title: 'Unleashing Cinematic Brilliance',
     poster: posterImage,
    description:
      'Crafted with passion, designed for impact. Our motion graphics speak louder than words — captivating, elegant, and unforgettable.',
  },
  {
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
     poster: posterImage,
    title: "Creative Reels",
    description: "Dive into our full collection of reels that inspire, engage, and elevate brands.",
  },
  {
    videoUrl: video,
     poster: posterImage,
    title: 'Seamless Flow & Creative Spark',
    description:
      'From idea to animation — each frame is designed to engage and enchant.',
  },
];

const VideoGraphic = () => {
  return (
    <section className="video-section position-relative py-5">
      <div className="bg-vector top-left"></div>
      <div className="bg-vector bottom-right"></div>

      <div className="container">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8">
            <div className="section-heading1">
              <h2 className="page-title">
                Motion<span> Graphics</span>
              </h2>
              <p className="">
                Explore our collection of <span>dynamic visuals</span>,{" "}
                <span>animated stories</span>, and <span>engaging designs</span> that bring
                ideas to life through motion.
              </p>
              <div className="heading-underline"></div>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="video-swiper"
        >
          {demoVideos.map((videoItem, index) => (
            <SwiperSlide key={index}>
              <div className="d-flex justify-content-center mb-3">
                <div className="video-wrapper position-relative shadow" style={{ width: '800px' }}>
                  {(videoItem.videoUrl.includes('youtube.com') || videoItem.videoUrl.includes('youtu.be')) ? (
                    <iframe
                      src={videoItem.videoUrl}
                      title={videoItem.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ width: '100%', height: '100%', borderRadius: '1rem' }}
                    />
                  ) : (
                    <video
                      src={videoItem.videoUrl}
                      className="rounded-4 w-100 h-100 object-fit-cover"
                      controls
                      preload="metadata"
                      poster={videoItem.poster}
                    />
                  )}
                </div>
              </div>
              <div className="text-center px-4">
                <h3 className="fw-semibold mt-4">{videoItem.title}</h3>
                <p className="">{videoItem.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VideoGraphic;
