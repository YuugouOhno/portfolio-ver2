import Link from "next/link";
import Image from "next/legacy/image";
import AccountLists from "@/components/contactSection/AccountLists"
import CardAndTitle from "@/components/animation/CardAndTitle";
import { useTheme } from 'next-themes';

const Contact = () => {
    const { theme } = useTheme();
    return (
        <div id="contact" className="h-screen w-screen flex flex-col justify-center items-center text-black bg-white dark:text-white dark:bg-black">
            <h1>Contact</h1>
            <div className="flex">
                <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
                    <div className="grid gap-10 lg:gap-10 grid-cols-2 md:grid-cols-4 ">
                        {AccountLists.map((account, index) => (
                            <div key={index}>
                                <Link href={account.url} target="_blank">
                                    <CardAndTitle title={account.title}>
                                        {theme === 'dark' ?
                                            <Image
                                                src={account.src_dark}
                                                alt={account.title}
                                                width="250"
                                                height="250"
                                                layout="intrinsic"
                                            />
                                            :
                                            <Image
                                                src={account.src_light}
                                                alt={account.title}
                                                width="250"
                                                height="250"
                                                layout="intrinsic"
                                            />
                                        }
                                    </CardAndTitle>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;