import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function Resume() {
  return (
    <Layout>
      {/* LiveMentor */}

      <div className="bg-light">
        <div className="flex justify-center gap-20 items-center  md:p-16">
          <img
            className=" w-72 hidden sm:block border-8 border-white rounded-lg"
            src="/assets/photos/desk.jpg"
            alt="Chargée de financement"
          />
          <div className="md:w-2/4 p-5">
            <h2 className="text-pink font-Caprasimo text-xl">
              Chargée de financement
            </h2>
            <h3 className="font-Raleway italic text-sm">
              <span className="font-bold">LiveMentor</span> de août 2021 à
              aujourd'hui
            </h3>
            <br />
            <p className="font-Raleway">
              Chargée de financement au sein d'un organisme de formation c'est
              quoi? C'est accompager les futurs apprenants dans le montage et le
              suivi de leur dossier de prise en charge auprès des organismes
              financeurs (OPCO, Pôle Emploi, Région...) afin de mettre toutes
              les chances de leurs côtés pour qu'ils puissent mener à bien leur
              projet. C'est aussi se tenir informée des nouvelles
              règlementations et des nouveaux financeurs protentiels.
            </p>
          </div>
        </div>
      </div>
      <hr className="border-yellow border-2" />

      {/* LBF/Aluson: */}

      <div className="bg-pink">
        <div className="flex justify-center gap-20 items-center p-16">
          <div className="md:w-2/4 p-5">
            <h2 className="text-yellow font-Caprasimo text-xl">
              Gestionnaire ADV
            </h2>
            <h3 className="font-Raleway italic text-sm">
              <span className="font-bold">LBF</span> d'octobre 2019 à juillet
              2020 et <span className="font-bold">Aluson</span> d'octobre 2020 à
              août 2021
            </h3>
            <br />
            <p className="font-Raleway">
              J'ai occupé le poste d'administratrice des ventes au sein de deux
              structures, une stat up et une etreprise plus mature. Contact
              privilégiée des clients, je m'assurais du bon déroulé des
              livraison, de la facturation et du contrôle des paiements client
              et bien entendu du service après vente,
            </p>
          </div>
          <img
            className=" w-72 hidden sm:block border-8 border-white rounded-lg"
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
            className=" w-72 hidden sm:block border-8 border-white rounded-lg"
            src="/assets/photos/tax.jpg"
            alt="Chargée de financement"
          />
          <div className="md:w-2/4 p-5">
            <h2 className="text-pink font-Caprasimo text-xl">
              Office manager / Secrétaire fiscale
            </h2>
            <h3 className="font-Raleway italic text-sm">
              <span className="font-bold">La tour international</span> de
              février 2018 à octobre 2019
            </h3>
            <br />
            <p className="font-Raleway italic">
              J'ai commencé au sein de cabinet La tour international en tant
              qu'office manager. Véritable couteu suisse, mon scope était très
              large allant de l'organisation d'évènement haut de gamme à la
              gestion des fournisseurs en passant par la comptabilité des
              associés. J'ai ensuite évolué au poste de secrétaire fiscale où
              j'assistais les collaborateurs sur leurs dossiers.
            </p>
          </div>
        </div>
      </div>
      <hr className="border-yellow border-2" />
      {/* LBF/Aluson: */}

      <div className="bg-pink">
        <div className="flex justify-center gap-20 items-center p-16">
          <div className="md:w-2/4 p-5">
            <h2 className="text-yellow font-Caprasimo text-xl">
              Et avant ça ?
            </h2>
            <h3 className="font-Raleway italic text-sm">
              <span className="font-bold">L'aventure !</span> Là où je suis
              allée il n'y avait pas besoin de route
            </h3>
            <br />
            <p className="font-Raleway">
              Que ce soit manager chez Mc Donald's, conseillère de vente en prêt
              à porter ou en barbecue, hôtesse service client dans une enseigne
              de bricolage ou encore serveuse le temps d'un été chaque
              expérience m'a permis d'acquerir des compétences qui me servent
              encore aujourd'hui.
            </p>
          </div>
          <img
            className=" w-72 hidden sm:block border-8 border-white rounded-lg"
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
          <button className="button font-Raleway mt-8" type="button">
            Découvrir mes pouvoirs magiques
          </button>
        </Link>
      </div>
    </Layout>
  );
}

export default Resume;
