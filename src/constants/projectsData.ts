import tfgImage from "@/assets/images/tfg.webp";
import natGeoImage from "@/assets/images/nat-geo.webp";
import protocoloImage from "@/assets/images/protocolo.webp";
import estrellaImage from "@/assets/images/estrella.webp";

// Get the base URL for assets
const getAssetUrl = (path: string) => {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${path.startsWith("/") ? path.slice(1) : path}`;
};

const projectsData = [
  {
    id: "tfg",
    image: tfgImage,
    hasThesis: true,
    pdfUrl: getAssetUrl("tfg.pdf"),
  },
  {
    id: "natGeo",
    image: natGeoImage,
    hasThesis: true,
    pdfUrl: getAssetUrl("nat-geo.pdf"),
  },
  {
    id: "protocolo",
    image: protocoloImage,
    hasThesis: true,
    pdfUrl: getAssetUrl("protocolo.pdf"),
  },
  {
    id: "estrella",
    image: estrellaImage,
    hasThesis: true,
    pdfUrl: getAssetUrl("estrella.pdf"),
  },
];

export default projectsData;
