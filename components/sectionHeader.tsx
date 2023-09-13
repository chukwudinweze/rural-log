interface SectionHeaderProps {
  label: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ label }) => {
  return <h1>{label}</h1>;
};

export default SectionHeader;
