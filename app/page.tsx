import { Button } from "@/components/ui/button";
import Image from "next/image";

const Home = () => {
  return (
    <main className="w-screen h-screen">
      <Image
        width={1200}
        height={500}
        src={"/images/backWallpaper5.webp"}
        alt=""
        className="w-full h-full"
      />
      <div className="absolute w-full h-full left-0 top-0">
        <div className="text-center mt-8 geordingan  tracking-widest">
          <div className="text-8xl">
            Let&apos;s chat on Convo
          </div>
          <div className="text-3xl -mt-1">
            Chit-Chat to Banta Hai !
          </div>
        </div>
        <div className="mt-8 flex gap-8 mx-auto w-full justify-center items-center">
          <Button size={"lg"} variant={"outline"}>
            Text Chat
          </Button>
          <Button size={"lg"} variant={"outline"}>
            Video Chat
          </Button>
          <Button size={"lg"} variant={"outline"}>
            Group Chat
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Home;
