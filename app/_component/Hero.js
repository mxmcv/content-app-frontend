import React from 'react';

function Hero() {
  return (
    <div className="relative" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <div>
        <div className="relative pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
              Create Engaging Reddit Story Videos in Seconds
            </h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              Elevate your content strategy with our AI-driven platform.
              Seamlessly fetch and enhance Reddit posts, then produce
              captivating videos with voiceovers and dynamic backgrounds in just
              a few clicks.
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <a
                href="/dashboard"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  Get started
                </span>
              </a>
              <a
                href="#"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-primary dark:text-white">
                  Watch a demo
                </span>
              </a>
            </div>
            {/* Updated: Three text boxes with max-w-[290px] */}
            <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
              <div className="text-left max-w-[290px]">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  Fully Automated
                </h6>
                <p className="mt-2 text-gray-500">
                  We find engaging Reddit posts and turn them into
                  ready-to-download videos.
                </p>
              </div>
              <div className="text-left max-w-[290px]">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  Endless Customization
                </h6>
                <p className="mt-2 text-gray-500">
                  Select game backgrounds, voice styles, and fonts to make each
                  video unique.
                </p>
              </div>
              <div className="text-left max-w-[290px]">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  AI-Enhanced Scripts
                </h6>
                <p className="mt-2 text-gray-500">
                  Use AI to refine or rewrite posts for more compelling
                  storytelling.
                </p>
              </div>
            </div>
            {/* End of text box updates */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
