import AnimatedComponent from '@/components/animation/AppearanceContainer';

const CardAndTitle = ({ title, children }) => {
    return (
        <AnimatedComponent>
            <div className="cursor-pointer group flex flex-col justify-center items-center">
                <div
                    className=
                    "relative overflow-hidden transition-all hover:scale-105 flex justify-center items-center">

                    {/* <div style={{ width: '100%', height: '100%', position: 'relative' }}> */}
                    {children}
                    {/* </div> */}
                </div>
                <h2 className="mt-2 text-xl text-center font-semibold tracking-normal text-brand-primary my-4">
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
                </h2>
            </div>
        </AnimatedComponent>
    )
}

export default CardAndTitle;