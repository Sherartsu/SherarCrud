const API_URL = "http://localhost:8080/api/category";

export let getCategories = async () => {
    try {
        const res = await fetch(`${API_URL}/getDataCategories`);
        return await res.json();
    } catch (error) {
        
    }
}

export let createCategory = async (data) => {
    try {
        const res = await fetch(`${API_URL}/newCategory`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    } catch (error) {
        
    }
}

export let updateCategory = async (id, data) => {
    try {
        const res = await fetch(`${API_URL}/updateCategory/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    } catch (error) {
        
    }
}

export let deleteCategory = async (id) => {
    try {
        const res = await fetch(`${API_URL}/deleteCategory/${id}`,{
            method: "DELETE"
        });
    } catch (error) {
        
    }
}