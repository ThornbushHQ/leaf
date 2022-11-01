import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import tailwindLogo from './assets/tailwind.svg';
import typescriptLogo from './assets/typescript.svg';
import { IconBrandGithub, IconCheck, IconCopy } from '@tabler/icons';
import { PropsWithChildren, HTMLProps } from 'react';
import { useClipboard } from './util/useClipboard';

function Card({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLProps<HTMLAnchorElement>>) {
  return (
    <a
      className={`flex h-full w-96 flex-col gap-2 rounded-lg border-2 p-4 shadow-2xl shadow-zinc-900/10 backdrop-blur-lg hover:bg-opacity-10 sm:p-8 ${className}`}
      rel="noreferrer"
      target="_blank"
      {...props}
    >
      {children}
    </a>
  );
}

function App() {
  const clipboard = useClipboard();

  return (
    <div className="flex items-center justify-center dark:bg-zinc-900 dark:text-white">
      <div className="container flex h-screen flex-col items-center justify-center gap-4">
        <h1 className="bg-clip-text pb-4 text-9xl font-black">🍃</h1>
        <h1 className="text-3xl font-bold">Leaf</h1>
        <div className="flex gap-2 pb-6">
          <a
            className="mr-2 inline-flex items-center rounded-lg bg-zinc-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-600 dark:hover:bg-zinc-700"
            href="https://github.com/ThornbushHQ/leaf"
            rel="noreferrer"
            target="_blank"
            type="button"
          >
            <IconBrandGithub className="mr-2 -ml-1 h-5 w-5" />
            Github
          </a>
          <button
            className="group mr-2 inline-flex items-center rounded-lg bg-zinc-100 px-5 py-2.5 text-center text-sm font-medium text-zinc-900 shadow-md transition-all hover:bg-green-100 dark:bg-zinc-100 dark:hover:bg-green-100"
            onClick={() => clipboard.copy(' npx degit ThornbushHQ/leaf')}
            type="button"
          >
            <span className="pr-2 text-green-600/75 group-hover:text-green-800/75">
              $
            </span>
            <span className="font-mono font-semibold group-hover:text-green-800">
              npx degit ThornbushHQ/leaf
            </span>
            {clipboard.copied ? (
              <IconCheck className="ml-2 -mr-1 h-5 w-5 text-green-600" />
            ) : (
              <IconCopy className="ml-2 -mr-1 h-5 w-5 text-green-900 group-hover:text-green-600" />
            )}
          </button>
        </div>
        <div className="flex w-full items-center justify-center gap-4">
          <Card
            className="border-yellow-400 hover:bg-yellow-600 hover:shadow-yellow-400/25"
            href="https://vitejs.dev/"
          >
            <div className="flex gap-4">
              <h1 className="flex-1 text-xl font-black sm:text-2xl">Vite</h1>
              <img alt="Vite Logo" className="w-8" src={viteLogo} />
            </div>
            <h6>Next Generation Frontend Tooling</h6>
          </Card>
          <Card
            className="border-cyan-400 hover:bg-cyan-600 hover:shadow-cyan-400/25"
            href="https://reactjs.org/"
          >
            <div className="flex gap-4">
              <h1 className="flex-1 text-xl font-black sm:text-2xl">React</h1>
              <img alt="Vite Logo" className="w-8" src={reactLogo} />
            </div>
            <h6>A JavaScript library for building user interfaces</h6>
          </Card>
        </div>
        <div className="flex w-full items-center justify-center gap-4">
          <Card
            className="border-cyan-400 hover:bg-cyan-600 hover:shadow-cyan-400/25"
            href="https://tailwindcss.com/"
          >
            <div className="flex gap-4">
              <h1 className="flex-1 text-xl font-black sm:text-2xl">
                Tailwind
              </h1>
              <img alt="Vite Logo" className="w-8" src={tailwindLogo} />
            </div>
            <h6>
              Rapidly build modern websites without ever leaving your HTML.
            </h6>
          </Card>
          <Card
            className="border-blue-400 hover:bg-blue-600 hover:shadow-blue-400/25"
            href="https://www.typescriptlang.org/"
          >
            <div className="flex gap-4">
              <h1 className="flex-1 text-xl font-black sm:text-2xl">
                TypeScript
              </h1>
              <img alt="Vite Logo" className="w-8" src={typescriptLogo} />
            </div>
            <h6>TypeScript is JavaScript with syntax for types.</h6>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
