import usePhoto from "../../hooks/usePhoto";
import Image from "../../components/Photo";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGeolocated } from "react-geolocated";
import { useNavigate } from "react-router-dom";

const AjouterGisement = () => {
  const { photo, setPhoto } = usePhoto();

  console.log(photo);

  const location = useLocation();
  const { register, handleSubmit } = useForm();
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (!isGeolocationEnabled) {
      alert("La géolocalisation n'est pas activée");
      return;
    }

    const { latitude, longitude, altitude } = coords;

    const response = await fetch(photo);
    const blob = await response.blob();
    const file = new File([blob], "filename.jpg", { type: "image/jpeg" });

    const formData = new FormData();
    formData.append("files", file);

    const responseUpload = await fetch("http://localhost:1337/api/upload", {
      method: "POST",
      body: formData,
    });

    const dataUpload = await responseUpload.json();
    const fileId = dataUpload[0].id;

    const body = {
      data: {
        name: data.nom,
        description: data.description,
        image: fileId,
        latitude: coords.latitude,
        longitude: coords.longitude,
        altitude: coords.altitude,
      },
    };

    const responseDiscovery = await fetch(
      "http://localhost:1337/api/discoveries",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const dataDiscovery = await responseDiscovery.json();

    console.log(dataDiscovery);

    navigate("/profile");
  };

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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-4"
          >
            <div>
              <label
                htmlFor="nom"
                className="block font-medium text-gray-700 mb-2"
              >
                Nom du gisement
              </label>
              <input
                className="form-input input input-bordered w-full max-w-xs focus:outline-none focus:border-[#702315]"
                {...register("nom", { required: true })}
              />
            </div>
            <div>
              <label
                htmlFor="nom"
                className="block font-medium text-gray-700 mb-2"
              >
                Description
              </label>
              <input
                className="form-input input input-bordered w-full max-w-xs focus:outline-none focus:border-[#702315]"
                {...register("description", { required: true })}
              />
            </div>
            <div className="relative">
              <label
                htmlFor="photo"
                className="block font-bold text-gray-700 mb-2 text-center"
              >
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
              className="bg-[#702315] hover:bg-[#49160d] text-white px-4 py-2 rounded-lg shadow-md transition-colors duration-300 mt-8"
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
