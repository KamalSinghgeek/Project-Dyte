import Link from '@docusaurus/Link';
import React, { useState } from 'react';
import clsx from 'clsx';
import {
  ArrowRightFilled,
  ChevronLeftRegular,
  ChevronRightRegular,
} from '@fluentui/react-icons';

interface Resource {
  url: string;
  type: string;
  title: string;
  description: string;
  image: string;
  duration: string;
}

const ALL_RESOURCES: Resource[] = [
  {
    url: '/guides/v2-migration-guide',
    type: 'blog',
    title: 'Just Install on your own server',
    description:
      'Easily install our software on your own server to gain full control, enhanced customization, and secure data management.',
    image:
      'https://dyte.io/blog/content/images/size/w1000/2023/02/Dyte-Blog---v2-APIs.jpg',
    duration: '3 min',
  },
  {
    url: '/guides/v2-migration-guide',
    type: 'blog',
    title: 'Just Install on your own server',
    description:
      'Easily install our software on your own server to gain full control, enhanced customization, and secure data management.',
    image:
      'https://dyte.io/blog/content/images/size/w1000/2023/02/Dyte-Blog---v2-APIs.jpg',
    duration: '3 min',
  },
  {
    url: 'https://www.youtube.com/watch?v=eVUqkNNHh1o',
    type: 'video',
    title: 'Fleet Stack Live Tracking',
    description:
      'Experience real-time tracking with Fleet Stack for accurate, up-to-the-minute updates on vehicle locations and performance data.',
    image: 'https://img.youtube.com/vi/eVUqkNNHh1o/hqdefault.jpg',
    duration: '5 min',
  },
  {
    url: 'https://www.youtube.com/watch?v=ZkrZc8Neh6A',
    type: 'video',
    title: 'Fleet Stack White Labeling Tutorial',
    description:
      'Learn how to customize and brand your own tracking solution with the Fleet Stack White Labeling Tutorial.',
    image: 'https://img.youtube.com/vi/ZkrZc8Neh6A/hqdefault.jpg',
    duration: '5 min',
  },
  {
    url: 'https://www.youtube.com/watch?v=UHuzWDxrvLk',
    type: 'video',
    title: 'Fleet Stack Mobile application',
    description: 'Access fleet management on the go with the Fleet Stack Mobile Application for real-time tracking and efficient vehicle management.',
    image: 'https://img.youtube.com/vi/UHuzWDxrvLk/hqdefault.jpg',
    duration: '7 min',
  },
];

function Resource({
  type,
  url,
  image,
  title,
  description,
  duration,
}: Resource) {
  return (
    <Link
      className="fade-in group flex flex-col justify-between"
      key={title}
      href={url}
    >
      <div>
        <div className="mb-3 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="aspect-video h-full w-full object-cover transition-transform group-hover:scale-110"
          />
        </div>
        <h3 className="font-semibold text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary-100 lg:text-xl">
          {title}
        </h3>
        <p className="leading-snug text-text-400">{description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-text-400">
          {`${duration} ${type === 'Video' ? 'watch' : 'read'}`}
        </div>
      </div>
    </Link>
  );
}

export default function ResourcesSection() {
  const [page, setPage] = useState(1);
  const [activeType, setActiveType] = useState<'all' | 'blog' | 'video'>('all');

  const resources =
    activeType === 'all'
      ? ALL_RESOURCES
      : ALL_RESOURCES.filter((r) => r.type === activeType);

  const currentResources = resources.slice((page - 1) * 3, page * 3);

  const pages = Math.ceil(resources.length / 3);

  const nextPage = () => {
    if (page < pages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <section className="no-underline-links my-20 px-6 ">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            <span className="dyte-badge">RESOURCES</span>
            <h2 className="mb-6 text-4xl">Want to know more about Fleet Stack?</h2>
          </div>
          <Link
            to="https://dyte.io/blog"
            className="font-jakarta text-sm font-semibold text-primary"
          >
            All Blogs <ArrowRightFilled className="ml-1" />
          </Link>
        </div>

        <div className="mb-6 inline-flex gap-1 rounded-lg bg-secondary-700 p-2 font-jakarta text-sm font-semibold dark:bg-secondary-700">
          <button
            className={clsx(
              'rounded-lg px-4 py-2 transition-colors',
              activeType === 'all' &&
                'bg-zinc-700 text-white dark:bg-zinc-200 dark:text-black'
            )}
            onClick={() => setActiveType('all')}
          >
            All
          </button>
          <button
            className={clsx(
              'rounded-lg px-4 py-2 transition-colors',
              activeType === 'blog' &&
                'bg-zinc-700 text-white dark:bg-zinc-200 dark:text-black'
            )}
            onClick={() => setActiveType('blog')}
          >
            Blogs
          </button>
          <button
            className={clsx(
              'rounded-lg px-4 py-2 transition-colors',
              activeType === 'video' &&
                'bg-zinc-700 text-white dark:bg-zinc-200 dark:text-black'
            )}
            onClick={() => setActiveType('video')}
          >
            Videos
          </button>
        </div>

        <div className="relative flex flex-col">
          <div className="no-underline-links grid grid-cols-3 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {currentResources.map((resource, idx) => {
              return <Resource {...resource} key={idx} />;
            })}
          </div>

          <div className="my-10 ml-auto flex items-center justify-center md:my-0">
            <button
              onClick={prevPage}
              className="top-1/2 -left-14 rounded-lg bg-transparent p-1 hover:bg-secondary-800 md:absolute md:-translate-y-1/2"
            >
              <ChevronLeftRegular className="h-6 w-6" />
            </button>

            <button
              onClick={nextPage}
              className="top-1/2 -right-14 rounded-lg bg-transparent p-1 hover:bg-secondary-800 md:absolute md:-translate-y-1/2"
            >
              <ChevronRightRegular className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
