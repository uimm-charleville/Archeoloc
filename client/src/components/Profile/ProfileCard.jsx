import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { userData } from "../../mocks/user";

export default function ProfileCard() {
  const [badges, setBadges] = useState([]);
  const [discoveries, setDiscoveries] = useState([]);
  const { username, avatar, title } = userData;

  const favorites = [
    {
      id_gisement: 3,
      nom: "Nécropole de La Courtine",
      description:
        "Le site archéologique situé dans le Limousin, en France, où ont été découverts des sarcophages mérovingiens.",
      latitude: 45.89109,
      longitude: 2.173236,
      image: "https://source.unsplash.com/900x700/?necropole",
    },
    {
      id_gisement: 4,
      nom: "Grotte de Nichet",
      description:
        "Le site préhistorique situé dans les Ardennes françaises. Elle a été découverte en 1906 et a livré de nombreux ossements d'animaux préhistoriques, dont des ours des cavernes, des rennes et des hyènes.",
      latitude: 49.77388333333333,
      longitude: 4.7190611111111114,
      image: "https://source.unsplash.com/600x700/?grotte",
    },
  ];

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "http://localhost:1337/api/badges?populate=*"
      );
      const result = await response.json();
      setBadges([result.data[0], result.data[1]]);
    };
    getData();

    const getDiscoveries = async () => {
      const response = await fetch(
        "http://localhost:1337/api/discoveries?populate=*"
      );
      const result = await response.json();
      setDiscoveries(result.data);
    };

    getDiscoveries();
  }, []);

  const [finds, setFinds] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "http://localhost:1337/api/discoveries?populate=*"
      );
      const result = await response.json();
      setFinds(result.data);
    };

    getData();
  }, []);

  return (
    badges && (
      <div className="flex border items-center justify-center flex-col p-8">
        <p className="text-primary">Bon retour</p>
        <h1 className="text-2xl font-bold">{username}</h1>
        <div className="avatar p-4">
          <div className="w-24 rounded-full">
            <img src={avatar} />
          </div>
        </div>
        <h2 className="text-xl font-bold pb-5">{title}</h2>
        <div className="flex flex-col gap-8">
          <div className="flex gap-2 flex-wrap justify-center items-center">
            {badges.map((badge) => (
              <img
                className="h-24"
                src={`http://localhost:1337${badge.attributes.image.data.attributes.url}`}
              ></img>
            ))}
            <Link
              className="text-primary border-none text-3xl ml-4"
              to={`/badges`}
            >
              +
            </Link>
          </div>
          <h2 className="text-xl font-bold p-5">Mes lieux favoris</h2>
          <div className="flex gap-2 flex-wrap justify-center items-center">
            {favorites.map((favorite) => (
              <div
                className="card w-72 bg-base-100 shadow-xl image-full z-0"
                key={crypto.randomUUID()}
              >
                <figure>
                  <img src={favorite.image} alt="Pic" />
                </figure>
                <div className="card-body">
                  <div className="card-actions justify-end">
                    <button className="">
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="text-red-500 text-2xl"
                      />
                    </button>
                  </div>
                  <h2 className="card-title">{favorite.nom}</h2>
                  <p>{favorite.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-xl font-bold p-5">Mes decouvertes</h2>
            <div className="flex gap-2 flex-wrap justify-center items-center">
              {discoveries.map((discovery) => (
                <div
                  className="card w-72 bg-base-100 shadow-xl image-full z-0"
                  key={crypto.randomUUID()}
                >
                  <figure>
                    <img
                      src={`http://localhost:1337${discovery.attributes.image.data.attributes.url}`}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="card-actions justify-end">
                      <button className="">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-yellow-500 text-2xl"
                        />
                      </button>
                    </div>
                    <h2 className="card-title">{discovery.attributes.name}</h2>
                    <p>{discovery.attributes.description}</p>
                    <p>X: {discovery.attributes.latitude.toFixed(6)}</p>
                    <p>Y: {discovery.attributes.longitude.toFixed(6)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
