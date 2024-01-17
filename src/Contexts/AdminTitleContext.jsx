import { useState, useContext, createContext} from 'react'

export const AdminTitleContext = createContext();

export function useAdminTitle(){
    return useContext(AdminTitleContext);
}

export function AdminTitleProvider(props) {
    const [adminTitle, setAdminTitle] = useState('');

    const value = {
        adminTitle,
        setAdminTitle
    }

    return(
        <AdminTitleContext.Provider value={value}>
            {props.children}
        </AdminTitleContext.Provider>
    )

}