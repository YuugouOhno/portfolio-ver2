import Link from "next/link";
import Image from "next/legacy/image";
import { useTheme } from 'next-themes';
import AccountLists from "@/components/contactSection/AccountLists"
import CardAndTitle from "@/components/animation/CardAndTitle";

const Contact = () => {
    const { theme } = useTheme();
    return (
        <section id="contact" className="h-screen w-screen flex flex-col justify-center items-center text-black bg-white dark:text-white dark:bg-black z-10">
            <h2 className="text-5xl font-bold text-center mb-5">Contact</h2>
            <div className="flex">
                <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
                    <div className="grid gap-10 lg:gap-10 grid-cols-2 md:grid-cols-4 ">
                        {AccountLists.map((account, index) => (
                            <div key={index}>
                                <Link href={account.url} target="_blank" as="image">
                                    <CardAndTitle title={account.title}>
                                        {theme === 'dark' ?
                                            <Image
                                                src={account.src_dark}
                                                alt={account.title}
                                                width={100}
                                                height={100}
                                            />
                                            :
                                            <Image
                                                src={account.src_light}
                                                alt={account.title}
                                                width={100}
                                                height={100}
                                            />
                                        }
                                    </CardAndTitle>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;