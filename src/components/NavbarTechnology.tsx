interface NavbarTechnologyProps {
  currentTechnology: string;
  setCurrentTechnology: (planet: string) => void;
}

const NavbarTechnologyElements = [
  { id: 1, name: 'Launch vehicle' },
  { id: 2, name: 'Spaceport' },
  { id: 3, name: 'Space capsule' },
];

const NavbarTechnology = ({ currentTechnology, setCurrentTechnology }: NavbarTechnologyProps) => {
  return (
    <nav>
      <ul className='flex flex-col gap-8 py-3'>
        {NavbarTechnologyElements.map((navElement) => (
          <li key={navElement.id}>
            <button
              onClick={() => setCurrentTechnology(navElement.name)}
              className={
                'w-20 h-20 rounded-full ' +
                (currentTechnology === navElement.name
                  ? 'bg-white text-black '
                  : 'bg-transparent border-[1px] border-white/25 hover:border-white')
              }
            >
              {navElement.id}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarTechnology;
