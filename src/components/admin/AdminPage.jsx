
import { observer } from "mobx-react"


import DataStore from "../../store/store.js"
import Login from "./Login"
import AdminHome from "./AdminHome"

const AdminPage = (observer(() => {


    return (
        <>
            {!DataStore.isLogin ? <Login /> : <AdminHome/>}
        </>
    )
}))
  
  export default AdminPage