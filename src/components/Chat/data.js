const data = [
  {
    slug: "start",
    messages: [
      "Hey, nice to meet you. Welcome to my personal website.",
      "How can I help you?",
    ],
    answers: [
      { label: "Tell me a little about yourself.", link: "/chat/bio" },
      { label: "Show me your projects!", link: "/portfolio" },
      { label: "How can I contact you?", link: "/chat/contact" },
    ],
  },
  {
    slug: "bio",
    messages: [
      "My name is Magnus Westhofen and I'm from Solingen, Germany and I'm 30 years old.",
      "I've been designing and developing stuff for the web since I'm 14. The first website I've done was for my CS 1.3 clan ;-)",
      "I am working for a small agency shop in Solingen right now and my main focus is building cool frontends with React.",
    ],
    answers: [
      { label: "What technologies are you using?", link: "/chat/tech" },
      { label: "Show me some stuff you've done.", link: "/portfolio" },
    ],
  },
  {
    slug: "tech",
    messages: [
      "I love building with React right now, but I don't shy away from vanilla CSS/HTML and Javascript if needed.",
      "I really like using serverless/jamstacky backends like Firebase, but surely can spin up some basic node Backend stack if needed.",
      "My guilty pleasure is developing with/for WordPress. Especially using it as headless CMS to power React Frontends.",
    ],
    answers: [{ label: "Cool, show me some projects", link: "/portfolio" }],
  },
  {
    slug: "contact",
    messages: [
      "You can contact me on Github and LinkedIn, the links are in the right corner of this page.",
      "Or just simply hit me up at magnus@westhofen.me ...",
    ],
    answers: [
      {
        label: "Okay! Let's start again.",
        link: "/chat/start/completed",
      },
    ],
  },
];

export default data;
