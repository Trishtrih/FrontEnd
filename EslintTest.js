const f3 = () => {
  const name = "name";
  return () => {
    console.log(this.name);
    console.log(arguments);
  };
}