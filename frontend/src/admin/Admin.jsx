import Layout from "../components/Layout";

function Admin() {
  return (
    <Layout>
      <div className="bg-yellow">
        <form className="pt-12 flex flex-col items-center justify-center gap-2">
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
            required
          />

          <label className="font-Raleway" htmlFor="password">
            Mot de Passe :
          </label>
          <input
            className="border-2 border-grey rounded"
            type="text"
            name="password"
            id="password"
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

export default Admin;
