import "../app/globals.css";
export default function ServiceCard({
  urlImage,
  title,
  description,
  styleProp,
}) {
  return (
    <div
      className={styleProp}
      style={{
        backgroundImage: `url('${urlImage}')`,
      }}
    >
      <div className="flex h-full items-center bg-[#373739] bg-opacity-50">
        <div className="max-w-xl px-10">
          <span className="text-2xl font-semibold text-white">{title}</span>
          <p className="mt-2 line-clamp-4 text-gray-300">{description}</p>
          <button class="mt-4 flex items-center text-sm font-medium uppercase text-white hover:underline focus:outline-none">
            <span>Mas información</span>
            <svg
              class="mx-2 h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
