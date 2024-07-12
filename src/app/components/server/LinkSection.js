import Image from "next/image";
import Link from "next/link";
async function LinkSection() {
  return (
    <section
      className="flex flex-col items-center gap-4 justify-center sm:justify-center fixed sm:right-4 top-4 right-2 h-full slideLeft hidden"
      id="LinkSection"
    >
      <Link href="https://github.com/Manav1011" target="_blank">
        <Image
          alt="Image Not Fonund"
          width={32}
          height={32}
          className="md:w-12 lg:w-8 h-auto"
          src="/images/icons/github-mark-white.svg"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/manav-shah-97185a24a"
        target="_blank"
      >
        <Image
          alt="Image Not Fonund"
          width={40}
          height={40}
          className="md:w-12 lg:w-8 h-auto"
          src="/images/icons/icons8-linkedin (1).svg"
        />
      </Link>
      <Link href="https://www.instagram.com/manav_shah1011" target="_blank">
        <Image
          alt="Image Not Fonund"
          width={32}
          height={32}
          className="md:w-12 lg:w-8 h-auto"
          src="/images/icons/icons8-instagram-50.png"
        />
      </Link>
      <Link href="https://x.com/Manav_1011" target="_blank">
        <Image
          alt="Image Not Fonund"
          width={32}
          height={32}
          className="md:w-12 lg:w-8 h-auto"
          src="/images/icons/icons8-twitter-50.png"
        />
      </Link>
      <Link href="mailto:manavshah1011.ms@gmail.com" target="_blank">
        <Image
          alt="Image Not Fonund"
          width={32}
          height={32}
          className="md:w-12 lg:w-8 h-auto"
          src="/images/icons/icons8-mail-48.png"
        />
      </Link>
    </section>
  );
}

export default LinkSection;
