import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <div className="bg-light p-16">
        <div className="flex justify-around items-center">
          <div className="w-1/3">
            <h2 className="font-Caprasimo text-2xl text-center p-5 text-black">
              ... Bonjour, moi c'est Oyhana ...
            </h2>
            <p className="font-Raleway text-black text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem quia veniam laboriosam modi dicta. Magnam, tempora
              perferendis facere sed voluptatum, labore enim deserunt nesciunt
              perspiciatis tenetur doloremque a deleniti consequuntur! Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem
              quia veniam laboriosam modi dicta. Magnam, tempora perferendis
              facere sed voluptatum, labore enim deserunt nesciunt perspiciatis
              tenetur doloremque a deleniti consequuntur!
            </p>
          </div>
          <img
            className="w-1/4 border-[10px] border-white rounded-lg"
            src="/assets/photos/door.jpg"
            alt="Oyhana"
          />
        </div>
        <div className="flex justify-center pt-10">
          <Link to="/contact">
            <button
              className="bg-orange cursor-pointer text-white p-2 font-Raleway rounded-full mt-8"
              type="button"
            >
              Cliquez ici pour découvrir mes pouvoirs magiques
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default About;
