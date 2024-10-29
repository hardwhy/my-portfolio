'use client';
import { Banner } from './components/banner/banner-v2';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { NavBar } from './components/nav-bar/nav-bar-v2';
import { MySkills } from './components/skills/skills';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div>
      <NavBar />
      <Banner />
    </div>
  );
}
