
function reducer(state , action){
    switch (action.type){
        case 'resolved' :
            let filteredData= action.payload.filter((c)=>{
                return (c.cca3!=='ESH' && c.cca3 !=='ISR' )
            })
            return {...state , status : 'resolved' , data:filteredData }
        
        case 'rejected':
            return {...state , status : 'rejected' , error:action.payload}

        case 'pending' :
            return {...state , status: 'pending' , data:null , error:null}

        case 'idle' : 
            return {...state , status : 'idle' , data:null , error:null}

    }
}

export default reducer;