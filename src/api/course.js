export default {
    getList() {
        // use axios

        const data = [{}, {}]

        return data.map(item => new Course(item))
    }
}