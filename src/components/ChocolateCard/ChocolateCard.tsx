import type { ChocolateCardProps } from "../../models/interfaces/chocolate.Interface";
export const ChocolateCard = function (props: ChocolateCardProps) {
    return (
        <div className="chocolate-card" style={props.isDark? { backgroundColor: "#333", color: "#fff" }: { backgroundColor: "#f2f2f2", color: "#000" }}>
            <div className="chocolate-header">
                <strong>{props.name}</strong>
                <small>{props.brand}</small>
            </div>
            <div className="chocolate-body">
                <ul className="csokolade-tulajdonsagok">
                    <li>{props.isDark ? "Ez egy étcsokoládé" : "Ez tejcsoki vagy más típus"} </li>
                    <li>Kakaó százalék: {props.cocoaPercentage}</li>
                    <li id="alapanyagokParent">Alapanyagok: {alapanyagListaMegjelenites(props.ingredients)}</li>
                </ul>
            </div>
        </div>
    );
};
const alapanyagListaMegjelenites = function (ingredients: string[]) {
    return (
        <ul className="alapanyagok">
            {ingredients.map((ingredient, index)=>(
                <li className="alapanyag" key={index}>{ingredient},</li>
            ))}
        </ul>
    );
};