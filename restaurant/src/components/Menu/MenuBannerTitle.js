import React from "react";

const MenuBannerTitle = ({align, bannerTitle, bannerSubTitle}) => {
  
  return (
    <>
      <p className={`titleBanner ${align}`}>{bannerTitle}</p>
      <p className="subTitleBanner">{bannerSubTitle}</p>
    </>
  );
};

export default MenuBannerTitle;
