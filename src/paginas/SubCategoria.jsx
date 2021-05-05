import React from 'react';
import { useParams } from 'react-router';
import ListaPosts from '../componentes/ListaPosts';

const SubCategoria = () => {
    const { subcategoria } = useParams();
    return (
        <ListaPosts url={`/posts?subcategoria=${subcategoria}`} />
    )
}

export default SubCategoria;