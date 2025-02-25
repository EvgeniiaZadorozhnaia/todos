function Header({ type }: { type: string }): React.JSX.Element {
  return (
    <>
      {type === "all" && <h2>Все задачи</h2>}
      {type === "completed" && <h2>Сделано</h2>}
      {type === "pending" && <h2>Нужно сделать</h2>}
    </>
  );
}

export default Header;
