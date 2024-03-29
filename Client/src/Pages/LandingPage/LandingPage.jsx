import { Link } from "react-router-dom";

import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <main className={styles.homepage}>
      <section>
        <div>
          <h1>Welcome to the World of Formula 1 Drivers!</h1>
          <hr />
          <h2>
            Explore the world of Formula 1 drivers! Immerse yourself in the
            lives and careers of track stars. Discover detailed profiles from
            legends to new talents.
          </h2>
        </div>
        <Link to="/home" className="cta">
          Start Now!
        </Link>
      </section>
    </main>
  );
};

export default LandingPage;
