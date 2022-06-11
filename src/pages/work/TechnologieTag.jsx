export default function TechnologieTag({ text, color = "bg-blue-100" }) {
  return (
    <span
      className={`${color} text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded`}
    >
      {text}
    </span>
  );
}
