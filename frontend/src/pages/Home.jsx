import axios from "axios";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";

function Home() {
  const [language, setLanguage] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/languages`)
      .then((res) => {
        setLanguage(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Layout>
      <div className="flex bg-homebg h-screen bg-cover bg-no-repeat justify-center gap-40 items-center">
        <img
          className="border-8 border-white rounded-lg w-72"
          src="/assets/photos/photo.jpeg"
          alt="Oyhana"
        />
        <div className="w-1/3">
          <h1 className="text-4xl text-orange font-Caprasimo pb-5">
            Oyhana Mahjoubi &#128075;
          </h1>
          <div>
            <hr className="w-14 pb-3" />
            <p className=" text-2xl font-bold font-Raleway pt-4 text-black">
              💻 Développeuse Full stack junior
            </p>

            <p className="text-black text-lg font-Raleway pt-4">
              Je suis actuellement à la recherche d'un emploi en tant que
              Développeuse en Ile de France ou dans toute la France en remote.{" "}
            </p>
          </div>

          <div className="flex justify-between flex-wrap gap-5 w-5/6 items-center pt-12">
            {language.map((languages) => (
              <img
                key={languages.id}
                className="w-14 h-14"
                src={`${import.meta.env.VITE_BACKEND_URL}/assets/logo/${
                  languages.logo
                }`}
                alt={languages.languageName}
              />
            ))}
          </div>
          <div className="flex justify-center mt-10" />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
