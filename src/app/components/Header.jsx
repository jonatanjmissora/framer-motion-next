import { MotionTrasition } from "./MotionTrasition"
import { fadeInUp } from "../utils/transitions"

const Header = () => {
  return (
    <MotionTrasition variants={fadeInUp()}>
      <nav className="nav">
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </MotionTrasition>
  )
}

export default Header