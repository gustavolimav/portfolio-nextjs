'use client'

import Articles from "./articles";
import Contact from "./contact";
import Description from "./description";
import ProfilePicture from "./profilePicture";
import Projects from "./projects";
import Skills from "./skills";
import StickyNavbar from "./StickyNavBar";
import { ThemeProvider } from "@material-tailwind/react";

export default function Home() {
  
  return (
    <ThemeProvider>
      <StickyNavbar />
      <div className="container mx-auto px-4 py-12 md:px-8">
        <section className="flex flex-col md:flex-row items-center justify-between mb-12">
          <Description />
          <ProfilePicture />
        </section>
        <div className="container mx-auto px-4 py-12 md:px-8">
          <Projects />
          <Skills />
          <Articles />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}
