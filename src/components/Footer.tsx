import Image from "next/image";
import Link from "next/link";
export function Footer() {
  return (
    <footer className="top-0 left-0 right-0 z-20 bg-[#6A4E23]">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/vozesdebairro.png"
              alt="Vozes de Bairro Logo"
              width={180}
              height={80}
            />
          </Link>
        </div>

        <div>
          <ul>
            <li>
              <strong>Kilamba Kiaxi</strong>
            </li>
            <li>EDIF. J17 APT. 54</li>
          </ul>
        </div>

        <div className="container mx-auto text-center text-white">
          <p className="mb-4">Siga-nos nas redes sociais</p>
          <div className="flex justify-center space-x-6">
            {/* Facebook */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 hover:text-[#FFB300]"
              >
                <path d="M22.5 0h-21C.67 0 0 .67 0 1.5v21c0 .83.67 1.5 1.5 1.5h11.25v-9h-3v-3h3v-2.25c0-3.24 2.25-5.25 5.25-5.25 1.49 0 2.76.11 3.14.16v3.63h-2c-1.54 0-1.88.73-1.88 1.81v2.42h3.75l-.6 3h-3.15V24h6.63c.83 0 1.5-.67 1.5-1.5v-21c0-.83-.67-1.5-1.5-1.5z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/associacao_fvb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 hover:text-[#FFB300]"
              >
                <path d="M12 2.25c-4.79 0-8.75 3.96-8.75 8.75s3.96 8.75 8.75 8.75 8.75-3.96 8.75-8.75-3.96-8.75-8.75-8.75zm0 14.25c-3.02 0-5.5-2.48-5.5-5.5s2.48-5.5 5.5-5.5 5.5 2.48 5.5 5.5-2.48 5.5-5.5 5.5zm6.25-6.25h-2.5v1.25h2.5V10.25zm-6.25 1.25c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </a>
            {/* Twitter */}
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 hover:text-[#FFB300]"
              >
                <path d="M23.95 4.57c-.89.39-1.84.65-2.84.77 1.02-.61 1.8-1.57 2.17-2.72-.95.56-2 .96-3.12 1.19-.89-.95-2.16-1.54-3.57-1.54-2.7 0-4.88 2.18-4.88 4.88 0 .38.04.76.12 1.12-4.06-.2-7.66-2.15-10.06-5.11-.42.72-.66 1.56-.66 2.45 0 1.69.86 3.18 2.16 4.05-.8-.02-1.56-.24-2.22-.61v.06c0 2.36 1.68 4.33 3.91 4.79-.41.11-.84.17-1.28.17-.31 0-.62-.03-.93-.09.62 1.94 2.43 3.36 4.56 3.4-1.67 1.31-3.77 2.09-6.06 2.09-.39 0-.77-.02-1.15-.07 2.13 1.37 4.66 2.16 7.37 2.16 8.84 0 13.7-7.32 13.7-13.7 0-.21 0-.41-.02-.62.94-.68 1.75-1.53 2.38-2.49z" />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm">© 2025 Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
