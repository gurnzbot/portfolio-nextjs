import { TbCodeDots } from "react-icons/tb";

function WorkIcon() {
    return (
        <div className="absolute top-0 -left-20 timeline:left-auto timeline:right-[60%] timeline:-mr-4 ml-[1px] timeline:ml-auto flex justify-center items-start">
            <div className="flex justify-center items-center p-3 rounded-full bg-slate-500 text-white text-2xl">
                <TbCodeDots />
            </div>
        </div>
    );
}

export default WorkIcon;
