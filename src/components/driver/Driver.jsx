import React, { useEffect } from "react";
import styles from "./Driver.module.css";
import Drive from "../../images/drive.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Driver = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className={styles.driver}>
      <div className={styles.left}>
        <img src={Drive} alt="/" />
      </div>
      <div className={styles.right}>
        <h2>
          Busca tu auto perfecto <span>para probar antes de comprar</span>
        </h2>
        <p>Asegura tu futuro auto</p>
        <button>Buscar autos</button>
      </div>
    </div>
  );
};

export default Driver;
