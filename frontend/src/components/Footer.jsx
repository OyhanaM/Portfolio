function Footer() {
  return (
    <footer className="bg-pink flex flex-end w-full ">
      <div className="flex mx-10">
        <div className="flex gap-5 p-2">
          <a href="https://www.linkedin.com/in/oyhana-mahjoubi-6a8798160/">
            <img
              className="h-6 w-6 cursor-pointer"
              src="/assets/logo/linkedin-logo.png"
              alt="Lien vers Linkedin"
            />
          </a>
          <a href="https://github.com/OyhanaM">
            <img
              className="h-6 w-6 cursor-pointer"
              src="/assets/logo/github-logo.png"
              alt="Lien vers Github"
            />
          </a>
        </div>
        <div className="flex items-center gap-2 mr-2">
          <img
            className="h-3 w-3"
            src="/assets/logo/copyright-logo.png"
            alt="Designé et codé par Oyhana"
          />
          <h3 className="text-white font-Raleway">
            Codé avec amour et bubble tea par Oyhana
          </h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
