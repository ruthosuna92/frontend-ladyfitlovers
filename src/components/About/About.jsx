import React from "react";
import "./about.css";
import AboutCard from "./AboutCard";


const About = () => {

  const users=[
    {
      name: 'Alejandra Osuna',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: 'https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697166111/ale_zfawdj.jpg',
      linkedin: 'https://www.linkedin.com/in/alejandra-osuna-258b8a248/',
      github: 'https://github.com/ruthosuna92',
    },
    {
      name: 'Marina Solange García',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: 'https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697166325/Portrait_Placeholder_mk4ckt.png',
      linkedin: 'https://www.linkedin.com/in/marina-solange-garcia/',
      github: 'https://github.com/msolangeg',
    },
    {
      name: 'Hebe Lía Romeu',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: 'https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697166325/Portrait_Placeholder_mk4ckt.png',
      linkedin: 'https://www.linkedin.com/in/hebeliaromeu/',
      github: 'https://github.com/hebelia',
    },
    {
      name: 'Davian Pavon Amado',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: 'https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697166325/Portrait_Placeholder_mk4ckt.png',
      linkedin: 'https://www.linkedin.com/in/davian-pabon-amado-54105627a/',
      github: 'https://github.com/altair201',
    },
    {
      name: 'Jhonatan Cutisaca',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: 'https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697166325/Portrait_Placeholder_mk4ckt.png',
      linkedin: 'https://www.linkedin.com/in/jhonathan-cutisaca/',
      github: 'https://github.com/JCutisaca',
    },
    {
      name: 'Matias Gochez',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: 'https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697166325/Portrait_Placeholder_mk4ckt.png',
      linkedin: 'https://www.linkedin.com/in/matias-gochez-1b2921119/',
      github: 'https://github.com/MGochez',
    },
    {
      name: 'Leonardo Rodríguez',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: 'https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697155062/a59fecd1-6695-4379-995d-3d15f54734a8_hjsnwk.jpg',
      linkedin: 'https://www.linkedin.com/in/leonardo-rodriguez-803560241/',
      github: 'https://github.com/LeonardoRodriguez22',
    },
    {
      name: 'Mayra Denhoff',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: 'https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697166325/Portrait_Placeholder_mk4ckt.png',
      linkedin: 'https://www.linkedin.com/in/leonardo-rodriguez-803560241/',
      github: 'https://github.com/Maydenhoff',
    },
  ]
  return (
    <div className="aboutContainer">
      <div className="barra">
          <h1 className="titleAbout">Grupo de desarrollo web</h1>
          <p className="pAbout">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis minima ea quae sapiente iure reiciendis repudiandae!
            Incidunt tenetur qui sed quam nulla! Ipsum alias cupiditate a! Magni
            delectus libero tempore.
          </p>
      </div>
      <div className="aboutCardsContainer">
   {users.map((user) => (
    <AboutCard user={user}/>
    ))}
      </div>
    </div>
  );
};

export default About;
