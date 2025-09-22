// LordIconLibrary.js
import React from "react";
import "./LordIcon.css"; 

const iconLibrary = {
  research: {
    src: "https://cdn.lordicon.com/vgxjrbxm.json",
    trigger: "loop",
    colors: "primary:#ffffff,secondary:#ffffff",
  },
  support: {
    src: "https://cdn.lordicon.com/twpfmtiv.json",
    trigger: "loop",
    colors: "primary:#ffffff,secondary:#ffffff",
  },
  team: {
    src: "https://cdn.lordicon.com/wyaqzesp.json",
    trigger: "loop",
    colors: "primary:#ffffff,secondary:#ffffff",
  },
  call: {
    src: "https://cdn.lordicon.com/gfxqwhac.json",
    trigger: "loop",
    colors: "primary:#ffffff,secondary:#ffffff",
  },
  growth: {
    src: "https://cdn.lordicon.com/fiqnlkuc.json",
    trigger: "loop",
    colors: "primary:#ffffff,secondary:#ffffff",
  },
  speed: {
    src: "https://cdn.lordicon.com/uvyoytse.json",
    trigger: "loop",
    colors: "primary:#ffffff,secondary:#ffffff",
  },
  security: {
    src: "https://cdn.lordicon.com/xhnhbahr.json",
    trigger: "hover",
    colors: "primary:#ffffff,secondary:#ffffff",
  },
};

const LordIconLibrary = ({
  name,
  width = 80,
  height = 80,
  className = "",
}) => {
  const icon = iconLibrary[name];

  if (!icon) return null;

  const { src, trigger, colors } = icon;

  return (
    <div
      className={`lord-icon-wrapper ${className}`}
      dangerouslySetInnerHTML={{
        __html: `<lord-icon
          src="${src}"
          trigger="${trigger}"
          colors="${colors}"
          style="width:${width}px;height:${height}px">
        </lord-icon>`,
      }}
    />
  );
};

export default LordIconLibrary;
