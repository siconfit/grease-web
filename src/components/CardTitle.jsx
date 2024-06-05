export default function CardTitle({ title, children }) {
  return (
    <div className="flex flex-col items-center text-center text-[#c1a161]">
      <div className="rounded-xl bg-[#373739] p-5 text-3xl">
        <b>{title}</b>
      </div>
      <div className="mt-8 flex h-full w-auto items-center justify-center rounded-xl bg-[#373739] p-8">
        <div className="text-2xl">{children}</div>
      </div>
    </div>
  );
}
