
import pro from "./pro.jpg";
import ProfileComponent from "./profile/ProfileComponent";
import "./App.css"
function App() {
  return (
    <div className="container">
      <ProfileComponent>{pro}</ProfileComponent>
    </div>
  );
}

export default App;