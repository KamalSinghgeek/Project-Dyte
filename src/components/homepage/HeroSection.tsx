import React from 'react';
import Link from '@docusaurus/Link';
import {
  VideoChatRegular,
  VideoRegular,
  UsbPlugRegular,
} from '@fluentui/react-icons';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';

const PRODUCTS = [
  {
    title: 'Tutorials',
    link: '/guides/live-video/intro-video-conf',
    icon: VideoRegular,
    lightImage: '/static/landing-page/hero/Tutorial_Home.png',
    darkImage: '/static/landing-page/hero/Tutorial_Home.png',
    text: 'The most intuitive and streamlined tutorials of Fleet Stack to accelerate your learning',
  },
  {
    title: 'Forum',
    link: '/guides/livestream/livestream-overview',
    icon: VideoChatRegular,
    lightImage: '/static/landing-page/hero/Forum_Home.png',
    darkImage: '/static/landing-page/hero/Forum_Home.png',
    text: 'Join our vibrant community forum to discuss, learn, and collaborate on the latest trends and solutions.',
  },
  {
    title: 'REST API',
    link: '/guides/voice-conf/intro-voice-conf',
    icon: UsbPlugRegular,
    lightImage: '/static/landing-page/hero/API_Home.png',
    darkImage: '/static/landing-page/hero/API_Home.png',
    text: 'Explore our robust REST API documentation for effortless integration and development',
  },
];

function HeroProduct({
  link,
  title,
  icon: Icon,
  text,
  lightImage,
  darkImage,
  beta,
}: (typeof PRODUCTS)[0]) {
  return (
    <Link
      to={link}
      style={{
        borderWidth: '1px',
      }}
      className={clsx(
        'group cursor-pointer overflow-clip rounded-3xl from-primary/30 via-transparent to-transparent text-black transition-all hover:bg-gradient-to-tr hover:text-primary hover:no-underline dark:text-white',
        'w-[90vw] border-secondary-700 bg-secondary-900 hover:!border-primary dark:border-secondary-800 sm:w-[440px]'
      )}
    >
      <div className="p-6 !pb-0">
        <h3 className="mb-1.5 flex items-center gap-3 font-jakarta group-hover:text-primary">
          <Icon className="h-7 w-7" />
          <div>
            {title}
            {beta && <span className="font-normal text-text-400"> (Beta)</span>}
          </div>
        </h3>
        <p className="mb-0 text-sm text-zinc-400">{text}</p>
      </div>
      <ThemedImage
        sources={{
          light: lightImage,
          dark: darkImage,
        }}
        alt={title}
        className="mt-1 w-full transition-transform group-hover:scale-110"
      />
    </Link>
  );
}

export default function HeroSection() {
  return (
    <div className="noise-bg pb-14">
      <section className="no-underline-links px-4 pt-16 lg:py-0">
        <div className="flex flex-col items-center justify-between py-14">
          <h2 className="mb-4 font-jakarta text-5xl font-bold">
            <span className="text-primary"> We Make it </span>
            <span className="text-primary-100"> Easiest </span>{' '}
            <span className="text-primary">Just</span>
            <span className="text-primary-100"> Deploy</span>
          </h2>
          <p className="max-w-xl text-center text-text-400">
            We offer the world's easiest ready-to-deploy GPS software that
            overcomes a problem for businesses in need of an in-house fleet
            monitoring platform.
          </p>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-6 px-4">
        {PRODUCTS.map((product) => (
          <HeroProduct {...product} key={product.title} />
        ))}
      </section>
    </div>
  );
}
