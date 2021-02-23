const baseURI = "http://localhost:5000/api/movements"

export const createMovementApi = async (movementData) => {
 
    const options = {
        method : 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(movementData)
    }

    try {
        const response = await fetch(`${baseURI}/add`, options); 

        if (response.ok) {
            return await response.json(movementData)
        }
    } catch (error) {
        console.error("Something went wrong, try again");
    }
}; 

export const getMovementsApi = async () => {

    try {
        const response = await fetch(`${baseURI}/`);

        if (response.ok) {
            const movements = await response.json();
            return movements;
        }
    } catch (error) {
        console.error("Something went wrong, try again");
    }
}