import Image from "next/image";
import Link from "next/link";
async function LinkSection({page}) {
  return (
    <section
      className="flex flex-col items-center gap-4 justify-center sm:justify-center fixed sm:right-4 -top-4 xs:top-4 right-2 h-full slideLeft"
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
          className="md:w-14 lg:w-10 h-auto"
          src="/images/icons/linkedin-main.svg"
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
          className="md:w-12 lg:w-8 h-auto bg-transparent"
          src="/images/icons/icons8-mail-48.png"
        />
      </Link>
      {page && page == 'project-detail' ? (
        <Link href="/projects">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          className="bi bi-arrow-left text-white w-12 h-12"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
          />
        </svg>
      </Link>
      ):null}
    </section>
  );
}

export default LinkSection;
