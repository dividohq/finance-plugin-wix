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
    return request.body.json()
        .then((body) => {
            return wixData.get("applications", body.metadata.payment_id, { "suppressAuth": true })
                .then((item) => {
                    item.applicationId = body.application;
                    item.applicationStatus = body.status;
                    return wixData.update("applications", item, { "suppressAuth": true });
                })
                .catch(error => {
                    return "Could not find application"
                });
        })
        .then((results) => {
            options.body = {
                "updated": results
            };
            return ok(options);
        })
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
                        if (!('complete' in item) || item.complete === false) {
                            item.complete = true;
                            item.customerName = params['x_first_name'] + " " + params['x_last_name'];
                            item.creditAmount = (parseFloat(params['x_credit_amount']) * 100);
                            wixData.update('applications', item, { "suppressAuth": true });
                            let url = siteUrl + "/complete-order?id=" + item._id;
                            options.status = 302;
                            options.headers = { "Location": url };
                            return response(options);
                        } else {
                            options.body = {
                                "error": "Order is already complete"
                            }
                            return serverError(options);
                        }
                    } else {
                        options.body = {
                            "error": "Order could not be found"
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
