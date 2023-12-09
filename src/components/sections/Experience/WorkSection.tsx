type Props = {
    children: React.ReactNode;
};

function WorkSection({ children }: Props) {
    return <div className="relative flex flex-col timeline:flex-row gap-4 timeline:gap-36 justify-between text-slate-800">{children}</div>;
}

export default WorkSection;
