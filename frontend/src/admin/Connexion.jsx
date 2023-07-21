import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

function Connexion() {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [logged, setLogged] = useState({
    id: "",
    email: "",
  });

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Login:

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        { ...user },
        { withCredentials: true }
      )
      .then((res) => {
        setLogged({
          id: res.data.user.id,
          email: res.data.user.email,
        });
        navigate("/admin/gestion");
      })
      .catch((err) => console.error(err.response.data.message));
  };

  // Logout:

  return (
    <Layout>
      <div className="bg-yellow p-24">
        <form
          onSubmit={handleSubmitLogin}
          className="pt-12 flex flex-col items-center justify-center gap-2"
        >
          <h2 className="font-Caprasimo text-2xl text-orange">Connexion</h2>
          <hr className="w-14 pb-3" />
          <label className="font-Raleway" htmlFor="email">
            E mail :
          </label>
          <input
            className="border-2 border-grey rounded"
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
            required
          />

          <label className="font-Raleway" htmlFor="password">
            Mot de Passe :
          </label>
          <input
            className="border-2 border-grey rounded"
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            required
          />
          <button
            className="bg-pink rounded-full font-Raleway text-black w-20 p-2 mt-4"
            type="submit"
          >
            Valider
          </button>
        </form>
      </div>

      <div className="flex bg-yellow justify-center item-center">
        <img
          className="h-64"
          src="/assets/photos/flamant.png"
          alt="Flamant rose"
        />
      </div>
    </Layout>
  );
}

export default Connexion;
