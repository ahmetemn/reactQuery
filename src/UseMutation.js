import React from 'react'
import { useMutation } from 'react-query'

const UseMutation = () => {

    //https://jsonplaceholder.typicode.com/users
    const {data,mutate,isLoading} = useMutation(['users'] , (newPost) => {

        return fetch('https://jsonplaceholder.typicode.com/users', {
            method:"POST",
            body:JSON.stringify(newpost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8' 
            }

        } ).then(respose.json())
    }) 

    if(isLoading){
        return <div>Loading...</div>
    }

    console.log(data,"mutation data")
  return (
    <div>
         {/* burada yazdığımız mutate göndermiş olduğumuz newPost a denk gelmekte */}
        <button onClick={() => mutate({title:"Deneme" , body:"denem-body" , userId:1})}> 
        Veri ekle
        </button>
    </div>
  )
}

export default UseMutation