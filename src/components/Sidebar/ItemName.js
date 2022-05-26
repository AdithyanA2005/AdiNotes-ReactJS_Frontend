import PropTypes from "prop-types";
import { Fade, Slide } from "react-awesome-reveal";

export default function ItemName({ text }) {
  return (
    <>
      <Slide duration={300} direction="left">
        <Fade duration={1100}>
          <span className="h-12 ml-12 min-w-max bg-inherit text-sm text-inherit font-bold overflow-hidden">
            {text}
          </span>
        </Fade>
      </Slide>
    </>
  );
}

ItemName.propTypes = {
  text: PropTypes.string.isRequired,
};
