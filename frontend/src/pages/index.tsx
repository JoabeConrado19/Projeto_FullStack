import FooterComponent from "@/components/Footer";
import HeaderComponent from "@/components/Header";
import Header from "@/components/homepage/header";
import Hero from "@/components/homepage/hero";
import MainHome from "@/components/homepage/main";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <HeaderComponent />
      <Hero />
      <MainHome />
      <FooterComponent/>
    </>
  )
}
