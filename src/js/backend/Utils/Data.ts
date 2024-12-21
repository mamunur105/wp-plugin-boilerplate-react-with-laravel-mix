/*
 * Import local dependencies
 */
import Axios, { AxiosInstance } from 'axios';

// Define boilerplateParams to include the necessary fields for type safety
declare const boilerplateParams: {
    restApiUrl: string;
    rest_nonce: string;
};

// Base URL for the API
const apiBaseUrl = `${boilerplateParams.restApiUrl}TinySolutions/boilerplate/v1/api`;

/*
 * Create an Axios instance and configure it for the WordPress REST API.
 */
const Api: AxiosInstance = Axios.create({
    baseURL: apiBaseUrl,
    headers: {
        'X-WP-Nonce': boilerplateParams.rest_nonce,
    },
});

// Define parameter and response types for better type safety
interface UpdateOptionsParams {
    [key: string]: any; // Use a more specific type if available
}

interface PluginInfo {
    id: string;
    name: string;
    version: string;
    [key: string]: any; // Extend with other plugin fields if necessary
}

interface OptionsResponse {
    [key: string]: any; // Use a more specific type if the structure is known
}

/*
 * Update options in the API.
 */
export const updateOptions = async (params: UpdateOptionsParams): Promise<any> => {
    return await Api.post(`/updateOptions`, params);
};

/*
 * Fetch options from the API.
 */
export const getOptions = async (): Promise<OptionsResponse> => {
    const response = await Api.get(`/getOptions`);
    return JSON.parse(response.data);
};

/*
 * Fetch the plugin list from the API.
 */
export const getPluginList = async (): Promise<PluginInfo[]> => {
    const response = await Api.get(`/getPluginList`);
    return response.data;
};