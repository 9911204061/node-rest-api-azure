 class ApiResponse {
    constructor(statusCode, success, message, data = null) {
        this.statusCode = statusCode ? statusCode : 200;
        this.success = success;
        this.message = message;
        this.data = data;
    }
}

module.exports = ApiResponse;