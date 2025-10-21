import { techs } from "../../constants/constants";
import ProjectItem from "./project-item";

function Projects() {
  return (
    <div id="projects">
      <p className="text-6xl text-center text-white font-bold mt-36 sm:mt-48 mb-24">
        <span className="text-black dark:text-white">A small selection of</span>{" "}
        <span className="text-[#9857D3] dark:text-[#CBACF9]">
          recent projects
        </span>
      </p>
      <div className="flex flex-wrap md:justify-center 2xl:justify-between gap-y-24">
        <ProjectItem
          techs={[
            techs.reactjs,
            techs.typescript,
            techs.java,
            techs.springboot,
            techs.python,
            techs.fastapi,
          ]}
          image="/images/binansu.jpg"
          title="Bainansu - Cryptocurrency Trading Support Platform (2025)"
          description="Led the frontend development of a trading platform inspired by TradingView and integrated with Binance APIs. Implemented responsive dashboards, candlestick charts, order entry forms, and real-time market updates using React.js and TypeScript. Collaborated on backend microservices for trading logic, data pipelines, and caching, deploying via Docker containers."
          linkRepo="https://github.com/mareZ-noob/bainansu"
        />
        <ProjectItem
          techs={[
            techs.reactjs,
            techs.typescript,
            techs.expressjs,
            techs.mongodb,
          ]}
          image="/images/ai-video.jpg"
          title="AI Literature Video Generation - Website (2025)"
          description="Built a web application that automates the creation of literature-based videos by integrating APIs for data collection, script generation, and multimedia synthesis. Designed an end-to-end workflow connecting text, image, and audio generation modules to produce cohesive video outputs."
          linkRepo="https://github.com/PineGithub19/TKPM_Project"
        />
        <ProjectItem
          techs={[techs.nextjs, techs.reactjs, techs.vercel]}
          image="/images/portfolio.jpg"
          title="My Portfolio (2025)"
          description="A modern, responsive portfolio built with Next.js and React, showcasing my personal information. Integrated with Nodemailer for a fully functional contact form, allowing visitors to reach out directly and Framer Motion to make animations smooth and engaging. The site is deployed on Vercel, ensuring fast performance and seamless deployment."
          linkRepo="https://github.com/PineGithub19/portfolio"
        />
        <ProjectItem
          techs={[
            techs.html,
            techs.css,
            techs.javascript,
            techs.typescript,
            techs.expressjs,
            techs.mysql,
          ]}
          image="/images/newshub.png"
          title="Online Newspaper - NewsHub (2024)"
          description="Developed a full-featured newspaper web application using server-side rendering to support role-based access for users, writers, editors, and administrators. Implemented dynamic content management and article publishing workflows."
          linkRepo="https://github.com/cutehusky/SSR_WebProject"
        />
        <ProjectItem
          techs={[
            techs.html,
            techs.css,
            techs.javascript,
            techs.typescript,
            techs.expressjs,
            techs.mysql,
          ]}
          image="/images/sibooks.png"
          title="Online Bookstore Shop - SIBooks (2024)"
          description="Developed an e-commerce website for selling books, featuring promotional offers and a payment system. Fetched dynamic data via backend-provided APIs."
          linkRepo="https://github.com/PhuocPhat1005/Online_Book_Store_Web"
        />
        <ProjectItem
          techs={[
            techs.html,
            techs.css,
            techs.javascript,
            techs.typescript,
            techs.expressjs,
            techs.mysql,
          ]}
          image="/images/podomoro.png"
          title="Podomoro (2024)"
          description="Developed a productivity website inspired by the Pomodoro technique and Forest app, featuring task management, embedded YouTube music. Integrated a to-do list system for note-taking."
          linkRepo="https://github.com/PineGithub19/Podomoro"
        />
      </div>
    </div>
  );
}

export default Projects;
