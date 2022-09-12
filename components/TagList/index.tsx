interface Props {
    prefix: string
    tags: string[]
}

const TagList: React.FC<Props> = (props) => {
    return (
        <ul className="list-none flex gap-2">
            {props.tags.map((tag) => (
                <li key={`${props.prefix}-${tag}`} className="bg-slate-300 text-slate-700 rounded-xl p-2 text-xs font-medium">{tag}</li>
            ))}
        </ul>
    );
}

export default TagList;