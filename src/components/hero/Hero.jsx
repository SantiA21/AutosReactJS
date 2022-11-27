import React from "react";
import styles from "./Hero.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <form>
        <div className={styles.text}>
          <label>Donde</label>
          <input
            className={styles.text_input}
            type="text"
            placeholder="Buscar localizacion"
          />
        </div>
        <div className={styles.from}>
          <span className={styles.border}></span>
          <label>Desde</label>
          <input type="date" />
        </div>
        <div className={styles.until}>
          <span className={styles.border}></span>
          <label>Hasta</label>
          <input type="date" />
        </div>
        <div className={styles.search_btn}>
          <AiOutlineSearch className={styles.icon}/>
          <button className={styles.btn}>Buscar por auto</button>
        </div>
      </form>
    </div>
  );
};

export default Hero;
