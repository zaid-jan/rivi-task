import axios from 'axios'

export const setActivities = () => {
    return async (dispatch) => {
        const urls = ['http://my-json-server.typicode.com/rivitest001/task01/posts', 'http://my-json-server.typicode.com/rivitest001/task02/posts', 'http://my-json-server.typicode.com/rivitest001/task03/posts', 'http://my-json-server.typicode.com/rivitest001/task04/posts']
        let reqArr = []
        for(let url of urls){
            try{
                // console.log("making request");
                let ret = await axios.get(url);
                reqArr[reqArr.length] = ret.data;
            } catch(e) {
                throw(e)
            }        
        }
        let resArr = []
        for(let i in reqArr){
            for(let j in reqArr[i]){
                resArr[resArr.length] = reqArr[i][j];
            }
        }
        const action = {
            type:'setActivities', 
            payload: resArr,
        }
        dispatch(action)
    }
}
