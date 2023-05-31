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
                'transition-[border] border-b-[3px]  text-lightBlue nav-text py-3 ' +
                (currentDestination === navElement.name
                  ? 'text-white border-white mb-[-3px]'
                  : 'border-white/0 hover:mb-[-3px] hover:border-white/40')
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
