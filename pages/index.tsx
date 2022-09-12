import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronDoubleDownIcon,
  BriefcaseIcon,
  CodeBracketSquareIcon,
} from '@heroicons/react/24/outline';

import Terminal from '../components/Terminal';
import ProjectLinks from '../components/ProjectLinks';
import TagList from '../components/TagList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tom Giddings - Web Developer and Broadcast Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-neutral-900  text-neutral-100 p-6">
        <div className="container mx-auto py-8 flex flex-col gap-8 items-center">
          <Terminal />

          <ChevronDoubleDownIcon className="w-24 h-24 stroke-neutral-800" />

          {/* Experience */}
          <section className="flex flex-col gap-8 items-center w-full">
            <h2 className="uppercase tracking-wide font-black text-3xl flex flex-col items-center mb-8">
              <BriefcaseIcon className="w-12 h-12 md:w-24 md:h-24" />
              Experience
            </h2>
            <div className="grid grid-cols-5">
              {/* Tier One */}
              <article className="text-right tracking-wide pr-10 border-r-4 border-green-500 h-48 col-span-2">
                <h3 className="font-bold text-xs md:text-base">
                  Senior Software Developer
                </h3>
                <p className="font-thin text-xs md:text-base">Commonplace</p>
              </article>
              <div className="flex justify-between col-span-1">
                <svg
                  className="fill-green-600 -ml-[26px] z-10"
                  width="48"
                  height="48"
                  viewBox="0 0 96 96"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="48" cy="48" r="48" />
                </svg>
                <svg
                  className="fill-blue-600 -mr-[26px] z-10"
                  width="48"
                  height="48"
                  viewBox="0 0 96 96"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="48" cy="48" r="48" />
                </svg>
              </div>
              <article className="tracking-wide pl-10 border-l-4 border-blue-500 col-span-2">
                <h3 className="font-bold text-xs md:text-base">
                  Director &amp; Engineer
                </h3>
                <p className="font-thin text-xs md:text-base">
                  Safe Pair of Hands Technology
                </p>
              </article>

              {/* Tier Two */}
              <article className="text-right tracking-wide pr-10 border-r-4 border-green-500 h-48 col-span-2">
                <h3 className="font-bold text-xs md:text-base">
                  Software Team Lead
                </h3>
                <p className="font-thin text-xs md:text-base">Jisc (5 mos)</p>
              </article>
              <div className="flex justify-between col-span-1">
                <svg
                  className="fill-green-600 -ml-[26px] z-10"
                  width="48"
                  height="48"
                  viewBox="0 0 96 96"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="48" cy="48" r="48" />
                </svg>
              </div>
              <div className="tracking-wide pl-10 border-l-4 border-blue-500 col-span-2"></div>

              {/* Tier Three */}
              <article className="text-right tracking-wide pr-10 border-r-4 border-green-500 h-48 col-span-2">
                <h3 className="font-bold text-xs md:text-base">
                  Software Developer
                </h3>
                <p className="font-thin text-xs md:text-base">Jisc (10 mos)</p>
              </article>
              <div className="flex justify-between col-span-1">
                <svg
                  className="fill-green-600 -ml-[26px] z-10"
                  width="48"
                  height="48"
                  viewBox="0 0 96 96"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="48" cy="48" r="48" />
                </svg>
              </div>
              <div className="pl-10 border-l-4 border-blue-500 col-span-2"></div>

              {/* Tier Four */}
              <article className="text-right tracking-wide pr-10 h-48 col-span-2">
                <h3 className="font-bold text-xs md:text-base">
                  Frontend Developer
                </h3>
                <p className="font-thin text-xs md:text-base">
                  Electric Studio (3 mos)
                </p>
              </article>
              <div className="flex justify-between col-span-1">
                <svg
                  className="fill-green-600 -ml-[26px] z-10"
                  width="48"
                  height="48"
                  viewBox="0 0 96 96"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="48" cy="48" r="48" />
                </svg>
                <svg
                  className="stroke-neutral-400 stroke-[5px]"
                  width="100%"
                  height="100%"
                  viewBox="0 0 96 96"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="-5"
                    y1="15"
                    x2="115"
                    y2="120"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="10"
                  />
                </svg>
              </div>
              <div className="tracking-wide pl-10 border-l-4 border-blue-500 col-span-2"></div>

              {/* Tier Five */}
              <div className="text-right tracking-wide pr-10 h-48 col-span-2"></div>
              <div className="flex justify-end col-span-1">
                <svg
                  className="stroke-neutral-400 stroke-[5px]"
                  width="100%"
                  height="100%"
                  viewBox="0 0 96 96"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="-10"
                    y1="115"
                    x2="115"
                    y2="5"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="10"
                  />
                </svg>
                <svg
                  className="fill-blue-600 -mr-[24px] -mt-[3px] z-10"
                  width="48"
                  height="48"
                  viewBox="0 0 96 96"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="48" cy="48" r="48" />
                </svg>
              </div>
              <article className="tracking-wide pl-10 col-span-2">
                <h3 className="font-bold text-xs md:text-base">
                  Broadcast Systems Engineer
                </h3>
                <p className="font-thin text-xs md:text-base">
                  Bauer Media (2 yrs 10 mos)
                </p>
              </article>

              {/* Tier Six */}
              <article className="text-right tracking-wide pr-10 border-r-4 border-green-500 h-48 col-span-2">
                <h3 className="font-bold text-xs md:text-base">
                  Web Developer
                </h3>
                <p className="font-thin text-xs md:text-base">
                  Global Personals (3 yrs 1 mo)
                </p>
              </article>
              <div className="flex justify-between col-span-1">
                <svg
                  className="fill-green-600 -ml-[26px] z-10"
                  width="48"
                  height="48"
                  viewBox="0 0 96 96"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="48" cy="48" r="48" />
                </svg>
              </div>
              <div className="pl-10 col-span-2"></div>

              {/* Tier Seven */}
              <article className="text-right tracking-wide pr-10 h-24 col-span-2">
                <h3 className="font-bold text-xs md:text-base">
                  Support Technician &amp; Developer
                </h3>
                <p className="font-thin text-xs md:text-base">
                  Bangor University (3 yrs 3 mo)
                </p>
              </article>
              <div className="flex justify-between col-span-1">
                <svg
                  className="fill-green-600 -ml-[26px] z-10"
                  width="48"
                  height="48"
                  viewBox="0 0 96 96"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="48" cy="48" r="48" />
                </svg>
              </div>
              <div className="pl-10 col-span-2"></div>
            </div>
          </section>

          <ChevronDoubleDownIcon className="w-24 h-24 stroke-neutral-800" />

          {/* Projects */}
          <section className="flex flex-col gap-8 items-center w-full">
            <h2 className="uppercase tracking-wide font-black text-3xl flex flex-col items-center mb-8">
              <CodeBracketSquareIcon className="w-12 h-12 md:w-24 md:h-24" />
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article className="bg-slate-50 text-slate-900 rounded-md">
                <Image
                  src={'/gogeek.png'}
                  alt="GoGeek UK"
                  layout="responsive"
                  width={600}
                  height={300}
                  className="rounded-t-md"
                />
                <div className="p-4 space-y-4">
                  <h3 className="text-3xl font-thin tracking-wide">
                    GoGeek UK
                  </h3>
                  <p className="text-sm">
                    A theme developed for the Shopwired ecommerce platform.
                  </p>
                </div>
                <footer className="flex gap-4 p-4 items-center">
                  <ProjectLinks url="https://www.gogeek.uk" name="GoGeek UK" />
                  <TagList
                    prefix="gogeek"
                    tags={['Shopwired', 'Twig', 'Bulma']}
                  />
                </footer>
              </article>

              <article className="bg-slate-50 text-slate-900 rounded-md">
                <Image
                  src={'/spoh.png'}
                  alt="Safe Pair of Hands Technology"
                  layout="responsive"
                  width={600}
                  height={300}
                  className="rounded-t-md"
                />
                <div className="p-4 space-y-4">
                  <h3 className="text-3xl font-thin tracking-wide">
                    Safe Pair of Hands Technology
                  </h3>
                  <p className="text-sm">
                    The company website for Safe Pair of Hands Technology.
                  </p>
                </div>
                <footer className="flex gap-4 p-4 items-center">
                  <ProjectLinks
                    url="https://www.safepairofhands.co.uk"
                    name="Safe Pair of Hands Technology"
                  />
                  <TagList prefix="spoh" tags={['Ghost', 'SCSS', 'Azure']} />
                </footer>
              </article>

              <article className="bg-slate-50 text-slate-900 rounded-md">
                <Image
                  src={'/compare-ev.jpeg'}
                  alt="Compare EV"
                  layout="responsive"
                  width={600}
                  height={300}
                  className="rounded-t-md"
                />
                <div className="p-4 space-y-4">
                  <h3 className="text-3xl font-thin tracking-wide">
                    Compare EV
                  </h3>
                  <p className="text-sm">
                    A simple comparison website for those wishing to purchase an
                    Electric Vehicle (EV).
                  </p>
                </div>
                <footer className="flex gap-4 p-4 items-center">
                  <ProjectLinks
                    url="https://www.compareev.uk"
                    github="https://github.com/tomgiddings/compare-EV"
                    name="Compare EV"
                  />
                  <TagList
                    prefix="compare-ev"
                    tags={['NextJS', 'Tailwind', 'MongoDB']}
                  />
                </footer>
              </article>

              <article className="bg-slate-50 text-slate-900 rounded-md">
                <Image
                  src={'/nextjs-ecommerce.png'}
                  alt="NextJS Storefront"
                  layout="responsive"
                  width={600}
                  height={300}
                  className="rounded-t-md"
                />
                <div className="p-4 space-y-4">
                  <h3 className="text-3xl font-thin tracking-wide">
                    NextJS Storefront
                  </h3>
                  <p className="text-sm">
                    A storefront made using NextJS, Tailwind and Cockroach DB.
                  </p>
                </div>
                <footer className="flex gap-4 p-4 items-center">
                  <ProjectLinks
                    github="https://github.com/tomgiddings/nextjs-ecommerce"
                    name="Compare EV"
                  />
                  <TagList
                    prefix="nextjs-storefront"
                    tags={['NextJS', 'Tailwind', 'CockroachDB']}
                  />
                </footer>
              </article>

              <article className="bg-slate-50 text-slate-900 rounded-md">
                <Image
                  src={'/react-chat.png'}
                  alt="React Chat"
                  layout="responsive"
                  width={600}
                  height={300}
                  className="rounded-t-md"
                />
                <div className="p-4 space-y-4">
                  <h3 className="text-3xl font-thin tracking-wide">
                    React Chat
                  </h3>
                  <p className="text-sm">
                    A chat app using React, TypeScript, Material-UI and Pusher.
                  </p>
                </div>
                <footer className="flex gap-4 p-4 items-center">
                  <ProjectLinks
                    github="https://github.com/tomgiddings/react-chat"
                    name="React Chat"
                  />
                  <TagList
                    prefix="react-chat"
                    tags={['React', 'Pusher', 'Material UI']}
                  />
                </footer>
              </article>

              <article className="bg-slate-50 text-slate-900 rounded-md">
                <Image
                  src={'/airport-board.png'}
                  alt="Airport Board"
                  layout="responsive"
                  width={600}
                  height={300}
                  className="rounded-t-md"
                />
                <div className="p-4 space-y-4">
                  <h3 className="text-3xl font-thin tracking-wide">
                    Airport Board
                  </h3>
                  <p className="text-sm">
                    An animated airport arrivals/departures board built with
                    HTML/SCSS.
                  </p>
                </div>
                <footer className="flex gap-4 p-4 items-center">
                  <ProjectLinks
                    url="https://codepen.io/tomgiddings/pen/yLyExxo"
                    github="https://github.com/tomgiddings/airport-board"
                    name="React Chat"
                  />
                  <TagList prefix="airport-board" tags={['SCSS']} />
                </footer>
              </article>

              <article className="bg-blue-700 text-slate-50 rounded-md col-span-1 md:col-span-2 shadow-xl">
                <div className="p-4 space-y-4">
                  <h3 className="text-3xl font-thin tracking-wide">
                    View the code for this website
                  </h3>
                  <p className="text-sm">
                    This site is built using <Link href="https://nextjs.org/"><a className="underline underline-offset-1 font-medium">NextJS</a></Link> and <Link href="https://tailwindcss.com/"><a className="underline underline-offset-1 font-medium">Tailwind</a></Link>, and deployed using <Link href="https://pages.cloudflare.com/"><a className="underline underline-offset-1 font-medium">Cloudflare Pages</a></Link>.
                  </p>
                </div>
                <footer className="flex gap-4 p-4 items-center">
                  <ProjectLinks
                    github="https://github.com/tomgiddings/tomgiddings-next"
                    name="tomgiddings.co.uk"
                    theme={'dark'}
                  />
                  <TagList prefix="tomgiddings" tags={['NextJS', 'Tailwind', 'Cloudflare']} theme={'dark'} />
                </footer>
              </article>
            </div>
          </section>

          <ChevronDoubleDownIcon className="w-24 h-24 stroke-neutral-800" />

          {/* Social and contact */}
          <section className="flex gap-3 flex-col items-center">
            <h2 className="uppercase tracking-wide font-black text-3xl flex flex-col items-center mb-8">
              Find me online
            </h2>
            <div className="flex gap-8">
              <a href="https://www.instagram.com/tomgiddings/">
                <svg
                  className="fill-white w-12 h-12 md:w-24 md:h-24"
                  viewBox="0 0 256 250"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z"></path>
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.linkedin.com/in/tomgiddings/">
                <svg
                  className="fill-white w-12 h-12 md:w-24 md:h-24"
                  viewBox="0 0 256 250"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/tomgiddings">
                <svg
                  className="fill-white w-12 h-12 md:w-24 md:h-24"
                  viewBox="0 0 256 250"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z"></path>
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
