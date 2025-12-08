import { useState } from "react";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";
import { Link } from "react-router";

export default function ToggleButton() {
  const [open, setOpen] = useState("mission");
  const handleClick = (e) => {
   if(open !==e) 
   {
     setOpen(e);
   }
  };

  return (
    <>
      <div className="toggle_button mt-5">
        <Link
          onClick={() => handleClick("mission")}
          aria-controls="example-fade-text"
          aria-expanded={open}
        >
          Mission
        </Link>
        <Link
          onClick={() => handleClick("integrity")}
          aria-controls="example-fade-text"
          aria-expanded={open}
        >
          Integrity
        </Link>
        <Link
          onClick={() => handleClick("expertise")}
          aria-controls="example-fade-text"
          aria-expanded={open}
        >
          Expertise
        </Link>
      </div>
      <Fade in={open === "mission"}>
        <div
          id="example-fade-text"
          className="ps-3"
          style={{ display: open === "mission" ? "block" : "none" }}
        >
          <p>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </p>
        </div>
      </Fade>
      <Fade in={open === "integrity"}>
        <div
          id="example-fade-text"
          className="ps-3"
          style={{ display: open === "integrity" ? "block" : "none" }}
        >
          <p>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </p>
        </div>
      </Fade>
      <Fade in={open === "expertise"}>
        <div
          id="example-fade-text"
          className="ps-3"
          style={{ display: open === "expertise" ? "block" : "none" }}
        >
          <p>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </p>
        </div>
      </Fade>
    </>
  );
}
