import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { MagicCard } from "@/components/ui/magic-card";
import { BookOpen, Dumbbell, Lightbulb, Trophy } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { Brain, LineChart, GraduationCap, BarChart3,TrendingUp } from "lucide-react"

import ShimmerButton from "@/components/ui/shimmer-button";

export default function Home() {
  const features = [
    {
      title: "AI-Powered Learning",
      description: "Elevate your skills with our cutting-edge features designed for quantitative finance professionals.",
      icon: Brain,
    },
    {
      title: "Real-Time Market Data",
      description: "Elevate your skills with our cutting-edge features designed for quantitative finance professionals.",
      icon: LineChart,
    },
    {
      title: "Expert-Crafted Curriculum",
      description: "Elevate your skills with our cutting-edge features designed for quantitative finance professionals.",
      icon: GraduationCap,
    },
    {
      title: "Interactive Simulations",
      description: "Elevate your skills with our cutting-edge features designed for quantitative finance professionals.",
      icon: BarChart3,
    },
    {
      title: "Community Challenges",
      description: "Elevate your skills with our cutting-edge features designed for quantitative finance professionals.",
      icon: Trophy,
    },
    {
      title: "Personalized Progress Tracking",
      description: "Elevate your skills with our cutting-edge features designed for quantitative finance professionals.",
      icon: TrendingUp,
    },
  ]
  const approachPoints = [
    { title: "Learn", icon: BookOpen, description: "Acquire cutting-edge knowledge" },
    { title: "Practice", icon: Dumbbell, description: "Apply skills in real-world scenarios" },
    { title: "Innovate", icon: Lightbulb, description: "Develop groundbreaking solutions" },
    { title: "Excel", icon: Trophy, description: "Achieve unparalleled success" },
  ];
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg%20width='322'%20height='321'%20viewBox='0%200%20322%20321'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.5'%3e%3cpath%20d='M281%200V30M281%2030H271V40M281%2030H291V40M271%2040H241H211M271%2040V50H281M281%2050V80V110M281%2050H291V40M291%2040H321M281%20110H271V120M281%20110H291V120M271%20120H241H211M271%20120V130H281M281%20130V160V190M281%20130H291V120M291%20120H321M281%20190H271V200M281%20190H291V200M271%20200H241H211M271%20200V210H281M281%20210V240V270M281%20210H291V200M291%20200H321M281%20270H271V280M281%20270H291V280M271%20280H241H211M271%20280V290H281M281%20320V290M281%20290H291V280M291%20280H321M201%200V30M201%2030H191V40M201%2030H211V40M191%2040H161H131M191%2040V50H201M201%2050V80V110M201%2050H211V40M201%20110H191V120M201%20110H211V120M191%20120H161H131M191%20120V130H201M201%20130V160V190M201%20130H211V120M201%20190H191V200M201%20190H211V200M191%20200H161H131M191%20200V210H201M201%20210V240V270M201%20210H211V200M201%20270H191V280M201%20270H211V280M191%20280H161H131M191%20280V290H201M201%20320V290M201%20290H211V280M121%200V30M121%2030H111V40M121%2030H131V40M111%2040H81H51M111%2040V50H121M121%2050V80V110M121%2050H131V40M121%20110H111V120M121%20110H131V120M111%20120H81H51M111%20120V130H121M121%20130V160V190M121%20130H131V120M121%20190H111V200M121%20190H131V200M111%20200H81H51M111%20200V210H121M121%20210V240V270M121%20210H131V200M121%20270H111V280M121%20270H131V280M111%20280H81H51M111%20280V290H121M121%20320V290M121%20290H131V280M41%200V30M41%2030H31V40M41%2030H51V40M31%2040H1M31%2040V50H41M41%2050V80V110M41%2050H51V40M41%20110H31V120M41%20110H51V120M31%20120H1M31%20120V130H41M41%20130V160V190M41%20130H51V120M41%20190H31V200M41%20190H51V200M31%20200H1M31%20200V210H41M41%20210V240V270M41%20210H51V200M41%20270H31V280M41%20270H51V280M31%20280H1M31%20280V290H41M41%20320V290M41%20290H51V280'%20stroke='url(%23paint0_linear_2823_8896)'%20stroke-opacity='0.4'%20stroke-width='1.15942'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3ccircle%20cx='2'%20cy='2'%20r='2'%20transform='matrix(-1%200%200%201%20283%20198)'%20fill='%2315200F'/%3e%3ccircle%20cx='2'%20cy='2'%20r='2'%20transform='matrix(-1%200%200%201%2043%20198)'%20fill='%2315200F'/%3e%3ccircle%20cx='2'%20cy='2'%20r='2'%20transform='matrix(-1%200%200%201%20203%20198)'%20fill='%23293920'/%3e%3ccircle%20cx='2'%20cy='2'%20r='2'%20transform='matrix(-1%200%200%201%20123%20198)'%20fill='%23293920'/%3e%3ccircle%20cx='2'%20cy='2'%20r='2'%20transform='matrix(-1%200%200%201%20283%20118)'%20fill='%2315200F'/%3e%3ccircle%20cx='2'%20cy='2'%20r='2'%20transform='matrix(-1%200%200%201%2043%20118)'%20fill='%2315200F'/%3e%3ccircle%20cx='2'%20cy='2'%20r='2'%20transform='matrix(-1%200%200%201%20203%20118)'%20fill='%23293920'/%3e%3ccircle%20cx='2'%20cy='2'%20r='2'%20transform='matrix(-1%200%200%201%20123%20118)'%20fill='%23293920'/%3e%3ccircle%20cx='2'%20cy='2'%20r='2'%20transform='matrix(-1%200%200%201%20283%2038)'%20fill='%2315200F'/%3e%3ccircle%20cx='2'%20cy='2'%20r='2'%20transform='matrix(-1%200%200%201%2043%2038)'%20fill='%2315200F'/%3e%3ccircle%20cx='2'%20cy='2'%20r='2'%20transform='matrix(-1%200%200%201%20203%2038)'%20fill='%23293920'/%3e%3ccircle%20cx='2'%20cy='2'%20r='2'%20transform='matrix(-1%200%200%201%20123%2038)'%20fill='%23293920'/%3e%3ccircle%20cx='2'%20cy='2'%20r='2'%20transform='matrix(-1%200%200%201%20283%20278)'%20fill='%2315200F'/%3e%3ccircle%20cx='2'%20cy='2'%20r='2'%20transform='matrix(-1%200%200%201%2043%20278)'%20fill='%2315200F'/%3e%3ccircle%20cx='2'%20cy='2'%20r='2'%20transform='matrix(-1%200%200%201%20203%20278)'%20fill='%23293920'/%3e%3ccircle%20cx='2'%20cy='2'%20r='2'%20transform='matrix(-1%200%200%201%20123%20278)'%20fill='%23293920'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2823_8896'%20x1='231.333'%20y1='66'%20x2='84'%20y2='193.5'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.09'%20stop-color='%23112903'/%3e%3cstop%20offset='0.465'%20stop-color='%235E8B43'/%3e%3cstop%20offset='1'%20stop-color='%23112903'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
          backgroundRepeat: "repeat",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <div className="mb-6 nav-items">
            <span className="bg-[#8DC63F] text-black text-sm font-semibold px-3 py-1 rounded-full">
              Introducing
            </span>
            <span className="ml-2 text-[#8DC63F] font-semibold">QuantDash</span>
          </div>
          <h1
            className="text-5xl font-semibold sm:text-6xl hero-text mb-4"
            style={{
              background:
                "linear-gradient(180deg, #ededed, #ededed .01%, #ededed69)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            It&apos;s time to
            <br />
            <span className="">TRANSCEND</span> the
            <br />
            QuantGame
          </h1>
          <div className="mt-8">
            <ShimmerButton shimmerColor="#8DC63F" className="shadow-2xl nav-items">
        <span className="">
          Elevate Your Learning Journey
        </span>
      </ShimmerButton>
          </div>
        </main>
      </div>

      {/* our approach  */}
      <section className="bg-black relative py-16">
          <div className="container mx-auto px-4">
            <h2
              className="text-4xl hero-text font-semibold mb-12 text-center"
              style={{
                background: "linear-gradient(180deg, #ededed, #ededed .01%, #8DC63F)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Our Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approachPoints.map((point, index) => (
                <MagicCard
                  key={index}
                  className="cursor-pointer bg-zinc-950 flex flex-col items-center justify-center p-6 h-64 transition-all duration-300 ease-in-out hover:scale-105"
                  gradientColor="#262626"
                >
                  <point.icon className="w-12 h-12 mb-4 text-[#8DC63F]" />
                  <h3 className="text-2xl font-semibold nav-items mb-2 text-[#8DC63F]">{point.title}</h3>
                  <p className="text-sm text-center nav-items text-gray-400">{point.description}</p>
                </MagicCard>
              ))}
            </div>
          </div>
        </section>


      {/* question  */}
      <section className="py-16 relative bg-black text-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl hero-text font-semibold mb-8 text-center"
          style={{
            background: "linear-gradient(180deg, #ededed, #ededed .01%, #8DC63F)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Question of the Day
        </h2>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-gray-800 bg-black p-8 md:shadow-xl">
          <div className="z-10 max-w-2xl text-center">
            <div className="mb-4 flex justify-center space-x-2">
              <span className="bg-[#8DC63F] text-black text-xs font-semibold px-2.5 py-0.5 rounded">Maths</span>
              <span className="bg-white text-black text-xs font-semibold px-2.5 py-0.5 rounded">Medium</span>
            </div>
            <h3 className="text-2xl hero-text font-semibold mb-4">114. Creepers Crossing Puzzle</h3>
            <p className="text-gray-300 nav-items mb-6">
              Two creepers, one jasmine and other rose, are both climbing up and round a cylindrical tree trunk. Jasmine twists clockwise and rose anticlockwise, both start at the same point on the ground. Before they reach the first branch of the tree the jasmine had made 5 complete twists and the rose 3 twists. Not counting the bottom and the top, how many times do they cross?
            </p>
            <Button className="bg-gradient-to-r nav-items from-[#8DC63F] to-[#5E8B43] hover:from-[#7AB62F] hover:to-[#4D7A32] text-black  py-2 px-6 rounded-full font-semibold shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8DC63F] focus:ring-opacity-50">
              Solve Challenge
            </Button>
          </div>
          <BorderBeam size={400} duration={12} delay={9} />
        </div>
      </div>
    </section>

    {/* why  */}
    <section className="py-16 relative bg-black text-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl hero-text  mb-12 text-center"
          style={{
            background: "linear-gradient(180deg, #ededed, #ededed .01%, #8DC63F)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Why Choose QuantDash?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-950 rounded-lg p-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
            >
              <feature.icon className="w-12 h-12 mb-4 text-[#8DC63F]" />
              <h3 className="text-xl font-semibold mb-2 text-[#8DC63F]">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
      <Footer />
    </div>
  );
}
