export class Router {

    constructor(paths){
        this.paths = paths
        this.initRouter()
    }

    initRouter(){
        const {location : { pathname = '/'}} = window
        const URI = pathname === '/' ? "home" : pathname.replace("/", "")
        this.load(URI)
    }
    load(page = "home"){
        const { path , template } = this.paths[page] || this.paths.error
        const $APP = document.getElementById('app')
        $APP.innerHTML=template
        window.history.pushState({}, 'done', path)
    }
}   