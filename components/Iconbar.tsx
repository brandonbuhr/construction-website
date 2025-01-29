import {
  faTablePicnic,
  faWindowFrame,
} from "@fortawesome/duotone-light-svg-icons";

import {
  faHouse,
  faPencil,
  faPeopleRoof,
  faTree,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Iconbar() {
  return (
    <>
      <nav>
        <ul className="flex justify-center space-x-12">
          <div className="flex-col justify-items-center text-center hover:bg-slate-400 p-5 rounded-3xl">
            <FontAwesomeIcon
              icon={faHouse}
              style={{ color: "#007ec2", width: "80px", height: "80px" }}
            />
            <li>New Construction</li>
          </div>
          <div className="flex-col justify-items-center text-center hover:bg-slate-400 p-5 rounded-3xl">
            <FontAwesomeIcon
              icon={faPencil}
              style={{ color: "#007ec2", width: "80px", height: "80px" }}
            />
            <li>Remodeling</li>
          </div>
          <div className="flex-col justify-items-center text-center hover:bg-slate-400 p-5 rounded-3xl">
            <FontAwesomeIcon
              icon={faPeopleRoof}
              style={{ color: "#007ec2", width: "80px", height: "80px" }}
            />
            <li>Roofing</li>
          </div>
          <div className="flex-col justify-items-center text-center hover:bg-slate-400 p-5 rounded-3xl">
            <FontAwesomeIcon
              icon={faTree}
              style={{ color: "#007ec2", width: "80px", height: "80px" }}
            />
            <li>Tree Removal</li>
          </div>
          <div className="flex-col justify-items-center text-center hover:bg-slate-400 p-5 rounded-3xl">
            <FontAwesomeIcon
              icon={faWindowFrame}
              style={{ color: "#007ec2", width: "80px", height: "80px" }}
            />
            <li>Windows & Siding</li>
          </div>
          <div className="flex-col justify-items-center text-center hover:bg-slate-400 p-5 rounded-3xl">
            <FontAwesomeIcon
              icon={faTablePicnic}
              style={{ color: "#007ec2", backgroundColor: "#0" }}
            />
            <li>Woodwork</li>
          </div>
        </ul>
      </nav>
    </>
  );
}
export default Iconbar;
