import React, { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaCertificate,
} from "react-icons/fa";

const certificates = [
  {
    title: "System Design Course",
    institute: "PW Skills",
    image:
      "https://img.freepik.com/free-vector/geometric-minimalist-business-certificates_23-2148896559.jpg?t=st=1748447246~exp=1748450846~hmac=4312a6885706dcc4579285e8f6b6d09e9c25abce1314f3857a7cf4642d6f79f9&w=1380",
    link: "https://res.cloudinary.com/dc9ae9bsh/image/upload/v1736516264/systemDesign_Certificate_otzskj.pdf",
  },
  {
    title: "DSA in Java",
    institute: "Apna College",
    image:
      "https://img.freepik.com/free-vector/geometric-minimalist-business-certificates_23-2148896559.jpg?t=st=1748447246~exp=1748450846~hmac=4312a6885706dcc4579285e8f6b6d09e9c25abce1314f3857a7cf4642d6f79f9&w=1380",
    link: "https://res.cloudinary.com/dc9ae9bsh/image/upload/v1736515802/certificate-alpha-plus-batch-659e5ab5c8da0ee07e075b56_kmsjza.pdf",
  },
  {
    title: "Full Stack Web Development Bootcamp",
    institute: "Udemy",
    image: "https://img.freepik.com/free-vector/geometric-minimalist-business-certificates_23-2148896559.jpg?t=st=1748447246~exp=1748450846~hmac=4312a6885706dcc4579285e8f6b6d09e9c25abce1314f3857a7cf4642d6f79f9&w=1380",
    link: "https://res.cloudinary.com/dc9ae9bsh/image/upload/v1736516019/fullstack_certificates_gkacrb.pdf",
  },
  {
    title: "Data Structure And Algorithm",
    institute: "Udemy",
    image: "https://img.freepik.com/free-vector/geometric-minimalist-business-certificates_23-2148896559.jpg?t=st=1748447246~exp=1748450846~hmac=4312a6885706dcc4579285e8f6b6d09e9c25abce1314f3857a7cf4642d6f79f9&w=1380",
    link: "https://res.cloudinary.com/dc9ae9bsh/image/upload/v1736515689/dsa_certificate_rd8kyy.pdf",
  },
];

export default function CertificateCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cert = certificates[currentIndex];

  const prevCert = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const nextCert = () => {
    setCurrentIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      className="bg-black text-white h-50% rounded-lg shadow-lg justify-between"
      style={{ minHeight: "500px" }}
    >
     
      <h2 className="text-lg font-bold text-white mb-4 flex items-center ">
        <FaCertificate className="mr-2" /> Certificates
      </h2>

      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-48 md:h-56 object-cover rounded-md mb-4 mt-2"
        loading="lazy"
      />

      <h3 className="text-2xl font-bold mb-1">{cert.title}</h3>
      <p className="text-gray-400 mb-6 italic">{cert.institute}</p>

      <div className="flex justify-between items-center gap-2">
        <button
          onClick={prevCert}
          className="p-2 bg-purple-700 hover:bg-purple-800 rounded-md transition-colors"
          aria-label="Previous Certificate"
        >
          <FaArrowLeft className="text-white" />
        </button>

        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition"
        >
          View Certificate <FaExternalLinkAlt className="inline ml-1" />
        </a>

        <button
          onClick={nextCert}
          className="p-2 bg-purple-700 hover:bg-purple-800 rounded-md transition-colors"
          aria-label="Next Certificate"
        >
          <FaArrowRight className="text-white" />
        </button>
      </div>
    </section>
  );
}
