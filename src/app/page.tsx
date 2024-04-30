'use client'

import Description from "./description";
import NavBar from "./navBar";
import ProfilePicture from "./profilePicture";
import { ThemeProvider } from "@material-tailwind/react";

export default function Home() {

  return (
    <ThemeProvider>
      <NavBar />
      <div className="container mx-auto px-4 py-12 md:px-8">
        <section className="flex flex-col md:flex-row items-center justify-between mb-12">
          <Description />
          <ProfilePicture />
        </section>
      </div>
    </ThemeProvider>
  );
}
