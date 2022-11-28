import React, { useState } from 'react';
import {useQuery} from 'react-apollo';
import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql';
import DepartmentGroup from './DepartmentGroup';

import {SearchBar} from 'vtex.store-components';

function DepartmentSearch() {
    const {data, loading} = useQuery(QUERY_VALUE); // Se puede agregar error => const {data, loading,error}
    console.log('data::::',data);
    console.log('Categories::::',data?.categories);
    console.log('loading::::',loading);
    // const [categories, setCategories] = useState(data?.categories[0]?.children);
    // console.log('Categories:::',categories);
    // console.log('setCategories:::',setCategories);
    const [slug, setSlug] = useState("");
    console.log('slug::', slug);
    return (
        loading ? 
        <div>
            Loading...
        </div>
        :
        <div className='flex'>
            <DepartmentGroup departments = {data?.categories[0]?.children}  handleSetSlug={setSlug}/>
            <SearchBar 
                customSearchPageUrl={slug}
                placeholder = "¿Qué buscas en VTEX University?"
                displayMode = "search-and-clear-buttons"
            />
        </div>
        
    );
}

export default DepartmentSearch;