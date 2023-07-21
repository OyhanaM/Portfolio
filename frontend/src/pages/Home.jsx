import { Link } from "react-router-dom";
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
      <div className="background-color">
        <div className="flex flex-wrap overflow-hidden justify-center gap-40 pt-20">
          <img
            className="border-8 border-white rounded-lg w-96 mb-8 hidden md:block"
            src="/assets/photos/photo.jpeg"
            alt="Oyhana"
          />
          <div className="md:w-1/3 pb-5">
            <h1 className="text-4xl text-orange font-Caprasimo pb-5">
              Oyhana Mahjoubi &#128075;
            </h1>
            <div>
              <hr className="w-14 pb-3" />
              <p className=" text-2xl font-Raleway pt-4 text-black">
                💻 Développeuse Full stack junior
              </p>

              <p className="text-black text-lg font-Raleway pt-4">
                Passionnée de lignes colorées sur fond noir et de bubble tea,
                j'ai décidé de ma reconvertir afin de transformer, au quotidien,
                du code en magie ✨
                <p>
                  <br />
                </p>{" "}
                Je suis actuellement à la recherche d'un emploi en tant que
                Développeuse en Ile de France ou dans toute la France en remote.
              </p>
            </div>

            <div className="grid gap-4 grid-cols-5 grid-row-2 pt-8">
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

            <div className="flex justify-center">
              <Link to="/portfolio">
                <button className="button font-Raleway mt-12" type="button">
                  Découvrir mes projets
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
