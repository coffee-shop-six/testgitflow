module.exports.handler = async (event) => {
    console.log("request: " + JSON.stringify(event));
  
    return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify(
          {
            text:"Hello"
          },
          null,
          2
        ),
      };
  };