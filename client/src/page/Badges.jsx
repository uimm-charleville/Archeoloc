import { useState, useEffect } from "react";

export default function Badges({ username, avatar, title, favorites, discoveries }) {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:1337/api/badges?populate=*");
      const result = await response.json();
      setBadges(result.data);
    };

    getData();
  }, []);

  return (
    <section className="flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-5 m-auto">Mes badges</h1>
      <h2 className="text-lg mb-4 text-primary">Badge 13/13</h2>
      <div className="flex flex-wrap justify-start gap-3">
        {badges.map((badge) => (
          <div className="mr-2">
            <img
              className="h-24 m-auto"
              src={`http://localhost:1337${badge.attributes.image.data.attributes.url}`}
            ></img>
            <div className="text-center text-sm">{badge.attributes.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
