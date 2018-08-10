const commonCatch = () => Promise.reject({ status: 'error' });

/**
 * @description Function for sending/handling request to ICNDB service
 * @param {string} requestURL url string with parameters
 * @returns {Promise} return promise that can return { status } or { status, value }
 */

const sendRequest = (requestURL) => {
    return fetch(requestURL)
        .then((response) => {
            if (!response.ok) {
                return Promise.reject();
            }

            return response.json();
        })
        .then((response) => {
            if (!response || response.type !== 'success' || !response.value) {
                return Promise.reject();
            }

            return {
                status: 'success',
                value: response.value,
            };
        })
        .catch(commonCatch);
};

const JokeService = {
    /**
     * @description Returns random joke from ICNDB service
     * @param {string} requestURL url string with parameters
     * @param {string} [firstName=''] firstName that you want to see in a joke
     * @param {string} [lastName=''] lastName that you want to see in a joke
     * @returns {Promise} return promise that can return { status } or { status, value }
    */

    getRandomJoke(firstName = '', lastName = '') {
        const completedURL = `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&escape=javascript`;
        const request = new Request(completedURL);

        return sendRequest(request)
            .then(({ value }) => value.joke);
    },
};

export default JokeService;
