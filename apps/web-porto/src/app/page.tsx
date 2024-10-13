'use client';
import { MyBanner } from './components/banner/banner';
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
    </div>
  );
}
