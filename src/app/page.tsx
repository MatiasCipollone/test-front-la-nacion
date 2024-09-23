import { Card, NavBar } from "@/components";
import styles from "./page.module.css";
import { I_Tourism, I_Voucher } from "@/interfaces";
import Image from "next/image";

export default async function Home() {
  const resTourism = await fetch("http://localhost:8080/api/accounts/tourism");
  const dataTourism = await resTourism.json();

  const resVoucher = await fetch("http://localhost:8080/api/accounts/voucher");
  const dataVoucher = await resVoucher.json();

  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.main}>
        <Image
          src="/SliderImage.jpg"
          alt="sliderImage"
          className={styles.sectionImage}
          width={2070}
          height={500}
          quality={100}
        />
        <section className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h1>Turismo en Buenos Aires</h1>
            <button className={styles.button}>TODOS LOS BENEFICIOS</button>
          </div>
          <div className={styles.cardContainer}>
            <button className={styles.arrow}>{"<"}</button>
            {dataTourism.map((item: I_Tourism) => (
              <Card key={item.name} image={item.image} name={item.name}>
                <h1 className={styles.titleCard}>{item.name}</h1>
                <div className={styles.descount}>
                  <p>20%</p> | <p>15%</p> | <p>10%</p>
                </div>
                <p className={styles.distanceCard}>A {item.closestDistance}</p>
              </Card>
            ))}
            <button className={styles.arrow}>{">"}</button>
          </div>
        </section>
        <section
          className={styles.sectionContainer}
          style={{ backgroundColor: "#e4e4e4" }}
        >
          <div className={styles.sectionHeader}>
            <h1>Códigos de descuento</h1>
            <button className={styles.button}>TODOS LOS CÓDIGOS</button>
          </div>
          <p></p>
          <div className={styles.cardContainer}>
            <button className={styles.arrow}>{"<"}</button>
            {dataVoucher.map((item: I_Voucher) => (
              <Card
                key={item.name}
                background="#007bff"
                image={item.image}
                name={item.name}
              >
                <h1 className={styles.titleCard} style={{ color: "white" }}>
                  {item.name}
                </h1>
                <button className={styles.buttonCard}>Quiero mi codigo</button>
              </Card>
            ))}
            <button className={styles.arrow}>{">"}</button>
          </div>
        </section>
      </main>
    </div>
  );
}
