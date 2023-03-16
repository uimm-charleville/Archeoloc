import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function PathCardSmall({ lib_parcours, img_parcours, desc_parcours }) {
  return (
    <div
      className="card w-72 bg-base-100 shadow-xl image-full z-0 m-auto"
      key={crypto.randomUUID()}
    >
      <figure>
        <img src="https://source.unsplash.com/900x900/?valley" alt={lib_parcours} />
      </figure>
      <div className="card-body h-fit">
        <div className="card-actions justify-end">
          <button className="">
            <FontAwesomeIcon icon={faHeart} className="text-red-500 text-2xl" />
          </button>
        </div>
        <h2 className="card-title">{lib_parcours}</h2>
        <p>{desc_parcours}</p>
      </div>
    </div>
  );
}
