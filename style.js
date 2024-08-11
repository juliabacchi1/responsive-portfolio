const certificates = [
  {
    imageUrl: "/images/image-certificate.png",
    altText: "Certificado 1",
    url: "https://www.google.com.br",
  },
  {
    imageUrl: "/images/image-certificate.png",
    altText: "Certificado 2",
    url: "https://www.google.com.br",
  },
  {
    imageUrl: "/images/image-certificate.png",
    altText: "Certificado 3",
    url: "https://www.google.com.br",
  },
  {
    imageUrl: "/images/image-certificate.png",
    altText: "Certificado 4",
    url: "https://www.google.com.br",
  },
  {
    imageUrl: "/images/image-certificate.png",
    altText: "Certificado 5",
    url: "https://www.google.com.br",
  },
  {
    imageUrl: "/images/image-certificate.png",
    altText: "Certificado 6",
    url: "https://www.google.com.br",
  },
];

const container = document.getElementById("certificates-container");

certificates.forEach((cert, index) => {
  const colDiv = document.createElement("div");
  colDiv.className = "col-4 text-center";

  if (index >= 3) {
    colDiv.classList.add("pt-3");
  }

  const img = document.createElement("img");
  img.src = cert.imageUrl;
  img.alt = cert.altText;
  img.className = "img-fluid rounded-2";

  colDiv.appendChild(img);
  container.appendChild(colDiv);
});
