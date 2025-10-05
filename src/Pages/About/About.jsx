import React from "react";
import "./About.css";
import { FaHeart, FaGem, FaSmile, FaStar } from "react-icons/fa";
import aboutImage1 from "../../assets/our-story.WEBP";
import Akash from "../../assets/ceo.jpg";
import Shubham from "../../assets/Shubham.jpg";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs"
import ProjectStart from "../../components/ProjectStart/ProjectStart"


/* ----------------------------- Data ----------------------------- */
const values = [
  {icon:"fa-thin fa-lightbulb", title: "Passion for Creativity", text: "We believe every creation should tell a story and leave a lasting impression." },
  { icon:"fa-thin fa-award", title: "Quality First", text: "We carefully curate each item to ensure the highest quality and craftsmanship." },
  { icon:"fa-thin fa-hand-holding-heart", title: "Customer Focused", text: "Your satisfaction is our priority. Find the perfect creation with us." },
  
];

// const teamMembers = [
//   {
//     img: Akash,
//     name: "Akash Shinde",
//     role: "Founder & CEO",
//     desc: "Akash’s vision brought The Colorverse to life, creating a platform where creativity and quality meet.",
//   },
//   {
//     img: Shubham,
//     name: "Shubham Shinde",
//     role: "Co-Founder",
//     desc: "Shubham ensures our operations run smoothly while keeping customer satisfaction as the top priority.",
//   },
// ];

/* ----------------------------- Combined Page ----------------------------- */
const AboutPage = () => (
  <div className="about-page">
    <StorySection />
    <ValuesSection />
    {/* <TeamSection /> */}
    <WhyChooseUs />
    <MissionSection />
    <ProjectStart
      title={<>Let's Build Something <br /> Amazing Together</>}
      buttonLabel="Contact Us"
    />


  </div>
);
/* ----------------------------- Components ----------------------------- */
export const StorySection = () => (
  <section className="story-section py-5 position-relative overflow-hidden">
    {/* Background shapes */}
    <div className="bg-shape bg-shape-top"></div>
    <div className="bg-shape bg-shape-bottom"></div>

    <div className="container">
      <div className="row align-items-center g-5">
        <div className="col-md-6">
          <h2 className="section-title gradient-text mb-4">Our Story</h2>
          <p className="story-text">
            The Colorverse was born from a simple belief: that the perfect creation
            has the power to inspire, connect, and leave a lasting impression.
          </p>
          <p className="story-text">
            Founded in 2020 by Ishita Sharma, The Colorverse started as a small
            collection of handpicked items that caught her eye during travels
            around the world. What began as a passion project has grown into a
            curated destination for unique and meaningful creations.
          </p>
          <p className="story-text">
            Today, we collaborate with artisans and creators globally to bring you
            a collection that combines traditional craftsmanship with contemporary
            design.
          </p>
        </div>

       <div className="col-md-6 text-center position-relative">
  <div className="image-container position-relative d-inline-block">
    <img
      src={aboutImage1}
      alt="Our Story"
      className="about-image img-fluid rounded shadow-lg"
    />
    <span className="years-badge position-absolute">4+ Years of spreading joy</span>
  </div>
</div>

      </div>
    </div>
  </section>
);

export const ValuesSection = () => (
  <section className="values-section py-5">
    <div className="container">
      <h2 className="section-title text-center">Our Values</h2>
      <p className="text-center ">
        The principles that guide everything we do at The Colorverse
      </p>

      <div className="grid-container mt-4">
        {values.map((value, i) => (
          <div className="card" key={i} style={{ '--grad': '#7f00ff, #e100ff' }}>
            <div className="title">{value.title}</div>

            {/* Render the Font Awesome icon */}
            <div className="icon">
              {typeof value.icon === "string" ? (
                <i className={value.icon}></i>
              ) : (
                value.icon
              )}
            </div>

            <div className="content">
              <p>{value.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);



// export const TeamSection = () => (
//   <section className="team-section py-5">
//     <div className="container">
//       <h2 className="section-title text-center">Meet Our Team</h2>
//       <p
//         className="text-center  mb-4"
//         style={{ maxWidth: "700px", margin: "0 auto" }}
//       >
//         Our team blends creativity and technology to craft stunning 3D ads and videos.
//         Guided by our visionary co-founders, we deliver innovative, high-quality projects
//         that inspire and captivate audiences.
//       </p>

//       <div className="row justify-content-center g-4">
//         {teamMembers.map((member, i) => (
//           <div className="col-md-4 col-sm-6" key={i}>
//             <div className="card h-100 text-center shadow p-3 rounded-4 hover-scale">
//               <img
//                 src={member.img}
//                 alt={member.name}
//                 className="rounded-circle mx-auto mb-3"
//                 style={{
//                   width: "150px",
//                   height: "150px",
//                   objectFit: "cover",
//                   border: "4px solid #7f00ff",
//                   padding: "3px",
//                 }}
//               />
//               <h5 className="mb-1">{member.name}</h5>
//               <p className=" mb-2">{member.role}</p>
//               <p className="small">{member.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

export const MissionSection = () => (
  <section className="mission-section text-center">
    <div className="container">
      <h2 className="section-title">Our Mission</h2>
      <blockquote className="blockquote mx-auto">
        "To be the world's most trusted destination for meaningful creations,
        where every purchase creates a moment of joy, strengthens connections,
        and supports artisans and creators around the globe."
      </blockquote>
    </div>
  </section>
);
<ProjectStart
  title="Let's Build Something Amazing Together"
  buttonLabel="Contact Us"
  onButtonClick={() => window.location.href = "/contact"}
  className="" // you can add extra classes
  style={{}} // inline styles if needed
/>



export default AboutPage;
