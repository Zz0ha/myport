type Skill = {
  rank: number;
  name: string;
  logo: {
    src: string;
  };
  tier: {
    src: string;
  };
};

const frontskills: Skill[] = [
  {
    rank: 1,
    name: "HTML",
    logo: {
      src: "/img/html_icon.png",
    },
    tier: {
      src: "/img/icon-tier-1.svg",
    },
  },
  {
    rank: 2,
    name: "CSS",
    logo: {
      src: "/img/css_icon.png",
    },
    tier: {
      src: "/img/icon-tier-1.svg",
    },
  },
  {
    rank: 3,
    name: "javaScript",
    logo: {
      src: "/img/js_icon.png",
    },
    tier: {
      src: "/img/icon-tier-1.svg",
    },
  },
  {
    rank: 4,
    name: "React",
    logo: {
      src: "/img/react_icon.png",
    },
    tier: {
      src: "/img/icon-tier-1.svg",
    },
  },
  {
    rank: 5,
    name: "jQuery",
    logo: {
      src: "/img/jQuery_icon.png",
    },
    tier: {
      src: "/img/icon-tier-1.svg",
    },
  },
  {
    rank: 6,
    name: "Sass",
    logo: {
      src: "/img/sass_icon.png",
    },
    tier: {
      src: "/img/icon-tier-2.svg",
    },
  },
  {
    rank: 7,
    name: "Bootstrap",
    logo: {
      src: "/img/bootstrap_icon.png",
    },
    tier: {
      src: "/img/icon-tier-2.svg",
    },
  },
  {
    rank: 8,
    name: "React Query",
    logo: {
      src: "/img/reactquery_icon.png",
    },
    tier: {
      src: "/img/icon-tier-3.svg",
    },
  },
  {
    rank: 9,
    name: "TypeScript",
    logo: {
      src: "/img/ts_icon.png",
    },
    tier: {
      src: "/img/icon-tier-3.svg",
    },
  },
  {
    rank: 10,
    name: "Next.js",
    logo: {
      src: "/img/nextjs_icon.png",
    },
    tier: {
      src: "/img/icon-tier-3.svg",
    },
  },
  {
    rank: 11,
    name: "Python",
    logo: {
      src: "/img/python_icon.png",
    },
    tier: {
      src: "/img/icon-tier-4.svg",
    },
  },
];

const versionControlSkills: Skill[] = [
  {
    rank: 1,
    name: "git",
    logo: {
      src: "/img/git_icon.png",
    },
    tier: {
      src: "/img/icon-tier-3.svg",
    },
  },
  {
    rank: 2,
    name: "github",
    logo: {
      src: "/img/github_icon.png",
    },
    tier: {
      src: "/img/icon-tier-3.svg",
    },
  },
];

const communicationSkills: Skill[] = [
  {
    rank: 1,
    name: "Notion",
    logo: {
      src: "/img/notion_icon.png",
    },
    tier: {
      src: "/img/icon-tier-1.svg",
    },
  },
  {
    rank: 2,
    name: "Figma",
    logo: {
      src: "/img/figma_icon.png",
    },
    tier: {
      src: "/img/icon-tier-1.svg",
    },
  },
  {
    rank: 3,
    name: "Slack",
    logo: {
      src: "/img/slack_icon.png",
    },
    tier: {
      src: "/img/icon-tier-1.svg",
    },
  },
  {
    rank: 4,
    name: "Zeplin",
    logo: {
      src: "/img/zeplin_icon.png",
    },
    tier: {
      src: "/img/icon-tier-2.svg",
    },
  },
  {
    rank: 5,
    name: "Jira",
    logo: {
      src: "/img/jira_icon.png",
    },
    tier: {
      src: "/img/icon-tier-3.svg",
    },
  },
];

export { frontskills, versionControlSkills, communicationSkills };
