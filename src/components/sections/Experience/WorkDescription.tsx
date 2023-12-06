type Props = {
    children: React.ReactNode;
};

function WorkDescription({ children }: Props) {
    return <div className="timeline:w-1/2 timeline:text-left">{children}</div>;
}

export default WorkDescription;
