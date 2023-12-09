type Props = {
    children: React.ReactNode;
};

function CompanyTitle({ children }: Props) {
    return <div className="relative text-lg font-semibold text-slate-600 pb-6 timeline:mb-6 after:contents[''] after:block after:mt-4 timeline:after:mt-0 timeline:after:absolute after:bottom-0 after:left-0 after:w-16 after:border-t-4 after:border-slate-300">{children}</div>;
}

export default CompanyTitle;
