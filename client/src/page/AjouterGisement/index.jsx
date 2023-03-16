import React, { useState } from "react";
import Image from "../../components/Photo";
import { useLocation } from "react-router-dom";

const AjouterGisement = () => {
  const [photo, setPhoto] = useState("");
  const location = useLocation();

  // Récupérer les données de l'image de l'URL
  const searchParams = new URLSearchParams(location.search);
  const photoDataUri = searchParams.get("photo");

  // Si des données d'image sont trouvées dans l'URL, mettre à jour l'état de la photo
  if (photoDataUri && photoDataUri !== photo) {
    setPhoto(photoDataUri);
  }

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const form = event.target;
  //   const formData = new FormData(form);

  //   try {
  //     const response = await fetch('/api/plantes', {
  //       method: 'POST',
  //       body: formData
  //     });

  //     if (!response.ok) {
  //       throw new Error('Une erreur s\'est produite lors de la création de la plante');
  //     }

  //     const newPlante = await response.json();
  //     // Mettre à jour le JSON des plantes avec la nouvelle plante créée
  //     // ...
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      <div className="flex flex-col items-center m-8 hover:bg-white">
        <h1 className="text-2xl text-center m-2 text-gray-700 font-medium">
          Formulaire d'ajout de gisement
        </h1>
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8 mb-8">
          <form /* onSubmit={handleSubmit} */ className="flex flex-col space-y-4">
            <div>
              <label htmlFor="nom" className="block font-medium text-gray-700 mb-2">
                Nom du gisement
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                className="form-input input input-bordered w-full max-w-xs focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="nom" className="block font-medium text-gray-700 mb-2">
                Description
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                className="form-input input input-bordered w-full max-w-xs focus:outline-none focus:border-primary"
              />
            </div>
            <div className="relative">
              <label htmlFor="photo" className="block font-bold text-gray-700 mb-2 text-center">
                Photo prise
              </label>
              <div className="border border-gray-300 rounded-lg p-2">
                {photo ? (
                  <Image src={photo} alt="Gisement" />
                ) : (
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">Aucune photo prise</p>
                  </div>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="bg-primary hover:bg-[#49160d] text-white px-4 py-2 rounded-lg shadow-md transition-colors duration-300 mt-8"
            >
              Ajouter
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AjouterGisement;
