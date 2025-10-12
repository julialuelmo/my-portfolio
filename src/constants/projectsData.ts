import tfgImage from "@/assets/images/tfg.webp";
import natGeoImage from "@/assets/images/nat-geo.webp";
import protocoloImage from "@/assets/images/protocolo.webp";
import estrellaImage from "@/assets/images/estrella.webp";

const projectsData = [
  {
    id: "tfg",
    image: tfgImage,
    hasThesis: true,
    pdfUrl: "/tfg.pdf",
  },
  {
    id: "natGeo",
    image: natGeoImage,
    hasThesis: true,
    pdfUrl: "/nat-geo.pdf",
  },
  {
    id: "protocolo",
    image: protocoloImage,
    hasThesis: true,
    pdfUrl: "/protocolo.pdf",
  },
  {
    id: "estrella",
    image: estrellaImage,
    hasThesis: true,
    pdfUrl: "/estrella.pdf",
  },
];

export default projectsData;
