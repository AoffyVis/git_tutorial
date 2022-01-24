import './MyProject.css';

function MyProject() {
  return (
    <div className="projectContainer" id='projectContainer'>
        <div>
            <h2>My Projects</h2>
        </div>
        <div className="gridProject">
            <div className="project">
                <img 
                    src="https://www.datapine.com/images/industry/manufacturing-analytics-dashboard.png" alt="html"/>
                <p>Dashboard</p>
            </div>
            <div className="project">
                <img src="https://storage.googleapis.com/kdawpmedia/custom-app-dev1.jpg" alt="css"/>
                <p>Web-Application</p>
            </div>
            <div className="project">
                <img src="https://1.bp.blogspot.com/-6dl6RvSlMGM/XR3NL-dSaPI/AAAAAAAAB0U/cgGy6driuNgexBFJWFqL00sXARKPF_rdgCLcBGAs/s1600/Thumnail.jpg" alt="js"/>
                <p>Landing Page</p>
            </div>
            <div className="project">
                <img src="https://freight.cargo.site/t/original/i/20fb2dfc43216da6e63235abb3c24f0b9ff4fa03e7cd7c993143428d959f1c52/PicPoll.png" alt="xd"/>
                <p>Wireframe</p>
            </div>
        </div>
    </div>
  );
}

export default MyProject;
