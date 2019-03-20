function loadingPhotos(url='https://api.unsplash.com/photos/?client_id=e9e2c2e1677499729290a58af678c60d97964d4a7df66cd4c0becec401e0ea38'){
		return fetch(url)
		    .then(res => res.json())
		     .catch(err => {
		      console.log('Error happened during fetching!', err);
		    })
}

function actionPhotosResolved(data) {
    return { type:"PHOTOS_LOADED",
			  allPhotosArr: data.map (
								function (item, index, arr) {
							        return {pic: {uri: arr[index].urls.thumb }, 
							                user: {name: arr[index].user.name,
							                       bio: arr[index].user.bio }}
					                     }
		                 ),
				   }
}

function actionPhotosRejected(error) {
    return { type:"LOADED_ERROR",
             error}
}


function actionPhotos(){
   return async function (dispatch) { 
	    try {        
	       var data = await loadingPhotos();
	       dispatch(actionPhotosResolved(data)); 
	                    }
	    catch (error){
	           dispatch(actionPhotosRejected(error))
	           }
  }
}

export {actionPhotos}