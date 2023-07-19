import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div className="flex bg-homebg h-screen bg-cover bg-no-repeat justify-center gap-40 items-center">
        <img
          className="border-[10px] border-white rounded-lg w-72"
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

          <div className="flex justify-between items-center pt-12">
            <img className="w-14 h-14" src="/assets/logo/html.png" alt="html" />
            <img className="w-14 h-14" src="/assets/logo/css.png" alt="css" />
            <img
              className="w-14 h-14"
              src="/assets/logo/js.png"
              alt="javascript"
            />
            <img
              className="w-14 h-14"
              src="/assets/logo/tailwind.png"
              alt="tailwind"
            />
            <img
              className="w-14 h-14"
              src="/assets/logo/react.png"
              alt="react"
            />
          </div>
          <div className="flex justify-between items-center pt-8">
            <img className="w-14 h-14" src="/assets/logo/node.png" alt="node" />
            <img
              className="w-14 h-14"
              src="/assets/logo/express.png"
              alt="express"
            />
            <img
              className="w-14 h-14"
              src="/assets/logo/mysql.png"
              alt="mysql"
            />
            <img
              className="w-14 h-14"
              src="/assets/logo/github.png"
              alt="github"
            />

            <img
              className="w-14 h-14"
              src="/assets/logo/vscode.png"
              alt="vs code"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
