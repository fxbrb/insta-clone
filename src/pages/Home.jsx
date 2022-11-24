import React from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import StoriesList from "../components/StoriesList";
import Publications from "../components/Publications";
import Suggestions from "../components/Suggestions.jsx";
import { NavLink } from "react-router-dom";

const Home = () => {
  function randomPseudo(length) {
    var pseudo = "";
    var characters = "abcdefghijklmnopqrstuvwxyz";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      pseudo += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return pseudo;
  }

  function randomNumber(length) {
    var number = "";
    var numbers = "123456789";
    var numbersLength = numbers.length;
    for (var i = 0; i < length; i++) {
      number += numbers.charAt(Math.floor(Math.random() * numbersLength));
    }
    return number;
  }

  const storyItems = [
    {
      avatar: img1,
      name: randomPseudo(6),
    },
    {
      avatar: img2,
      name: randomPseudo(6),
    },
    {
      avatar: img3,
      name: randomPseudo(6),
    },
    {
      avatar: img4,
      name: randomPseudo(6),
    },
    {
      avatar: img5,
      name: randomPseudo(6),
    },
    {
      avatar: img6,
      name: randomPseudo(10),
    },
    {
      avatar: img7,
      name: randomPseudo(10),
    },
    {
      avatar: img8,
      name: randomPseudo(10),
    },
    {
      avatar: img9,
      name: randomPseudo(10),
    },
    {
      avatar: img10,
      name: randomPseudo(10),
    },
    {
      avatar: img1,
      name: randomPseudo(10),
    },
    {
      avatar: img2,
      name: randomPseudo(10),
    },
    {
      avatar: img3,
      name: randomPseudo(10),
    },
    {
      avatar: img4,
      name: randomPseudo(10),
    },
    {
      avatar: img5,
      name: randomPseudo(10),
    },
  ];

  const footerLinks = [
    {
      name: "À propos",
      path: "/",
    },
    {
      name: "Aide",
      path: "/",
    },
    {
      name: "Presse",
      path: "/",
    },
    {
      name: "API",
      path: "/",
    },
    {
      name: "Emplois",
      path: "/",
    },
    {
      name: "Confidentialité",
      path: "/",
    },
    {
      name: "Conditions",
      path: "/",
    },
    {
      name: "Lieux",
      path: "/",
    },
    {
      name: "Langue",
      path: "/",
    },
  ];

  return (
    <section className="w-full h-full flex justify-center sm:mt-[1rem] ">
      <div className="w-full md:w-auto flex flex-col items-center md:mr-[2.3rem]">
        <StoriesList storyItems={storyItems} />

        <div className="px-[0.5rem] flex flex-col items-center">
          {[...Array(10)].map((_, k) => {
            return <Publications key={k} randomNumber={randomNumber} />;
          })}
        </div>
      </div>
      {/* Rigth part  */}
      <div className="w-[380px] pt-[1rem] hidden md:block">
        {/* Top */}
        <div className="flex justify-between mb-[1rem]">
          <div className="flex items-center gap-4">
            <img
              src={img1}
              alt={storyItems.name}
              className="w-[65px] h-[65px] rounded-full object-cover"
            />
            <p className="font-medium text-[14px] dark:text-white">Name</p>
          </div>
          <button className="text-[#0095f6] text-[12px] font-semibold">
            Basculer
          </button>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-400 font-bold text-[14px]">
            Suggestions pour vous
          </p>
          <p className="text-[12px] dark:text-white">Voir tout</p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col mb-[1.5rem]">
            {[...Array(5)].map((_, k) => {
              return <Suggestions key={k} randomPseudo={randomPseudo} />;
            })}
          </div>
          <ul className="flex flex-wrap items-center mb-[0.7rem]">
            {footerLinks.map((link) => {
              return (
                <>
                  <NavLink
                    to={link.path}
                    className="text-[12px] text-gray-400 hover:underline"
                  >
                    {link.name}
                  </NavLink>
                  <span className="mx-[0.1rem] text-gray-400">•</span>
                </>
              );
            })}
          </ul>
          <p className="uppercase text-gray-400 text-[14px]">
            &#169; 2022 françoisbrb
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
