const base = {
    get() {
        return {
            url : "http://localhost:8080/smartHome/",
            name: "smartHome",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/smartHome/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "智能家居系统"
        } 
    }
}
export default base
