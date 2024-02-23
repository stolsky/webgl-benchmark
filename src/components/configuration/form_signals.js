import { createSignal } from "solid-js"
import { reroute } from "../route"

const [libraries] = createSignal(new Set())
const [collisions] = createSignal(new Set())
const [methods] = createSignal(new Set())

const [use_collision, set_use_collision] = createSignal(false)
const [form_is_valid, set_form_validation] = createSignal(false)

const submit_form_data = () => {
    console.log("reroute")
    reroute("benchmark")
}

const validate_form = () => {
    let is_valid = false
    if (libraries().size > 0) {
        is_valid= true
    }
    set_form_validation(is_valid)
}

const toggle_set_value = (set, value) => {
    if (set.has(value)) {
        set.delete(value)
    } else {
        set.add(value)
    }
    validate_form()
}

const toggle_use_collision = () => set_use_collision(!use_collision())

const toggle_library = (value) => toggle_set_value(libraries(), value)

const toggle_collision = (value) => toggle_set_value(collisions(), value)

const toggle_method = (value) => toggle_set_value(methods(), value)

export {
    form_is_valid,
    use_collision,
    submit_form_data,
    toggle_collision,
    toggle_library,
    toggle_method,
    toggle_use_collision,
}