import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center xl:pt-8 xl:pb-24 justify-between">
          <div className="order-2 xl:order-none text-center md:text-left">
            <span className="text-xl">Full Stack Developer</span>
            <h1 className="h1">Hello I'm <br /> <span className="text-accent">Saklain Sahariar</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">I am interested and enthuerstic in web development though i am an Agriculturist. I an proficient in different language like python, javaScript and kotlin. Besides web development i have interest in the Artifical Intelligence.</p>
            <div className="flex flex-col xl:flex-row items-center gap-8 items-center">
              <Button variant="outline" size="lg" className="capitalize flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"></FiDownload>
              </Button>
              <div className="flex items-center text-semibold">
                <Social containerStyles="flex gap-6 " iconstyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"></Social>
              </div>
            </div>

          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo></Photo>
          </div>
        </div>
      </div>
    </section>
  );
}
