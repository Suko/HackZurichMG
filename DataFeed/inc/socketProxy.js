/**
 * Websocket proxy script
 * Takes the pubnub response from Relayr and proxies it to the node.js backend for manipulation and mongoDB storage.
 */

if ('WebSocket' in window){

    var connection = new WebSocket('ws://127.0.0.1:1337');
    connection.onopen = function(){
        /*Send a small message to the console once the connection is established */
        console.log('Connection open!');
    }

    connection.onclose = function(){
        console.log('Connection closed');
    }

    connection.onerror = function(error){
        console.log('Error detected: ' + error);
    }

    connection.onmessage = function(e){
        var server_message = e.data;
        console.log(server_message);
    }
    // TEMP
    var relayr = RELAYR.init({appId: "5f3a90db-cf49-427b-8337-e34b41ce4cb3"});
    relayr.devices().getDeviceData({
        deviceId: "0e7a02bf-702b-4f4c-b3f8-cba5b4608e3f",
        token: "-eUoEUQ6sIkplBjZQpFwnccDsvdYGc-A",
        incomingData: function(data){
            connection.send(JSON.stringify(data));
        }
    });
    // LIGHT
    relayr.devices().getDeviceData({
        deviceId: "9207ebbb-0676-4957-b93a-c61d017895a8",
        token: "-eUoEUQ6sIkplBjZQpFwnccDsvdYGc-A",
        incomingData: function(data){
            connection.send(JSON.stringify(data));
        }
    });

    //ACCEL
    relayr.devices().getDeviceData({
        deviceId: "815f3636-4c16-4972-a8f4-ac5253793e83",
        token: "-eUoEUQ6sIkplBjZQpFwnccDsvdYGc-A",
        incomingData: function(data){
            connection.send(JSON.stringify(data));
        }
    });

    // SOUND

    relayr.devices().getDeviceData({
        deviceId: "8ce79aa0-73e9-4102-a6dc-245324f3c23e",
        token: "-eUoEUQ6sIkplBjZQpFwnccDsvdYGc-A",
        incomingData: function(data){
            connection.send(JSON.stringify(data));
        }
    });


} else {
    console.log("You're browser doesn't support websockets.")
}
