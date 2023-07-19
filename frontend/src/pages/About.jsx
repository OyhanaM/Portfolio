import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <div className="bg-light">
        <h2>Bonjour, moi c'est Oyhana</h2>
        <img
          className="w-1/4 border-[10px] border-white"
          src="/assets/photos/door.jpg"
          alt="Oyhana"
        />
      </div>
    </Layout>
  );
}

export default About;
