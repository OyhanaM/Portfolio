import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <div className="bg-light pt-20 pb-32">
        <div className="flex justify-around items-center">
          <div className="w-1/3">
            <h2 className="font-Caprasimo text-3xl text-center p-3 mb-2 text-black">
              Et si c'était moi que vous cherchiez ?
            </h2>
            <p className="font-Raleway">
              Ma force est justement d'avoir eu un parcours riche dans des
              environnements et des postes très variés.
            </p>
            <br />
            <p className="font-Raleway">
              💼 <span className="text-orange font-bold">Être organisée? </span>{" "}
              En plus de faire des notions pour planifier mes vacances, j'ai
              mené à bien plusieurs projets que ce soit en autonomie ou en
              équipe.
            </p>
            <br />
            <p className="font-Raleway">
              🏈{" "}
              <span className="text-orange font-bold">
                Travailler en équipe?
              </span>{" "}
              J'ai toujours dû travailler en équipe et collaborer tout en devant
              respecter des objectifs de temps et de performance.{" "}
            </p>
            <br />
            <p className="font-Raleway">
              🚀 <span className="text-orange font-bold">Être efficace? </span>
              Ayant travaillée en start up et scale up, l'optimisation
              d'organisation et de temps est dans ma pratique.
            </p>
            <br />
            <p className="font-Raleway">
              📚{" "}
              <span className="text-orange font-bold">
                Se tenir au courant?
              </span>{" "}
              Je suis en recherche constante de m'améliorer et de devenir
              meilleure et pour cela, j'essaie d'être toujours au fait des
              dernières avancées.
            </p>
            <br />
            <p className="font-Raleway">
              🐙{" "}
              <span className="text-orange font-bold">Savoir s'adapter?</span>{" "}
              Cela fait partie de mon quotidien professionnel. Savoir anticiper
              et réagir face à l'imprevu est la première chose que j'ai appris
              dans ma vie professionnelle.
            </p>
            <br />
          </div>
          <img
            className="w-80 hidden md:block border-[10px] border-white rounded-lg"
            src="/assets/photos/door.jpg"
            alt="Oyhana"
          />
        </div>
        <div className="flex flex-col items-center pt-10">
          <p className="font-Raleway text-sm italic w-1/2">
            Et je ne vous parle pas de ma rigueur, de mes bonnes capacités de
            communication ou encore de ma bonne humeur à toutes épreuves. Et
            bien sûr loin de moi l'idée de finir de vous convaincre en
            mentionnant ma passion pour la pâtisserie et ma tendance à ramener
            souvent des gâteaux au bureau.
          </p>

          <Link to="/contact">
            <button className="button font-Raleway mt-8" type="button">
              Envie d'en savoir encore plus ?
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default About;
