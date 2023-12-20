import './App.css';
import Resume from './FrontEndDeveloperResume.pdf';

function App() {
  return (
    <div className="body">
      <div className='main'>
        <div className='header'>
        {/* <img src='https://venkatvenky007.github.io/my_portfolio/ppic.jpg' alt="profilepic" className='profilepic'/><br/> */}
        <h1 className='name'>PABBA BHANU PRASAD</h1>
        <p>FrontEnd Developer</p>
        <p>Mobile: 8143210104</p>
        <p>E-Mail: pabbabhanuprasad1@gmail.com</p>
        <p>Ashok Nagar/Hyderabad</p><br/>
        <a href={Resume} target='download'>My Resume</a>
        <a  href='https://github.com/VenkatVeNky007' target='_blank'>My Github Account</a>
        <a  href='https://www.linkedin.com/in/venkat-venky-21a27a282' target='_blank'>My Linkdin Account</a>
        </div><br/><hr/>
        <h3>FrontEnd Projects:</h3>
        <div className='grid'>
            <div className="gridcell">
              <h3>TodoList</h3>
              <p>To-Do List project is an application specially built to keep track of errands or tasks that need to be done. This application will be like a task keeper where the user would be able to enter the tasks that they need to do. Once they are done with their tasks they can also remove and edit them from the list.</p>
              <a href="https://venkatvenky007.github.io/Todo_List_project/" target='_blank'>Click To Open project</a>
              </div>       

             
              <div className="gridcell">
              <h3>Weather App</h3>
              <p>This is a small project, creating a weather widget which can be implemented on a website using the "openweathermap.org" API in order to fetch local weather like data temperature, humidity, wind speed. based on the users input.<br/>
              You can only acceess weather report on a city names only</p>
              <a href="https://venkatvenky007.github.io/WeatherApp/" target='_blank'>Click To Open project</a>
              </div> 


               <div className="gridcell">
              <h3>LandingPage</h3>
              <p>A landing page is a standalone web page that a person "lands" on after clicking through from an email, ad, or other digital location. Every content strategy should include the use of landing pages to convert more traffic and increase conversions.<br/>
              Here I created landing page on Tourism with we can Register and Login to the site for booking a Tour.   </p>
              {/* <a href="https://venkatvenky007.github.io/LandingPage" target='_blank'>Click To Open project</a> */}
              </div>      
        </div>
      </div>
      
    </div>
  );
}

export default App;
