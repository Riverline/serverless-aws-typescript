import AWS = require('aws-sdk');
import {Callback, Context} from "aws-lambda";

// # sls invoke local -f echo -d '{"message": "Hello world"}'
export async function echo (event, context: Context, callback: Callback)
{
    console.log(event.message);

    callback(null, null);
}
