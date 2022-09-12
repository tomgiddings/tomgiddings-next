interface Props {
  prefix: string;
  tags: string[];
  theme?: 'light' | 'dark';
}

const TagList: React.FC<Props> = (props) => {
  const theme = () => { switch(props.theme) {
    case 'dark':
      return 'bg-blue-800 text-blue-50'
    default:
      return 'bg-neutral-300 text-neutral-700'
  }}

  return (
    <ul className="list-none flex gap-2">
      {props.tags.map((tag) => (
        <li
          key={`${props.prefix}-${tag}`}
          className={`${theme()} rounded-xl p-2 text-xs font-medium`}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
