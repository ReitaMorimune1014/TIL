import ProfileSearchForm from "./ProfileSearchForm";

const BASE_URL = "https://api.github.com/users/";

function ProfileViewerWithSearch() {
    const [username, setUsername] = useState("");
    const [profile, setProfile] = useState({ data: null, isLoading: false });

    useEffect(
        function feachUserOnUsernameChange() {
            async function fetchUser() {
                const userResult = await axios.get(`${BASE_URL}${username}`);
                setProfile({ data: userResult.data, isLoading: false });
            }
            fetchUser();
        },
        [username]
    );

    function search(username) {
        setUsername(username);
    }

    if (profile.isLoading) return <div>Loading...</div>;

    return (
        <div>
            <ProfileSearchForm search={search} />
            <b>{profile.data.name}</b>
        </div>
    );
}

export default ProfileViewerWithSearch;