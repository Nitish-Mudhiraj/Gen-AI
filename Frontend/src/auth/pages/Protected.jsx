const Protected = () => {

    const { loading, userr } = useAuth();

    const { socketinitialization } = useauth();

    useEffect(() => {
        if (userr) {
            socketinitialization();
        }
    }, [userr]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (!userr) {
        return <Navigate to="/login" replace />;
    }

    return <Home />;
};