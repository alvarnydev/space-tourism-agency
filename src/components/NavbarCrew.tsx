interface NavbarCrewsProps {
  currentCrew: string;
  setCurrentCrew: (planet: string) => void;
}

const NavbarCrewElements = [
  { id: '0', name: 'Douglas Hurley' },
  { id: '1', name: 'Mark Shuttleworth' },
  { id: '2', name: 'Victor Glover' },
  { id: '3', name: 'Anousheh Ansari' },
];

const NavbarCrew = ({ currentCrew, setCurrentCrew }: NavbarCrewsProps) => {
  console.log('current crew :', currentCrew);

  return (
    <nav>
      <ul className='flex gap-8 py-3'>
        {NavbarCrewElements.map((navElement) => (
          <li key={navElement.id} className=''>
            <button
              onClick={() => setCurrentCrew(navElement.name)}
              className={
                'transition w-4 h-4 rounded-full ' +
                (currentCrew === navElement.name ? 'bg-white' : 'bg-white/20 hover:bg-white/50')
              }
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarCrew;
