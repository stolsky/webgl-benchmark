import { createEffect, createSignal } from "solid-js"

import { get_libraries } from "../configuration/form_signals"
import { State, update_state } from "../state"

import load_library from "./load_library"

/**
 * @returns { JSX.Element }
 */
export default () => {

    const [benchmarks] = createSignal(get_libraries().reverse())
    const [next_benchmark, set_next_benchmark] = createSignal()

    const canvas_ref = null

    const get_next_benchmark = () => {
        if (benchmarks().length > 0) {
            set_next_benchmark(JSON.parse(benchmarks().pop()))
        } else {
            update_state(State.Results)
        }
    }

    const start_benchmark = (path) => {
        load_library(path)
            .then((module) => module.init(canvas_ref))
    }

    // init = load first benchmark
    get_next_benchmark()

    createEffect(() => {
        if (next_benchmark() === "") {
            get_next_benchmark()
        } else {
            start_benchmark(next_benchmark().path)
        }
    }, [next_benchmark])
    
    return (
        <div>
            <h2>Benchmark</h2>
            <h3>{next_benchmark()?.name}</h3>
            {/* <canvas ref={canvas_ref} /> */}
        </div>
    )
}