import "./App.css";
import Resume from "./FrontEndDeveloperResume.pdf";

function App() {
  return (
    <div className="body">
      <div className="main">
        <div className="header">
          <h1 className="name">PABBA BHANU PRASAD</h1>
          <p>FrontEnd Developer</p>
          <p>Mobile: 8143210104</p>
          <p>E-Mail: pabbabhanuprasad1@gmail.com</p>
          <p>Ashok Nagar/Hyderabad</p>
          <br />
          <a href={Resume} target="download">
            My Resume
          </a>
          <a href="https://github.com/pabbabhanuprasad" target="_blank">
            My Github Account
          </a>
          <a
            href="linkedin.com/in/bhanu-prasad-pabba-764b65240"
            target="_blank"
          >
            My Linkdin Account
          </a>
        </div>
        <br />
        <hr />
        <h3>FrontEnd Projects:</h3>
        <div className="grid">
          <div className="gridcell">
            <h3>Calculatot-app</h3>
            <p>
              A calculator app in React is a web application designed to perform
              basic arithmetic operations such as addition, subtraction,
              multiplication, and division. The app typically features a
              user-friendly interface with a set of numeric buttons, an input
              display to show the entered values and the result, and operators
              for performing calculations.
            </p>
            <a
              href="https://calculator-neon-beta-45.vercel.app/"
              target="_blank"
            >
              Click To Open project
            </a>
          </div>

          <div className="gridcell">
            <h3>Tic Tac Toe App</h3>
            <p>
              A Tic Tac Toe app in React is a web application that allows two
              players to take turns marking spaces in a 3x3 grid. The objective
              is to get three of their symbols (usually "X" or "O") in a row,
              either horizontally, vertically, or diagonally, before the
              opponent.
            </p>
            <a href="https://tictactoegame-zeta.vercel.app/" target="_blank">
              Click To Open project
            </a>
          </div>

          <div className="gridcell">
            <h3>E-Cart</h3>
            <p>
              Building an e-commerce (e-cart) application in React without
              calling an external API involves creating a self-contained,
              client-side application where product information and state are
              managed internally.
            </p>
            <a href="https://e-cart-seven-zeta.vercel.app/" target="_blank">
              Click To Open project
            </a>
          </div>
          <div className="gridcell">
            <h3>E-Commerce web-site</h3>
            <p>
              Building an e-commerce website in React that interacts with an
              external API involves fetching and displaying product information,
              managing user interactions, and handling dynamic content updates.
            </p>
            <a href="https://e-commerce-app-tan-seven.vercel.app/" target="_blank">
              Click To Open project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
