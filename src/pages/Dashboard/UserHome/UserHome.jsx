import useAuth from "../../../hooks/useAuth";


const UserHome = () => {

    const { user } = useAuth();

    return (
        <div>
             <div>
                <h1 className="text-3xl font-bold"> <span>Hi, Welcome { user?.displayName ? user.displayName : 'Back' }</span> </h1>
            </div>
        </div>
    );
};

export default UserHome;