import FlatButton from "@/src/components/buttons/FlatButton";

function Contact() {
    return (
        <div id="contact" className="flex flex-col min-h-screen py-20 px-14 sm:px-32 justify-center snap-start bg-neutral-800 text-white">
            <div className="flex flex-col justify-center mb-10">
                <h2 className="text-3xl text-center text-amber-600 font-bold uppercase">Contact</h2>
                <h2 className="font-inconsolata text-3xl sm:text-xl text-center text-slate-300 tracking-tighter">I&apos;d love to hear from you!</h2>
            </div>

            <form className="flex flex-col gap-12">
                <div className="flex flex-1 flex-col gap-8">
                    <div className="relative z-0">
                        <input type="text" id="name" className="block py-3 px-0 w-full text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-amber-200 disabled:border-neutral-500 disabled:text-slate-500 peer" placeholder="" disabled />
                        <label htmlFor="name" className="absolute text-white peer-placeholder-shown:opacity-60 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:opacity-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-disabled:text-neutral-500">
                            Name
                        </label>
                    </div>
                    <div className="relative z-0">
                        <input type="email" id="email" className="block py-3 px-0 w-full text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-amber-200 peer" placeholder="" />
                        <label htmlFor="email" className="absolute text-white peer-placeholder-shown:opacity-60 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:opacity-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                            Email
                        </label>
                    </div>
                    <div className="relative z-0">
                        <textarea id="message" className="block py-3 px-0 w-full text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-amber-200 min-h-[200px] max-h-[400px] peer" placeholder="" />
                        <label htmlFor="message" className="absolute text-white peer-placeholder-shown:opacity-60 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:opacity-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                            Message
                        </label>
                    </div>
                </div>

                <FlatButton as="button">Submit</FlatButton>
            </form>
        </div>
    );
}

export default Contact;
