import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
	// Extract parameter values from the URL
	const params = useParams();

	// Access and update query string parameters
	// NOTE: you should call this function only inside event handlers or inside an effect
	const [searchParams, setSearchParams] = useSearchParams();

	// Access the current location
	const location = useLocation();
	console.log(location);

	return <p>User {params.id}</p>;
};

export default UserDetail;
