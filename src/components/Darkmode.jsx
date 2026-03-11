function Darkmode() {
  const toggleDark = () => {
    html.classList.toggle("dark");
  };

  return (
    <label
      htmlFor="darkToggle"
      className="flex justify-between items-center py-4 w-full md:w-50 text-light3 font-bold dark:text-dark4  transition-colors duration-500 ease-in-out"
      onChange={toggleDark}
    >
      <span>Dark Mode</span>
      <input
        type="checkbox"
        id="darkToggle"
        name="darkToggle"
        className="sr-only peer"
      />

      <div className="group relative w-12 h-6 rounded-full inset-shadow bg-linear-to-r from-darkmodebg2 to-darkmodebg3">
        <div className="bg-darkmodebg1 opacity-100 inset-shadow group-peer-checked:opacity-0 transition-opacity duration-500 ease-in-out rounded-full w-full h-full"></div>
        <div className="absolute top-1 right-1 h-4 w-4 rounded-full bg-white shadow group-peer-checked:-translate-x-6 transition-all duration-500 ease-in-out dark:bg-dark1"></div>
      </div>
    </label>
  );
}

export default Darkmode;
