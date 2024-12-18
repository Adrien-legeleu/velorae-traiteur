import Gallery from "./component/Gallery/Gallery";
import Landing from "./component/Landing/Landing";
import { Notice } from "./component/Notice/Notice";
import { Service } from "./component/Services/Service";

export default function Home() {
  return (
    <div>
      <Landing />
      <Service />
      <Notice />
      <Gallery />
    </div>
  );
}
