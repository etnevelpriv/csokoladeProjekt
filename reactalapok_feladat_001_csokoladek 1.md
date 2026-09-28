# React alkalmazások fejlesztése Frontend óra | 3. alkalom

## Feladat: Csokoládék

### 1. feladat:

Hozz létre egy új Vite-es React alkalmazást `Csokoladek` névvel.  
Az `App.tsx` fájlban hozd létre az alábbi komponenseket:

#### **Fejlec komponens**

- **Tartalma:**  
  `<h1>Csokoládék</h1>`

#### **Lablec komponens**

- **Tartalma:**  
  `<small>Az oldalt készítette: Saját neved</small>`

---

### 2. feladat:

#### **ChocolateCard komponens**

- Készíts egy `ChocolateCard.tsx` komponenst, amely props-on keresztül fogadja az alábbi adatokat **egyenként**:
  - `name: string`
  - `brand: string`
  - `isDark: boolean`
  - `cocoaPercentage: number`
  - `ingredients: string[]`

- A komponens írja ki a csoki nevét, márkáját, kakaótartalmát és a hobbikat (vesszővel elválasztva).

- A `props` típusát egy `ChocolateCardProps` nevű `interface` segítségével add meg!

A csoki neve: Étcsoki 70%
Márkája: Lindt
Étcsoki-e? Igen
Kakaótartalma százalékban? 70
Alkalom fogyasztásra: filmnézés, kávé mellé

### 3. feladat:

#### **Inline formázás**

- A `ChocolateCard` komponensben alkalmazz **inline stílust**:
  - Ha `isDark === true`, akkor a háttér legyen sötét (`#333`), a szöveg világos (`#fff`)
  - Ellenkező esetben a háttér legyen világos (`#f2f2f2`), a szöveg sötét (`#000`)
- A fenti logikához használd a **ternary (?:)** operátort!

---

### 4. feladat:

#### **Feltételes kiíratás**

- A komponens írja ki egy külön sorban:
  - Ha étcsoki: `Ez egy étcsokoládé.`
  - Ha nem: `Ez tejcsoki vagy más típus.`
- Ehhez is használj **ternary** operátort!

---

### 5. feladat:

#### **Komponens meghívása konkrét értékekkel**

- Az `App.tsx` fájlban hívd meg a `ChocolateCard` komponenst, és adj át neki konkrét értékeket props-ként:

| Név                 | Márka  | Étcsoki? | Kakaótartalom (%) | Hozzávalók                           |
|---------------------|--------|----------|--------------------|--------------------------------------|
| Étcsoki 70%         | Lindt  | Igen     | 70                 | kakaómassza, cukor, kakaóvaj         |
| Tejcsoki mogyoróval | Milka  | Nem      | 30                 | cukor, tejpor, kakaóvaj, mogyoró     |
| Fehércsoki epres    | Nestlé | Nem      | 25                 | cukor, tejpor, kakaóvaj, eperdarabok |

### 6. feladat:

- Készíts az oldalhoz egy külső css fájlt 'csokiformazas.css', minimum egy id és egy class alap formázást mutass be!