type InfoCardProps = {
  index: number;
  title: string;
  description: string;
};

export function InfoCard({ index, title, description }: InfoCardProps) {
  return (
    <article className="group h-full cursor-pointer rounded-sm border border-[#d8e2ea] bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#0f6bab] hover:shadow-xl">
      <div className="mb-6 flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#eef6fc] text-sm font-bold text-[#0f6bab] transition group-hover:bg-[#0f6bab] group-hover:text-white">
          {String(index).padStart(2, "0")}
        </span>
        <span className="h-1 w-12 rounded-full bg-[#e5b42b]" />
      </div>
      <h3 className="text-xl font-bold text-[#153f63]">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-[#526170] text-justify">{description}</p>
    </article>
  );
}
