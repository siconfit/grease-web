export default function Ranking({ cantidad, subtitle }) {
  const componentes = Array.from({ length: cantidad }, (_, index) => (
    <svg
      key={`estrella-${index}`}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 text-yellow-400 lg:h-5 lg:w-5"
    >
      <path
        d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
        fill="currentColor"
        strokeWidth="0"
      ></path>
    </svg>
  ));

  return (
    <>
      <div className="flex w-full justify-center">{componentes}</div>
      <p className="mt-3 text-xs font-bold uppercase tracking-wide text-[#373739]">
        {subtitle}
      </p>
    </>
  );
}
