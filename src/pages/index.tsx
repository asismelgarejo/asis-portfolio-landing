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
import { ActiveSectionContextProvider } from "@contexts/ActiveSectionContext";
import { GetStaticProps } from "next";
import { PageHomeProps } from "@toolbox/interfaces/pages";
import { skillsService } from "@api/repositories";
// import styles from '../styles/Home.module.css'

const Index: React.FC<PageHomeProps> = ({ skills }) => {
  return (
    <ActiveSectionContextProvider>
      <MainLayout links={LINKS}>
        <Home />
        <AboutMe />
        <EducationAndCertifications />
        <WorkExperience />
        <Skills data={skills}/>
        <Projects />
        <Contact />
      </MainLayout>
    </ActiveSectionContextProvider>
  );
};
export const getStaticProps: GetStaticProps<PageHomeProps> = async (
  context
) => {
  const { data: skills } = await skillsService.getSkills();
  console.log(">>skills", skills)
  return {
    props: {
      skills,
    }, // will be passed to the page component as props
  };
};
export default Index;
