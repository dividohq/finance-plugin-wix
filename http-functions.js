import wixData from 'wix-data';
import { response, ok, serverError } from 'wix-http-functions';
import {siteUrl} from 'backend/payments';

export function get_test(request) {
    return ok({
        "headers": {
            "Content-Type": "application/json"
        },
        "body": {
            "okay": true
        }
    })
}

export function post_webhooks(request) {
    let options = {
        "headers": {
            "Content-Type": "application/json"
        }
    };
    // get the request body
    return request.body.json()
        .then((body) => {
            // insert the item in a collection
            return wixData.query("applications")
                .eq("paymentId", body.metadata.payment_id)
                .find()
                .then((results) => {
                    if (results.items.length > 0) {
                        let item = results.items[0];
                        item.applicationId = body.application;
                        item.applicationStatus = body.status;
                        return wixData.update("applications", item, { "suppressAuth": true });
                    }
                });
        })
        .then((results) => {
            options.body = {
                "updated": results
            };
            return ok(options);
        })
        // something went wrong
        .catch((error) => {
            options.body = {
                "error": error
            };
            return serverError(options);
        });
}

export function post_complete(request) {

    let options = {
        "headers": {
            "Content-Type": "application/json"
        }
    };

    return request.body.text()
        .then((body) => {
            let paramsKeyValues = body.split("&");
            let params = {};
            for (const param of paramsKeyValues) {
                let keyValue = param.split("=");
                params[keyValue[0]] = keyValue[1];
            }
            //TODO: verify hmac
            return wixData.query("applications")
                .eq("applicationId", params['x_application'])
                .find({ "suppressAuth": true })
                .then(results => {
                    if (results.items.length > 0) {
                        let item = results.items[0];
                        let url = siteUrl+"/complete-order?id=" + item._id;
                        options.status = 302;
                        options.headers = { "Location": url };
                        return response(options);
                    } else {
                        options.body = {
                            "error": "Order " + params['x_application'] + " could not be found"
                        }
                        return serverError(options);
                    }
                })
                .catch((error) => {
                    options.body = {
                        "error": error
                    }
                    return serverError(options);
                })
        })
        .catch((error) => {
            options.body = {
                "error": error
            };
            return serverError(options);
        });

}
