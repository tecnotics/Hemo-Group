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
              <b>Misíon </b>
            </Typography>
            <p>
              Somos una institución prestadora de servicios de salud
              especializada en enfermedades hematológicas y oncológicas,
              enfocada en la atención humanizada e integral, comprometida con la
              seguridad del paciente, contribuyendo así al mejoramiento de la
              calidad de vida
            </p>
            <br />
            <Typography variant="h4">
              <b>Visíon </b>
            </Typography>
            <p>
              En el año 2025, seremos una institución reconocida a nivel
              nacional en el cuidado, tratamiento e investigación de
              enfermedades hematológicas y oncológicas, apoyado en nuestros
              valores corporativos y política de calidad.
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
