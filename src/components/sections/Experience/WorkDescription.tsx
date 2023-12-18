type Props = {
    children: React.ReactNode;
};

function WorkDescription({ children }: Props) {
    return <div className="timeline:w-[60%] timeline:text-left">{children}</div>;
}

export default WorkDescription;
