export default [
  {
    name: "name",
    type: "text",
    placeholder: "Enter your name",
    label: "Name",
    required: true,
    value: "Omar Khaled",
  },
  {
    name: "age",
    type: "select",
    options: [
      {
        name: "17-19",
        value: 0,
      },
      {
        name: "20-23",
        value: 1,
      },
      {
        name: ">24",
        value: 2,
      },
    ],
    label: "Age",
    required: true,
    value: "0",
  },
  {
    name: "year",
    type: "select",
    options: [
      {
        name: "Freshman",
        value: 0,
      },
      {
        name: "Sophomore",
        value: 1,
      },
      {
        name: "Junior",
        value: 2,
      },
      {
        name: "Senior 1",
        value: 3,
      },
      {
        name: "Senior 2",
        value: 4,
      },
    ],
    label: "Academic Year",
    required: true,
    value: "0",
  },
  {
    name: "transportationTime",
    type: "select",
    options: [
      {
        name: "< 10 mins",
        value: 3,
      },
      {
        name: "10 - 30 mins",
        value: 1,
      },
      {
        name: "35 mins - 1 hr",
        value: 2,
      },
      {
        name: "1-2 hours",
        value: 0,
      },
      {
        name: "> 2 hrs",
        value: 4,
      },
    ],
    label: "How much time do you spend in transportation?",
    required: true,
    value: "0",
  },
  {
    name: "school",
    type: "select",
    options: [
      {
        name: "Engineering",
        value: 3,
      },
      {
        name: "Computer Science",
        value: 2,
      },
      {
        name: "Buiseness Adminstration",
        value: 1,
      },
      {
        name: "Biotechnology",
        value: 0,
      },
    ],
    label: "School",
    required: true,
    value: "0",
  },
  {
    name: "credits",
    type: "select",
    options: [
      {
        name: "< 15",
        value: 1,
      },
      {
        name: "15-18",
        value: 0,
      },
      {
        name: "> 18",
        value: 2,
      },
    ],
    label: "Average number of credits you take every semester",
    required: true,
    value: "0",
  },
  {
    name: "friends",
    type: "select",
    options: [
      {
        name: "0",
        value: 0,
      },
      {
        name: "1 - 2",
        value: 2,
      },
      {
        name: "3-5",
        value: 3,
      },
      {
        name: "6 - 15",
        value: 1,
      },
      {
        name: "> 15",
        value: 4,
      },
    ],
    label: "Number of friends do you have at university",
    required: true,
    value: "0",
  },
  {
    name: "studentActivities",
    type: "select",
    options: [
      {
        name: "0",
        value: 0,
      },
      {
        name: "1",
        value: 1,
      },
      {
        name: "2",
        value: 2,
      },
      {
        name: "> 2",
        value: 3,
      },
    ],
    label: "How many student activities do you participate in",
    required: true,
    value: "0",
  },
  {
    name: "offlineDays",
    type: "range",
    start: 0,
    end: 4,
    label: "How many offline days do you come per week?",
    required: true,
    value: "0",
  },
  {
    name: "academicLifeImportantance",
    type: "range",
    start: 0,
    end: 9,
    label:
      "On the scale of one to ten, how important do you find your academic life?",
    required: true,
    value: "0",
  },
  {
    name: "interactionLevel",
    type: "range",
    start: 0,
    end: 9,
    label: "How much do you interact with professors/teaching assistants",
    required: true,
    value: "0",
  },
];
