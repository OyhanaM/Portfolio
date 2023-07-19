import Layout from "../components/Layout";

function Portfolio() {
  return (
    <Layout>
      <div className="bg-light">
        <h2 className="text-black text-center font-Caprasimo text-2xl p-10">
          Mes projets :
        </h2>

        <img
          className="w-56 border-8 rounded-t-lg transition-colors border-white duration-300 hover:bg-orange"
          src="/assets/photos/dog.jpg"
          alt="Projet WildBook"
        />
        <h3 className="bg-white w-56 rounded-b-lg text-lg text-center font-Raleway">
          WildBook
        </h3>
      </div>
    </Layout>
  );
}

export default Portfolio;
