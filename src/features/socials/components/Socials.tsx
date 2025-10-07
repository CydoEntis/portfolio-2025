import { socials } from "../data/socials";
import SocialIcon from "./SocialIcon";

function Socials() {
  return (
    <div className="flex gap-2">
      {socials.map(social => <SocialIcon item={social}/>)}
    </div>
  );
}

export default Socials;
