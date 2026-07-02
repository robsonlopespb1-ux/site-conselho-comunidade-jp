type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  descriptionClassName?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  descriptionClassName,
}: SectionTitleProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#386c38]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#153f63] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-8 text-[#526170]${
            descriptionClassName ? ` ${descriptionClassName}` : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
