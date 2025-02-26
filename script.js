const challenges = [
    {
      id: 1,
      title: "JS Drum Kit",
      image: "./assets/image_1.png",
      demo: "https://hmothershed.github.io/JavaScript30/01-Drum-Kit/",
      repo: "https://github.com/hmothershed/JavaScript30/tree/main/01-Drum-Kit"
    },
    {
      id: 2,
      title: "CSS + JS Clock",
      image: "./assets/image_2.png",
      demo: "https://hmothershed.github.io/JavaScript30/02-CSS-and-JS-Clock/",
      repo: "https://github.com/hmothershed/JavaScript30/tree/main/02-CSS-and-JS-Clock"
    },
    {
      id: 3,
      title: "CSS Variables",
      image: "./assets/in_progress.png",
      demo: "",
      repo: ""
    },
    {
      id: 4,
      title: "Array Cardio 1",
      image: "./assets/in_progress.png",
      demo: "",
      repo: ""
    },
    {
      id: 5,
      title: "Flex Panel Gallery",
      image: "./assets/in_progress.png",
      demo: "",
      repo: ""
    },
    {
      id: 6,
      title: "AJAX Type Ahead",
      image: "./assets/in_progress.png",
      demo: "",
      repo: ""
    },
    {
        id: 7,
        title: "Array Cardio 2",
        image: "./assets/in_progress.png",
        demo: "",
        repo: ""
    },
    {
        id: 8,
        title: "HTML5 Canvas",
        image: "./assets/in_progress.png",
        demo: "",
        repo: ""
    },
    {
        id: 9,
        title: "Dev tools domination",
        image: "./assets/in_progress.png",
        demo: "",
        repo: ""
      },
      {
        id: 10,
        title: "multiple checkboxes",
        image: "./assets/in_progress.png",
        demo: "",
        repo: ""
      },
      {
        id: 11,
        title: "html5 video player",
        image: "./assets/in_progress.png",
        demo: "",
        repo: ""
      },
      {
        id: 12,
        title: "key detection",
        image: "./assets/in_progress.png",
        demo: "",
        repo: ""
      },
      {
        id: 13,
        title: "slide in on scroll",
        image: "./assets/in_progress.png",
        demo: "",
        repo: ""
      },
      {
        id: 14,
        title: "reference vs copy",
        image: "./assets/in_progress.png",
        demo: "",
        repo: ""
      },
      {
        id: 15,
        title: "localstorage",
        image: "./assets/in_progress.png",
        demo: "",
        repo: ""
      },
      {
        id: 16,
        title: "mouse move shadow",
        image: "./assets/in_progress.png",
        demo: "",
        repo: ""
      },
      {
        id: 17,
        title: "sort without articles",
        image: "./assets/in_progress.png",
        demo: "",
        repo: ""
      },
      {
        id: 18,
        title: "adding with reduce",
        image: "./assets/in_progress.png",
        demo: "",
        repo: ""
      },
      {
        id: 19,
        title: "unreal webcam fun",
        image: "./assets/in_progress.png",
        demo: "",
        repo: ""
      },
      {
        id: 20,
        title: "speech recognition",
        image: "./assets/in_progress.png",
        demo: "",
        repo: ""
      },
      {
        id: 21,
        title: "geolocation compass",
        image: "./assets/in_progress.png",
        demo: "",
        repo: ""
      },
      {
        id: 22,
        title: "follow along links",
        image: "./assets/in_progress.png",
        demo: "",
        repo: ""
      },
      {
        id: 23,
        title: "speech synthesis",
        image: "./assets/in_progress.png",
        demo: "",
        repo: ""
      },
      {
        id: 24,
        title: "sticky nav",
        image: "./assets/in_progress.png",
        demo: "",
        repo: ""
      },
      {
        id: 25,
        title: "event propagation",
        image: "./assets/in_progress.png",
        demo: "",
        repo: ""
      },
      {
        id: 26,
        title: "follow along dropdown",
        image: "./assets/in_progress.png",
        demo: "",
        repo: ""
      },
      {
        id: 27,
        title: "click and drag",
        image: "./assets/in_progress.png",
        demo: "",
        repo: ""
      },
      {
        id: 28,
        title: "speed controller",
        image: "./assets/in_progress.png",
        demo: "",
        repo: ""
      },
      {
        id: 29,
        title: "countdown timer",
        image: "./assets/in_progress.png",
        demo: "",
        repo: ""
      },
      {
        id: 30,
        title: "whack a mole",
        image: "./assets/in_progress.png",
        demo: "",
        repo: ""
      }
  ];
  
  const challengeList = document.getElementById("challenges");
  
  function generateChallenges() {
    challengeList.innerHTML = ``; //clear previous content
    challenges.forEach((challenge) => {
      challengeList.innerHTML += `
      <div class="challenge">
      <div class="challenge-day"><span class="challenge-text">DAY #<span class="challenge-id">${
        challenge.id
      }</span></span>
      <span class="title-btn">
            <span class="btn1">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M5 21.5H23M2 2H26V26H2V2Z" stroke="black" stroke-width="3"/>
  </svg>
            </span>
            <span class="btn2">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="1" y="1" width="26" height="26" fill="#FDE8EF" stroke="black" stroke-width="4"/>
    <path d="M6 7H21V21H6V7Z" fill="#D9D9D9" stroke="black" stroke-width="3"/>
    <rect x="6" y="7" width="15" height="6" fill="black"/>
  </svg>
            </span>
            <span class="btn3">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M5.44031 19.9336L19.738 7.27726M19.7379 20.2949L5.44017 7.63855M2 2H25V26H2V2Z" stroke="black" stroke-width="3"/>
  </svg>
            </span>
          </span>
      </div>
      <img class="challenge-img" src="${challenge.image}" alt="${
        challenge.title
      }">
      <div class="challenge-title">${challenge.title.toUpperCase()}</div>
                  <div class="challenge-links">
                      <a class="challenge-link demo-link" href="${
                        challenge.demo
                      }" target="_blank"><i class="fa-regular fa-eye"></i>DEMO</a>
                      <a class="challenge-link repo-link" href="${
                        challenge.repo
                      }" target="_blank"><i class="fa-brands fa-github"></i>REPO</a>
                      </div>
        </div>
      `;
    });
  }
  
  generateChallenges();
  
