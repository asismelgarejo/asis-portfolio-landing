import Head from "next/head";
import Image from "next/image";
import { MainLayout } from "@components/templates";
import { Home } from "@components/pages";
// import styles from '../styles/Home.module.css'

export default function Index() {
  return (
    <div>
      <MainLayout>
        <Home />
        <Home />
        <Home />
      </MainLayout>
    </div>
  );
}
