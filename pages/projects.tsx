import ProjectsItem from "@/components/projects/projects-item";
import getProjectList from "@/helpers/projectitems-utils";

const ProjectsPage = () => {
  const projectsList = getProjectList();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="my-8 underline">My Recent Projects</h1>
      <div className="grid grid-cols-2 gap-10 max-w-6xl sm:flex sm:flex-col sm:mx-2">
        {projectsList.map((projectItem) => (
          <ProjectsItem
            imageUrl={projectItem.imageUrl}
            projectName={projectItem.projectName}
            projectDesc={projectItem.projectDesc}
            projectDemo={projectItem.projectDemo}
            projectGitHub={projectItem.projectGitHub}
            key={projectItem.key}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
