export default [
  {
    id: "1",
    date: "01/09/2021",
    name: "2021 Editon of the Egyptian Space Summit",
    numbers: [
      {
        name: "Atendee",
        value: "300",
      },
      {
        name: "Teams",
        value: "15",
      },
    ],
    speakers: [
      {
        name: "Mohamed Sallam",
        img: "/images/spacesummit/edition1/speakers/mohamed_sallam.webp",
        description:
          "Mohamed Sallam is the only Qualified Egyptian / Arab Astronaut to go to mars with NASA on thier mars invasion program.",
      },
      {
        name: "Essam Gouda",
        img: "/images/spacesummit/edition1/speakers/essam_gouda.webp",
        description:
          "The Egyptian Society for Astronomy president and an passioned engineer about Astrounamy and space",
      },
      {
        name: "Ahmed Farid",
        img: "/images/spacesummit/edition1/speakers/ahmedfarid.webp",
        description:
          "Eng. Ahmed Farid is a NASA-supported astronaut-scientist candidate in the POSSUM program and a member of the United Kingdom's Institution of Engineering Technology.",
      },
      {
        name: "Mohamed El Koosy",
        img: "/images/spacesummit/edition1/speakers/mohamedelkoosy.webp",
        description: "CEO and co-founder of The Egyptian Space Agency",
      },
      {
        name: "Mohamed Tawfik",
        img: "/images/spacesummit/edition1/speakers/mohamedtawfik.webp",
        description:
          "A former Adjunct Professor and an assistant professor for aerospace engineering at Cairo University, also a former assistant professor at Emirates aviation college.",
      },
      {
        name: "Hager Salah",
        img: "/images/spacesummit/edition1/speakers/hagersalah.webp",
        description:
          "She is a researcher in the space weather monitoring center, with a bachelor of space science, and a master’s degree in astrophysics and space science. In addition, she is now a Ph.D. student in Astrophysics and space science. ",
      },
    ],
    winners: {
      "3rd": { name: "Altilium Algorithim", value: 5000 },
      "1st": { name: "Alpha Centauri", value: 15000 },
      "2nd": { name: "Green Builders", value: 10000 },
    },
    video: {
      url: "https://www.youtube.com/embed/IVakM-cz4hc",
      name: "Memories of 2021 Edition",
      description:
        "Because we know how much memories mean, we made sure that it was saved and taken care of by our team. IEEENU would like to thank the Egyptian Space Agency and the other sponsors for their remarkable efforts and support.",
    },
    toBeAnnouncedSoon: false,
  },
  {
    id: "2",
    date: "01/09/2022",
    name: "2022 Editon of the Egyptian Space Summit",
    toBeAnnouncedSoon: true,
    eventFacebookLink:
      "https://www.facebook.com/events/1702767603419516/?active_tab=discussion",
    eventDayForm: [
      {
        name: "name",
        type: "text",
        placeholder: "Enter your name",
        label: "Name",
        required: true,
        value: "Omar Khaled",
      },
      {
        name: "email",
        type: "email",
        placeholder: "example@domain.com",
        label: "Email",
        required: true,
        value: "omrcorc@gmail.com",
      },
      {
        name: "gender",
        type: "select",
        options: ["Select Gender", "Male", "Female"],
        label: "Gender",
        required: true,
        value: "Male",
      },
      {
        name: "phone",
        type: "number",
        placeholder: "01X XXXX XXXX",
        label: "Phone",
        required: true,
        value: "01068405513",
      },
      {
        name: "Age",
        type: "number",
        placeholder: "Your Age",
        label: "Age",
        required: true,
        value: "18",
      },
      {
        name: "university",
        type: "text",
        placeholder: "Your University",
        label: "University",
        required: true,
        value: "Nile Uni",
      },
      {
        name: "faculty",
        type: "text",
        placeholder: "Your Faculty",
        label: "Faculty",
        required: true,
        value: "Engineering and Applied Science",
      },
      {
        name: "major",
        type: "text",
        placeholder: "ex: ECE",
        label: "Major",
        required: true,
        value: "ECE",
      },
      {
        name: "Academic Year",
        type: "select",
        options: [
          "Select Academic Year",
          "Freshman",
          "Sophomore",
          "Junior",
          "Senior",
          "Graduating Senior",
        ],
        label: "Academic Year",
        required: true,
        value: "Sophomore",
      },
      {
        name: "National ID",
        type: "number",
        label: "National ID",
        required: true,
        placeholder: "3030XXXXXXXXXX",
        value: "30302100104475",
        validation: {
          maxLength: {
            value: 14,
            message: "Please enter a valid National ID",
          },
          minLength: {
            value: 14,
            message: "Please enter a valid National ID",
          },
        },
      },
      {
        name: "NU ID",
        type: "number",
        placeholder: "2XXXXXXXX",
        label: "NU ID",
        note: "If Nile University Student",
        validation: {
          maxLength: {
            value: 9,
            message: "Please enter a valid NU ID",
          },
          minLength: {
            value: 9,
            message: "Please enter a valid NU ID",
          },
        },
        value: "202000446",
        required: true,
      },
      {
        name: "IEEE Branch",
        type: "text",
        placeholder: "Ex: IEEE NU",
        label: "IEEE Branch",
        note: "If Nile University Student",
        value: "202000446",
        required: false,
      },
    ],
    competitionForm: {},
  },
];
