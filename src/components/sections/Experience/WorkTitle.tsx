type Props = {
    title: string;
    timePeriod: string;
};

function WorkTitle({ title, timePeriod }: Props) {
    return (
        <div className="flex flex-col timeline:w-[40%] timeline:items-end">
            <div className="text-xl font-semibold timeline:text-right">{title}</div>
            <div className="text-slate-600">{timePeriod}</div>
        </div>
    );
}

export default WorkTitle;
