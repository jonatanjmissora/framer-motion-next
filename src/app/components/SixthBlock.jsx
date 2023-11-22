import MotionParent2 from "./MotionParent2"
const SixthBlock = () => {

    return (
        <div className="sixth-block">
            <MotionParent2 options={{from: "left", delay: "0"}}>
                <h2>Sixth Block</h2>   
            </MotionParent2> 
        </div>
    )
}

export default SixthBlock;