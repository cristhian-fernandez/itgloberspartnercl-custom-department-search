import React from 'react';

type Category = {
    id: number,
    name: string,
    slug : string
}

type Props = {
    departments : [Category],
    handleSetSlug : any
}
function DepartmentGroup({departments,handleSetSlug}:Props) {
    console.log('Mis departamentos son::', departments);

    const onHandleSetSlug = (event:any) => {
        handleSetSlug(`${event.target.value}/$\{term\}&map=ft` );
    }
    
    const departmentOptions:any = departments.map((department:Category)=> {
        return(
            <option 
                value={department.slug} 
                key={department.id}
            >
                {department.name}     
            </option>
        )
    });

    return (
        <select
            onChange={onHandleSetSlug}
            defaultValue="value0"
        >
            <option value="value0" key="" disabled>Seleccione una opción</option>
            {departmentOptions}
        </select>
    );
}

export default DepartmentGroup;