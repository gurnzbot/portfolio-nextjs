import Button, { ButtonComponentProps } from "@/src/components/buttons/Button";

const styles = "flex md:min-w-[210px] lg:min-w-[250px] md:flex-initial items-center justify-center text-center px-10 py-3 font-semibold text-white rounded-lg bg-amber-500 hover:bg-amber-600 active:scale-110 duration-100 ease-in-out";

function FlatButton(props: ButtonComponentProps) {
    return <Button componentStyles={styles} {...props} />;
}

export default FlatButton;
