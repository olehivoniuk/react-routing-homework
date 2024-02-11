import Cell from '../cell/cell';
import './mainMenu_styles.css'

const MainMenu = () => {
  const generateCells = (count) => {
    const cells = [];
    for (let i = 0; i < count; i++) {
      cells.push(<Cell key={i} />);
    }
    return cells;
  };


  const numberOfCells = 35; // We can adjust  this value as needed
  return (
    <div className='main-menu'>
      {generateCells(numberOfCells)}
    </div>
  );
};

export default MainMenu;
