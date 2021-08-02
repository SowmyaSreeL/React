import { useCallback, useState } from "react";

const useHTTP = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, applyOnData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(requestConfig.url,
                {
                    method: requestConfig.url ? requestConfig.url : 'GET',
                    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
                    headers: requestConfig.headers ? requestConfig.headers : {}
                }
            );
            if (!response.ok) {
            throw new Error('Request failed!');
            }

            const data = await response.json();
            applyOnData(data);

        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading: isLoading,
        error: error,
        sendRequest: sendRequest
    }
}

export default useHTTP;