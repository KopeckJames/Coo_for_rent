'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { VideosContent } from '@/types';
import {
  fadeIn,
  smoothTransition,
  getAccessibleVariants,
  getAccessibleTransition,
} from '@/utils/animations';

interface VideoSectionProps {
  content: VideosContent;
}

export default function VideoSection({ content }: VideoSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const videos = [...content.videos].sort((a, b) => a.order - b.order);
  const [activeId, setActiveId] = useState(videos[0]?.id);
  const active = videos.find((v) => v.id === activeId) ?? videos[0];

  if (!active) return null;

  return (
    <section
      id="videos"
      ref={ref}
      aria-labelledby="videos-heading"
      className="bg-primary-black text-primary-white px-3 sm:px-6 lg:px-8 py-6 tablet:py-12 desktop:py-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-6 tablet:mb-10"
          variants={getAccessibleVariants(fadeIn)}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          transition={getAccessibleTransition(smoothTransition)}
        >
          <h2
            id="videos-heading"
            className="text-lg mobile:text-xl tablet:text-4xl font-bold mb-3 leading-tight uppercase tracking-wide"
          >
            {content.heading}
          </h2>
          {content.subheading && (
            <p className="text-sm mobile:text-base tablet:text-lg text-neutral-gray200">
              {content.subheading}
            </p>
          )}
        </motion.div>

        <div className="grid gap-4 tablet:gap-6 desktop:grid-cols-3">
          <div className="desktop:col-span-2">
            <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-neutral-gray800 shadow-lg">
              <iframe
                key={active.id}
                src={`https://drive.google.com/file/d/${active.driveFileId}/preview`}
                title={`Sonny Surendran: ${active.title}`}
                className="absolute inset-0 h-full w-full border-0"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-base tablet:text-lg font-semibold">{active.title}</p>
          </div>

          <nav aria-label="Video list">
            <ol className="grid grid-cols-1 mobile:grid-cols-2 desktop:grid-cols-1 gap-2 desktop:max-h-[28rem] desktop:overflow-y-auto desktop:pr-1">
              {videos.map((video, index) => {
                const isActive = video.id === active.id;
                return (
                  <li key={video.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(video.id)}
                      aria-current={isActive ? 'true' : undefined}
                      className={`w-full text-left rounded-md px-3 py-2 text-sm tablet:text-base transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-white ${
                        isActive
                          ? 'bg-primary-white text-primary-black font-semibold'
                          : 'bg-neutral-gray800 text-primary-white hover:bg-primary-white/20'
                      }`}
                    >
                      <span className="mr-2 tabular-nums opacity-60">{String(index + 1).padStart(2, '0')}</span>
                      {video.title}
                    </button>
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
