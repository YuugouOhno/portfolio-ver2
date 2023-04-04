import Link from "next/link";
import TransitionLink from "@/components/TransitionLink"
import AnimatedComponent from '@/components/animation/AppearanceContainer';

const ImageAndTitle = ({ title, url, isTransition=false, children }) => {
    return (
        <AnimatedComponent>
            <div className="cursor-pointer group">
                <div
                    className=
                    "relative overflow-hidden transition-all rounded-md hover:scale-105">
                    <TransitionLink isTransition={isTransition} url={url}>
                        <div style={{ width: '100%', position: 'relative' }}>
                            {children}
                        </div>
                    </TransitionLink>
                </div>
                <h2 className="mt-2 text-xl text-center font-semibold tracking-normal text-brand-primary my-4">
                <TransitionLink isTransition={isTransition} url={url}>
                        <span
                            className="bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900
                                bg-[length:0px_10px]
                                bg-left-bottom
                                bg-no-repeat
                                transition-[background-size]
                                duration-500
                                hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                            {title}
                        </span>
                    </TransitionLink>
                </h2>
            </div>
        </AnimatedComponent>
    )
}

export default ImageAndTitle;