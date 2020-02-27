# PdfStamper.ConfigApi

All URIs are relative to *https://gw.api.cloud.sphereon.com/pdf/stamp/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createConfiguration**](ConfigApi.md#createConfiguration) | **POST** /config | Create PDF stamper configuration
[**deleteConfiguration**](ConfigApi.md#deleteConfiguration) | **DELETE** /config/{configId} | Delete PDF stamper configuration
[**deleteResources**](ConfigApi.md#deleteResources) | **DELETE** /config/{configId}/streams | Delete resources
[**getConfiguration**](ConfigApi.md#getConfiguration) | **GET** /config/{configId} | Get PDF stamper configuration
[**updateConfiguration**](ConfigApi.md#updateConfiguration) | **PUT** /config/{configId} | Update PDF stamper configuration
[**uploadResource**](ConfigApi.md#uploadResource) | **POST** /config/{configId}/streams/multipart | Upload a configuration resource


<a name="createConfiguration"></a>
# **createConfiguration**
> StamperConfigResponse createConfiguration(stampConfiguration)

Create PDF stamper configuration

Create / initialize a new PDF stamper configuration.

### Example
```javascript
var PdfStamper = require('pdf_stamper');
var defaultClient = PdfStamper.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PdfStamper.ConfigApi();

var stampConfiguration = new PdfStamper.StamperConfig(); // StamperConfig | The PDF stamper configuration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createConfiguration(stampConfiguration, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stampConfiguration** | [**StamperConfig**](StamperConfig.md)| The PDF stamper configuration | 

### Return type

[**StamperConfigResponse**](StamperConfigResponse.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

<a name="deleteConfiguration"></a>
# **deleteConfiguration**
> StamperConfigResponse deleteConfiguration(configId)

Delete PDF stamper configuration

Delete a PDF stamper configuration.

### Example
```javascript
var PdfStamper = require('pdf_stamper');
var defaultClient = PdfStamper.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PdfStamper.ConfigApi();

var configId = "configId_example"; // String | The PDF stamper configuration id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteConfiguration(configId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configId** | **String**| The PDF stamper configuration id | 

### Return type

[**StamperConfigResponse**](StamperConfigResponse.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

<a name="deleteResources"></a>
# **deleteResources**
> deleteResources(configId, streamLocations)

Delete resources

Delete resources referenced by a configuration.

### Example
```javascript
var PdfStamper = require('pdf_stamper');
var defaultClient = PdfStamper.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PdfStamper.ConfigApi();

var configId = "configId_example"; // String | The PDF stamper configuration id

var streamLocations = [new PdfStamper.StreamLocation()]; // [StreamLocation] | The resource locations in storage


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteResources(configId, streamLocations, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configId** | **String**| The PDF stamper configuration id | 
 **streamLocations** | [**[StreamLocation]**](StreamLocation.md)| The resource locations in storage | 

### Return type

null (empty response body)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getConfiguration"></a>
# **getConfiguration**
> StamperConfigResponse getConfiguration(configId)

Get PDF stamper configuration

Retrieve a PDF stamper configuration.

### Example
```javascript
var PdfStamper = require('pdf_stamper');
var defaultClient = PdfStamper.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PdfStamper.ConfigApi();

var configId = "configId_example"; // String | The PDF stamper configuration id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getConfiguration(configId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configId** | **String**| The PDF stamper configuration id | 

### Return type

[**StamperConfigResponse**](StamperConfigResponse.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

<a name="updateConfiguration"></a>
# **updateConfiguration**
> StamperConfigResponse updateConfiguration(configId, stampConfiguration)

Update PDF stamper configuration

Update an existing PDF stamper configuration.

### Example
```javascript
var PdfStamper = require('pdf_stamper');
var defaultClient = PdfStamper.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PdfStamper.ConfigApi();

var configId = "configId_example"; // String | The PDF stamper configuration id

var stampConfiguration = new PdfStamper.StamperConfig(); // StamperConfig | The PDF stamper configuration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateConfiguration(configId, stampConfiguration, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configId** | **String**| The PDF stamper configuration id | 
 **stampConfiguration** | [**StamperConfig**](StamperConfig.md)| The PDF stamper configuration | 

### Return type

[**StamperConfigResponse**](StamperConfigResponse.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

<a name="uploadResource"></a>
# **uploadResource**
> StreamLocation uploadResource(configId, stream)

Upload a configuration resource

Upload a resource needed by a configuration.

### Example
```javascript
var PdfStamper = require('pdf_stamper');
var defaultClient = PdfStamper.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PdfStamper.ConfigApi();

var configId = "configId_example"; // String | configId

var stream = "/path/to/file.txt"; // File | The resource data


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadResource(configId, stream, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configId** | **String**| configId | 
 **stream** | **File**| The resource data | 

### Return type

[**StreamLocation**](StreamLocation.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json;charset=UTF-8

