// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Selected projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Minseo Kim&#39;s Curriculum Vitae",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-our-vlm-team-at-attentionx-had-a-paper-accepted-to-emnlp-2025",
          title: 'Our VLM team at AttentionX had a paper accepted to EMNLP 2025.',
          description: "",
          section: "News",},{id: "news-our-paper-on-dlm-analysis-is-now-on-arxiv-this-is-my-first-paper-at-berkeley-sparkles",
          title: 'Our paper on DLM analysis is now on arXiv. This is my first...',
          description: "",
          section: "News",},{id: "news-team-architects-won-the-grand-prize-nipa-president-s-award-at-the-2025-ai-chip-contest",
          title: 'Team Architects won the Grand Prize (NIPA President’s Award) at the 2025 AI...',
          description: "",
          section: "News",},{id: "news-i-gave-a-1-hour-online-seminar-at-cerebras-with-coleman-presenting-our-work-on-dlms",
          title: 'I gave a 1-hour online seminar at Cerebras with Coleman, presenting our work...',
          description: "",
          section: "News",},{id: "news-i-m-joining-furiosaai-as-an-ai-algorithm-research-intern",
          title: 'I’m joining FuriosaAI as an AI Algorithm Research Intern!',
          description: "",
          section: "News",},{id: "news-our-paper-on-accelerating-dlm-inference-is-accepted-to-mlsys-2026-togetherai-blog",
          title: 'Our paper on accelerating DLM inference is accepted to MLSys 2026. (TogetherAI blog)...',
          description: "",
          section: "News",},{id: "projects-arc-agi-solver",
          title: 'ARC-AGI Solver',
          description: "Solver for the Abstraction and Reasoning Corpus (ARC) task",
          section: "Projects",handler: () => {
              window.location.href = "/projects/arc-agi/";
            },},{id: "projects-graduart",
          title: 'GraduArt',
          description: "Art College Graduation Exhibition Sales Website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/graduart/";
            },},{id: "projects-save-the-hamster",
          title: 'Save The Hamster',
          description: "Physics-Based 3D Puzzle Game",
          section: "Projects",handler: () => {
              window.location.href = "/projects/savethehamsters/";
            },},{id: "projects-windows-software-vulnerability-exploitation",
          title: 'Windows Software Vulnerability Exploitation',
          description: "Vulnerability research &amp; exploitation on Windows applications",
          section: "Projects",handler: () => {
              window.location.href = "/projects/windows/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/mskim_cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%69%6E%73%65%6F.%6B%69%6D@%62%65%72%6B%65%6C%65%79.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/minseo25", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/minseo-kim-939293323", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=a9FY1K0AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
