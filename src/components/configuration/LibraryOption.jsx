import { toggle_library } from "./form_signals"

/**
 * @param {{ name: string, script: string }}
 *
 * @returns JSX.Element
 */
export default ({ name, value }) => {
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    value={name}
                    onClick={() => toggle_library(value)}
                />{ name }
            </label>
        </div>
    )
}