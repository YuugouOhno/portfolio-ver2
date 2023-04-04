import Image from "next/legacy/image";
import AccountLists from "@/components/contact/AccountLists"
import ImageAndTitle from "@/components/animation/ImageAndTitle";

const Contact = () => {
    return (
        <div id="contact" className="h-screen w-screen flex flex-col justify-center items-center">
            <h1>Contact</h1>
            <div className="flex">
                <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
                    <div className="grid gap-10 lg:gap-10 md:grid-cols-4 ">
                        {AccountLists.map((account, index) => (
                            <div key={index}>
                                <ImageAndTitle title={account.title} url={account.url} isTransition={true}>
                                    <Image
                                        src={account.src}
                                        alt={account.title}
                                        width="2500"
                                        height="2500"
                                        layout="intrinsic"
                                    />
                                </ImageAndTitle>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;