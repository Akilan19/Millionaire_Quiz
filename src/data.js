const data = [
    {
      id: 1,
      question: "Where was the BRICS summit held in 2014?",
      answers: [
        {
          text: "Brazil",
          correct: true,
        },
        {
          text: "India",
          correct: false,
        },
        {
          text: "Russia",
          correct: false,
        },
        {
          text: "China",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which of these spices is the smallest in size?",
      answers: [
        {
          text: "Ajwain",
          correct: true,
        },
        {
          text: "Jeera",
          correct: false,
        },
        {
          text: "Saunf",
          correct: false,
        },
        {
          text: "Methi Seeds",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question:
        "Which battle in 1757 marked the beginning of British occupation in India?",
      answers: [
        {
          text: "Plassey",
          correct: true,
        },
        {
          text: "Assaye",
          correct: false,
        },
        {
          text: "Buxar",
          correct: false,
        },
        {
          text: "Cuddalore",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Which is the second most spoken language of Nepal?",
      answers: [
        {
          text: "Bajjika",
          correct: false,
        },
        {
          text: "Nepali",
          correct: false,
        },
        {
          text: "Maithili",
          correct: true,
        },
        {
          text: "Bhojpuri",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "In which of these two sports is the term ‘free hit’ used?",
      answers: [
        {
          text: "Football, Squash",
          correct: false,
        },
        {
          text: "Badminton, Tennis",
          correct: false,
        },
        {
          text: "Badminton, Cricket",
          correct: true,
        },
        {
          text: "Hockey, Cricket",
          correct: true,
        },
      ],
    },

    {
        id: 6,
        question: "Who invented the Light Bulb?",
        answers: [
          {
            text: "CV Raman",
            correct: false,
          },
          {
            text: "Ramanujam",
            correct: false,
          },
          {
            text: "Thomas Alva Edison",
            correct: true,
          },
          {
            text: "Einstein",
            correct: false,
          },
        ],
      },

      {
        id: 7,
        question: "Which one of the following river flows between Vindhyan and Satpura ranges?",
        answers: [
          {
            text: " Mahanadi",
            correct: false,
          },
          {
            text: "Son",
            correct: false,
          },
          {
            text: "Narmada",
            correct: true,
          },
          {
            text: "Netravati",
            correct: false,
          },
        ],
      },

      {
        id: 8,
        question: "Which one of the following river flows between Vindhyan and Satpura ranges?",
        answers: [
          {
            text: " Mahanadi",
            correct: false,
          },
          {
            text: "Son",
            correct: false,
          },
          {
            text: "Narmada",
            correct: true,
          },
          {
            text: "Netravati",
            correct: false,
          },
        ],
      },

      {
        id: 9,
        question: "Which one of the following river flows between Vindhyan and Satpura ranges?",
        answers: [
          {
            text: " Mahanadi",
            correct: false,
          },
          {
            text: "Son",
            correct: false,
          },
          {
            text: "Narmada",
            correct: true,
          },
          {
            text: "Netravati",
            correct: false,
          },
        ],
      },

      {
        id: 10,
        question: "Which one of the following river flows between Vindhyan and Satpura ranges?",
        answers: [
          {
            text: " Mahanadi",
            correct: false,
          },
          {
            text: "Son",
            correct: false,
          },
          {
            text: "Narmada",
            correct: true,
          },
          {
            text: "Netravati",
            correct: false,
          },
        ],
      },

      {
        id: 11,
        question: "Which one of the following river flows between Vindhyan and Satpura ranges?",
        answers: [
          {
            text: " Mahanadi",
            correct: false,
          },
          {
            text: "Son",
            correct: false,
          },
          {
            text: "Narmada",
            correct: true,
          },
          {
            text: "Netravati",
            correct: false,
          },
        ],
      },

      {
        id: 12,
        question: "Which one of the following river flows between Vindhyan and Satpura ranges?",
        answers: [
          {
            text: " Mahanadi",
            correct: false,
          },
          {
            text: "Son",
            correct: false,
          },
          {
            text: "Narmada",
            correct: true,
          },
          {
            text: "Netravati",
            correct: false,
          },
        ],
      },

      {
        id: 13,
        question: "Which one of the following river flows between Vindhyan and Satpura ranges?",
        answers: [
          {
            text: " Mahanadi",
            correct: false,
          },
          {
            text: "Son",
            correct: false,
          },
          {
            text: "Narmada",
            correct: true,
          },
          {
            text: "Netravati",
            correct: false,
          },
        ],
      },

      {
        id: 14,
        question: "Which one of the following river flows between Vindhyan and Satpura ranges?",
        answers: [
          {
            text: " Mahanadi",
            correct: false,
          },
          {
            text: "Son",
            correct: false,
          },
          {
            text: "Narmada",
            correct: true,
          },
          {
            text: "Netravati",
            correct: false,
          },
        ],
      },

      {
        id: 15,
        question: "Which one of the following river flows between Vindhyan and Satpura ranges?",
        answers: [
          {
            text: " Mahanadi",
            correct: false,
          },
          {
            text: "Son",
            correct: false,
          },
          {
            text: "Narmada",
            correct: true,
          },
          {
            text: "Netravati",
            correct: false,
          },
        ],
      },

      
  ];
  
  const prizeMoney = [
    { id: 1, amount: "₹ 5000" },
    { id: 2, amount: "₹ 15000" },
    { id: 3, amount: "₹ 30000" },
    { id: 4, amount: "₹ 60000" },
    { id: 5, amount: "₹ 100000" },
    { id: 6, amount: "₹ 150000" },
    { id: 7, amount: "₹ 250000" },
    { id: 8, amount: "₹ 400000" },
    { id: 9, amount: "₹ 600000" },
    { id: 10, amount: "₹ 1000000" },
    { id: 11, amount: "₹ 5000000" },
    { id: 12, amount: "₹ 100000000" },
    { id: 13, amount: "₹ 300000000" },
    { id: 14, amount: "₹ 500000000" },
    { id: 15, amount: "₹ 1000000000" },
  ].reverse();
  
  export { prizeMoney, data };