interface Response {
    [x: string]: any;
    baseUrl: any,
    access_key: any
}

class NumberApi {
    [x: string]: any;
    constructor({ baseUrl, access_key }: Response) {
        this._baseUrl = baseUrl;
        this._access_key = access_key;
    }

    checkNumber(number: any) {
        let validNumber = `7${number.join('')}`
        return fetch(`${this._baseUrl}access_key=${this._access_key}&number=${validNumber}&format=1`, {
            method: "GET",
        }).then((response) => {
            return response.ok
                ? response.json()
                : Promise.reject(
                    new Error(`Ошибка ${response.status} : ${response.statusText}`)
                );
        }
        )
    }

}

const config = {
    baseUrl: "https://apilayer.net/api/validate?",
    access_key: "eed53fd3de92a4e3ad141c4abd79007c",
};

const numberApi = new NumberApi(config);
export default numberApi;
