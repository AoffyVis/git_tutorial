import useResources from "./UseResources";

function Users( {resourceName} ) {
    const users = useResources('users');

    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    );
}

export default Users;