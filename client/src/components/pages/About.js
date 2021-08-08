import React, { Fragment } from "react";
import AboutAbout from "../AboutAbout";
import ReviewsCards from "../ReviewsCards";
import Slogan from "../Slogan";
import PopoverCard from "../PopoverCard";
import { Row } from "reactstrap"

const About = () => {

  const board = [
    {
      name: "Mohamed Mustafa",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      position: "Cahirman",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      description: "\"Try to learn something about everything and everything about something.\" - Thomas Huxley Mohamed started to explore and learn a myriad of things about various careers, which made him well rounded; consequently, he knows the basics of both technical and non-technical tracks: Electronics, Robotics, Graphic design, photography & Videography, PR, and digital marketing. Furthermore, Mohamed found that he has a business-oriented mind; therefore, he began to dig deeper into digital marketing, and almost he learned everything about digital marketing."
    },
    {
      name: "Marwa Mohamed",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      position: "Vice Chairman",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      description: "\"You may have a fresh start any moment you choose, for this thing that we call 'failure' is not the falling down, but the staying down. \" — Mary Pickford Marwa is a dedicated college student who has more than five years of experience in volunteering work. Moreover, she is a public relations instructor, Entrepreneurship, Neuro-linguistic programming, and Body language. Marwa has work experience as a PR Manager. Also, she works as a business developer and project manager. From first glance, you will notice that Marwa is energetic and full of passion for learning and exploring more and more."
    },
    {
      name: "Youssef Radwan",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      facebook: "https://www.facebook.com/yousef.a.radwan.7/",
      linkedin: "www.linkedin.com/in/yousef-radwan-738932178",
      description: "Looking for the next chance to stop being introverted. Not too talkative until you get to know me a bit. Might have an addiction to automation. Always tries his best to help as much as possible."
    },
    {
      name: "Hager Abdelnasser",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      facebook: "https://www.facebook.com/hager.abdelnasser.142",
      twitter: "https://twitter.com/Hager_Nasser8",
      description: "A big fan of helping others and gaining experiences. Never afraid to try something new or embark on a new adventure. My personality and skills were formed from interacting with others and I feel this has given me a very diverse and extensive personality."
    },
    {
      name: "Ahmed El-Sayed",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      facebook: "https://www.facebook.com/profile.php?id=100013863490188",
      twitter: "https://twitter.com/AhmedEl87890858?s=08",
      description: "My name is Ahmed El-Sayed,  I’m 19 ,I'm in faculty of urban and regional planning – Cairo university. I was in STEM school and I achieved third place in Intel ISEF in 2018 , I'm fan of Al-Ahly, Real Madrid and Arsenal "
    },
    {
      name: "Manar Adel",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      position: "Vice Chairman",
      linkedin: "https://www.linkedin.com/in/manar-hamed-32b8b6114/",
      description: "I am a hard working individual that seeks advancement in some aspects of life, a computer science student, might seem like an introvert but is a social person in fact."
    },
    {
      name: "Mazen Mohamed",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      position: "Media Head",
      facebook: "https://www.facebook.com/Mazen.M.Saeid",
      description: "All I want to do is to design and use colors. Hate to be the quiet guy in the room. Trying to make the most of it and not to miss any chances. Mainly sarcastic and hate worrying about stuff but love to do it smart."
    },
    {
      name: "Amir Shawky",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      position: "Vice Chairman",
      facebook: "https://www.facebook.com/amir.shawky.545/",
      linkedin: "https://www.linkedin.com/in/amir-shawky-546a79172/",
      description: "Although I'm always identified as an introvert by personality tests, people preceive me as an 'extrovert'. I'm always looking for more connections, maybe that's why I'm taking the lead for our public relations, so feel free to contact me."
    }
  ]

  return (
    <Fragment>
      <Slogan />
      <div
        className="px-5"
        style={{ maxWidth: "65.125rem", minHeight: "40vh", margin: "auto" }}
      >
        <AboutAbout />
        <ReviewsCards />
        <div className="mt-5">
          <h2>Board</h2>
          <hr />
          <Row>
            {
              board.map((member, index) => (<PopoverCard key={index} member={member} />))
            }
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
