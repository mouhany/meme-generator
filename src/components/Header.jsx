function Header() {
  return (
    <div className="flex flex-row justify-between items-center p-4 sm:p-6 bg-gradient-to-r from-seance-900 to-seance-700 text-white">
      <div className="flex flex-row gap-2 items-center">
        <img src="./Troll Face.png" alt="Troll Face" className="size-6 sm:size-9"/>
        <div className="text-lg sm:text-2xl font-semibold">Meme Generator</div>
      </div>
      <div className="text-xs sm:text-base">React Course - Project 3</div>
    </div>
  );
}

export default Header;
