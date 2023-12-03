import { useEffect, useState } from "react";
import { debounce } from "lodash";

type Props = {
    screenSizeThreshold: number;
    debounceTime?: number;
};

const useUnderScreenSize = ({ screenSizeThreshold, debounceTime = 100 }: Props) => {
    const [isUnder, setIsUnder] = useState(false);

    useEffect(() => {
        setIsUnder(window.innerWidth < screenSizeThreshold);

        const handleResize = debounce(() => {
            setIsUnder(window.innerWidth < screenSizeThreshold);
        }, debounceTime);

        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isUnder;
};

export default useUnderScreenSize;
