import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const MoreInfoButton = () => {
  // Reemplaza 'tu-enlace-de-whatsapp' con el enlace generado de WhatsApp Business
  const whatsappLink = " https://open.wa.link/open";

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<WhatsAppIcon />}
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      Más información
    </Button>
  );
};

export default MoreInfoButton;
