function Footer() {
  return (
    <footer className="page-footer green lighten-4">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="https://komarov03.github.io/react-shop-fortnite/" rel="noreferrer" target="_blank">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
