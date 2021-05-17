import Picture1 from './images/picture1.jpg';

const Header = ({option}) => {
    
  return (
    <header>
      <div className="dummy"></div>
      <img src={Picture1} id="image1" alt="myProfilePhoto" />
      <h2>Hi!</h2>
      <p id="bio">{option}</p>
    </header>
  );
};

export default Header;
