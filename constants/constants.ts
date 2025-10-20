import { Variants } from "framer-motion";

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export const techs = {
  html: {
    name: "html",
    url: "/images/html.png",
  },
  css: {
    name: "css",
    url: "/images/css.png",
  },
  reactjs: {
    name: "reactjs",
    url: "/images/reactjs.png",
  },
  nextjs: {
    name: "nextjs",
    url: "/images/nextjs.png",
  },
  javascript: {
    name: "javascript",
    url: "/images/js.png",
  },
  typescript: {
    name: "typescript",
    url: "/images/ts.png",
  },
  nestjs: {
    name: "nestjs",
    url: "/images/nest.png",
  },
  expressjs: {
    name: "expressjs",
    url: "/images/express.png",
  },
  python: {
    name: "python",
    url: "/images/py.png",
  },
  fastapi: {
    name: "fastapi",
    url: "/images/fastapi.png",
  },
  java: {
    name: "java",
    url: "/images/java.png",
  },
  springboot: {
    name: "springboot",
    url: "/images/springboot.png",
  },
  mysql: {
    name: "mysql",
    url: "/images/mysql.png",
  },
  postgresql: {
    name: "postgresql",
    url: "/images/postgresql.png",
  },
  mongodb: {
    name: "mongodb",
    url: "/images/mongo.png",
  },
  firebase: {
    name: "firebase",
    url: "/images/firebase.png",
  },
  prisma: {
    name: "prisma",
    url: "/images/prisma.png",
  },
  git: {
    name: "git",
    url: "/images/git.png",
  },
  github: {
    name: "github",
    url: "/images/github.png",
  },
  docker: {
    name: "docker",
    url: "/images/docker.png",
  },
  postman: {
    name: "postman",
    url: "/images/postman.png",
  },
  vscode: {
    name: "vscode",
    url: "/images/vscode.png",
  },
  webstorm: {
    name: "webstorm",
    url: "/images/webstorm.png",
  },
  figma: {
    name: "figma",
    url: "/images/figma.png",
  },
  vercel: {
    name: "vercel",
    url: "/images/vercel.png",
  },
};
