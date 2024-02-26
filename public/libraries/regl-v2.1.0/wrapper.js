/* @vite-ignore */

// import * as REGL from "./regl-v2.1.0.js"
// import REGL from "https://cdn.jsdelivr.net/npm/regl@2.1.0/regl.min.js"

const get_version = () => ""

const init = async (canvas) => {
    const reglModule = import('https://unpkg.com/regl/dist/regl.min.js');

    reglModule.then(({ default: createRegl }) => {
        console.log(createRegl)
    }).catch((err) => console.log(err))
    // const module = import("https://cdn.jsdelivr.net/npm/regl@2.1.0/regl.min.js")

    // var regl = createREGL({
	//     canvas,
	//     onDone: function(error, regl) {
	// 	    if (error) { alert(error); }
	//     }
    // });
}

export {
    get_version,
    init
}