import { createSignal } from "solid-js"

export const State = {
    Configuration: "configuration",
    Benchmark: "benchmark",
    Results: "results"
}

const [state, set_state] = createSignal()

const is_state = (value) => value === state()

const update_state = (value) => set_state(value)

export {
    is_state,
    update_state
}