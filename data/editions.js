export default [
  {
    id: "1",
    date: "02/09/2021",
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
    img: "/images/edition1.webp",
    toBeAnnouncedSoon: false,
  },
  {
    id: "2",
    date: "01/09/2022",
    name: "2022 Editon of the Egyptian Space Summit",
    toBeAnnouncedSoon: true,
    eventFacebookLink:
      "https://www.facebook.com/events/1702767603419516/?active_tab=discussion",
    img: "/images/edition2.webp",
    eventDayForm: [
      {
        type: "text",
        placeholder: "Enter your name",
        label: "name",
        required: true,
        value: "Omar Khaled",
      },
      {
        type: "email",
        placeholder: "example@domain.com",
        label: "email",
        required: true,
        value: "omrcorc@gmail.com",
      },
      {
        type: "select",
        options: ["Select Gender", "Male", "Female"],
        label: "Gender",
        required: true,
        value: "Male",
      },
      {
        type: "tel",
        placeholder: "01XXXXXXXXX",
        label: "Phone",
        required: true,
        value: "01068405513",
      },
      {
        type: "number",
        placeholder: "Your Age",
        label: "Age",
        required: true,
        value: "18",
      },
      {
        type: "text",
        placeholder: "Your University / School",
        label: "University / School",
        required: true,
      },
      {
        type: "text",
        placeholder: "Your Faculty",
        label: "Faculty",
        required: false,
      },
      {
        type: "text",
        placeholder: "ex: Civil",
        label: "Major",
        required: false,
      },
      {
        label: "Academic Year",
        type: "select",
        options: [
          "Select Academic Year",
          "Freshman",
          "Sophomore",
          "Junior",
          "Senior",
          "Graduating Senior",
        ],
        required: false,
      },
      {
        type: "number",
        label: "National ID",
        required: true,
        placeholder: "Your 14-digits National ID",
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
        type: "number",
        placeholder: "Your 9-digits NU ID",
        label: "NU ID",
        note: "For Nile University Student only",
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
        required: false,
      },
      {
        label:
          "Will you be able to attend the event on thursday, 1st september",
        type: "select",
        options: ["Select Option", "Yes", "No", "Maybe"],
        required: true,
      },
      {
        type: "text",
        placeholder: "Comments...",
        label: "Comments",
        required: false,
      },
    ],
    competitionForm: {
      firstStage: [
        {
          type: "select",
          label: "Level",
          options: [
            "Select Level",
            "Junior | High School and Elemantry School Students",
            "Advanced | Undergrad Students",
          ],
          required: true,
        },
        {
          type: "text",
          label: "Team Name",
          placeholder: "Team Name",
          required: true,
        },
        {
          type: "text",
          label: "Team Governorate",
          placeholder: "Team Governorate",
          required: true,
        },
        {
          type: "text",
          label: "Team Leader Name",
          placeholder: "Team Leader Name",
          required: true,
        },
        {
          type: "tel",
          label: "Team Leader Phone",
          placeholder: "Team Leader Phone",
          required: true,
        },
        {
          type: "email",
          label: "Team Leader Email",
          placeholder: "Team Leader Email",
          required: true,
        },
        {
          type: "text",
          label: "First Team Member Name",
          placeholder: "First Team Member Name",
          required: true,
        },
        {
          type: "tel",
          label: "First Team Member Phone",
          placeholder: "First Team Member Phone",
          required: true,
        },
        {
          type: "email",
          label: "First Team Member Email",
          placeholder: "First Team Member Email",
          required: true,
        },
        {
          type: "text",
          label: "Second Team Member Name",
          placeholder: "Second Team Member Name",
          required: false,
        },
        {
          type: "tel",
          label: "Second Team Member Phone",
          placeholder: "Second Team Member Phone",
          required: false,
        },
        {
          type: "email",
          label: "Second Team Member Email",
          placeholder: "Second Team Member Email",
          required: false,
        },
        {
          type: "text",
          label: "Third Team Member Name",
          placeholder: "Third Team Member Name",
          required: false,
        },
        {
          type: "tel",
          label: "Third Team Member Phone",
          placeholder: "Third Team Member Phone",
          required: false,
        },
        {
          type: "email",
          label: "Third Team Member Email",
          placeholder: "Third Team Member Email",
          required: false,
        },
        {
          type: "text",
          label: "Fourth Team Member Name",
          placeholder: "Fourth Team Member Name",
          required: false,
        },
        {
          type: "tel",
          label: "Fourth Team Member Phone",
          placeholder: "Fourth Team Member Phone",
          required: false,
        },
        {
          type: "email",
          label: "Fourth Team Member Email",
          placeholder: "Fourth Team Member Email",
          required: false,
        },
      ],
      secondStage: {
        junior: [
          {
            type: "select",
            label: "Track",
            options: [
              "Select Track",
              "CanSat missions",
              "Educational simulators for specific idea or project related to space industry or astronomy",
              "General Track",
            ],
            required: true,
          },
        ],
        advanced: [
          {
            type: "select",
            label: "Track",
            options: [
              "Select Track",
              "Space Exploration",
              "Bio Spy",
              "Satellites Missions",
              "Communication and Data Transformation",
              "General Track",
            ],
            required: true,
          },
        ],
        rest: [
          {
            name: "problemDefinition",
            type: "textarea",
            label: "Problem Definition | 150 to 200 words",
            placeholder: "Problem Definition | 150 to 200 words",
            required: true,
          },
          {
            name: "problemSolution",
            type: "textarea",
            label: "Problem Solution | 150 to 300 words",
            placeholder: "Problem Solution | 150 to 300 words",
            required: true,
          },
          {
            name: "methodology",
            type: "textarea",
            label: "Methodology | 200 to 400 words",
            placeholder: "Methodology | 200 to 400 words",
            required: true,
          },
        ],
      },
    },
  },
];
