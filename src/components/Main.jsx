import {
    Match,
    Switch
} from "solid-js"

import { State, is_state, update_state } from "./state"

import Benchmarks from "./benchmarks/Benchmarks"
import Configuration from "./configuration/Configuration"
import Results from "./results/Results"

/**
 * @param {{ init: string }}
 *
 * @returns { JSX.Element }
 */
export default ({ init }) => {
    update_state(init)
    return (
        <main>
            <h1>WebGL Benchmark</h1>
            <Switch>
                <Match when={ is_state(State.Configuration) }>
                    <Configuration />
                </Match>
                <Match when={ is_state(State.Benchmark) }>
                    <Benchmarks />
                </Match>
                <Match when={ is_state(State.Results) }>
                    <Results />
                </Match>
            </Switch>
        </main>
    )
}