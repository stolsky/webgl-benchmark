import config_data from "./config_data.json"

import { For } from "solid-js"

import {
    form_is_valid,
    submit_form_data,
    toggle_use_collision,
    use_collision
} from "./form_signals"

import Description from "./Description"
import LibraryOption from "./LibraryOption"
import MethodOption from "./MethodOption"
import CollisionOption from "./CollisionOption"
import "./configuration.css"

/**
 * @returns JSX.Element
 */
export default () => {
    return (
        <>
            <h2>Configuration</h2>
            <Description title="About">
                Sed tristique tortor vitae magna consequat, ultricies condimentum ipsum dictum. Etiam ante dui, tempor in scelerisque sit amet, auctor id nibh. Morbi consequat turpis cursus urna aliquam, ut cursus tellus lobortis. Duis aliquam vestibulum nisi, non lacinia eros iaculis a. Maecenas augue nisi, venenatis in nulla eget, facilisis hendrerit ipsum.
            </Description>

            <div className="Category">
                <h3>Scripts</h3>
                <Description title="About">
                    Suspendisse a accumsan quam. Nullam vel vulputate felis. Ut fringilla, mi quis scelerisque venenatis, tellus ligula rhoncus eros, vitae venenatis leo felis a enim. Duis ut ipsum at est hendrerit convallis eu sit amet erat. Vestibulum nec ante in ipsum tincidunt feugiat eget ut nulla. Vivamus venenatis aliquam finibus. Pellentesque.
                </Description>
                <div className="Options">
                    <For each={config_data.libraries}>
                        {(item, index) => (<LibraryOption
                            key={`library-${index+1}`}
                            name={item.name}
                            url={item.url}
                        />)}
                    </For>
                </div>
            </div>

            <div className="Category">
                <h3>Settings</h3>
                <Description title="About">
                Vestibulum non nisi condimentum, tristique ex molestie, sodales urna. Duis iaculis pellentesque suscipit. Proin dictum, velit luctus porttitor placerat, erat nibh scelerisque ex, non blandit arcu quam quis lacus. Pellentesque ac congue eros, et volutpat ante. Maecenas ut leo egestas, sodales lacus nec, pharetra lectus. Maecenas vulputate nisl non blandit.
                </Description>

                <div className={`Options${use_collision() ? "" : " Disabled"}`}>
                    <h4>Collision</h4>

                    <div>
                        <label>
                            <input
                                type="checkbox"
                                value="collision-0"
                                checked={!use_collision()}
                                onClick={() => toggle_use_collision()}
                            />No Collision
                        </label>
                        <Description>
                            Quisque id euismod velit. Vestibulum a fermentum mi. Ut lobortis porttitor lectus, non elementum ligula ultrices sed. Nunc sed vehicula ligula, non ultrices leo. Praesent mattis risus at quam volutpat maximus. Cras egestas iaculis neque, eget lobortis augue sagittis id. Praesent dapibus orci metus, ut sollicitudin enim ultricies et. Donec.
                        </Description>
                    </div>

                    <For each={config_data.collisions}>
                        {(item, index) => (<CollisionOption
                            key={`collision-${index+1}`}
                            name={item.name}
                            descr={item.descr}
                        />)}
                    </For>

                </div>

                <div className={`Options${use_collision() ? "" : " Disabled"}`}>
                    <h4>Collision Detection</h4>

                    <For each={config_data.methods}>
                        {(item, index) => (<MethodOption
                            key={`method-${index+1}`}
                            name={item.name}
                            descr={item.descr}
                            checked={item.checked ?? undefined}
                        />)}
                    </For>
                </div>
            </div>

            <div className="ButtonGroup">
                <button
                    onClick={() => submit_form_data()}
                    disabled={!form_is_valid()}
                >
                    Run
                </button>
            </div>
        </>
    )
}