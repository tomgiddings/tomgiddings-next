interface Props {
  prefix: string;
  tags: string[];
  theme?: 'light' | 'blue' | 'green' | 'dark';
  mini?: boolean
}

const TagList: React.FC<Props> = (props) => {
  const theme = () => { switch(props.theme) {
    case 'blue':
      return 'bg-blue-800 text-blue-50'
    case 'green':
      return 'bg-green-700 text-green-50'
    case 'dark':
      return 'bg-neutral-800 text-neutral-50'
    default:
      return 'bg-neutral-300 text-neutral-700'
  }}

  const styles = () => {
    if (props.mini) {
      return 'rounded-lg p-1.5 text-xs font-medium'
    }
    return 'rounded-xl p-2 text-xs font-medium'
  }

  return (
    <ul className={`list-none flex ${props.mini ? 'gap-1' : 'gap-2'}`}>
      {props.tags.map((tag) => (
        <li
          key={`${props.prefix}-${tag}`}
          className={`${theme()} ${styles()}`}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
