import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import tailwindLogo from './assets/tailwind.svg';
import typescriptLogo from './assets/typescript.svg';
import { PropsWithChildren, HTMLProps } from 'react';

function Card({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLProps<HTMLAnchorElement>>) {
  return (
    <a
      className={`flex h-full w-96 flex-col gap-2 rounded-lg border-2 p-4 shadow-2xl backdrop-blur-lg hover:bg-opacity-10 sm:p-8 ${className}`}
      target="_blank"
      {...props}
    >
      {children}
    </a>
  );
}

function App() {
  return (
    <div className="flex items-center justify-center dark:bg-zinc-900 dark:text-white">
      <div className="container flex h-screen flex-col items-center justify-center gap-4">
        <h1 className="bg-clip-text pb-4 text-9xl font-black">🍃</h1>
        <h1 className="text-3xl font-bold">Leaf</h1>
        <p className="pb-8">
          Edit{' '}
          <code className="rounded-md border-2 border-green-400 bg-green-400 bg-opacity-25 p-1">
            src/App.tsx
          </code>{' '}
          and save to test HMR
        </p>
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
