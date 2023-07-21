import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";

// eslint-disable-next-line
const Gestion = () => {
  const [project, setProject] = useState([]);
  const [newProject, setNewProject] = useState({
    projectName: "",
  });
  const [language, setLanguage] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // Get projets:
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projects`)
      .then((res) => {
        setProject(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Delete projets:
  const handleClickDeleteProject = async (id) => {
    await axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/projects/${id}`)
      .catch((err) => console.error(err.response.data.message));
    setRefresh(!refresh);
  };

  // Add projects:
  const handleChangeNewProject = (e) => {
    e.preventDefault();
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const handleSubmitNewProject = async (e) => {
    e.preventDefault();
    await axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/projects`, { ...newProject })
      .catch((err) => console.error(err.response.data.message));
    setRefresh(!refresh);
  };

  // Get langages:
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/languages`)
      .then((res) => {
        setLanguage(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Delete langages:
  const handleClickDeleteLanguage = async (id) => {
    await axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/languages/${id}`)
      .catch((err) => console.error(err.response.data.message));
    setRefresh(!refresh);
  };

  return (
    <Layout>
      <div className="bg-yellow flex justify-around pb-24">
        <div className="border m-10 w-1/4 text-center rounded-xl bg-white border-pink">
          <h2 className="font-Caprasimo text-orange text-2xl pt-6 pb-3">
            Projets
          </h2>

          {project.map((projects) => (
            <div className="flex justify-between px-10 items-center">
              <h4 className="font-Raleway text-lg p-2" key={projects.id}>
                {projects.projectName}
              </h4>
              <button
                type="button"
                onClick={() => handleClickDeleteProject(projects.id)}
              >
                <img
                  className="h-5"
                  src="/assets/logo/poubelle.png"
                  alt="Supprimer"
                />
              </button>
            </div>
          ))}
          <form onSubmit={handleSubmitNewProject}>
            <input
              className="border-2 boder-grey rounded-lg mr-2"
              type="text"
              name="projectName"
              onChange={handleChangeNewProject}
            />
            <button
              className="bg-pink rounded-full font-Raleway text-yellow p-1 my-4"
              type="submit"
            >
              <img className="h-4" src="/assets/logo/plus.png" alt="Ajouter" />
            </button>
          </form>
        </div>
        <div className="border w-1/4 m-10 text-center rounded-xl bg-white border-pink">
          <h2 className="font-Caprasimo text-orange text-2xl pt-6 pb-3">
            Langages
          </h2>

          {language.map((languages) => (
            <div className="flex justify-between items-center px-12">
              <h4 className="font-Raleway text-lg p-2" key={languages.id}>
                {languages.languageName}
              </h4>
              <button
                type="button"
                onClick={() => handleClickDeleteLanguage(languages.id)}
              >
                <img
                  className="h-5"
                  src="/assets/logo/poubelle.png"
                  alt="Supprimer"
                />
              </button>
            </div>
          ))}
          <input
            className="border-2 boder-grey rounded-lg mr-2"
            type="text"
            name="project"
            id="project"
          />
          <button
            className="bg-pink rounded-full font-Raleway text-yellow p-1 my-4"
            type="button"
          >
            <img className="h-4" src="/assets/logo/plus.png" alt="Ajouter" />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Gestion;
