# PdfStamper.SynchronousApi

All URIs are relative to *https://gw.api.cloud.sphereon.com/pdf/stamp/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**syncJobContent**](SynchronousApi.md#syncJobContent) | **POST** /sync/streams/content | Execute a synchronous stamp job with a content request/response.
[**syncJobStreamLocation**](SynchronousApi.md#syncJobStreamLocation) | **POST** /sync/streams/location | Execute a synchronous stamp job with a streamlocation.


<a name="syncJobContent"></a>
# **syncJobContent**
> ContentResponse syncJobContent(configId, contentRequest)

Execute a synchronous stamp job with a content request/response.

Execute a synchronous stamp job using the given configId. Header parameters will be parsed for additional template variables.

### Example
```javascript
var PdfStamper = require('pdf_stamper');
var defaultClient = PdfStamper.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PdfStamper.SynchronousApi();

var configId = "configId_example"; // String | The PDF stamper configuration id

var contentRequest = new PdfStamper.ContentRequest(); // ContentRequest | File content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.syncJobContent(configId, contentRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configId** | **String**| The PDF stamper configuration id | 
 **contentRequest** | [**ContentRequest**](ContentRequest.md)| File content | 

### Return type

[**ContentResponse**](ContentResponse.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

<a name="syncJobStreamLocation"></a>
# **syncJobStreamLocation**
> PdfStamperJobResult syncJobStreamLocation(jobRequest)

Execute a synchronous stamp job with a streamlocation.

Execute a synchronous stamp job using the given configId. Header parameters will be parsed for additional template variables.

### Example
```javascript
var PdfStamper = require('pdf_stamper');
var defaultClient = PdfStamper.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PdfStamper.SynchronousApi();

var jobRequest = new PdfStamper.PdfStamperJobRequest(); // PdfStamperJobRequest | Job request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.syncJobStreamLocation(jobRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobRequest** | [**PdfStamperJobRequest**](PdfStamperJobRequest.md)| Job request | 

### Return type

[**PdfStamperJobResult**](PdfStamperJobResult.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

