import { responseData } from "../article.response";

let getItems = async (type: string, callback?: Function, timeout?: number): Promise<any> => {
  let request = () => { return new Promise((resolve, reject) => {
    console.log(`fetching data... [${type}]`);
    let resp = responseData.data.filter(({type: _type}) => _type === type)
    setTimeout(() => {
      if(resp.length > 0) {
        resolve({status: 200, data: resp})
      } else {
        reject({status: 204, type: type})
      }
    }, timeout)
  })
  }

  try {
    let resp: any = await request()
    if (resp.status == 200) {
      if (typeof callback !== 'undefined'){
        callback(resp.data)
      }
    }
  } catch(error: any) {
    console.log(`error: ${error.status} [${error.type}]`)
  }
}
export { getItems }