'use client';
import { MyBanner } from './components/banner/banner';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import MyNavBar from './components/nav-bar/nav-bar';
import { MySkills } from './components/skills/skills';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div>
      <MyNavBar />
      <MyBanner />
      <MySkills />
      <Contact />
      <Footer />
    </div>
  );
}
