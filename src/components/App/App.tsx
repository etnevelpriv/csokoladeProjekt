import { ChocolateCard } from "../ChocolateCard/ChocolateCard";
function Fejlec() {
  return (
    <header>
      <h1>Csokoládék</h1>
    </header>
  )
};
function Lablec() {
  return (
    <footer>
      <small>Az oldalt készítette: Rasztovits Levente</small>
    </footer>
  )
};
export const App = function () {
  return (
    <>
      <Fejlec></Fejlec>
      <div className="chocolate-cards">
        <ChocolateCard name='Étcsoki 70%' brand='Lindt' isDark={true} cocoaPercentage={70} ingredients={["kakaómassza", "cukor", "kakaóvaj"]}></ChocolateCard>
        <ChocolateCard name='Tejcsoki mogyoróval' brand='Milka' isDark={false} cocoaPercentage={30} ingredients={["cukor", "tejpor", "kakaóvaj", "mogyoró"]}></ChocolateCard>
        <ChocolateCard name='Fehércsoki epres' brand='Nestlé' isDark={false} cocoaPercentage={25} ingredients={["cukor", "tejpor", "kakaóvaj", "eperdarabok"]}></ChocolateCard>
      </div>
      <Lablec></Lablec>
    </>
  );
};