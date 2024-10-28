export default function Heading({ children }) {
  return (
    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-semibold font-teko">
      {children}
    </h1>
  );
}
