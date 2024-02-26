import { createSignal } from "solid-js"

const libraries = new Set()
const collisions = new Set()
const methods = new Set()

const [use_collision, set_use_collision] = createSignal(false)
const [form_is_valid, set_form_validation] = createSignal(false)

const validate_form = () => {
    let is_valid = false
    if (libraries.size > 0) {
        is_valid= true
    }
    set_form_validation(is_valid)
}

const get_collisions = () => [...collisions]

/** Returns all selected libraries as a string array copy.
 * 
 * @returns { string[] }
 */
const get_libraries = () => [...libraries].sort((a, b) => a > b ? 1 : -1)

const get_methods = () => [...methods]

const toggle_set_value = (set, value) => {
    if (set.has(value)) {
        set.delete(value)
    } else {
        set.add(value)
    }
    validate_form()
}

const toggle_use_collision = () => set_use_collision(!use_collision())

const toggle_library = (value) => toggle_set_value(libraries, value)

const toggle_collision = (value) => toggle_set_value(collisions, value)

const toggle_method = (value) => toggle_set_value(methods, value)

export {
    form_is_valid,
    use_collision,
    get_collisions,
    get_libraries,
    get_methods,
    toggle_collision,
    toggle_library,
    toggle_method,
    toggle_use_collision,
}