import Image from "next/legacy/image";
import Link from "next/link";
import AnimatedComponent from '@/components/AnimatedComponent';

const AccountCard = ({ index, src, alt }) => {
    return (
        <AnimatedComponent>
            <div className="cursor-pointer group">
                <div
                    className=
                    "relative overflow-hidden transition-all rounded-md hover:scale-105">
                    <Link href="#">
                        <div style={{ width: '100%', position: 'relative' }}>
                            <Image
                                key={index}
                                src={src}
                                alt={alt}
                                width="2500"
                                height="2500"
                                layout="intrinsic"
                            />
                        </div>
                    </Link>
                </div>
                <h2 className="mt-2 text-xl text-center font-semibold tracking-normal text-brand-primary my-4">
                    <Link href="#">
                        <span
                            className="bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900
                                bg-[length:0px_10px]
                                bg-left-bottom
                                bg-no-repeat
                                transition-[background-size]
                                duration-500
                                hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                            {alt}
                        </span>
                    </Link>
                </h2>
            </div>
        </AnimatedComponent>
    )
}

export default AccountCard;