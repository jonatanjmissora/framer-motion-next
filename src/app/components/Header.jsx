import { revealHeader } from "../utils/variants"
import MotionParent from "./MotionParent"

const Header = () => {
  return (
    <MotionParent className={"header"} variants={revealHeader}>
      <span>Logo</span>
      <nav className="nav">
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </MotionParent>
  )
}

export default Header