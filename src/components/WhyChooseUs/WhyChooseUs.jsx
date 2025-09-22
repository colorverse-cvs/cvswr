import './WhyChooseUs.css';
import LordIconLibrary from "../LordIcon/LordIcon";

// Reusable Feature Component
const FeatureItem = ({ icon, text, width, height, className }) => (
  <div className={`feature d-flex align-items-center mb-4 responsive-icon-wrap ${className}`}>
    <div className="icon-circle me-3">
      <LordIconLibrary name={icon} width={width} height={height} />
    </div>
    <div className="gradient-line"></div>
    <p className="mb-0 fw-bold ms-3 FeatureItem-text">{text}</p>
  </div>
);

const WhyChooseUs = () => {
  const features = [
    { icon: 'research', text: 'Quick Research & Solutions', width: 70, height: 70, className: 'icon-item-1' },
    { icon: 'support', text: 'Dedicated Support 24/7', width: 80, height: 80, className: 'icon-item-2' },
    { icon: 'team', text: 'Experienced Team', width: 70, height: 70, className: 'icon-item-3' },
  ];

  return (
    <div className="why-choose-us container-fluid py-5">
      <div className="row align-items-center flex-wrap">

        {/* Left Section */}
        <div className="col-md-6 text-white position-relative left-section">
          <div className="left-content">
            <h2 className="section-title">
              <span className="arrow-icon">➜</span> Why Choose Us
            </h2>
            <p>
              We have entered the age of digital technology. Computer exists
              everywhere from a small kiosk to giant corporate house. Amongst all
              the sectors, information technology is following and will pave a
              path for faster growth.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6 right-section px-4">
          {features.map((item, idx) => (
            <FeatureItem key={idx} {...item} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;
