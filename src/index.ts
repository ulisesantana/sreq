import request, {CoreOptions, Response} from "request";

export interface IRequestOptions extends CoreOptions {}
export interface IResponse extends Response {}

function generateRequest(method: string) {
  return (url: string, options?: IRequestOptions) => new Promise((resolve, reject) => {
    request(
      url,
      {
        method,
        json: true,
        ...options
      },
      (err: Error, response: IResponse) => {
        if (err) {
          return reject(err);
        }
        return resolve(response);
      }
    )
  });
}

export const sreq = {
  get: generateRequest('GET'),
  post: generateRequest('POST'),
  patch: generateRequest('PATCH'),
  put: generateRequest('PUT'),
  delete: generateRequest('DELETE'),
};

export default sreq;