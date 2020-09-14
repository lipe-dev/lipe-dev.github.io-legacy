export default function Heading({ subtitle, children, ...props }) {
  return (
    <h1 className="text-5xl my-8 text-center text-gray-900" {...props}>
      {children}
      <p
        role="doc-subtitle"
        className="italic text-2xl text-center text-gray-700"
      >
        {subtitle}
      </p>
    </h1>
  );
}
