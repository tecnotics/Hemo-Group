import { Typography } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import MoreInfoButton from "../../Components/MoreInfo/MoreInfo";
import "./Home.css"

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <section className="quienes-somos-section">
          <div className="quienes-somos-content">
            <Typography variant="h4">
              <b>¿Quiénes Somos? </b>
            </Typography>
            <p>
              <b>Tecnotics</b> es más que una empresa de tecnología; somos su
              socio estratégico en la era digital. Con una década de experiencia
              en la industria y un equipo multidisciplinario de expertos, hemos
              asumido la misión de impulsar la excelencia técnica, manteniendo
              un enfoque inquebrantable en la calidad y en el servicio al
              cliente.
            </p>
            <p>
              Con años de experiencia en el mercado, nuestro equipo de expertos
              en seguridad cibernética está dedicado a desarrollar y ofrecer las
              mejores soluciones para proteger la información crítica de su
              organización.
            </p>
            <br />
            <MoreInfoButton />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
