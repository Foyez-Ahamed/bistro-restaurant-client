import useAuth from "../../../hooks/useAuth";


const AdminHome = () => {

    const {user} = useAuth();

    return (
        <div>

            <div>
                <h1 className="text-3xl font-medium italic"> <span>Hi, Welcome { user?.displayName ? user.displayName : 'Back' }</span>! </h1>
            </div>
            
        </div>
    );
};

export default AdminHome;