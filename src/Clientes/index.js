import React from 'react';


const Clientes = () => {

    const [client, setClientes] = React.useState([])

    React.useEffect(() => {
        //console.log('useEffect')
        obtenerDatos()
    }, [])

    const obtenerDatos = async() => {
        const data = await fetch ('https://example-data.draftbit.com/users?_limit=15')
        const users = await data.json()
        //console.log(users)
        setClientes(users)
    }


    return (
        <div>
            <h1>Clientes</h1>
            <ul>
                {
                    client.map(item => (
                        <li key={item.id}>{item.fullName} - {item.email}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Clientes