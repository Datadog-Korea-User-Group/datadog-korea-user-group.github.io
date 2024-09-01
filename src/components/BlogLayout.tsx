"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import { Prose } from "@/src/components/Prose";
import { DiscussionEmbed } from "disqus-react";

import { formatDate } from "../../lib/formatDate";
import { Container } from "./Container";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

function ArrowLeftIcon(props: any) {
  return (
    <svg viewBox='0 0 16 16' fill='none' aria-hidden='true' {...props}>
      <path
        d='M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function BlogLayout({ children, meta, isRssFeed = false, previousPathname }: any) {
  let router = useRouter();

  return (
    <Container>
      <article>
        <header className='flex flex-col'>
          <Link
            type='button'
            href='/blog'
            aria-label='Go back to articles'
            className='group mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition  '
          >
            <ArrowLeftIcon className='h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 d' />
          </Link>

          <Heading className='py-4'>{meta.title}</Heading>
          <time dateTime={meta.date} className='flex items-center text-base text-zinc-400 '>
            <Paragraph className=' text-zinc-700'>{formatDate(meta.date)}</Paragraph>
          </time>
          <div className='w-full mt-4 aspect-w-16 aspect-h-10 bg-gray-100 rounded-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative'>
            <Image
              src={meta.image}
              alt='thumbnail'
              height='1000'
              width='1000'
              className={`object-cover object-left-top w-full max-h-[1000px]`}
            />
          </div>
        </header>
        <div>
          <div className='flex items-center my-4'>
            {meta?.attachments?.length > 0 && <Paragraph className='font-bold'>첨부파일&nbsp;:&nbsp;</Paragraph>}
            <div className='flex gap-x-4'>
              {meta?.attachments?.map((attachment: { src: string; title: string }) => (
                <Link
                  key={attachment.src}
                  type='button'
                  href={attachment.src}
                  aria-label={attachment.title}
                  target={"_blank"}
                  className='transition hover:underline'
                >
                  <Paragraph className='text-zinc-700'>{attachment.title}</Paragraph>
                </Link>
              ))}
            </div>
          </div>
          <Prose>{children}</Prose>
        </div>
      </article>
      <div className='mt-20'>
        <DiscussionEmbed
          shortname='datadogkrug'
          config={{
            url: `https://datadogkrug.vercel.app/${meta.href}`,
            identifier: meta.href,
            language: "ko",
            title: meta.title,
          }}
        />
      </div>
    </Container>
  );
}
