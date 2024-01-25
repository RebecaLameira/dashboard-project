import Link from 'next/link';
import { Button } from './button';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { indieFont } from './fonts';

const LinkPortfolio = () => {
  return (
    <nav className="mobile:justify-center mobile:px-8 flex h-32 w-screen items-center justify-between bg-white px-16 shadow-2xl dark:bg-black">
      <p className=" text-wrap w-1/2 text-justify text-xl">
        <strong>Bem-vindo</strong> ao projeto{' '}
        <strong className="text-violet-400">Dashboard</strong>!! Um dos projetos
        do portfolio{' '}
        <a href="https://rebeca.dev.br/" className={`${indieFont.className}`}>
          Rebeca Lameira
        </a>
        . Projeto baseado no{' '}
        <a
          href="https://nextjs.org/learn/"
          className="font-bold italic text-black"
        >
          Next.js Learn
        </a>{' '}
        disponibilizado no site na documentação do next.
      </p>
      <Button className="h-14">
        <Link
          href="https://rebeca.dev.br/"
          className="flex items-center justify-between gap-4"
        >
          <span className="text-xl font-semibold tracking-widest">
            Portfolio
          </span>
          <ArrowUpRightIcon className="h-8 w-8 font-semibold text-white"></ArrowUpRightIcon>
        </Link>
      </Button>
    </nav>
  );
};

export default LinkPortfolio;
