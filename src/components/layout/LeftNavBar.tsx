import { Link, useParams } from "react-router-dom";
import { FEATURES } from "../../constants/common";

function LeftNavBar() {
  const { feature } = useParams();

  const isActive = (url: string) => {
    return url === `/${feature}` || (!feature && url === "/");
  };

  return (
    <ul className="fixed left-0 top-0 bottom-0 bg-amber-200 w-[260px] py-10 px-7">
      {FEATURES.map((feat) => (
        <li key={feat.url}>
          <Link to={feat.url} className={`${isActive(feat.url) ? "font-bold" : "font-normal"}`}>
            {feat.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default LeftNavBar;
