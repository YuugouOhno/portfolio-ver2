import { useEffect, useContext, useState } from 'react';
import { BoidsContext } from '@/contexts/BoidsContext';

const Control = () => {
    const { showControl, setShowControl, isEndOfPage, params, setParams, boids, setBoids } = useContext(BoidsContext);
    const [addRedNum, setAddRedNum] = useState(1)
    useEffect(() => {
        setShowControl(false)
    }, [isEndOfPage]);

    const addFish = (num) => {
        console.log(boids.length)
        const array = Array.from({ length: num }, (_, index) => boids.length + index + 1);
        setBoids([...boids, ...array])
        console.log(array, boids)
    }
    const redFish = (num) => {
        console.log(boids.length)
        const array = (boids.length <= num) ? [1] : Array.from({ length: boids.length - num }, (_, index) => index + 1);
        setBoids([...array])
        console.log(array, boids)
    }


    return (
        <div className={`${showControl ? "" : ""} fixed bottom-0 right-0 w-1/4 h-1/3 z-50 bg-gray-300 dark:bg-gray-700`}>
            <div>
                <label>Object Type</label><select onChange={(event) => setParams({ ...params, objectType: event.target.value })}>
                    <option value="fish">Fish</option>
                    <option value="box">Box</option>
                </select>
            </div>
            <div className="flex">
                <button onClick={() => addFish(addRedNum)} >addition</button>
                <input
                    className="w-10"
                    type="number"
                    onChange={(e) => setAddRedNum(e.target.value)}
                    value={addRedNum} />
                <button onClick={() => redFish(addRedNum)} >reduction</button>
            </div>
            <div className="flex">
                <label>Whale Scale</label>
                <input
                    className="w-10"
                    type="number"
                    onChange={(event) => setParams({ ...params, whaleScale: event.target.value })}
                    value={params.whaleScale}
                />
            </div>
            <div className="flex">
                <label>Fish Scale</label>
                <input
                    className="w-10"
                    type="number"
                    onChange={(event) => setParams({ ...params, fishScale: event.target.value })}
                    value={params.fishScale}
                />
            </div>
            <div className="flex">
                <label>Box Scale</label>
                <label>X</label>
                <input
                    className="w-10"
                    type="number"
                    onChange={(event) => setParams({ ...params, boxScaleX: event.target.value })}
                    value={params.boxScaleX}
                />
                <label>Y</label>
                <input
                    className="w-10"
                    type="number"
                    onChange={(event) => setParams({ ...params, boxScaleY: event.target.value })}
                    value={params.boxScaleY}
                />
                <label>Z</label>
                <input
                    className="w-10"
                    type="number"
                    onChange={(event) => setParams({ ...params, boxScaleZ: event.target.value })}
                    value={params.boxScaleZ}
                />
            </div>
        </div>
    )
}

export default Control