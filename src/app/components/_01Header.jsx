import MotionParent2 from "./MotionParent2"

const _01Header = () => {
  return (
    <MotionParent2 className={"header"} options={{from: "top", amount: "20", delay: "0.5"}}>
      <span>Logo</span>
      <nav className="nav">
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </MotionParent2>
  )
}

export default _01Header