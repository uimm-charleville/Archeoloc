import React from "react";
import { Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "../../index.css";

const MarkerPopup = (props) => {
  const { lib_gisement } = props.data;
  const { desc_gisement } = props.data;
  const { img_gisement } = props.data;
  const { id_gisement } = props.data;

  return (
    <Popup>
      <div className="text-center text-xl font-bold w-48">{lib_gisement}</div>
      <div className="avatar flex my-5">
        <div className="w-40 rounded m-auto">
          <img src={img_gisement} alt={lib_gisement} />
        </div>
      </div>
      <div className="my-5 text-center line-clamp-3 w-48 m-auto">{desc_gisement}</div>
      <div className="flex m-2 ">
        <Link
          className="m-auto link text-primary hover:text-[#49160d]"
          to={`/detail/${id_gisement}`}
        >
          En savoir plus
        </Link>
      </div>
    </Popup>
  );
};

export default MarkerPopup;
