import { toggle_library } from "./form_signals"

/**
 * @param {{ name: string }}
 *
 * @returns JSX.Element
 */
export default ({ name }) => {
    const value = name.toLowerCase().replace(/\s/g, "-")
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    value={value}
                    onClick={() => toggle_library(value)}
                />{ name }
            </label>
        </div>
    )
}