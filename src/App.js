import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="app-title">My Odin Projects</h1>
      <div className="app-container app-profile">
        <img src={process.env.PUBLIC_URL + "/profile.jpg"} alt="my profile" />
        <h2>shiny funicularity</h2>
        <p>improving my skills <br />with the odin project's assignments</p>
      </div>
      <h2 className="app-label">Projects</h2>
      <div className="app-container">
        <div className="app-project-item">
          <div className="app-project-item-left">
            <button>99 L</button>
            <p>Odin Recipes</p>
          </div>
          <div className="app-project-item-right">
            <a href={process.env.PUBLIC_URL + '/recipes'} target="_blank" rel="noreferrer" >Live Preview</a>
          </div>
        </div>
        <hr className="app-project-item-hr" />
      </div>
      
    </div>
  );
}

export default App;
