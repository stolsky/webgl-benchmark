import {
    Match,
    Switch
} from "solid-js"

import { route, reroute } from "./route"

import Benchmark from "./benchmark/Benchmark"
import Configuration from "./configuration/Configuration"
import Results from "./results/Results"

/**
 * @param {{ init: string }}
 *
 * @returns { JSX.Element }
 */
export default ({ init }) => {
    reroute(init)
    return (
        <main>
            <h1>WebGL Benchmark</h1>
            <Switch>
                <Match when={ route() === "configuration"}>
                    <Configuration />
                </Match>
                <Match when={ route() === "benchmark"}>
                    <Benchmark />
                </Match>
                <Match when={ route() === "results"}>
                    <Results />
                </Match>
            </Switch>
        </main>
    )
}