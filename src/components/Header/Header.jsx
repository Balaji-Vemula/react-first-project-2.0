import reactCoreConcepts from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescription = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
  const starter = reactDescription[getRandomInt(2)];
  return (
    <header>
      <img src={reactCoreConcepts} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {starter} React concepts you will need for almost any app you are going
        to build!
      </p>
    </header>
  );
}
