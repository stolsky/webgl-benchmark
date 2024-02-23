import { use_collision, toggle_collision } from "./form_signals"

import Description from "./Description"

/**
 * @param {{ descr: string, name: string }}
 *
 * @returns JSX.Element
 */
export default ({ descr, name }) => {
    const value = name.toLowerCase().replace(/\s/g, "-")
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    value={value}
                    disabled={!use_collision()}
                    onClick={() => toggle_collision(value)}
                />{ name }
            </label>
            <Description>
                { descr }
            </Description>
        </div>
    )
}