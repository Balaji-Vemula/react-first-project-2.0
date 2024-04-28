

export default function TabButton({children, onSelect, isSelected, ...remainingProps}) {
  return (
    <li>
      <button className={isSelected ? "active": ""} {...remainingProps}>{children}</button>
    </li>
  );
}
