import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ChatEmbed() {
  return (
    <div className="min-h-screen flex flex-col justify-between relative">
      <div className="access-group-bg"></div>
      <div className="flex flex-1 items-center justify-center px-4 py-8 relative z-10">
        {/* Left side */}
        <div className="flex flex-col justify-center w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-2xl ml-4 sm:ml-12 md:ml-20 lg:ml-32 xl:ml-40 mr-8 content-container">
          <div className="flex items-center gap-4 mb-6">
            <Image src="/The Access Group_idThSUwLoN_1.svg" alt="Access Group Logo" width={157} height={36} />
            <span className="mx-2 text-2xl text-[#d32d2f]">|</span>
            <Image src="/Support Wizard AI.png" alt="Wizard" width={56} height={56} className="rounded-full shadow-lg border-2 border-[#d32d2f] bg-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2d2d2d] mb-2 flex items-center gap-2 font-serif">
            <span>Access Support Wizard</span>
            <span className="text-3xl">🪄</span>
          </h1>
          <p className="text-base text-[#d32d2f] font-semibold mb-2 italic">An agent that logs support tickets based on user input and provides confirmation of the logged ticket.</p>
          <div className="bg-white/80 backdrop-blur border-l-4 border-[#d32d2f] p-4 mb-8 text-[#444] rounded shadow-sm relative">
            <div className="font-semibold mb-1 flex items-center gap-2">General instructions <span className="text-lg">✨</span></div>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Log support tickets based on user input. Ask for clarifications before deciding what ticket type it should create.</li>
              <li>Provide confirmation of the logged ticket.</li>
              <li>Log tickets in Azure DevOps using specific templates depending on the issue type.</li>
            </ul>
            <span className="absolute right-4 top-2 text-yellow-400 text-xl animate-pulse">★</span>
          </div>
        </div>
        {/* Right side */}
        <div className="flex-1 flex justify-center overflow-hidden">
          <Card className="w-full max-w-xl shadow-2xl overflow-hidden border-[#d32d2f] border-2 rounded-xl bg-white/90 backdrop-blur">
            <CardHeader className="bg-gradient-to-r from-[#d32d2f] to-[#b12426]">
              <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
                Wizard Agent <span className="text-2xl"> <Image src="/Support Wizard AI.png" alt="Wizard" width={42} height={42} className="rounded-full shadow-lg border-2 border-white bg-white" /></span>
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[700px] p-0 rounded-b-xl overflow-hidden bg-white">
              <iframe
                src="https://copilotstudio.microsoft.com/environments/Default-739195a1-f5d6-4d9a-ac42-a1dbb7c7413d/bots/cr7b4_supportWizzardAi/webchat?__version__=2"
                frameBorder="0"
                className="w-full h-full"
                title="Chatbot"
                allow="clipboard-write"
              />
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Footer Hackathon */}
      <footer className="w-full flex justify-center items-center gap-4 px-8 py-4 text-white text-base bg-[#2a0000] border-t-4 border-[#d32d2f] shadow-lg relative z-10">
        <div className="flex items-center justify-center gap-6">
          <Image 
            src="/The Access Group_idThSUwLoN_1.svg" 
            alt="Access Group Logo" 
            width={120} 
            height={28}
            className="brightness-0 invert" 
          />
          <div className="flex flex-col items-center">
            <span className="font-semibold text-lg">Hackathon 2025</span>
            <span className="text-sm text-gray-300">Made with 🐍 by Serpent Team</span>
          </div>
        </div>
      </footer>
    </div>
  );
} 