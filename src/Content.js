const Content = ({nameButton, skillButton,addClick,num}) => {
    return (
      <main>
        <div className="myButton">
          <button onClick={() => {
              nameButton('dammie')
          }}>Name </button>
          <button onClick={() => {
              skillButton('Frontend Developer')
          }}>Skills</button>
        </div>
        <div className="love">
          <p id="likeCounter">
            <span>{num}</span> <i className="fas fa-heart" onClick = {() => {
              addClick();
            }}></i>
          </p>
        </div>
      </main>
    );
  };
  
  export default Content;
  