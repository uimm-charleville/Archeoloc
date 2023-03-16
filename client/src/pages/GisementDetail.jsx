import { useParams } from "react-router";
import gisements from "../mocks/gisements.json";
import React from "react";

export default function GisementDetail() {
  const { gisementId } = useParams();
  const gisement = gisements.find((e) => e.id_gisement == gisementId);

  return (
    <section className="flex justify-center flex-col">
      <h1 className="text-center font-semibold my-6 font-custom text-2xl text-primary mb-0">
        {gisement.lib_gisement}
      </h1>
      <div className="avatar ">
        <div className="w-full m-8 mb-0 mt-0 p-6">
          <img className="rounded-xl" src="https://picsum.photos/800/500" />
        </div>
      </div>
      <div>
        <h2 className="text-2xl text-center my-6 bg-primary p-2 text-white mb-0 rounded-t-2xl m-8">
          Description
        </h2>
        <div className="card bg-base-100 shadow-2xl m-8 mt-0 rounded-t-none">
          <div className="card-body">
            <p>{gisement.desc_gisement}</p>
          </div>
        </div>
        <h2 className="text-2xl text-center my-6">Coordonnées</h2>
        <div className="w-full bg-base-100">
          <div className="card-body mx-8 shadow-2xl rounded-xl bg-primary text-white text-center">
            <p>Latitude : {gisement.latitude}</p>
            <p>Longitude : {gisement.longitude}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
