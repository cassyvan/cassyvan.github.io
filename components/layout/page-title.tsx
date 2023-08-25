type headerProps = {
  title: string;
};

const PageTitle = ({ title }: headerProps) => {
  return (
    <div className="space-y-2 pt-6 pb-5 md:space-y-5">
      <h1>{title}</h1>
    </div>
  );
};

export default PageTitle;
