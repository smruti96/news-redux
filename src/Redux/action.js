export function getArticles(){
    return function(dispatch){
        return callApi()
            .then(res => {
                console.log(res)
                dispatch({
                    type: "LOAD_ARTICLES_SUCCESS",
                    payload: res.articles
                })
            }).catch(err => {
            throw(err)
        })
    }
}

const url= "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ce9096b85bbb48f585fa94b3875626c8"


function callApi(){
    return (
        fetch(url)
        .then(res => {
            console.log(res)
            return res.json()
        }).catch(err => {
            return err
        })
    )
}