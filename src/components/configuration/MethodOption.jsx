import { use_collision, toggle_method } from "./form_signals"

import Description from "./Description"

/**
 * @param {{ checked: boolean, descr: string, name: string }}
 *
 * @returns JSX.Element
 */
export default ({ checked, descr, name }) => {
    const value = name.toLowerCase().replace(/\s/g, "-")
    return (
        <div>
            <label>
                <input
                    type="radio"
                    value={value}
                    name="method"
                    disabled={!use_collision()}
                    checked={checked}
                    onClick={() => toggle_method(value)}
                />{ name }
            </label>
            <Description>
                { descr }
            </Description>
        </div>
    )
}