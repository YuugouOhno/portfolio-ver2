import AnimatedComponent from '@/components/animation/AppearanceContainer';
import HistoryContents from '@/components/aboutSection/HistoryContents';
const History = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <AnimatedComponent>
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                    {HistoryContents.map((content, index) => (
                        <li className="mb-10 ml-6" key={index}>
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                {content.title}
                                { index==0 && (<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Latest</span>)}
                            </h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{content.time}</time>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{content.body}</p>
                        </li>
                    ))}
                </ol>


            </AnimatedComponent>
        </div>
    )
}

export default History;