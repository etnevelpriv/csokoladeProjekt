import type { ChocolateCardProps } from "../../models/interfaces/chocolate.Interface";
export const ChocolateCard = function (props: ChocolateCardProps) {
    return (
        <div className="chocolate-card">
            <div className="chocolate-header">
                <strong>{props.name}</strong>
                <small>{props.brand}</small>
            </div>
            <div className="chocolate-body">
                <ul className="csokolade-tulajdonsagok">
                    <li>Étcsoki: {props.isDark ? "Igen" : "Nem"} </li>
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
                <li className="alapanyag">{ingredient},</li>
            ))}
        </ul>
    );
};