import { useState } from 'react';
import Link from 'next/link';

const Tabs = ({ keys, children }) => {
    const [openTab, setOpenTab] = useState(0);
    return (
        <>
            <div className="container px-8 py-2">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        {keys.map((key, index) => (
                            <li key={index} className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <Link
                                    className={
                                        "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal shadow-lg dark:shadow dark:shadow-white" +
                                        (openTab === index
                                            ? "text-white bg-purple-400 dark:shadow-white dark:shadow"
                                            : "text-purple-400 bg-white dark:bg-black dark:shadow-white dark:shadow")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(index);
                                    }}
                                    data-toggle="tab"
                                    href={"#link" + index}
                                    role="tablist"
                                >
                                    {key}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg dark:shadow-white rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                {children.map((child, index)=>(
                                    <div key={index} className={openTab === index ? "block" : "hidden"} id={"link"+index}>
                                        {child}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tabs