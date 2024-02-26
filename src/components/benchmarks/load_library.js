export default async (path) => {
    const module = await import(/* @vite-ignore */`../../../public/libraries/${path}wrapper.js`)
    return module
}