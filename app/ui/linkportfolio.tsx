import Link from 'next/link';
import { Button } from './button';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { indieFont } from './fonts';

const LinkPortfolio = () => {
  return (
    <nav className="flex h-32 w-screen items-center justify-between bg-white px-16 shadow-2xl dark:bg-black ">
      <p className=" text-wrap w-1/2 text-justify text-sm  md:text-lg">
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
      <Button className="h-10 md:h-14">
        <Link
          href="https://rebeca.dev.br/"
          className="flex items-center justify-between gap-4"
        >
          <span className="text-sm font-semibold tracking-widest md:text-xl">
            Portfolio
          </span>
          <ArrowUpRightIcon className="h-5 w-5 font-semibold text-white md:h-8 md:w-8"></ArrowUpRightIcon>
        </Link>
      </Button>
    </nav>
  );
};

export default LinkPortfolio;
