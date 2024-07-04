import Link from "next/link";
import Image from "next/image";

import GoBackArrow from "../components/server/GoBackArrow";
async function page() {
  return (
    <section className="h-[100dvh] w-screen overflow-hidden bg-gray-900 z-30 absolute">
      <div className="w-full flex justify-start ml-4 mt-4 items-center fixed top-0 slideLeft">
      <Link href="/">
        <GoBackArrow/>
      </Link>
      </div>
      <div className="mt-10 h-full w-full flex flex-col justify-center gap-20  items-start select-none slideLeft">
        <div
          className="text-7xl max-w-100 overflow-hidden text-center flex justify-start items-start flex-col"
          style={{
            fontFamily: "Anton",
          }}
        >
          <div className="text-orange-600 hover:text-slate-200 whitespace-nowrap inline-block rigtToLeftRoll">
            <h1 className="inline-block mr-10">WANNA CREATE SOMETHING!?</h1>
            <h1 className="inline-block mr-10">WANNA CREATE SOMETHING!?</h1>
            <h1 className="inline-block mr-10">WANNA CREATE SOMETHING!?</h1>
            <h1 className="inline-block mr-10">WANNA CREATE SOMETHING!?</h1>
            <h1 className="inline-block mr-10">WANNA CREATE SOMETHING!?</h1>
            <h1 className="inline-block mr-10">WANNA CREATE SOMETHING!?</h1>
          </div>
          <div className="text-orange-600 hover:text-slate-200 whitespace-nowrap inline-block rigtToLeftRoll">
            <h1 className="inline-block mr-10">LET'S COLLABORATE!!</h1>
            <h1 className="inline-block mr-10">LET'S COLLABORATE!!</h1>
            <h1 className="inline-block mr-10">LET'S COLLABORATE!!</h1>
            <h1 className="inline-block mr-10">LET'S COLLABORATE!!</h1>
            <h1 className="inline-block mr-10">LET'S COLLABORATE!!</h1>
            <h1 className="inline-block mr-10">LET'S COLLABORATE!!</h1>
          </div>
          <div className="text-orange-600 hover:text-slate-200 whitespace-nowrap inline-block rigtToLeftRoll">
            <h1 className="inline-block mr-10">LET'S INNOVATE!!</h1>
            <h1 className="inline-block mr-10">LET'S INNOVATE!!</h1>
            <h1 className="inline-block mr-10">LET'S INNOVATE!!</h1>
            <h1 className="inline-block mr-10">LET'S INNOVATE!!</h1>
            <h1 className="inline-block mr-10">LET'S INNOVATE!!</h1>
            <h1 className="inline-block mr-10">LET'S INNOVATE!!</h1>
          </div>
          <div className="text-orange-600 hover:text-slate-200 whitespace-nowrap inline-block rigtToLeftRoll">
            <h1 className="inline-block mr-10">LET'S TALK!!</h1>
            <h1 className="inline-block mr-10">LET'S TALK!!</h1>
            <h1 className="inline-block mr-10">LET'S TALK!!</h1>
            <h1 className="inline-block mr-10">LET'S TALK!!</h1>
            <h1 className="inline-block mr-10">LET'S TALK!!</h1>
            <h1 className="inline-block mr-10">LET'S TALK!!</h1>
          </div>
          <div className="text-orange-600 hover:text-slate-200 whitespace-nowrap inline-block rigtToLeftRoll">
            <h1 className="inline-block mr-10">SAY HELLO!!</h1>
            <h1 className="inline-block mr-10">SAY HELLO!!</h1>
            <h1 className="inline-block mr-10">SAY HELLO!!</h1>
            <h1 className="inline-block mr-10">SAY HELLO!!</h1>
            <h1 className="inline-block mr-10">SAY HELLO!!</h1>
            <h1 className="inline-block mr-10">SAY HELLO!!</h1>
          </div>
        </div>
        <div
          className="flex flex-col gap-4 text-center w-full text-2xl sm:text-5xl"
          style={{
            fontFamily: "Rajdhani-Medium",
          }}
        >
          <h1 className="text-slate-400">manavshah1011.ms@gmail.com</h1>
          <h1 className="text-white">+91 99257 17005</h1>
          <section className="flex items-center gap-4 w-full justify-center">
            <Link href="https://github.com/Manav1011" target="_blank">
              <Image
                width={32}
                height={32}
                className=""
                src="/images/icons/github-mark-white.svg"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/manav-shah-97185a24a"
              target="_blank"
            >
              <Image
                width={40}
                height={40}
                src="/images/icons/icons8-linkedin (1).svg"
              />
            </Link>
            <Link
              href="https://www.instagram.com/manav_shah1011"
              target="_blank"
            >
              <Image
                width={32}
                height={32}
                src="/images/icons/icons8-instagram-50.png"
              />
            </Link>
            <Link href="https://x.com/Manav_1011" target="_blank">
              <Image
                width={32}
                height={32}
                src="/images/icons/icons8-twitter-50.png"
              />
            </Link>
            <Link href="mailto:manavshah1011.ms@gmail.com" target="_blank">
              <Image
                width={32}
                height={32}
                src="/images/icons/icons8-mail-48.png"
              />
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
}

export default page;
