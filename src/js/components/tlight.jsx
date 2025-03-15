import { useEffect,  } from "react";
const Tlight = () => {
    const [color, setColor] = useState("red");

    return (
        <div className="body">
            <div className="pole"></div>
            <div className="traficLight"></div>
            <div className="red" onClick={() => {setColor("red")}}></div>
            <div className="yellow" onClick={setColor("yellow")}></div>
            <div className="green" onClick={setColor("green")}></div>
        </div>
        </div>

    );
};

export default Tlight;