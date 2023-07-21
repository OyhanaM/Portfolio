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
        <h2 className="text-black text-center font-Caprasimo text-3xl p-5">
          Mes projets :
        </h2>
        <div className="flex justify-around item-center pt-8">
          {project.map((projects) => (
            <div className="image-hover">
              <a href={projects.link} target="_blank" rel="noreferrer">
                <img
                  className="w-56 cursor-pointer border-8 rounded-t-lg border-white "
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
        <div className="text-center p-8 bg-yellow pb-14">
          <h3 className="font-Caprasimo text-3xl text-black">
            Et avant de coder, tu faisais quoi ?
          </h3>
          <Link to="/resume">
            <button className=" font-Raleway button mt-8" type="button">
              Découvrir mes expériences passées
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Portfolio;
