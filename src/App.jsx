import { useState, useRef } from 'react'
import html2canvas from 'html2canvas'
import './App.css'
import SmallProjects from './SmallProjects';
import BigProjects from './BigProjects';
import Instructions from './Instructions';
import Project from './Project';

function App() {
  const [project, setProject] = useState('');
  const [selectedOption, setSelectedOption] = useState('Random');
  const jobDescriptionRef = useRef(null);  
  
function handleOptionChange(event) {
  setSelectedOption(event.target.value);
}

function handleGenerateClick() {
  let projects;
  switch (selectedOption) {
    case 'Big Projects':
      projects = BigProjects;
      break;
    case 'Small Projects':
      projects = SmallProjects;
      break;
    default:
      projects = [...BigProjects, ...SmallProjects];
      break;
  }
  setProject(<Project projects={projects} /> );
}

function handleSaveClick() {
  html2canvas(jobDescriptionRef.current).then(canvas => {
    const link = document.createElement('a');
    link.download = 'project.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}

  return (
    <div className="App">   
      <div className='settings' style={{marginBottom:"10px"}}>
      <h1 className='logo'>DevBrief</h1>
      <Instructions />
        <select value={selectedOption} onChange={handleOptionChange} className='dropdown'>
          <option value='Random'>Random</option>
          <option value='Big Projects'>Big Projects</option>
          <option value='Small Projects'>Small Projects</option>
        </select>
        <button onClick={handleGenerateClick}>Generate</button>
      </div>
     
      {project && (
         <div className='jobDescription' ref={jobDescriptionRef} >
          {project}
         </div>
      )}
     <button style={{marginTop:"10px"}} onClick={handleSaveClick}>Save</button>
    </div>

  );
}
export default App;

