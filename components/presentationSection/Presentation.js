import Image from "next/image";
import PresentationLists from "@/components/presentationSection/PresentationLists";
import FlipCardAndTitle from "@/components/elements/FlipCardAndTitle";
import Slide from "@/components/projectSection/Slide";


const Presentation = () => {
    return (
        <section id="preesntation" className="pt-20 w-screen flex flex-col justify-center items-center  text-black bg-white dark:text-white dark:bg-black z-10">
            <h2 className="text-5xl font-bold text-center mb-5">Presentation(おまけ)</h2>
            <p className="text-xl font-bold text-center mb-10">頑張って作った過去の登壇資料<br/ >発表して役目を終えているのがかわいそうなので<br/ >載せておきます。見てね。</p>
            <div className="w-4/5 md:w-4/5">
                <div className="grid gap-10 lg:gap-10 md:grid-cols-2 flex flex-col justify-center items-start mb-20">
                    {PresentationLists.map(presentation => (
                        <div key={presentation.id} className="flex flex-col justify-center w-full shadow-lg dark:shadow dark:shadow-white rounded p-3">
                            <FlipCardAndTitle title={presentation.title}>
                                <div className="w-full">
                                <Image
                                    src={`/presentations/${presentation.id}/1.png`}
                                    className="transition-all rounded-md"
                                    alt="project image"
                                    width={16000}
                                    height={9000}
                                />
                                </div>
                                <Slide path={`/presentations/${presentation.id}/`} slides_num={presentation.slides_num} what_slides="presentation"/>
                            </FlipCardAndTitle>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Presentation;