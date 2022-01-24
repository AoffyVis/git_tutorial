import useResources from "./UseResources";

function ResouceList( {resourceName} ) {
    const resources = useResources(resourceName);

    return (
        <>
            <ul>
                {resources.map(resource => (
                    <li key={resource.id}>{resource.title}</li>
                ))}
            </ul>
        </>
    );
}

export default ResouceList;