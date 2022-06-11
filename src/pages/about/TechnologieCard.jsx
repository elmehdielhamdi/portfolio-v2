export default function TechnologieCard({ image, color = "bg-blue-500" }) {
  return (
    <div
      className={`w-16 h-16 flex justify-center items-center rounded-full ${color}/20`}
    >
      <img className="w-3/4" src={image} alt="" />
    </div>
  );
}
