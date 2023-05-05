

const url = "http://localhost:4000";


export const getAllUsers = async ()=>{
    try {
        const registros  = await fetch(`${url}/users`);
        const result = await registros.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}


export const getOneUser = async (id)=>{
    try {
        const oneUser = await fetch(`${url}/id`);
        const result = await oneUser.json();
        return result
    } catch (error) {
        console.log(error);
    }

}

// añadir un usuario 
export const addUser = async(user)=>{
    try {
        await fetch(`${url}/users`,{
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            }
        });
    } catch (error) {
        console.log("funcion addUser: ",error);
    }
}

// delete user
export const deleteUser = async(id)=>{
    try {
        await fetch(`${url}/users/${id}`,{
            method: "DELETE"
        })
    } catch (error) {
        console.log(error);
    }
}

// update user 
export const updateUser = async(user)=>{
    try {
        await fetch(`${url}/${user.id}`,{
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch (error) {
        console.log(error);
    }
}





//==============================================================================
export const addProduct = async (product)=>{
    try {

        await fetch(`${url}/products`,{
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json",
            }
        })

    } catch (error) {
       console.log("funcion addProduct: ",error);
    }
} 


// delet products
export const deleteProduct = async(id)=>{
    try {
        await fetch(`${url}/products/${id}`,{
            method: "DELETE"
        })
    } catch (error) {
        console.log(error);
    }
}


