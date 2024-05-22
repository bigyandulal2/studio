import Img1 from "../images/desktop/image-curiosity.jpg";
import Img2 from "../images/desktop/image-deep-earth.jpg";
import Img3 from "../images/desktop/image-fisheye.jpg";
import Img4 from "../images/desktop/image-grid.jpg";
import Img5 from "../images/desktop/image-night-arcade.jpg";
import Img6 from "../images/desktop/image-soccer-team.jpg";
import Img7 from "../images/desktop/image-pocket-borealis.jpg";
import Img8 from "../images/desktop/image-from-above.jpg";
// image
import Img9 from "../images/mobile/image-curiosity.jpg";
import Img10 from "../images/mobile/image-deep-earth.jpg";
import Img11 from "../images/mobile/image-fisheye.jpg";
import Img12 from "../images/mobile/image-grid.jpg";
import Img13 from "../images/mobile/image-night-arcade.jpg";
import Img14 from "../images/mobile/image-soccer-team.jpg";
import Img15 from "../images/mobile/image-pocket-borealis.jpg";
import Img16 from "../images/mobile/image-from-above.jpg";

import Card from "./Card";

export default function CreationCard() {
  return (
    <>
      <div className="card_items desktop_img">
        <Card name={"deep earth"} img={Img2} />
        <Card name={"night arcrade"} img={Img5} />
        <Card name={"soccer team vr"} img={Img6} />
        <Card name={"the grid"} img={Img4} />
        <Card name={"from up above vr"} img={Img8} />
        <Card name={"pocket borealis"} img={Img7} />
        <Card name={"the curiosity"} img={Img1} />
        <Card name={"make it fisheye"} img={Img3} />
      </div>
      <div className="card_items mobile_img">
        <Card name={"deep earth"} img={Img10} />
        <Card name={"night arcrade"} img={Img13} />
        <Card name={"soccer team vr"} img={Img14} />
        <Card name={"the grid"} img={Img12} />
        <Card name={"from up above vr"} img={Img16} />
        <Card name={"pocket borealis"} img={Img15} />
        <Card name={"the curiosity"} img={Img9} />
        <Card name={"make it fisheye"} img={Img11} />
      </div>
    </>
  );
}
