import { useState } from "react";
import css from "./index.module.css"; 

export default function inicio(){

    const [cliente, setCliente] = useState([])

    const fetchInfo = async () => {
        const response = await fetch("https://api.openbrewerydb.org/breweries")
        const data = await response.json()
        setCliente(data)
    }

    
    return (
            <>
                <div className={css.botao}>
                    <button onClick={fetchInfo}>Obter Informações</button>
                </div>
                {
                    cliente.map((client) => {
                        return (                        
                            <div className={css.row}>
                                <div className={css.cards}>
                                            
                                            <label className={css.ul}>ID: {client.id}</label>
                                            <h1>{client.name}</h1>
                                            <h3>Tipo de bebida: {client.brewery_type}</h3>
                                            <ul className={css.li}>
                                            <li>Cidade: {client.city ?? "Não informado"}</li>
                                            <li>Estado: {client.state ?? "Não informado"}</li>
                                            <li>Provincia: {client.county_province ?? "Não informado"}</li>                        
                                            </ul>
                                            <div className={css.alinhado}>
                                                <h5>Telefone: {client.phone ?? "Não informado"}</h5>
                                                <h5>Site: {client.website_url ?? "Não informado"}</h5>
                                            </div>
                                            
                                        <ul key={client.id} className={css.ul}>                                                                       
                                            <li>Rua: {client.street ?? "Não informado"}</li>
                                            <li>Endereço 1: {client.address_2 ?? "Não informado"}</li>
                                            <li>Endereço 2: {client.address_3 ?? "Não informado"}</li>   
                                            <li>Cód. Postal: {client.postal_code ?? "Não informado"}</li>
                                            <li>País: {client.country ?? "Não informado"}</li>
                                            <li>Atualizado em: {client.updated_at ?? "Não informado"}</li>
                                            <li>Criado em: {client.created_at ?? "Não informado"}</li>
                                        </ul>
                                            <div className={css.alinhado}>
                                                <h6>Longitude: {client.longitude ?? "Não informado"} </h6>
                                                <h6>Latitude: {client.latitude ?? "Não informado"} </h6>
                                            </div>
                                </div>
                            </div>
                        )
                    })
                }
            </>
    )
}