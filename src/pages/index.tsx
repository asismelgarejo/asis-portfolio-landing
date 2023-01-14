import Head from "next/head";
import Image from "next/image";
import { MainLayout } from "@components/templates";
import { Home } from "@components/pages";
import AboutMe from "@components/pages/AboutMe/AboutMe";
import EducationAndCertifications from "@components/pages/EducationAndCertifications/EducationAndCertifications";
import WorkExperience from "@components/pages/WorkExperience/WorkExperience";
import Skills from "@components/pages/Skills/Skills";
import Projects from "@components/pages/Projects/Projects";
import Contact from "@components/pages/Contact/Contact";
import { LINKS } from "@mocks/links";
// import styles from '../styles/Home.module.css'

export default function Index() {
  return (
    <div>
      <MainLayout links={LINKS}>
        <Home />
        <AboutMe />
        <EducationAndCertifications />
        <WorkExperience />
        <Skills />
        <Projects />
        <Contact />
      </MainLayout>
    </div>
  );
}
