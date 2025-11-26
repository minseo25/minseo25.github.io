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
        },{id: "news-our-vlm-team-at-attentionx-had-a-paper-accepted-to-emnlp-2025-i-ll-be-presenting-it-in-suzhou-china-nov-5-7-link",
          title: 'Our VLM team at AttentionX had a paper accepted to EMNLP 2025! I’ll...',
          description: "",
          section: "News",},{id: "news-our-paper-on-dlm-analysis-is-now-on-arxiv-link-this-is-my-first-paper-at-berkeley-sparkles",
          title: 'Our paper on DLM analysis is now on arXiv. [Link] This is my...',
          description: "",
          section: "News",},{id: "news-team-architects-won-the-grand-prize-nipa-president-s-award-at-the-2025-ai-chip-contest",
          title: 'Team Architects won the Grand Prize (NIPA President’s Award) at the 2025 AI...',
          description: "",
          section: "News",},{id: "news-our-paper-on-accelerating-dlm-inference-via-fine-tuning-is-now-on-arxiv-huge-thanks-to-my-collaborators-chenfeng-coleman-and-harman-link",
          title: 'Our paper on accelerating DLM inference via fine-tuning is now on arXiv. Huge...',
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
            },},{id: "projects-kreta",
          title: 'KRETA',
          description: "Korean Text-Rich VQA Benchmark and fine-tuned VLM",
          section: "Projects",handler: () => {
              window.location.href = "/projects/kreta/";
            },},{id: "projects-llm-on-compute-in-memory-cim",
          title: 'LLM on Compute-In-Memory (CIM)',
          description: "Making LLM Inference Feasible on Compute-in-Memory (CIM) hardware",
          section: "Projects",handler: () => {
              window.location.href = "/projects/llmoncim/";
            },},{id: "projects-nntrainer",
          title: 'NNTrainer',
          description: "Open‑source contribution to NNTrainer (on‑device training framework)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nntrainer/";
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
          window.open("mailto:%6D%73%30%35%32%35%31@%73%6E%75.%61%63.%6B%72", "_blank");
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
