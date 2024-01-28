interface DashboardHeadingProps {
  title: string;
}
const DashboardHeading = ({ title }: DashboardHeadingProps) => {
  return (
    <div className="w-fulltext-center font-extrabold text-4xl text-green-700">
      {title}
    </div>
  );
};

export default DashboardHeading;
