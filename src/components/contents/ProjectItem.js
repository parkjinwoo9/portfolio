import '../../css/contents/ProjectItem.css';

function ProjectItem(props) {
  return (
    <div className="project-item">
          <section className="project-img">
            {props.img}
          </section>
          <section className="project-info">
           <h3>{props.name}</h3><br/>
            <p>{props.info}</p><br />
            <p>{props.info2}</p>
            <p>{props.link}</p>
          </section>
    </div>
  );
}

export default ProjectItem;
