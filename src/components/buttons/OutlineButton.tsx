import Button, { ButtonComponentProps } from "./Button";

const styles = "flex md:min-w-[210px] lg:min-w-[250px] md:flex-initial items-center justify-center text-center px-10 py-3 font-bold text-amber-500 rounded-lg border-2 border-amber-500 hover:border-amber-600 hover:text-amber-600 hover:bg-amber-50 active:scale-110 duration-100 ease-in-out";

function OutlineButton(props: ButtonComponentProps) {
    return <Button componentStyles={styles} {...props} />;
}

export default OutlineButton;
