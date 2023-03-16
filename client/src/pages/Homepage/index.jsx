import PathCardSmall from "../../components/Global/PathCardSmall";
import logo from "../../assets/logo.svg";
import data from "../../mocks/parcours.json";

export default function Homepage() {
  const paths = [data[0], data[1]];
  console.log(paths);

  return (
    <>
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="container p-8">
              <img className="w-full h-full" src={logo} alt="logo" />
            </div>
            <p className="px-8 pb-8 font-bold">
            Rejoignez une communauté de plus de 1239 passionnés de la nature et venez partager vos découvertes !
            </p>
            <button className="btn btn-primary">Commencer l'aventure</button>
          </div>
        </div>
      </div>
      <section>
        <div className="px-14 flex gap-5 flex-col">
          <p className="m-auto">Découvrez nos derniers parcours</p>
          {paths.map((path) => (
            <PathCardSmall key={crypto.randomUUID()} {...path} />
          ))}
        </div>
      </section>
    </>
  );
}
