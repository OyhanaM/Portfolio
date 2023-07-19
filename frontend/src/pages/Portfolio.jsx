import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";

function Portfolio() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projects`)
      .then((res) => {
        setProject(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Layout>
      <div className="bg-light">
        <h2 className="text-black text-center font-Caprasimo text-2xl p-5">
          Mes projets :
        </h2>
        <div className="flex justify-around item-center pt-8">
          {project.map((projects) => (
            <div>
              <a href={projects.link} target="_blank" rel="noreferrer">
                <img
                  className="w-56 cursor-pointer border-8 rounded-t-lg transition-colors border-white duration-300 hover:bg-orange"
                  src={`${import.meta.env.VITE_BACKEND_URL}/assets/portfolio/${
                    projects.projectImage
                  }`}
                  alt={`Projet ${projects.projectName}`}
                />
              </a>

              <h3 className="bg-white w-56 rounded-b-lg text-lg h-16 mb-12 text-center font-Raleway">
                {projects.projectName}
              </h3>
            </div>
          ))}
        </div>
        <hr className="border-white border-2" />
        <div className="text-center p-8 bg-yellow">
          <h3 className="font-Caprasimo text-3xl text-black">
            Et avant de coder, tu faisais quoi ?
          </h3>
          <Link to="/resume">
            <button
              className="bg-orange cursor-pointer text-white p-2 font-Raleway rounded-full mt-8"
              type="button"
            >
              Cliquez ici pour découvrir mes expériences passées
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Portfolio;
