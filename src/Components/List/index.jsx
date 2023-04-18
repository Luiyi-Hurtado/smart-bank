import React from "react";
import { Box, Btn } from "../UI";
import { lista } from "../../info";
import Card from "../Card"


const List = () => {
    console.log(lista)
    return (
        <Box>
            {
                lista.cargos.map((cargo, index) => {
                    return (
                        <Card key={index} cargo={cargo} />
                    )
                })
            }
            <Btn>Ver más</Btn>
        </Box>
    );
}

export default List;