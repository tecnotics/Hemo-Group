import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import MoreInfoButton from "../../Components/MoreInfo/MoreInfo";
import "./Home.css";
import logoSolo from "../../assets/navbar-assets/LogoSolo.svg";
import { SliderSwiper } from "../../Components/Swiper/Swiper";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <SliderSwiper />
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

        <section className="valores">
          <Typography variant="h4" component="div" gutterBottom>
            Nuestros Valores
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={logoSolo}
                  alt="Responsabilidad"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Responsabilidad
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Nos hacemos cargo de las consecuencias de nuestras acciones
                    y decisiones.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={logoSolo}
                  alt="Respeto"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Respeto
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Valoramos y consideramos las opiniones y necesidades de los
                    demás.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={logoSolo}
                  alt="Integridad"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Integridad
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Actuamos con honestidad y coherencia en todas nuestras
                    acciones.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </section>

        <section className="contigo"></section>
      </div>
    </>
  );
}

export default Home;
