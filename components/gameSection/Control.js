import { useEffect, useContext, useState } from 'react';
import { BoidsContext } from '@/contexts/BoidsContext';

const Control = () => {
    const { showControl, setShowControl, isEndOfPage, params, setParams, boids, setBoids } = useContext(BoidsContext);
    const [addRedNum, setAddRedNum] = useState(1)
    useEffect(() => {
        setShowControl(false)
    }, [isEndOfPage]);

    const addFish = (num) => {
        const array = Array.from({ length: num }, (_, index) => boids.length + index + 1);
        setBoids([...boids, ...array])
    }
    const redFish = (num) => {
        const array = (boids.length <= num) ? [1] : Array.from({ length: boids.length - num }, (_, index) => index + 1);
        setBoids([...array])
    }



    return (
        <div className={`${showControl ? "" : "hidden"} fixed bottom-0 right-0 w-auto h-auto z-50 bg-gray-300 dark:bg-gray-700 bg-opacity-70 dark:bg-opacity-70 text-black dark:text-white`}>
            <div className="fixed t-3 r-3">X</div>
            <div className="flex items-center m-1">
                <label for="select_object_type" class="mr-2">オブジェクトの種類</label>
                <select
                    id="select_object_type"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-auto p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => setParams({ ...params, objectType: e.target.value })}
                >
                    <option value="fish">魚</option>
                    <option value="box">箱</option>
                    <option value="sphere">球</option>
                </select>
            </div>
            <div className="flex items-center m-1">

                {params.objectType == "fish" && (<label for="num_add_red_fish">魚を</label>)}
                {params.objectType == "box" && (<label for="num_add_red_fish">箱を</label>)}
                {params.objectType == "sphere" && (<label for="num_add_red_fish">球を</label>)}
                <input
                    id="num_add_red_fish"
                    class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-16 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="number"
                    onChange={(e) => setAddRedNum(e.target.value)}
                    value={addRedNum} />
                <p className="mr-2">匹</p>
                <button
                    className="mr-3 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-3 py-1 text-center"
                    onClick={() => addFish(addRedNum)}
                >追加</button>
                <button
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1 text-center"
                    onClick={() => redFish(addRedNum)}
                >削除</button>
            </div>
            <div className="flex m-1 items-center">
                <label>鯨の大きさ</label>
                <input
                    id="num_add_red_fish"
                    class="mx-2 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-16 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="number"
                    onChange={(e) => setParams({ ...params, whaleScale: e.target.value })}
                    value={params.whaleScale}
                />
                0
                <input
                    className="w-20"
                    type="range"
                    min="0"
                    max="10"
                    step="0.1"
                    onChange={(e) => setParams({ ...params, whaleScale: e.target.value })}
                    value={params.whaleScale}
                />
                10
            </div>
            {params.objectType == "fish" && (
                <div className="flex m-1 items-center">
                    <label>魚の大きさ</label>
                    <input
                        id="num_add_red_fish"
                        class="mx-2 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-16 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="number"
                        onChange={(e) => setParams({ ...params, fishScale: e.target.value })}
                        value={params.fishScale}
                    />
                    0
                    <input
                        className="w-20"
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        onChange={(e) => setParams({ ...params, fishScale: e.target.value })}
                        value={params.fishScale}
                    />
                    10

                </div>
            )}
            {params.objectType == "box" && (
                <>
                    <div className="flex m-1 items-center">
                        <label>箱の大きさ</label>
                        <input
                            id="num_add_red_fish"
                            class="mx-2 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-16 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number"
                            onChange={(e) => setParams({ ...params, boxScale: e.target.value })}
                            value={params.boxScale}
                        />
                        0
                        <input
                            className="w-20"
                            type="range"
                            min="0"
                            max="10"
                            step="0.1"
                            onChange={(e) => setParams({ ...params, boxScale: e.target.value })}
                            value={params.boxScale}
                        />
                        10
                    </div>
                    <div className="flex m-1 items-center">
                        <label className="mx-6">横幅</label>
                        <input
                            id="num_add_red_fish"
                            class="mx-2 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-16 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number"
                            onChange={(e) => setParams({ ...params, boxScaleX: e.target.value })}
                            value={params.boxScaleX}
                        />
                        0
                        <input
                            className="w-20"
                            type="range"
                            min="0"
                            max="10"
                            step="0.1"
                            onChange={(e) => setParams({ ...params, boxScaleX: e.target.value })}
                            value={params.boxScaleX}
                        />
                        10
                    </div>
                    <div className="flex m-1 items-center">
                        <label className="mx-6">高さ</label>
                        <input
                            id="num_add_red_fish"
                            class="mx-2 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-16 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number"
                            onChange={(e) => setParams({ ...params, boxScaleY: e.target.value })}
                            value={params.boxScaleY}
                        />
                        0
                        <input
                            className="w-20"
                            type="range"
                            min="0"
                            max="10"
                            step="0.1"
                            onChange={(e) => setParams({ ...params, boxScaleY: e.target.value })}
                            value={params.boxScaleY}
                        />
                        10
                    </div>
                    <div className="flex m-1 items-center">
                        <label className="mx-6">奥行</label>
                        <input
                            id="num_add_red_fish"
                            class="mx-2 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-16 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number"
                            onChange={(e) => setParams({ ...params, boxScaleZ: e.target.value })}
                            value={params.boxScaleZ}
                        />
                        0
                        <input
                            className="w-20"
                            type="range"
                            min="0"
                            max="10"
                            step="0.1"
                            onChange={(e) => setParams({ ...params, boxScaleZ: e.target.value })}
                            value={params.boxScaleZ}
                        />
                        10
                    </div>
                    <div className="flex m-1 items-center">
                        <label className="w-20">箱の色</label>
                        <input
                            className="w-full"
                            type="color"
                            onChange={(e) => setParams({ ...params, boxColor: e.target.value })}
                            value={params.boxColor}
                        />
                    </div>
                </>
            )}
            {params.objectType == "sphere" && (
                <>
                    <div className="flex m-1 items-center">
                        <label>球の大きさ</label>
                        <input
                            id="num_add_red_fish"
                            class="mx-2 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-16 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number"
                            onChange={(e) => setParams({ ...params, sphereScale: e.target.value })}
                            value={params.sphereScale}
                        />
                        0
                        <input
                            className="w-20"
                            type="range"
                            min="0"
                            max="10"
                            step="0.1"
                            onChange={(e) => setParams({ ...params, sphereScale: e.target.value })}
                            value={params.sphereScale}
                        />
                        10
                    </div>
                    <div className="flex m-1 items-center">
                        <label className="mx-6">横幅</label>
                        <input
                            id="num_add_red_fish"
                            class="mx-2 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-16 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number"
                            onChange={(e) => setParams({ ...params, sphereScaleX: e.target.value })}
                            value={params.sphereScaleX}
                        />
                        0
                        <input
                            className="w-20"
                            type="range"
                            min="0"
                            max="10"
                            step="0.1"
                            onChange={(e) => setParams({ ...params, sphereScaleX: e.target.value })}
                            value={params.sphereScaleX}
                        />
                        10
                    </div>
                    <div className="flex m-1 items-center">
                        <label className="mx-6">高さ</label>
                        <input
                            id="num_add_red_fish"
                            class="mx-2 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-16 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number"
                            onChange={(e) => setParams({ ...params, sphereScaleY: e.target.value })}
                            value={params.sphereScaleY}
                        />
                        0
                        <input
                            className="w-20"
                            type="range"
                            min="0"
                            max="10"
                            step="0.1"
                            onChange={(e) => setParams({ ...params, sphereScaleY: e.target.value })}
                            value={params.sphereScaleY}
                        />
                        10
                    </div>
                    <div className="flex m-1 items-center">
                        <label className="mx-6">奥行</label>
                        <input
                            id="num_add_red_fish"
                            class="mx-2 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-16 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number"
                            onChange={(e) => setParams({ ...params, sphereScaleZ: e.target.value })}
                            value={params.sphereScaleZ}
                        />
                        0
                        <input
                            className="w-20"
                            type="range"
                            min="0"
                            max="10"
                            step="0.1"
                            onChange={(e) => setParams({ ...params, sphereScaleZ: e.target.value })}
                            value={params.sphereScaleZ}
                        />
                        10
                    </div>
                    <div className="flex m-1 items-center">
                        <label className="w-20">球の色</label>
                        <input
                            className="w-full"
                            type="color"
                            onChange={(e) => setParams({ ...params, sphereColor: e.target.value })}
                            value={params.sphereColor}
                        />
                    </div>
                    {/* <div>球の形？</div>
                    <div className="flex m-1 items-center">
                        <label>横</label>
                        <input
                            className="w-20"
                            type="range"
                            min="0"
                            max="10"
                            step="0.1"
                            onChange={(e) => setParams({ ...params, sphereShapeY: e.target.value })}
                            value={params.sphereShapeY}
                        />
                        <label>縦</label>
                        <input
                            className="w-20"
                            type="range"
                            min="0"
                            max="10"
                            step="0.1"
                            onChange={(e) => setParams({ ...params, sphereShapeZ: e.target.value })}
                            value={params.sphereShapeZ}
                        />
                    </div> */}
                </>
            )}
            <div className="flex m-1 items-center">
                <label className="mx-4">速度</label>
                <input
                    id="num_add_red_fish"
                    class="mx-2 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-16 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="number"
                    onChange={(e) => setParams({ ...params, speed: e.target.value })}
                    value={params.speed}
                />
                0
                <input
                    className="w-20"
                    type="range"
                    min="0"
                    max="10"
                    step="0.1"
                    onChange={(e) => setParams({ ...params, speed: e.target.value })}
                    value={params.speed}
                />
                10
            </div>
            <div className="flex m-1 items-center">
                <label>最高速度</label>
                <input
                    id="num_add_red_fish"
                    class="mx-2 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-16 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="number"
                    onChange={(e) => setParams({ ...params, max_speed: e.target.value })}
                    value={params.max_speed}
                />
                0
                <input
                    className="w-20"
                    type="range"
                    min="0"
                    max="10"
                    step="0.1"
                    onChange={(e) => setParams({ ...params, max_speed: e.target.value })}
                    value={params.max_speed}
                />
                10
            </div>
            <div className="flex m-1 items-center">
                <label>行動範囲</label>
                <input
                    id="num_add_red_fish"
                    class="mx-2 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-16 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="number"
                    onChange={(e) => setParams({ ...params, action_range: e.target.value })}
                    value={params.action_range}
                />
                0
                <input
                    className="w-20"
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    onChange={(e) => setParams({ ...params, action_range: e.target.value })}
                    value={params.action_range}
                />
                100
            </div>
            <div className="flex m-1 items-center">
                <label>X方向の移動</label>
                <input
                    id="num_add_red_fish"
                    class="mx-2 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-16 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="number"
                    onChange={(e) => setParams({ ...params, vectorX: e.target.value })}
                    value={params.vectorX}
                />
                0
                <input
                    className="w-20"
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    onChange={(e) => setParams({ ...params, vectorX: e.target.value })}
                    value={params.vectorX}
                />
                10
            </div>
            <div className="flex m-1 items-center">
                <label>Y方向の移動</label>
                <input
                    id="num_add_red_fish"
                    class="mx-2 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-16 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="number"
                    onChange={(e) => setParams({ ...params, vectorY: e.target.value })}
                    value={params.vectorY}
                />
                0
                <input
                    className="w-20"
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    onChange={(e) => setParams({ ...params, vectorY: e.target.value })}
                    value={params.vectorY}
                />
                10
            </div>
            <div className="flex m-1 items-center">
                <label>Z方向の移動</label>
                <input
                    id="num_add_red_fish"
                    class="mx-2 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-16 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="number"
                    onChange={(e) => setParams({ ...params, vectorZ: e.target.value })}
                    value={params.vectorZ}
                />
                0
                <input
                    className="w-20"
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    onChange={(e) => setParams({ ...params, vectorZ: e.target.value })}
                    value={params.vectorZ}
                />
                10
            </div>
            {/* <div className="mt-3">boids modelのパラメータ</div>
            <div className="flex m-1 items-center">
                <label>分離する範囲</label>
                <input
                    className="w-20"
                    type="number"
                    onChange={(e) => setParams({ ...params, separation_range: e.target.value })}
                    value={params.separation_range}
                />
            </div>
            <div className="flex m-1 items-center">
                <label>「分離」のベクトル</label>
                <input
                    className="w-20"
                    type="number"
                    onChange={(e) => setParams({ ...params, weight_to_separation: e.target.value })}
                    value={params.weight_to_separation}
                />
            </div>
            <div className="flex m-1 items-center">
                <label>整列する範囲</label>
                <input
                    className="w-20"
                    type="number"
                    onChange={(e) => setParams({ ...params, alignment_range: e.target.value })}
                    value={params.alignment_range}
                />
            </div>
            <div className="flex m-1 items-center">
                <label>「整列」のベクトル</label>
                <input
                    className="w-20"
                    type="number"
                    onChange={(e) => setParams({ ...params, weight_to_alignment: e.target.value })}
                    value={params.weight_to_alignment}
                />
            </div>
            <div className="flex m-1 items-center">
                <label>凝集の範囲</label>
                <input
                    className="w-20"
                    type="number"
                    onChange={(e) => setParams({ ...params, cohesion_range: e.target.value })}
                    value={params.cohesion_range}
                />
            </div>
            <div className="flex m-1 items-center">
                <label>「凝集」のベクトル</label>
                <input
                    className="w-20"
                    type="number"
                    onChange={(e) => setParams({ ...params, weight_to_cohesion: e.target.value })}
                    value={params.weight_to_cohesion}
                />
            </div>
            <div className="flex m-1 items-center">
                <label>中心方向へのベクトル</label>
                <input
                    className="w-20"
                    type="number"
                    onChange={(e) => setParams({ ...params, weight_to_center: e.target.value })}
                    value={params.weight_to_center}
                />
            </div> */}


        </div>
    )
}

export default Control