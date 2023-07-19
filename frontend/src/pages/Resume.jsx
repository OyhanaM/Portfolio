import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function Resume() {
  return (
    <Layout>
      {/* LiveMentor */}

      <div className="bg-light">
        <div className="flex justify-center gap-20 items-center p-16">
          <img
            className="w-1/4 border-8 border-white rounded-lg"
            src="/assets/photos/desk.jpg"
            alt="Chargée de financement"
          />
          <div className="w-1/3">
            <h2 className="text-pink font-Caprasimo text-xl">
              Chargée de financement
            </h2>
            <h3 className="font-Raleway italic text-sm">
              LiveMentor de août 2021 à aujourd'hui
            </h3>
            <br />
            <p className="font-Raleway">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
              dolorem ipsa architecto sapiente ab repudiandae et nihil, odio
              consequuntur exercitationem placeat! Cum suscipit iusto deleniti
              nisi. Eaque quos ut eveniet!
            </p>
          </div>
        </div>
      </div>
      <hr className="border-yellow border-2" />

      {/* LBF/Aluson: */}

      <div className="bg-pink">
        <div className="flex justify-center gap-20 items-center p-16">
          <div className="w-1/3">
            <h2 className="text-yellow font-Caprasimo text-xl">
              Gestionnaire ADV
            </h2>
            <h3 className="font-Raleway italic text-sm">
              LiveMentor de août 2021 à aujourd'hui
            </h3>
            <br />
            <p className="font-Raleway">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
              dolorem ipsa architecto sapiente ab repudiandae et nihil, odio
              consequuntur exercitationem placeat! Cum suscipit iusto deleniti
              nisi. Eaque quos ut eveniet!
            </p>
          </div>
          <img
            className="w-1/4 border-8 border-white rounded-lg"
            src="/assets/photos/van.jpg"
            alt="Chargée de financement"
          />
        </div>
      </div>
      <hr className="border-yellow border-2" />

      {/* La tour international */}

      <div className="bg-light">
        <div className="flex justify-center gap-20 items-center p-16">
          <img
            className="w-1/4 border-8 border-white rounded-lg"
            src="/assets/photos/tax.jpg"
            alt="Chargée de financement"
          />
          <div className="w-1/3">
            <h2 className="text-pink font-Caprasimo text-xl">
              Office manager / Secrétaire Juridique
            </h2>
            <h3 className="font-Raleway italic text-sm">
              LiveMentor de août 2021 à aujourd'hui
            </h3>
            <br />
            <p className="font-Raleway">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
              dolorem ipsa architecto sapiente ab repudiandae et nihil, odio
              consequuntur exercitationem placeat! Cum suscipit iusto deleniti
              nisi. Eaque quos ut eveniet!
            </p>
          </div>
        </div>
      </div>
      <hr className="border-yellow border-2" />
      {/* LBF/Aluson: */}

      <div className="bg-pink">
        <div className="flex justify-center gap-20 items-center p-16">
          <div className="w-1/3">
            <h2 className="text-yellow font-Caprasimo text-xl">
              Et avant ça ?
            </h2>
            <h3 className="font-Raleway italic text-sm">
              LiveMentor de août 2021 à aujourd'hui
            </h3>
            <br />
            <p className="font-Raleway">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
              dolorem ipsa architecto sapiente ab repudiandae et nihil, odio
              consequuntur exercitationem placeat! Cum suscipit iusto deleniti
              nisi. Eaque quos ut eveniet!
            </p>
          </div>
          <img
            className="w-1/4 border-8 border-white rounded-lg"
            src="/assets/photos/donuts.jpg"
            alt="Chargée de financement"
          />
        </div>
      </div>
      <hr className="border-white border-2" />

      {/* Call to action */}

      <div className="bg-yellow p-12 text-center">
        <h2 className="font-Caprasimo text-3xl text-black">
          C'est très bien tout ça mais cela n'a RIEN AVOIR avec le développement
          web
        </h2>
        <p className="font-Raleway text-2xl pt-3">
          Et pourtant, un profil comme le mien peut
          <strong className="text-orange"> énormément</strong> apporter à votre
          entreprise.
          <br />
          Pourquoi ?
        </p>
        <Link to="/about">
          <button
            className="bg-orange cursor-pointer text-white p-2 font-Raleway rounded-full mt-8"
            type="button"
          >
            Cliquez ici pour découvrir mes pouvoirs magiques
          </button>
        </Link>
      </div>
    </Layout>
  );
}

export default Resume;
