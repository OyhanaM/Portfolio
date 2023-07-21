import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout>
      <div className="flex bg-light justify-center pb-28">
        <img
          className="w-96"
          src="/assets/photos/flamant.png"
          alt="Margaret le flamant rose"
        />

        <form className="pt-12 w-96 flex flex-col items-center justify-center gap-2 ">
          <h2 className="font-Caprasimo text-2xl text-black">
            Et si on faisait connaissance ?
          </h2>
          <hr className="w-20 pb-3" />
          <label className="font-Raleway" htmlFor="name">
            Nom et Prénom :
          </label>
          <input
            className="border-2 w-56 border-grey rounded"
            type="text"
            name="name"
            required
          />
          <label className="font-Raleway" htmlFor="email">
            Email :
          </label>
          <input
            className="border-2 w-56 border-grey rounded"
            type="email"
            name="email"
            required
          />

          <label className="font-Raleway" htmlFor="password">
            Message :
          </label>
          <textarea
            className="border-2 border-grey rounded w-80 h-32 p-1 resize-none"
            type="password"
            name="password"
            id="password"
            required
          />
          <button className="button font-Raleway mt-4 mb-5" type="submit">
            Valider
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Contact;
