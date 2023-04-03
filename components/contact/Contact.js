import Image from "next/legacy/image";
import AccountLists from "@/components/contact//AccountLists"

const Contact = () => {
    return (
        <div id="contact" className="h-screen w-screen flex flex-col justify-center items-center">
            <h1>Contact</h1>
            <div className="flex">
                {AccountLists.map((account, index) => (
                    <Image
                        key={index}
                        src={account.src}
                        alt={account.alt}
                        width={250}
                        height={250}
                    />
                ))}
            </div>
        </div>
    )
}

export default Contact;