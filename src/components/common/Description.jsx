export default function Description({ children }) {
  return (
    <p className="sm:text-lg md:text-xl font-jost text-accent py-4 text-justify leading-[28px]">
      {children}
    </p>
  );
}
