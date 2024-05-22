import CreationCard from "./CreationCard";
export default function Creation() {
  return (
    <div className="creation">
      <div className="creation1">
        <h3> Our creations</h3>
        <button className="desktop_img">See all</button>
      </div>
      <div className="creation2">
        <CreationCard />
      </div>
    </div>
  );
}
