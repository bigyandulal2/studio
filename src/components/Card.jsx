export default function Card({ name, img }) {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h4>{name}</h4>
    </div>
  );
}
