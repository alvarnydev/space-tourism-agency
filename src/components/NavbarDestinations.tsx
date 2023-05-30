interface NavbarDestinationsProps {
  currentDestination: string;
  setCurrentDestination: (planet: string) => void;
}

const NavbarDestinationsElements = [
  { id: '0', name: 'Moon' },
  { id: '1', name: 'Mars' },
  { id: '2', name: 'Europa' },
  { id: '3', name: 'Titan' },
];

const NavbarDestinations = ({
  currentDestination,
  setCurrentDestination,
}: NavbarDestinationsProps) => {
  return (
    <nav>
      <ul className='flex gap-8 py-3'>
        {NavbarDestinationsElements.map((navElement) => (
          <li key={navElement.id} className=''>
            <button
              onClick={() => setCurrentDestination(navElement.name)}
              className={
                'transition-[border] nav-text py-3 ' +
                (currentDestination === navElement.name
                  ? 'border-white border-b-[3px] mb-[-3px]'
                  : 'hover:border-b-[3px] hover:mb-[-3px] hover:border-white/40')
              }
            >
              {navElement.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarDestinations;
