import React from "react";
import Footer from "../Footer/Footer";
import { CiDeliveryTruck } from "react-icons/ci";
import "./styleAbout.css";

const About = () => {
  return (
    <div>
      <section>
        <div className="section">
          <h3>
            {<CiDeliveryTruck style={{ fontSize: "20px" }} />}Առաքման Պայմաններ</h3>
            <p>Ա ) Առաքումը իրականացվում է Հայաստանում և Արցախում։</p>
            <p>Բ) Առաքման ծառայության գինն է 500 ՀՀ դրամ , ողջ Երևանի տարածքում։</p> 
            <p>Գ) Մարզեր և Արցախ 500 ՀՀ դրամ Հայ Փոստի միջոցով:</p>
            <p>Դ) Եթե միանվագ պատվերի գումարը գերազանցում է 20000 ՀՀ դրամը՝ առաքումն անվճար է։</p>  
            <p>Ե) Առաքումն իրականացվում է Ձեր կողմից նշված հասցեյով , Ձեր կողմից ընտրված օրվա և ժամային գոտիներին համապատասխան։</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
